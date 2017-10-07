///////////////////////////////////////////////////////////
// Javascript Tree
// Require : YMap.js
YTree.prototype				= new Object();
YTree.prototype.constructor	= YTree;
YTree.superclass			= Object.prototype;

/*
* @brief YTree constructor
* @param text root node's text
*/
function YTree(text) {
	this.rootNodeID			= "r";
	// hold all nodes in hashmap with id
	this.nodes				= new Array;
	// hold the latest node id
	this.maxid				= 0;
	// create root node
	
	this.rootNode			= new YNode(null, NODE_POS_ROOT, this.rootNodeID, text);
	this.nodes[this.rootNodeID]	= this.rootNode;

	if (!isLoad)  // 如果不是Load 而是新健map時
		this.rootNode = mapinit(this.rootNode);  // 第一次新建檔案 會自動去DB要一組NodiID跟MapID賦予根結點
	
	if(this.rootNode.NodeID == -1){
		alert('初始化失敗');
		window.location.reload(true); // 重新載入頁面		 ignore DB
	}	
}

/*
* @brief remove all nodes except root
* @param text root node's text
*/
YTree.prototype.initTree = function(text) {
	//this.removeChildren(this.rootNode);
	delete this.nodes;
	this.nodes				= new Array;
	this.rootNode			= new YNode(null, NODE_POS_ROOT, this.rootNodeID, text);
	this.nodes[this.rootNodeID]	= this.rootNode;
	this.rootNode.text		= text;

	if (!isLoad)  // 如果不是Load 而是新健map時
		this.rootNode = mapinit(this.rootNode);  // 第一次新建檔案 會自動去DB要一組NodiID跟MapID賦予根結點
	
	if(this.rootNode.NodeID == -1){
		alert('初始化失敗');
		window.location.reload(true); // 重新載入頁面		 ignore DB
	}	
}

/*
* @brief insert new node
* @param parent new node's parent node
* @param text new node's text
* @param pos new node's position(NODE_POS_LEFT || NODE_POS_RIGHT)
*/
YTree.prototype.createNode = function(parent, text, pos, MapID, NodeID ) {
	if ( pos != NODE_POS_LEFT && pos != NODE_POS_RIGHT ) {
		pos = NODE_POS_LEFT;
		//return null;
	}
	var id			= "c" + this.getNextMaxId();
	var node		= new YNode(parent, pos, id, text);
	this.nodes[id]	= node;

	if (MapID > 0) {
		node.MapID = MapID;
	} else {
		node.MapID = parseInt('-1');
	}

	
	// 賦與NodeID 建立node時 即在資料庫中產生一組唯一個NodeID 儲存該node的資料 若是在讀檔時 NodeID已存在 就不會再次建立NodeID
	if( NodeID == undefined || NodeID == null){
		node = createnode(node);

		if(node.NodeID == -1){
			alert("Error111");
			return null;
		}

	} else { // 如果NodeID已存在 就用現有的
		node.NodeID = NodeID;
	}
	return node;
}

/*
* @brief insert new child node below the last node of parent
* @param parent new node's parent node
* @param text new node's text
* @param pos new node's position(NODE_POS_LEFT || NODE_POS_RIGHT)
* @return node created
*/

// 加入子節點
YTree.prototype.appendChild = function (parent, text, pos, MapID, NodeID) {	
	var newPos;
	var node = null;
	var pnode = null;
	// Make root node ballanced
	if ( this.isRootNode(parent) ) {
	
		if ( pos == undefined || pos == null ) {
		
			var leftNodeCnt = 0;
			var rightNodeCnt = 0;
			var childNodeCnt = parent.childNodes.length;
			
			for ( var i=0; i<childNodeCnt; i++ ) {
				var tmpNode = this.getNodeById(parent.childNodes[i]);
				(tmpNode.pos == NODE_POS_LEFT)? leftNodeCnt++:rightNodeCnt++;
			}
			
			newPos = (leftNodeCnt >= rightNodeCnt)? NODE_POS_RIGHT:NODE_POS_LEFT;
		} else {
			newPos = pos;

			if ( newPos != NODE_POS_RIGHT && newPos != NODE_POS_LEFT ) {
				newPos = NODE_POS_RIGHT;
			}
		}
		
		// 讀入rootNode 從DB中抓到NodeID 並賦予它
		//alert('ID: ' + parent.NodeID);
		
	} else {
		newPos = parent.pos;
	}
	
	MapID = parent.MapID; // 子節點的mapid會跟父節點的mapid相同
	
	node = this.createNode(parent, text, newPos, MapID, NodeID);
	// Child node will be the last node in parent node
	if ( this.isRootNode(parent) ) {
		for ( var i=0; i<parent.childNodes.length; i++ ) {
			var tmpNode = this.getNodeById(parent.childNodes[i]);
			if ( tmpNode.pos == newPos ) {
				pnode = tmpNode;
				break;
			}
		}
	} else {
		if ( parent.childNodes.length > 0 ) {
			pnode = this.getNodeById(parent.childNodes[0]);
		}
	}

	// find last node
	if ( pnode != null ) {
		var tnode = pnode.getSiblingTail();
		tnode.nextNode = node;
		node.prevNode = tnode;
	}
	// hold all child node's id
		parent.childNodes.push(node.id);
	return node;
}


YTree.prototype.appendChild_fromsocket = function (parentnode, childnode) {
	var pnode = null;
	
	// Child node will be the last node in parent node
	if ( this.isRootNode(parentnode) ) {
		for ( var i=0; i<parentnode.childNodes.length; i++ ) {
			var tmpNode = this.getNodeById(parentnode.childNodes[i]);
			if ( tmpNode.pos == childnode.pos ) {
				pnode = tmpNode;
				break;
			}
		}
	} else {
		if ( parentnode.childNodes.length > 0 ) {
			pnode = this.getNodeById(parentnode.childNodes[0]);
		}
	}

	// find last node
	if ( pnode != null ) {
		var tnode = pnode.getSiblingTail();
		tnode.nextNode = childnode;
		childnode.prevNode = tnode;
	}

	// hold all child node's id
	parentnode.childNodes.push(childnode.id);
	return true;
}

/*
* @brief insert new sibling node
* @param tnode new node's sibling node
* @param text new node's text
* @param dir new node's direction(NODE_SIB_PREV || NODE_SIB_NEXT)
* @return node created
*/
// 加入兄弟節點
YTree.prototype.appendSibling = function (tnode, text, dir, MapID) {
	// can't sible on root node
	if ( this.isRootNode(tnode) ) {
		return null;
	}

	MapID = tnode.parentNode.MapID;	
	var node = this.createNode(tnode.parentNode, text, tnode.pos, MapID);
	// adjust the order for this newly inserted node
	if ( dir == NODE_SIB_PREV ) {	// set it previous node
		if ( tnode.prevNode ) {
			tnode.prevNode.nextNode = node;
		}
		node.prevNode = tnode.prevNode;
		node.nextNode = tnode;
		tnode.prevNode = node;
	} else {	// set it next node
		if ( tnode.nextNode ) {
			tnode.nextNode.prevNode = node;
		}
		node.prevNode = tnode;
		node.nextNode = tnode.nextNode;
		tnode.nextNode = node;
	}
	
	tnode.parentNode.childNodes.push(node.id);	
	return node;
}

// 加入父節點
YTree.prototype.appendParent = function (tnode, text) {
	// can't append parent into root
	if ( this.isRootNode(tnode) ) {
		return null;
	}

	var node = this.appendSibling(tnode, text, NODE_SIB_NEXT);
	if ( node == null ) return null;	
	this.attachToNode(node, tnode, node.pos);	
	return node;
}

/*
* @brief remove node from node list
* @param id target node's id
*/  

// 20120511 remove
YTree.prototype.deleteNodeById = function(id) {
	// What's this?
	// hashmap is just fine for deleting it's key:value pair.	
	if (confirm('Are you sure to delete node:'+this.text)) {
	$.post( "updateNode.php", 
	{nid: this.DBID, act: 'delNode'},
	function (data) {		
		delete this.nodes[id]; //added by JC except this line
	});
	}
}

/*
* @brief remove all child nodes and node from node list
* @param node target node
* @param bDeep boolean delete childrren
* @return result
*/


YTree.prototype.removeNode = function(node) {
	// can't delete root node
	if ( node.parentNode == null ) {
		return false;
	}	

	this.removeChildren(node);

	// re-ordering it's nearby sibling nodes that remain
	for ( var i=0; i<node.parentNode.childNodes.length; i++ ) {
		var tmpNode = this.getNodeById(node.parentNode.childNodes[i]);
		if ( node.id == tmpNode.id ) {
			// delete node from parent's nodes array
			node.parentNode.childNodes.splice(i,1);

			if ( node.prevNode ) {
				node.prevNode.nextNode = node.nextNode;
			}
			if ( node.nextNode ) {
				node.nextNode.prevNode = node.prevNode;
			}
			
			//this.deleteNodeById(node.id);
			return true;
		}
	}

	return false;
}

YTree.prototype.removeDetachedNode = function(node) {
	this.removeChildren(node);
	// this.deleteNodeById(node.id);

	return true;
}

YTree.prototype.removeChildren = function (node, pos ) {
	for ( var i=node.childNodes.length-1; i >= 0; i-- ) {
		var cnode = this.getNodeById(node.childNodes[i]);
		if ( pos != undefined && cnode.pos != pos ) {
			continue;
		}
		this.removeChildren(cnode, pos);

		node.childNodes.splice(i,1);
		//this.deleteNodeById(cnode.id);
	}
}

YTree.prototype.getLastSelectedChild = function (node, pos) {
	var tmpNode = null;
	var childCnt = node.childNodes.length;
	
	if ( childCnt == 0 ) {
		return null;
	}
	
	if ( node.lastSelChildID != "" )
		tmpNode = this.getNodeById(node.lastSelChildID);

	if (
		(tmpNode == undefined || tmpNode == null) ||
		(tmpNode.parentNode.id != node.id || (node.indent == 0 && tmpNode.pos != pos))
	) {
		tmpNode = null;
		if ( node.indent == 0 ) {
			for ( var i=0; i<childCnt; i++ ) {
				var cNode = this.getNodeById(node.childNodes[i]);
				if ( cNode.pos == pos ) {
					tmpNode = cNode;
					break;
				}
			}
		} else {
			tmpNode = this.getNodeById(node.childNodes[0]);
		}

		return (tmpNode != null)? tmpNode.getSiblingHead():null;
	}

	return tmpNode;	
}

YTree.prototype.changePos = function(node, pos) {
	for ( var i=0; i<node.childNodes.length; i++ ) {
		var cnode = this.getNodeById(node.childNodes[i]);
		this.changePos(cnode, pos);
	}
	node.pos = pos;
}

YTree.prototype.changeIndent = function(node, indent) {
	for ( var i=0; i<node.childNodes.length; i++ ) {
		var cnode = this.getNodeById(node.childNodes[i]);
		this.changeIndent(cnode, indent+1);
	}
	node.indent = indent;
}

YTree.prototype.detachChild = function (node, cnode) {
	// javascript does not remove array element by deleting
	// Splice is the only one method that I know which really elimintes
	// array element
	for ( var i=0; i<node.childNodes.length; i++ ) {
		if ( node.childNodes[i] == cnode.id ) {
			var pnode = cnode.prevNode;
			var nnode = cnode.nextNode;
			cnode.parentNode = null;
			cnode.prevNode = null;
			cnode.nextNode = null;
			if ( pnode ) {
				pnode.nextNode = nnode;
			}
			
			if ( nnode ) {
				nnode.prevNode = pnode;
			}

			node.childNodes.splice(i,1);
			
			return true;
		}
	}
	
	return false;
}

YTree.prototype.attachChild = function (node, cnode) {
	node.childNodes.push(cnode.id);
	
	var oldPrev = cnode.prevNode;
	var oldNext = cnode.nextNode;
	
	if ( oldPrev ) {
		oldPrev.nextNode = cnode;
	}
	
	if ( oldNext ) {
		oldNext.prevNode = cnode;
	}
	
	return true;
}

YTree.prototype.isChildren = function (node, id) {
	for ( var i=0; i<node.childNodes.length; i++ ) {
		var cnode = this.getNodeById(node.childNodes[i]);
		if ( cnode.id == id || this.isChildren(cnode, id) == true ) {
			return true;
		}
	}
	return false;
}

/*
* @brief attach snode to tnode(new parent)
* @param tnode new target parent node
* @param snode source node
* @param pos tnode's position(NODE_POS_LEFT || NODE_POS_RIGHT)
* @param nnode positioning node of tnode's children (tnode == nnode)
* @return result boolean
*/
YTree.prototype.attachToNode = function (tnode, snode, pos, up) {
	// ignore root node
	if ( this.isRootNode(snode) ) {
		return false;
	}
	
	if ( up ) {
		if ( this.isRootNode(tnode) || tnode.id == snode.id ) return false;
		if ( snode.nextNode && snode.nextNode.id == tnode.id ) return false;
		if ( this.isChildren(snode, tnode.id) ) return false;

		var spnode = snode.prevNode;
		var snnode = snode.nextNode;
		var tpnode = tnode.prevNode;
		var tnnode = tnode.nextNode;
		
		if ( tnode.parentNode.id == snode.parentNode.id ) {
			snode.prevNode = tpnode;
			if ( tpnode ) {
				tnode.prevNode.nextNode = snode;
			}
			snode.nextNode = tnode;
			tnode.prevNode = snode;
			if ( spnode ) {
				spnode.nextNode = snnode;
			}
			if ( snnode ) {
				snnode.prevNode = spnode;
			}
		} else {
			if ( !this.detachChild(snode.parentNode, snode) ) {
				return false;
			}
			tnode.parentNode.childNodes.push(snode.id);
			snode.parentNode = tnode.parentNode;
			
			snode.prevNode = tpnode;
			if ( tpnode ) {
				tnode.prevNode.nextNode = snode;
			}
			snode.nextNode = tnode;
			tnode.prevNode = snode;
		}
		
		// set pos if pos is different from previous pos
		if ( tnode.pos != snode.pos ) {
			this.changePos(snode, tnode.pos);
		}
		
		// set indent if indent is diffrent from previous indent
		if ( tnode.indent != snode.indent ) {
			this.changeIndent(snode, tnode.indent);
		}
		
	} else {
		// child tail node of tnode
		// pnode will be prevNode of snode
		var pnode = null;
	
		if ( this.isRootNode(tnode) ) {
			// when tnode is root can't attach snode in same pos
			if ( snode.indent == 1 && snode.pos == pos ) {
				return false;
			}
	
			var len = tnode.childNodes.length;
	
			// find child node with pos
			for ( var i=0; i<len; i++ ) {
				var tmpNode = this.getNodeById(tnode.childNodes[i]);
				if ( tmpNode.pos == pos ) {
					pnode = tmpNode;
					break;
				}
			}
			
		} else {
		
			// ignore self attaching, parent attaching, children attaching
			if ( snode.id == tnode.id || snode.parentNode.id == tnode.id || this.isChildren(snode, tnode.id) ) {
				return false;
			}
			
			if ( tnode.childNodes.length > 0 ) {
				pnode = this.getNodeById(tnode.childNodes[0]);
			}
		}
		
		// find tail node
		if ( pnode != null ) {
			while(pnode.nextNode != null) {
				pnode = pnode.nextNode;
			}
		}
		
		// remove from previous parent
		// after detachChild call parentNode will be null
		if ( !this.detachChild(snode.parentNode, snode) ) {
			return false;
		}
		
		// append this to tnode
		tnode.childNodes.push(snode.id);
		snode.parentNode = tnode;
		
		if ( pnode ) {
			pnode.nextNode = snode;
		}
		snode.prevNode = pnode;
		snode.nextNode = null;
	
		// set pos if pos is different from previous pos
		if ( snode.pos != pos ) {
			this.changePos(snode, pos);
		}
		
		// set indent if indent is diffrent from previous indent
		if ( snode.indent != (tnode.indent+1) ) {
			this.changeIndent(snode, tnode.indent+1);
		}
	}

	return true;
}

YTree.prototype.revertNodeHierarchy = function (node, clone) {
	node.childNodes.splice(0,node.childNodes.length);
	for ( var i=0; i<clone.childNodes.length; i++ ) {
		node.childNodes[i] = clone.childNodes[i];
	}
		
	node.parentNode	= ( clone.parentId == "" )? null : this.getNodeById(clone.parentId);
	node.prevNode	= ( clone.prevId == "" )? null : this.getNodeById(clone.prevId);
	node.nextNode	= ( clone.nextId == "" )? null : this.getNodeById(clone.nextId);
	
	this.changeIndent(node, clone.indent);
	this.changePos(node, clone.pos);
		
	node.folded		= clone.folded;
	node.lastSelChildID	= clone.lastSelChildID;
}

YTree.prototype.revertNodeContent = function(node, clone) {
	node.text = clone.text;
	node.hyperlink	= clone.hyperlink;
	node.icons.splice(0,node.icons.length);
	for ( var i=0; i<clone.icons.length; i++ ) {
		node.icons[i] = clone.icons[i];
	}
}

YTree.prototype.revertNodeAttribute = function(node, clone) {
	node.color		= clone.color;
	node.style		= clone.style;
	node.bgcolor	= clone.bgcolor;
	
	node.font = {
		"name"		: clone.font.name,
		"size"		: clone.font.size,
		"italic"	: clone.font.italic,
		"bold"		: clone.font.bold
	}
	
	node.edge = {
		"color"		: clone.edge.color,
		"style"		: clone.edge.style,
		"width"		: clone.edge.width
	}
}

YTree.prototype.revertNode = function (node, clone, bdeep) {
	this.revertNodeContent(node, clone);
	this.revertNodeAttribute(node, clone);
	if ( bdeep ) revertNodeHierarchy(node, clone);
}

YTree.prototype.branchClone = function (node, arr, bfull, indent) {
	var clone = node.clone();
	clone.indent = indent;
	
	if ( !bfull ) {
		clone.childNodes.splice(0,clone.childNodes.length);
	}
	
	arr.push(clone);
	if ( !bfull ) {
		return;
	}

	var cnode = this.getChildHead(node);
	while(cnode) {
		this.branchClone(cnode, arr, true, indent+1);
		cnode = cnode.nextNode;
	}
}

YTree.prototype.attachClone = function (parent, arrSrcClone, topNodeIDs, idx, indent) {
	if ( idx >= arrSrcClone.length ) return;
	
	for ( var i=idx; i<arrSrcClone.length; i++ ) {
		var clone = arrSrcClone[i];
		if ( clone.indent < indent ) break;
		if ( clone.indent > indent ) continue;
		
		var node = this.appendChild(parent, "");
		this.revertNode(node, clone, false);
		
		if ( clone.indent == 0 ) {
			topNodeIDs.push(node.id);
		}
		
		if ( clone.childNodes.length > 0 ) {
			this.attachClone(node, arrSrcClone, topNodeIDs, i+1, indent+1);
		}
	}
}

YTree.prototype.toggleChildren = function (node, arg, arr) {
	for ( var i=node.childNodes.length-1; i>=0; i--) {
		var cnode = this.getNodeById(node.childNodes[i]);
		if ( cnode == undefined || cnode == null || cnode.childNodes.length == 0 ) {
			continue;
		}
		
		this.toggleChildren(cnode, arg, arr);
		
		if ( cnode.folded == arg ) continue;

		cnode.folded = arg;
		arr.push(cnode.id);
	}
}

YTree.prototype.getUnfoldedMaxIndent = function (node) {
	var maxIndent = node.indent;
	for ( var i=node.childNodes.length-1; i>=0; i-- ) {
		var cnode = this.getNodeById(node.childNodes[i]);
		
		if ( cnode == undefined || cnode == null || cnode.childNodes.length == 0 || cnode.folded ) {
			continue;
		}
		
		var tmpIndent = this.getUnfoldedMaxIndent(cnode);
		
		if ( tmpIndent > maxIndent ) maxIndent = tmpIndent;
	}
	
	return maxIndent;
}

YTree.prototype.getChildHead = function (node) {
	if ( node.childNodes.length == 0 ) {
		return null;
	}
	return this.getNodeById(node.childNodes[0]).getSiblingHead();
}

YTree.prototype.getChildTail = function (node) {
	if ( node.childNodes.length == 0 ) {
		return null;
	}
	return this.getNodeById(node.childNodes[0]).getSiblingTail();
}

YTree.prototype.getNodeById = function(id) {
	return this.nodes[id];
}

YTree.prototype.getNodeByNodeID = function(NodeID) {
	var mynode;
	for(var i in this.nodes)
	{
		if( this.nodes[i].NodeID == NodeID)
			mynode = this.nodes[i];
	}
	return mynode;
}

YTree.prototype.getNextMaxId = function() {
	this.maxid++;
	return this.maxid;
}

YTree.prototype.isRootNode = function(node) {
	return (node.id == this.rootNodeID)? true:false;
}

YTree.prototype.convertMMTextToString = function(mmText) {
	// strip &#x for each characters
	var unicodes = [];
	var chars = mmText.split(";");
	chars.pop();

	for (var i = 0; i < chars.length; ++i) {
		var stripedChar = chars[i].replace(/^&#x?/, "");
		var unicodeChar = parseInt(stripedChar, 16);
		unicodes.push(unicodeChar);
	}
	
	// convert unicodes to utf16 string
	var utf16s = [];
	
	for (var i = 0; i < unicodes.length; ++i) {
		var unicodeChar = unicodes[i];
		if (unicodeChar < (1 << 16)) {
			utf16s.push(unicodeChar);
		} else {
			var fst = ((unicodeChar - (1 << 16)) / (1 << 10)) + 0xD800;
			var snd = (unicodeChar % (1 << 10)) + 0xDC00;
			utf16s.push(fst)
			utf16s.push(fst)
		}
	}
	
	// convert utf16s to javascript String
	var jString = "";
	for (var i = 0; i < utf16s.length; ++i) {
		jString += String.fromCharCode(utf16s[i]);
	}

	return jString;
}

// 傳入一個物件  建立成一個tree狀的結構(ynode) 
YTree.prototype.buildYNodesFromXNode = function(xnode, ynode) {

//var text = xnode["@attributes"]["TEXT"];
	var text = xnode.Content;
	if ( text == undefined || text == null || text.length == 0 ) {
		ynode.text = "untitled";
	} else {
		//ynode.text = unescapeFromNumRef(text, 16);//this.convertMMTextToString(text);
		ynode.text = text;
	}
	
/*
	var ps = xnode.ps;
	if ( ps == undefined || ps == null || ps.length == 0 ) {
		ynode.ps = "ps";
	} else {
		//ynode.ps = unescapeFromNumRef(ps, 16);//this.convertMMTextToString(ps);
		ynode.ps = ps;
	}
*/
	
	//var folded = xnode["@attributes"]["FOLDED"];
	var folded = xnode.FOLDED;
	if ( folded == "true" ) {
		ynode.folded = true;
	}
					
	//var created = xnode["@attributes"]["CREATED"];
	var created = xnode.Created;
	if ( created != undefined && created != null && created.length == 13 && F_IsNaturalNumber(created) ) {
		ynode.created = created;
	}

	//var modified = xnode.getAttribute("MODIFIED");
	//var modified = xnode["@attributes"]["MODIFIED"];
	var Modified = xnode.Modified;
	if ( Modified != undefined && Modified != null && Modified.length == 13 && F_IsNaturalNumber(Modified) ) { 
		ynode.Modified = Modified;
	}
			
	//var color = xnode.getAttribute("COLOR");
	//var color = xnode["@attributes"]["COLOR"];
	var color = xnode.COLOR;
	if ( color != undefined && color != null && color.length == 7 && F_IsHexColor(color.substring(1,7)) ) {
		ynode.color = color.substring(1,7);
	}
			
	//var bgcolor = xnode.getAttribute("BACKGROUND_COLOR");
	//var bgcolor = xnode["@attributes"]["BACKGROUND_COLOR"];
	var bgcolor = xnode.BACKGROUND_COLOR;
	if ( bgcolor != undefined && bgcolor != null && bgcolor.length == 7 && F_IsHexColor(bgcolor.substring(1,7)) ) {
		ynode.bgcolor = bgcolor.substring(1,7);
	}
	
	
	//var DBID = xnode.getAttribute("DBID"); //added by JC
	//var MapID = xnode["@attributes"]["MAPID"];
	var MapID = xnode.MapID;
	if ( MapID != undefined && MapID != null) {
		ynode.MapID = parseInt('0'+MapID,10);
	}
	
	//var NodeID = xnode["@attributes"]["NODEID"];
	var NodeID = xnode.NodeID;
	if ( NodeID != undefined && NodeID != null) {
		ynode.NodeID = NodeID;
	}		
		
	if (xnode.icons.length >=0) {
		for (var i=0; i<xnode.icons.length; i++) {
			ynode.icons.push(xnode.icons[i]);
		}
	}
		
	//alert(xnode.Childs.length);
	
	// 處理子節點 如果有的話
	if(xnode.Childs.length > 0)
	//if(false)
	{
		for( var i=0; i<xnode.Childs.length; i++) {  //子節點			
			
			var tmpXNode = xnode.Childs[i];
			//alert(tmpXNode.NodeID);
			
			//var pos = tmpXNode["@attributes"]["POSITION"];
			var pos = tmpXNode.Position;

			if ( pos == 2 ) {
				pos = NODE_POS_RIGHT;					
			} else {
				pos = NODE_POS_LEFT;
			}
			
			var tmpYNode;
			if ( ynode.indent == 0 ) { //DBID added by JC 表示ynode為根節點的子節點
				tmpYNode = this.appendChild(ynode, "", pos, tmpXNode.MapID, tmpXNode.NodeID);
			} else {
				tmpYNode = this.appendChild(ynode, "", null, tmpXNode.MapID, tmpXNode.NodeID);
			}
			this.buildYNodesFromXNode(tmpXNode, tmpYNode);
		}
	}
}

/*
// 21020506 改寫中
// 傳入一個json字串(xnode) 建立成一個tree狀的結構(ynode) 
YTree.prototype.buildYNodesFromXNode = function(xnode, ynode) {
	//var text = xnode.getAttribute("TEXT");
	//alert(JSON.stringify(xnode));
	//alert(xnode["@attributes"]["CREATED"]);
	var text = xnode["@attributes"]["TEXT"];
	if ( text == undefined || text == null || text.length == 0 ) {
		ynode.text = "untitled";
	} else {
		//ynode.text = unescapeFromNumRef(text, 16);//this.convertMMTextToString(text);
		ynode.text = text;
	}
	
	var folded = xnode["@attributes"]["FOLDED"];
	if ( folded == "true" ) {
		ynode.folded = true;
	}	
					
	var created = xnode["@attributes"]["CREATED"];
	if ( created != undefined && created != null && created.length == 13 && F_IsNaturalNumber(created) ) {
		ynode.created = created;
	}
			
	//var modified = xnode.getAttribute("MODIFIED");
	var modified = xnode["@attributes"]["MODIFIED"];
	if ( modified != undefined && modified != null && modified.length == 13 && F_IsNaturalNumber(modified) ) {
		ynode.modified = modified;
	}
			
	//var color = xnode.getAttribute("COLOR");
	var color = xnode["@attributes"]["COLOR"];
	if ( color != undefined && color != null && color.length == 7 && F_IsHexColor(color.substring(1,7)) ) {
		ynode.color = color.substring(1,7);
	}
			
	//var bgcolor = xnode.getAttribute("BACKGROUND_COLOR");
	var bgcolor = xnode["@attributes"]["BACKGROUND_COLOR"];
	if ( bgcolor != undefined && bgcolor != null && bgcolor.length == 7 && F_IsHexColor(bgcolor.substring(1,7)) ) {
		ynode.bgcolor = bgcolor.substring(1,7);
	}
	
	
	//var DBID = xnode.getAttribute("DBID"); //added by JC
	var MapID = xnode["@attributes"]["MAPID"];
	if ( MapID != undefined && MapID != null) {
		ynode.MapID = parseInt('0'+MapID,10);
	}
	
	var NodeID = xnode["@attributes"]["NODEID"];
	if ( NodeID != undefined && NodeID != null) {
		ynode.NodeID = NodeID;
	}		
	
	// 處理子節點 如果有的話
	if(xnode.node != undefined)
	{
		//因為使用JSON的時候 當子節點只有一個時無法利用node.childnode[0]["@attributes"]["tag"]來抓 
		//只能利用node.childnode["@attributes"]["tag"]來取得值 所以才要寫下列六行來判斷
		var nodelength; 
		if (xnode.node.length == undefined){
			nodelength = 1;
		} else {
			nodelength = xnode.node.length;  // 有幾個子節點
		}
		
		for( var i=0; i<nodelength; i++) {  //子節點
			if(nodelength == 1 ){  //如上面註解 只有一個子節點要另外判斷 不能以 array[0]的方式來抓值
				var tmpXNode = xnode.node;
			} else {
				var tmpXNode = xnode.node[i];
			}
			
			var pos = tmpXNode["@attributes"]["POSITION"];
						
			if ( pos == "right" ) {				
				pos = NODE_POS_RIGHT;					
			} else {
				pos = NODE_POS_LEFT;
			}
			
			var tmpYNode;

			if ( ynode.indent == 0 ) { //DBID added by JC 表示ynode為根節點的子節點
				tmpYNode = this.appendChild(ynode, "", pos, tmpXNode["@attributes"]["MAPID"], tmpXNode["@attributes"]["NODEID"]);
			} else {
				tmpYNode = this.appendChild(ynode, "", null, tmpXNode["@attributes"]["MAPID"], tmpXNode["@attributes"]["NODEID"]);
			}

			this.buildYNodesFromXNode(tmpXNode, tmpYNode);
		}
	}	
}

*/

YTree.prototype.getXNodeTextFromYNode = function(ynode) {
	string = ynode.text.replace(/\r\n/g,"\n");
	var utftext = "";

	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);

		if (c < 256) {
			var aChar = String.fromCharCode(c);
			
			if ( aChar == '&' ) {
				utftext += '&amp;';
			} else if ( aChar == '"' ) {
				utftext += '&quot;';
			} else if ( aChar == '<' ) {
				utftext += '&lt;';
			} else if ( aChar == '>' ) {
				utftext += '&gt;';
			} else {
				utftext += aChar;
			}

		} else {
			utftext += "&#x" + c.toString(16) + ";";
		}
	}

	return utftext;
}

// 丟進一個node 建立出xml格式的字串
YTree.prototype.buildXNodesFromYNode = function(ynode) {
	var strPosition = "";
	var strFolded = "";
	var strColor = "";
	var strBGColor = "";
//  var strDBID = "";
	var strNodeID = "";
	var strMapID = "";

	if ( ynode.indent == 1 ) {
		strPosition = ' POSITION="' + ((ynode.pos == NODE_POS_LEFT)? 'left':'right') + '"';
	}
	
	if ( ynode.indent > 0 && ynode.folded ) {
		strFolded = ' FOLDED="true"';
	}
	
	if ( ynode.color != "" && F_IsHexColor(ynode.color) ) {
		strColor = ' COLOR="E' + ynode.color + '"';
	}
	
	if ( ynode.bgcolor != "" && F_IsHexColor(ynode.bgcolor) ) {
		strBGColor = ' BACKGROUND_COLOR="#' + ynode.bgcolor + '"';
	}
	if ( ynode.MapID != "" ) { 
		strMapID = ' MapID="' + ynode.MapID +'"';
	}
		
	if (ynode.NodeID != "") {
		strNodeID = ' NodeID="' + ynode.NodeID + '"';
	}
	
	//設定字串儲存內容	
	var str = '<node' + ' CREATED="' + ynode.created + '" MODIFIED="' + ynode.Modified + '"';
	str += strColor + strBGColor + strFolded + strPosition + strMapID + strNodeID + ' TEXT="' + this.getXNodeTextFromYNode(ynode) + '">\n';
	
	// Node的格式
	if ( ynode.edge.color != "" || ynode.edge.style != "" || ynode.edge.width != "" ) {
		str += '<edge';
		if ( ynode.edge.color != "" ) {
			str += ' COLOR="#' + ynode.edge.color + '"';
		}
		if ( ynode.edge.style != "" ) {
			str += ' STYLE="' + ynode.edge.style + '"';
		}
		if ( ynode.edge.width != "" ) {
			str += ' WIDTH="' + ynode.edge.width + '"';
		}
		str += ' />\n';
	}
	
	// 設定node中的字型
	if ( ynode.font.name != "" || ynode.font.size != "" || ynode.font.italic != "" || ynode.font.bold != "" ) {
		str += '<font NAME="' + ((ynode.font.name=="")? "SansSerif":ynode.font.name) + '"';
		str += ' SIZE="' + ((ynode.font.size=="")? 12:ynode.font.size) + '"';
		if ( ynode.font.italic == "true" ) {
			str += ' ITALIC="true"';
		}
		if ( ynode.font.bold == "true" ) {
			str += ' BOLD="true"';
		}
		str += ' />\n';
	}
	
	// 設定node中的圖案
	for ( var i=0; i<ynode.icons.length; i++ ) {
		str += '<icon BUILTIN="' + ynode.icons[i] + '" />\n';
	}

	if ( ynode.indent == 0 ) {		
		var tmpNode = null;
		for ( var i=0; i<ynode.childNodes.length; i++ ) {
			var cNode = this.getNodeById(ynode.childNodes[i]);
			if ( cNode && cNode.pos == NODE_POS_RIGHT ) {
				tmpNode = cNode.getSiblingHead();				
				break;
			}
		}
		
		//把剩下的node內容都加入到字串中
		while ( tmpNode ) {
			str += this.buildXNodesFromYNode(tmpNode);
			tmpNode = tmpNode.nextNode;
		}
		
		tmpNode = null;
		for ( var i=0; i<ynode.childNodes.length; i++ ) {
			var cNode = this.getNodeById(ynode.childNodes[i]);
			if ( cNode && cNode.pos == NODE_POS_LEFT ) {
				tmpNode = cNode.getSiblingHead();
				break;
			}
		}
		
		while ( tmpNode ) {
			str += this.buildXNodesFromYNode(tmpNode);
			tmpNode = tmpNode.nextNode;
		}

	} else {
		var tmpNode = null;
		if ( ynode.childNodes.length > 0 ) {
			var cNode = this.getNodeById(ynode.childNodes[0]);
			if ( cNode ) {
				tmpNode = cNode.getSiblingHead();				
			}
		}
		
		while ( tmpNode ) {			
			str += this.buildXNodesFromYNode(tmpNode);
			tmpNode = tmpNode.nextNode;
		}
	}
	
	str += '</node>\n';	
	return str;
}

// 讀檔 傳入一個XML字串 建立成tree
//YTree.prototype.loadFreeMind = function(mmXML, rNode) {

// 讀檔 傳入一個專案ID 建立成tree
YTree.prototype.loadFreeMind = function(MapID, rNode) {			
	var doc, x;
	var thisTree=this;
	if ( window.ActiveXObject ) {  //  for IE
		alert('暫時不提供IE流覽器');
		/*  暫時不提供IE流覽器
		doc=new ActiveXObject("Microsoft.XMLDOM");
		doc.async="false";
		doc.loadXML(mmXML);
		
		x = doc.documentElement; // map;
		var tmp,i;
		for( i=0; i<x.childNodes.length; i++ ) {
			tmp = i + ":" + x.childNodes[i].tagName+".";
		}
		//alert(tmp);
	  ///////////��յ���
	  //alert(x.childNodes.length);
	 	for ( var i=0; i<x.childNodes.length; i++ ) {
			var xnode = x.childNodes[i];
			if ( xnode.tagName == "node" ) {
			//this.buildYNodesFromXNode(xnode, ((rNode == undefined || rNode == null)? this.rootNode:rNode) );
				this.buildYNodesFromXNode(xnode, this.rootNode);
			}
	 	}
	  */
  } else if ( window.DOMParser){	  // for firefox by JY
	//} else if ( document.implementation && document.implementation.createDocument){
		try {
			// 去資料庫要
			$.ajax({
				async: false,
				url: 'update',
				type: 'POST',
				dataType: 'text',
				data: {act:'load', MapID: MapID},
				error: function(res){
					alert('DB Error');
					return false;
				},
				success: function(res){
//alert(res); //by JC
					var objnodes = JSON.parse(res);
					thisTree.buildYNodesFromXNode(objnodes, thisTree.rootNode);
				}
			});				
			
			/*
			$.post( "update",
				{act:'load', MapID: MapID},
				function (data) { // 從server那邊抓到資料
					var objnodes = JSON.parse(data);
					thisTree.buildYNodesFromXNode(objnodes, thisTree.rootNode);
					//yView.redrawTree(true); // 讀完之後 重新畫出節點
			});*/
		}
		catch(e){alert(e.message)}
	}	
}

//丟到這邊 看是哪一種XML物件
function parseXml(xml) {
	var dom = null;
	if (window.DOMParser) {
		try { 
			dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
		} 
			catch (e) { dom = null; }
		}
	else if (window.ActiveXObject) {
		try {
			dom = new ActiveXObject('Microsoft.XMLDOM');
			dom.async = false;
			if (!dom.loadXML(xml)) // parse error ..
				window.alert(dom.parseError.reason + dom.parseError.srcText);
			} 
		catch (e) { dom = null; }
	}
	else{   
		alert("cannot parse xml string!");
	}    
	return dom;
}

//將目前的Tree以XML格式輸出 其中rNode為rootnode 丟進functhin後 即開始進行buildXNodesFromYNode()
YTree.prototype.unLoadFreeMind = function(rNode) {
	//var str = '<map version="0.8.0">\n';	
	var str = '';	
	str += this.buildXNodesFromYNode(((rNode == undefined || rNode == null)? this.rootNode:rNode));
	//str += '</map>';
	return str;
}

/*
YTree.prototype.getnodes = function() { // jy
	alert('1:' + this.nodes);
	return this.nodes;
}
*/


///////////////////////////////////////////////////////////
// Tree's node element
YNode.prototype				= new Object();
YNode.prototype.constructor	= YNode;
YNode.superclass			= Object.prototype;

YNodeClone.prototype				= new Object();
YNodeClone.prototype.constructor	= YNodeClone;
YNodeClone.superclass				= Object.prototype;

function YNode(parent, pos, id, text) {
	if ( parent ) {
		this.indent = parent.indent + 1;
	} else {
		this.indent = 0;
	}
	this.id			= id;
	this.pos		= pos;
	this.text		= F_TrimStr(text);
//	this.ps	    	= F_TrimStr(ps);
	this.hyperlink	= "";
	this.ps         = null;
	this.budget     = null;
	this.leader     = null;
	this.starttime  = null;
    this.endtime    = null;	
	this.color		= "";
	this.style		= "";
	this.bgcolor	= "";
	
	this.font = {
		"name"		: "",
		"size"		: "",
		"italic"	: "",
		"bold"		: ""
	}
	
	this.edge = {
		"color"		: "",
		"style"		: "",
		"width"		: ""
	}

	// hold all children's id string
	this.childNodes	= new Array;
	
	// hold all icon
	this.icons		= new Array;

	this.parentNode	= parent;
	// need for sequencial order for each sibling nodes
	this.prevNode	= null;	
	this.nextNode	= null;
	
	var curDateTime	= new Date();
	this.created	= curDateTime.getTime();
	this.Modified	= this.created; //"";
	
	// volatile properties
	this.folded		= false;
	this.lastSelChildID	= "";
	this.selected	= false;
//	this.DBID = null; //added by JC
	this.NodeID = null; // added by JY
	this.MapID = null; // added by JY
}

function YNodeClone(self) {
	this.indent		= self.indent;
	this.id			= self.id;
	this.pos		= self.pos;
	this.text		= self.text;
    this.starttime  = self.starttime;//try
	this.endtime    = self.endtime;
	this.budget     = self.budget;
	this.leader     = self.leader;
	this.ps		    = self.ps;
	this.hyperlink	= self.hyperlink;

	this.color		= self.color;
	this.style		= self.style;
	this.bgcolor	= self.bgcolor;

	this.font = {
		"name"		: self.font.name,
		"size"		: self.font.size,
		"italic"	: self.font.italic,
		"bold"		: self.font.bold
	}

	this.edge = {
		"color"		: self.edge.color,
		"style"		: self.edge.style,
		"width"		: self.edge.width
	}

	this.icons		= new Array;
	for ( var i=0; i<self.icons.length; i++ ) {
		this.icons[i] = self.icons[i];
	}
	
	this.childNodes	= new Array;
	for ( var i=0; i<self.childNodes.length; i++ ) {
		this.childNodes[i] = self.childNodes[i];
	}
	
	this.parentId	= ( self.parentNode )? self.parentNode.id : "";
	this.prevId		= ( self.prevNode )? self.prevNode.id : "";
	this.nextId		= ( self.nextNode )? self.nextNode.id : "";

	this.created	= self.created;
	this.Modified	= self.Modified;

	this.folded		= self.folded;
	this.lastSelChildID	= self.lastSelChildID;
//	this.DBID		= self.DBID; //added by JC
	this.MapID		= self.MapID; // added by JY
	this.NodeID		= self.NodeID; //added by JY
}

YNode.prototype.updateModifed = function () {
	var curDateTime	= new Date();
	this.Modified	= curDateTime.getTime();
}

YNode.prototype.clone = function () {
	var self = new YNodeClone(this);
	return self;
}

YNode.prototype.setCloneFormat = function(clone) {
	this.color		= clone.color;
	this.style		= clone.style;
	this.bgcolor	= clone.bgcolor;

	this.font = {
		"name"		: clone.font.name,
		"size"		: clone.font.size,
		"italic"	: clone.font.italic,
		"bold"		: clone.font.bold
	}

	this.edge = {
		"color"		: clone.edge.color,
		"style"		: clone.edge.style,
		"width"		: clone.edge.width
	}
}

YNode.prototype.getIconCount = function () {
	return this.icons.length;
}

YNode.prototype.getIconCount = function () {
	return this.icons.length;
}

YNode.prototype.appendIcon = function (iconSrc) {
	this.icons.push(iconSrc);
}

YNode.prototype.removeIcon = function (iconIdx) {
	if ( iconIdx < 0 || iconIdx >= this.icons.length ) {
		return false;
	}
	this.icons.splice(iconIdx,1);
	return true;
}

YNode.prototype.removeLastIcon = function () {
	if ( this.icons.length == 0 ) {
		return false;
	}
	this.icons.splice(this.icons.length-1,1);
	return true;
}

YNode.prototype.removeIcons = function () {
	var cnt = 0;
	for ( var i=this.icons.length-1; i>=0; i-- ) {
		if ( this.removeIcon(i) ) cnt++;
	}
	return cnt;
}

YNode.prototype.getSiblingHead = function () {
	var tmpNode = this.prevNode;
	if ( tmpNode ) {
		while ( tmpNode.prevNode != null ) {
			tmpNode = tmpNode.prevNode;
		}
	} else {
		tmpNode = this;
	}
	return tmpNode;
}

YNode.prototype.getSiblingTail = function () {
	var tmpNode = this.nextNode;
	if ( tmpNode ) {
		while ( tmpNode.nextNode != null ) {
			tmpNode = tmpNode.nextNode;
		}
	} else {
		tmpNode = this;
	}
	return tmpNode;
}

YNode.prototype.isSon = function (id) {
	for ( var i=0; i<this.childNodes.length; i++ ) {
		if ( this.childNodes[i].id == id ) {
			return true;
		}
	}
	return false;
}

YNode.prototype.isLongNode = function () {
	return /\n/.test(this.text);
}

YNode.prototype.isHTMLNode = function () {
	return ( this.text.substring(0,6) == "<html>" );
}

YNode.prototype.switchNode = function (dir) {
	var pnode = this.prevNode;
	var nnode = this.nextNode;
	
	if ( dir == NODE_SIB_PREV ) {
		if ( pnode == null ) {
			return null;
		}

		if ( pnode.prevNode ) {
			this.prevNode = pnode.prevNode;
			pnode.prevNode.nextNode = this;
		} else {
			this.prevNode = null;
		}
		
		if ( nnode ) {
			pnode.nextNode = nnode;
			nnode.prevNode = pnode;
		} else {
			pnode.nextNode = null;
		}
		
		this.nextNode = pnode;
		pnode.prevNode = this;
		
		return pnode;

	} else if ( dir == NODE_SIB_NEXT ) {
		if ( nnode == null ) {
			return null;
		}
		
		if ( nnode.nextNode ) {
			this.nextNode = nnode.nextNode;
			nnode.prevNode = this;
		} else {
			this.nextNode = null;
		}
		
		if ( pnode ) {
			nnode.prevNode = pnode;
			pnode.nextNode = nnode;
		} else {
			nnode.prevNode = null;
		}
		
		this.prevNode = nnode;
		nnode.nextNode = this;

		return nnode;
	} else {
		return null;
	}
}

///////////////////////////////////////////////////////////
// Unicode to String conversion util for reading mm node text
// &#xXXXX -> ...

function escapeToNumRef(str, base) {
  var unicode_codes = convertStringToUnicodeCodePoints(str);
  var escaped = ''
  var prefix = base == 10 ? ''  : 'x';
  for (var i = 0; i < unicode_codes.length; ++i) {
    var code = unicode_codes[i].toString(base).toUpperCase();
    var num_ref = "&#" + prefix + code + ";"
    escaped += num_ref;
  }
  return escaped;
}

function unescapeFromNumRef(str, base) {
  var unicode_codes = convertNumRefToUnicodeCodePoints(str, base);
  return convertUnicodeCodePointsToString(unicode_codes);
}

function convertNumRefToUnicodeCodePoints(str, base) {
  var num_refs = str.split(";");
  num_refs.pop();  // Trim the last element.
  var unicode_codes = [];
  for (var i = 0; i < num_refs.length; ++i) {
    //var decimal_str = num_refs[i].replace(/^&#x?/, "");
    var decimal_str = num_refs[i].replace(/&#x/g, "");
    var unicode_code = parseInt(decimal_str, base);
    unicode_codes.push(unicode_code);
  }
  return unicode_codes;
}

function convertUnicodeCodePointsToString(unicode_codes) {
  var utf16_codes = convertUnicodeCodePointsToUtf16Codes(unicode_codes);
  return convertUtf16CodesToString(utf16_codes);
}

function convertUnicodeCodePointsToUtf16Codes(unicode_codes) {
  var utf16_codes = [];
  for (var i = 0; i < unicode_codes.length; ++i) {
    var unicode_code = unicode_codes[i];
    if (unicode_code < (1 << 16)) {
      utf16_codes.push(unicode_code);
    } else {
      var first = ((unicode_code - (1 << 16)) / (1 << 10)) + 0xD800;
      var second = (unicode_code % (1 << 10)) + 0xDC00;
      utf16_codes.push(first)
      utf16_codes.push(second)
    }
  }
  return utf16_codes;
}

function convertUtf16CodesToString(utf16_codes) {
  var unescaped = '';
  for (var i = 0; i < utf16_codes.length; ++i) {
    unescaped += String.fromCharCode(utf16_codes[i]);
  }
  return unescaped;
}


// 初始化MindWeb 將根節點的資訊塞進資料庫 包含NodeID MapID ParentNodeID(必為0) Content Created Position(必為0)欄位
// NodeID MapID ParentNodeID Position 會在server直接設值 故不用post方式傳遞
// 2014/05/19 新增ps
function mapinit(rootnode) {
	var Content = rootnode.text,
//	    ps = rootnode.ps,
		Created = rootnode.created,
		mapname = $('#mapname').val(),
		isanonymity = $('input[@name="RadioGroup_isanonymity"]:checked').val();		

	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act: 'mapinit', Content:Content, Created:Created, mapname:mapname, isanonymity:isanonymity},
		error: function(res){
			rootnode.NodeID = -1;
		},
		success: function(res){ // 回傳   "NodeID,MapID"
			var arr = res.split(',');
			rootnode.NodeID = parseInt('0'+arr[0],10);
			rootnode.MapID =  parseInt('0'+arr[1],10);
			setCurrentPrjID(parseInt('0'+arr[1],10));
		}
	});
	return rootnode;
}

// 每次newchildnode時 都去資料庫建立一筆新資料
function createnode(node) {
	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		//0914 預算新增
		data: {act: 'node_create', MapID: node.MapID, ParentNodeID: node.parentNode.NodeID, Content:node.text, Created: node.created, Position:node.pos},
		error: function(res){
			node.NodeID = -1;
		},
		success: function(res){
			if (res != "failed") {
				node.NodeID = parseInt('0'+res,10);		
			} else node.NodeID = -1;
		}
	});		
	return node;
}
