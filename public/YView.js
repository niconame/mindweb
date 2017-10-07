///////////////////////////////////////////////////////////
// Tree View
// Require : YMap.js, YTree.js, YEvt.js
YView.prototype				= new Object();
YView.prototype.constructor	= YView;
YView.superclass			= Object.prototype;

/*
* @brief construct tree's node view
* @param tree YTree instance.
* @param panelD HTML layer object for holding node's div elements.
* @param panelV VML or SVG layer object for holding node's link curve elements.
*/
function YView(tree, panelD, panelV) {
	this.tree					= tree;	
	this.panelD					= panelD;
	this.panelV					= panelV;	
	this.rootPosX				= panelD.offsetWidth>>1;
	this.rootPosY				= 300;
	
	// hold all selected nodes' id
	this.selectedNodes			= new Array;	
	this.nodeEditor				= null;
	this.longNodeEditor			= null;
	this.imageChooser			= null;
	this.hyperlinkChooser		= null;
	this.colorChooser			= null;
	this.fontNameSelector		= null;
	this.fontSizeSelector		= null;	
	this.nodePosSelector		= null;
	
	//判斷開啟的瀏覽器
	if ( gBrowserDetect.browser == "Explorer" ) {
		this.createVMLElement();
	} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
		this.createSVGElement();
	}

	this.centerPanelView();
}

YView.prototype.setNodeEditor = function(el) {
	this.nodeEditor = el;
	if ( this.nodeEditor ) {
		this.nodeEditor.style.display = "none";
		this.nodeEditor.onkeypress = EVT_NodeEditKey;
	}
}

YView.prototype.setLongNodeEditor = function(el) {
	this.longNodeEditor = el;
	if ( this.longNodeEditor ) {
		this.longNodeEditor.style.display = "none";
	}
}

YView.prototype.setImageChooser = function(el) {
	this.imageChooser = el;
	if ( this.imageChooser ) {
		this.imageChooser.style.display = "none";
	}
}

YView.prototype.setHyperlinkChooser = function(el) {
	this.hyperlinkChooser = el;
	if ( this.hyperlinkChooser ) {
		this.hyperlinkChooser.style.display = "none";
	}
}

YView.prototype.setColorChooser = function(el) {
	this.colorChooser = el;
	if ( this.colorChooser ) {
		this.colorChooser.style.display = "none";
	}

	var colorPicker = document.getElementById("colorPicker");
	if ( colorPicker == null ) return;
	
	var clrPickFunc = "document.getElementById('_colorChooser').value=";

	var clrfix = Array("000000","333333","666666","999999","cccccc","ffffff","ff0000","00ff00","0000ff","ffff00","00ffff","ff00ff");
	var table ='<table border="0"  cellpadding="0" cellspacing="0" bgcolor="#000000"><tr>';
	table += '';
	{
		table += '<td width="11"><table bgcolor="#000000"  border="0"  cellpadding="0" cellspacing="1"  class="color_table">';
		for(var i=0;i<12;i++){
			var clr = clrfix[i];	
			table += '<tr><td bgcolor="#'+clr+'" class="cell_color" onclick="' + clrPickFunc + "'" + clr + "'" + '"></td></tr>';
		}
		table += '</table></td>';		
	}
	table +='<td><table border="0" cellpadding="0" cellspacing="0">';	
	for (var c = 0; c<6; c++) {
		if(c==0 || c==3){
			table +="<tr>";	
		}
		table += "<td>"	
		
		table = table+'<table border="0" cellpadding="0" cellspacing="1" class="color_table"> ';
		for (var j = 0; j<6; j++) {
			table +="<tr>";
			for (var i = 0; i<6; i++) {
				var clrhex = F_RGB2Hex(j*255/5,i*255/5,c*255/5);
				table += '<td bgcolor="#'+clrhex+'" class="cell_color" onclick="' + clrPickFunc + "'" + clrhex + "'"  +'"></td>';
			}
			table +="</tr>";
		}
		table +="</table>";
		table += "</td>"	
		if(c==2 || c==5){
			table +="</tr>";	
		}	
	}
	table +='</table></td></tr></table>';

	colorPicker.innerHTML = table;
}

YView.prototype.setFontNameSelector = function(el) {
	this.fontNameSelector = el;
}

YView.prototype.setFontSizeSelector = function(el) {
	this.fontSizeSelector = el;
}

YView.prototype.centerEditorView = function(el) {
	el.style.display = "";

	var wEL = el.offsetWidth;
	var hEL = el.offsetHeight;
	var wW = (typeof window.innerWidth != 'undefined') ? window.innerWidth : document.body.offsetWidth;
	var hW = (typeof window.innerHeight != 'undefined') ? window.innerHeight : document.body.offsetHeight;

	el.style.left = 0 + parseInt((wW - wEL)>>1, 10) + "px";
	el.style.top = 0 + parseInt((hW - hEL)>>1, 10) + "px";
}

//設定node所在的位置
YView.prototype.centerPanelView = function() {
	var w = this.panelD.offsetWidth;
	var h = this.panelD.offsetHeight;
	
	this.panelD.style.left = ((document.body.clientWidth - w)>>1) + "px";
	this.panelD.style.top = 0 - (h>>1) + 300 + "px";
}

YView.prototype.createVMLElement = function() {
	// Node position selector
	var oSelector = document.createElement("v:rect");
	if ( oSelector == null ) {
		return;
	}
	oSelector.style.position = "absolute";
	oSelector.setAttribute("filled", "t");
	oSelector.setAttribute("stroked", "false");

	var oFill = document.createElement("v:fill");
	if ( oFill != null ) {
		oFill.setAttribute("type", "gradient");
		oFill.setAttribute("color", "#"+ROOT_SHAPE_COLOR);
		oFill.setAttribute("color2", "#"+ROOT_SHAPE_COLOR);
		oSelector.appendChild(oFill);
	}

	oSelector.className = "selector";
	
	this.nodePosSelector = oSelector;
	this.panelV.appendChild(this.nodePosSelector);
}

YView.prototype.createSVGElement = function() {
	// Node folded end marker
	var oMarker = document.createElementNS(SVG_NAMESPACE, "marker");
	
	oMarker.setAttribute("id", "EndMarker");
	oMarker.setAttribute("markerUnits", "userSpaceOnUse");

	//if 
	oMarker.setAttribute("viewBox", "0 0 16 16");

	oMarker.setAttribute("refX", "0");
	oMarker.setAttribute("refY", "8");
	oMarker.setAttribute("fill", "#"+NODE_LNK_COLOR);

	if ( NODE_LNK_WIDTH == 1 ) {
		oMarker.setAttribute("markerWidth", NODE_LNK_WIDTH*8);
	} else {
		oMarker.setAttribute("markerWidth", NODE_LNK_WIDTH*4);
	}

	oMarker.setAttribute("markerHeight", NODE_LNK_WIDTH*8);
	oMarker.setAttribute("orient", "auto");

	this.panelV.appendChild(oMarker);
	
	var oCircle = document.createElementNS(SVG_NAMESPACE, "circle");
	
	oCircle.setAttribute("cx", "8");
	oCircle.setAttribute("cy", "8");
	oCircle.setAttribute("r", "8");
	oCircle.setAttribute("r", "8");
	
	oMarker.appendChild(oCircle);
	
	// node left|right|up(down)|nutral gradient
	var oGra = new Array(4);
	var oGraIds = new Array(
		SVG_RIGHTGRADIENT_ID,
		SVG_LEFTGRADIENT_ID,
		SVG_UPGRADIENT_ID,
		SVG_NUTRALGRADIENT_ID);
	var oStop = new Array(8);
	
	for ( var i=0; i<oGra.length; i++ ) {
		oGra[i] = document.createElementNS(SVG_NAMESPACE, "linearGradient");
		oGra[i].setAttribute("id", oGraIds[i]);
		
		oStop[i*2] = document.createElementNS(SVG_NAMESPACE, "stop");
		oStop[i*2+1] = document.createElementNS(SVG_NAMESPACE, "stop");

		oStop[i*2].setAttribute("offset", "0%");
		oStop[i*2+1].setAttribute("offset", "100%");
		
		if ( oGraIds[i] == SVG_UPGRADIENT_ID ) {
			oGra[i].setAttribute("x1", "0%");
			oGra[i].setAttribute("y1", "100%");
			oGra[i].setAttribute("x2", "0%");
			oGra[i].setAttribute("y2", "0%");
		} else {
			oGra[i].setAttribute("x1", "0%");
			oGra[i].setAttribute("y1", "0%");
			oGra[i].setAttribute("x2", "100%");
			oGra[i].setAttribute("y2", "0%");
		}

		oGra[i].appendChild(oStop[i*2]);
		oGra[i].appendChild(oStop[i*2+1]);
		
		this.panelV.appendChild(oGra[i]);
	}
	
	oStop[0].setAttribute("stop-color", "#"+ROOT_SHAPE_COLOR);
	oStop[1].setAttribute("stop-color", "#"+ROOT_SHAPE_SELCOLOR);
	
	oStop[2].setAttribute("stop-color", "#"+ROOT_SHAPE_SELCOLOR);
	oStop[3].setAttribute("stop-color", "#"+ROOT_SHAPE_COLOR);
	
	oStop[4].setAttribute("stop-color", "#"+ROOT_SHAPE_SELCOLOR);
	oStop[5].setAttribute("stop-color", "#"+ROOT_SHAPE_COLOR);
	
	oStop[6].setAttribute("stop-color", "#"+ROOT_SHAPE_SELCOLOR);
	oStop[7].setAttribute("stop-color", "#"+ROOT_SHAPE_SELCOLOR);
	
	// node position selector
	this.nodePosSelector = document.createElementNS(SVG_NAMESPACE, "rect");
	this.nodePosSelector.setAttribute("stroke-width", 0);
	this.panelV.appendChild(this.nodePosSelector);
}

// 20120511 remove
YView.prototype.initMap = function(text) {
	this.deleteNodeView(this.tree.rootNode);
	this.tree.initTree(text);
	
	delete this.selectedNodes;
	this.selectedNodes = new Array;
	
	this.redrawTree(true);
	
	this.selectNode(this.tree.rootNode, false, false);
}

YView.prototype.getSelectedNodeCount = function() {
	return this.selectedNodes.length;
}

YView.prototype.getLastSelectedNode = function() {
	var len = this.selectedNodes.length;
	return (len == 0)? null:this.tree.getNodeById(this.selectedNodes[len-1]);
}

YView.prototype.getNodeByID = function(id) { // by jy
	return this.tree.getNodeById(id);
}

YView.prototype.getNodeByNodeID = function(NodeID) { // by jy
	return this.tree.getNodeByNodeID(NodeID);
}

YView.prototype.getLastSelectedNodeID = function() {
	var len = this.selectedNodes.length;
	return (len == 0)? "":this.selectedNodes[len-1];
}

YView.prototype.getFirstSelectedNode = function() {
	return (this.selectedNodes.length == 0)? null:this.tree.getNodeById(this.selectedNodes[0]);
}
YView.prototype.isSelectedNode = function(node) {
	for ( var i=this.selectedNodes.length-1; i>=0; i-- ) {
		if ( this.selectedNodes[i] == node.id ) {
			return true;
		}
	}
	return false;
}

YView.prototype.deSelectNodes = function(node) {
	for ( var i=this.selectedNodes.length-1; i>=0; i-- ) {
		var nodeID = this.selectedNodes[i];
		
		if ( node != undefined && node != null && nodeID != node.id ) {
			continue;
		}
		
		this.selectedNodes.splice(i,1);

		if ( nodeID == this.tree.rootNodeID ) {
			var oOval = document.getElementById(ROOT_SHAPE_ID);
			if ( oOval == null ) {
				continue;
			}
		
			if ( gBrowserDetect.browser == "Explorer" ) {
				oOval.setAttribute("filled", "f");
			} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
				oOval.setAttribute("fill", "none");
			}
		} else {
			var tmpNode = this.tree.getNodeById(nodeID);
			if ( tmpNode == null ) continue;
			var oView = this.getNodeView(tmpNode);
			if ( oView == null ) continue;
			
			oView.style.backgroundColor = ( tmpNode.bgcolor == "" )? "":"#"+tmpNode.bgcolor;
		}
		
		if ( node != undefined && node != null && nodeID == node.id ) {
			break;
		}
	}
}
/*
YView.prototype.deSelectNodes = function(node) {
	if ( node != undefined && node != null ) {
		for ( var i=0; i<this.selectedNodes.length; i++ ) {
			var nodeID = this.selectedNodes[i];
			
			if ( nodeID != node.id ) {
				continue;
			}
			
			this.selectedNodes.splice(i,1);
			
			if ( nodeID == this.tree.rootNodeID ) {
				var oOval = document.getElementById(ROOT_SHAPE_ID);
				if ( oOval == null ) {
					continue;
				}
			
				if ( gBrowserDetect.browser == "Explorer" ) {
					oOval.setAttribute("filled", "f");
				} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
					oOval.setAttribute("fill", "none");
				}
			} else {
				var oView = this.getNodeView(node);
				if ( oView == null ) continue;
				
				oView.style.backgroundColor = ( node.bgcolor == "" )? "":"#"+node.bgcolor;
			}
			break;
		}
	} else {
		for ( var i=this.selectedNodes.length-1; i>=0; i-- ) {
			var nodeID = this.selectedNodes[i];
			
			this.selectedNodes.splice(i,1);
			
			if ( nodeID == this.tree.rootNodeID ) {
				var oOval = document.getElementById(ROOT_SHAPE_ID);
				if ( oOval == null ) {
					continue;
				}
			
				if ( gBrowserDetect.browser == "Explorer" ) {
					oOval.setAttribute("filled", "f");
				} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
					oOval.setAttribute("fill", "none");
				}
			} else {
				var tmpNode = this.tree.getNodeById(nodeID);
				if ( tmpNode == null ) continue;
				var oView = this.getNodeView(tmpNode);
				if ( oView == null ) continue;
				
				oView.style.backgroundColor = ( tmpNode.bgcolor == "" )? "":"#"+tmpNode.bgcolor;
			}
		}
	}
}
*/

YView.prototype.setNodeViewSelected = function(node) {
	if ( node.id == this.tree.rootNodeID ) {
		var oOval = document.getElementById(ROOT_SHAPE_ID);
		if ( oOval == null ) {
			return;
		}

		if ( gBrowserDetect.browser == "Explorer" ) {
			oOval.setAttribute("filled", "t");
			if ( oOval.childNodes.length > 0 ) {
				var oFill = oOval.childNodes[0];
				oFill.setAttribute("color", "#"+ROOT_SHAPE_SELCOLOR);
				oFill.setAttribute("color2", "#"+ROOT_SHAPE_SELCOLOR);
			}
		} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
			oOval.setAttribute("fill", "url(#" + SVG_NUTRALGRADIENT_ID + ")");
		}
	} else {
		if ( node == null ) {
			return;
		}
		var oView = this.getNodeView(node);
		if ( oView == null ) {
			return;
		}
		oView.style.backgroundColor = "#"+NODE_VIEW_SELCOLOR;
	}
}

YView.prototype.updateNodeFontStyle = function(node) {
	if ( this.fontSizeSelector ) {
		if ( node.font.size == "" ) {
			node.font.size = NODE_FONT_SIZE;
		}
		
		var fsize = node.font.size;
		var i=0;
		
		for ( i=this.fontSizeSelector.options.length-1; i>=1; i-- ) {
			if ( this.fontSizeSelector.options[i].value == fsize ) {
				this.fontSizeSelector.selectedIndex = i;
				break;
			}
		}
		
		if ( i== 0 ) {
			this.fontSizeSelector.selectedIndex = 0;
			this.fontSizeSelector.options[i].value = fsize;
			this.fontSizeSelector.options[i].text = fsize;
		}
	}
	
	if ( this.fontNameSelector ) {
		if ( node.font.name == "" ) {
			node.font.name = NODE_FONT_NAME;
		}
		
		var fname = node.font.name;
		var i=0;
		
		for ( i=this.fontNameSelector.options.length-1; i>=1; i-- ) {
			if ( this.fontNameSelector.options[i].value == fname ) {
				this.fontNameSelector.selectedIndex = i;
				break;
			}
		}
		
		if ( i== 0 ) {
			this.fontNameSelector.selectedIndex = 0;
			this.fontNameSelector.options[i].value = fname;
			this.fontNameSelector.options[i].text = fname;
		}
	}
}

YView.prototype.selectNode = function( nodeVal, bAppend, bPosSel ) {
	var node = (typeof(nodeVal)=="string")? this.tree.getNodeById(nodeVal):nodeVal;
	if ( node == undefined || node == null ) {
		return;
	}
	
	if ( this.isSelectedNode(node) ) {
		return;
	}

	if ( !bAppend ) {
		this.deSelectNodes();
	}

	if ( bPosSel && node.id != this.tree.rootNodeID ) {
		var oView = this.getNodeView(node);
		if ( oView ) {
			oView.style.backgroundColor = "";
			if ( gBrowserDetect.browser == "Explorer" && this.nodePosSelector ) {
				var oSelector = this.nodePosSelector;
				oSelector.style.display = "";
				oSelector.style.left = oView.offsetLeft;
				oSelector.style.top = oView.offsetTop;
				oSelector.style.pixelWidth = oView.offsetWidth;
				oSelector.style.pixelHeight = oView.offsetHeight;
				if ( oSelector.childNodes.length > 0 ) {
					var oFill = oSelector.childNodes[0];
					oFill.setAttribute("color", "#"+ROOT_SHAPE_SELCOLOR);
					oFill.setAttribute("color2", "#"+ROOT_SHAPE_SELCOLOR);
				}
			} else if ( (gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome") &&  this.nodePosSelector ) {
				var oSelector = this.nodePosSelector;
				oSelector.style.display = "";
				oSelector.setAttribute("x", oView.offsetLeft);
				oSelector.setAttribute("y", oView.offsetTop);
				oSelector.setAttribute("width", oView.offsetWidth);
				oSelector.setAttribute("height", oView.offsetHeight);
				//oOval.setAttribute("fill", "url(#" + SVG_NUTRALGRADIENT_ID + ")");
			}
		}
	} else {
		this.setNodeViewSelected(node);
	}
	
	this.selectedNodes.push(node.id);
	this.updateNodeFontStyle(node);

	if ( node.parentNode ) {
		node.parentNode.lastSelChildID = node.id;
	}	
}

YView.prototype.hideNodeSelector = function () {
	if ( this.nodePosSelector ) this.nodePosSelector.style.display = "none";
}

YView.prototype.selectNodePos = function( node, pos ) {
	if ( node.id == this.tree.rootNodeID ) {
		if ( this.nodePosSelector ) this.nodePosSelector.style.display = "none";

		var oOval = document.getElementById(ROOT_SHAPE_ID);
		if ( oOval == null ) {
			return;
		}

		if ( gBrowserDetect.browser == "Explorer" ) {
			if ( oOval.childNodes.length > 0 ) {
				var oFill = oOval.childNodes[0];
				if ( pos == NODE_POS_RIGHT ) {
					oFill.setAttribute("color", "#"+ROOT_SHAPE_SELCOLOR);
					oFill.setAttribute("color2", "#"+ROOT_SHAPE_COLOR);
				} else if ( pos == NODE_POS_LEFT ) {
					oFill.setAttribute("color", "#"+ROOT_SHAPE_COLOR);
					oFill.setAttribute("color2", "#"+ROOT_SHAPE_SELCOLOR);
				}
			}
		} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
			if ( pos == NODE_POS_RIGHT ) {
				oOval.setAttribute("fill", "url(#" + SVG_RIGHTGRADIENT_ID + ")");
			} else if ( pos == NODE_POS_LEFT ) {
				oOval.setAttribute("fill", "url(#" + SVG_LEFTGRADIENT_ID + ")");
			}
		}
	} else {
		if ( this.nodePosSelector ) {
			this.nodePosSelector.style.display = "";
		} else {
			return;
		}
		var oSelector = this.nodePosSelector;

		if ( gBrowserDetect.browser == "Explorer" ) {
			if ( oSelector.childNodes.length > 0 ) {
				var oFill = oSelector.childNodes[0];
				if ( pos == NODE_POS_CHILD ) {
					oFill.setAttribute("angle", 90);
					oFill.setAttribute("color", "#"+((node.pos==NODE_POS_LEFT)?ROOT_SHAPE_COLOR:ROOT_SHAPE_SELCOLOR));
					oFill.setAttribute("color2", "#"+((node.pos==NODE_POS_LEFT)?ROOT_SHAPE_SELCOLOR:ROOT_SHAPE_COLOR));
				} else if ( pos == NODE_POS_UP ) {
					oFill.setAttribute("angle", 0);
					oFill.setAttribute("color", "#"+ROOT_SHAPE_COLOR);
					oFill.setAttribute("color2", "#"+ROOT_SHAPE_SELCOLOR);
				}
			}
		} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
			if ( pos == NODE_POS_CHILD ) {
				oSelector.setAttribute("fill", "url(#" + ((node.pos==NODE_POS_LEFT)?SVG_RIGHTGRADIENT_ID:SVG_LEFTGRADIENT_ID) + ")");
			} else if ( pos == NODE_POS_UP ) {
				oSelector.setAttribute("fill", "url(#" + SVG_UPGRADIENT_ID + ")");
			}
		}
	}
}

YView.prototype.refreshSelectedNodes = function() {
	for ( var i=0; i<this.selectedNodes.length; i++ ) {
		this.setNodeViewSelected(this.tree.getNodeById(this.selectedNodes[i]));
	}
}

/*

*/

YView.prototype.getNodeView = function(node) {
	if ( node == null ) return null;

	var oView = document.getElementById(NODE_VIEW_PREFIX+node.id);
	if ( oView ) return oView;

	oView = document.createElement("table");
	if ( oView == null ) return null;
	
	// EVENTHANDLECODE
	var onClick		= "EVT_NodeClick(event,'" + node.id + "')";
	var onMouseUp	= "EVT_NodeMouseUp(event,'" + node.id + "')";
	var onMouseOver	= "EVT_NodeMouseOver(event,'" + node.id + "','" + node.NodeID + "')";
	var onMouseMove = "EVT_NodeMouseMove(event,'" + node.id + "')";
	var onContextMenu = "EVT_NodeContextMenu(event,'" + node.id + "')";
	var onDblClick	= "";

	if ( gBrowserDetect.browser == "Explorer" ) {
		// IE disallows append evnets handler by setAttribute function
		// Also I don't want to call addEventListener for event handling
		// because that I must remove event listner for this element
		// when I remove this element
		str = "<table id=\"" + NODE_VIEW_PREFIX+node.id
			+ "\" nodeID=\"" + node.id
			+ "\" onclick=\"" + onClick
			+ "\" onmouseup=\"" + onMouseUp
			+ "\" onmouseover=\"" + onMouseOver
			+ "\" onmousemove=\"" + onMouseMove
			+ "\" oncontextmenu=\"" + onContextMenu
			+ "\" onselectstart=\"" + "return true;"
			+ "\"></table>";
		
		this.panelD.appendChild(oView);
		oView.outerHTML = str;

		oView = document.getElementById(NODE_VIEW_PREFIX+node.id);
	} else {
		// Firefox allow to add event handler by setAttribute function
		oView.setAttribute("id", NODE_VIEW_PREFIX+node.id);
		oView.setAttribute("nodeID",node.id);
		oView.setAttribute("onclick",onClick);
		oView.setAttribute("onmouseup",onMouseUp);
		oView.setAttribute("onmouseover",onMouseOver);
		oView.setAttribute("onmousemove",onMouseMove);
		oView.setAttribute("oncontextmenu",onContextMenu);
		oView.setAttribute("nodeid", node.id);
		
		//oView.style.MozUserSelect = "none";
		
		this.panelD.appendChild(oView);
	}
	
	oView.className = "nodeView";
	oView.setAttribute("cellpaddng", "0px");
	oView.setAttribute("cellspacing", "0px");
	//oView.setAttribute("border", "5px"); jy debug

	// TD1 for icon area, TD2 for node text
	var oTR, oTD1, oTD2, oTD3;
	oTR = document.createElement("tr");
	if ( gBrowserDetect.browser == "Explorer" ) {
		var oTBody = document.createElement("tbody");
		oView.appendChild(oTBody);
		oView.getElementsByTagName('tbody')[0].appendChild(oTR);
	} else {
		oView.appendChild(oTR);
	}
	
	oTD1 = document.createElement("td");
	oTD2 = document.createElement("td");
	oTD3 = document.createElement("td");	//spare
	
	oTR.appendChild(oTD1);
	oTR.appendChild(oTD2);
	oTD2.setAttribute("ondblclick","OpenNodeEdit()");
	oTR.appendChild(oTD3);

	this.setNodeView(node, oView);
	
	return oView;
}

YView.prototype.getNodeViewArea = function(node, what, oView) {
	if ( oView == undefined || oView == null)
		oView = this.getNodeView(node);
	
	var oArea;
	if ( gBrowserDetect.browser == "Explorer" ) {
		// table / tbody / tr / td
		oArea = oView.children[0].children[0].children[what];
	} else {
		// table /tr /td /
		oArea = oView.childNodes[0].childNodes[what];
	}
	return oArea;
}

YView.prototype.setNodeViewIcon = function( node, oView ) {
	if ( oView == undefined || oView == null )
		oView = this.getNodeView(node);
	
	var oArea = this.getNodeViewArea(node, NODE_VIEW_ICON, oView);
	while (oArea.firstChild) {
		oArea.removeChild(oArea.firstChild);
	}
	for ( var i=0; i<node.getIconCount(); i++ ) {
		this.appendIconImg(node, i);
	}
	
	if ( node.pos == NODE_POS_LEFT ) {
		var pView = this.getNodeView(node.parentNode);
		if ( pView ) oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}
}

YView.prototype.setNodeViewText = function( node, oView ) {
	if ( oView == undefined || oView == null )
		oView = this.getNodeView(node);

	var oArea = this.getNodeViewArea(node, NODE_VIEW_TEXT, oView);
	
	var displayText = (node.text.length==0)? "_":node.text //+"("+node.ps+")";    //Node新增(ps)
	
	if ( node.isHTMLNode() ) {
		oArea.innerHTML = node.text.substring(6);
	} else {
		if ( gBrowserDetect.browser == "Explorer" ) {
			oArea.innerText = displayText;
		} else {
			oArea.textContent = displayText;
		}
	}
	
	if ( node.pos == NODE_POS_LEFT ) {
		var pView = this.getNodeView(node.parentNode);
		if ( pView ) oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}
}

YView.prototype.setNodeViewHyperlink = function( node, oView ) {
	if ( oView == undefined || oView == null )
		oView = this.getNodeView(node);

	var oArea = this.getNodeViewArea(node, NODE_VIEW_LINK, oView);

	while (oArea.firstChild) {
		oArea.removeChild(oArea.firstChild);
	}

	var linkText = node.hyperlink;
	if ( linkText == "" ) {
		return;
	}
	
	var str = "<a href='http://" + linkText + "' title='" + linkText + "' onclick='EVT_NodeHyperlinkClick(event);' target='_blank'><img src='" + YMAP_UIIMG_PATH + "/btn_link.gif' border='0' /></a>";
	
	oArea.innerHTML = str;

	if ( node.pos == NODE_POS_LEFT ) {
		var pView = this.getNodeView(node.parentNode);
		if ( pView ) oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}
}

YView.prototype.appendIconImg = function( node, idx ) {
	var oImg = document.createElement("img");
	var oView = this.getNodeView(node);
	var oArea = this.getNodeViewArea(node, NODE_VIEW_ICON, oView);
	oArea.appendChild(oImg);
	
	// EVENTHANDLECODE
	var onClick = "EVT_NodeIconClick(event, this,'" + node.id + "')";
	//var onDblClick = "EVT_NodeIconDblClick(event, this,'" + node.id + "');";

	var imgSrc = YMAP_ICON_PATH + "/" + node.icons[idx]+ ".gif";
		
	if ( gBrowserDetect.browser == "Explorer" ) {
		var imgId = "i"+node.id+"_"+idx;
		var str = "<img id='" + imgId + "' " +
			"src='" + imgSrc + "' hspace='2' " +
			"onclick=\"" + onClick + ";\"  />";
			//"onclick=\"" + onClick + ";\" " +
			//"ondblclick=\"" + onDblClick + ";\" />";
			
		oImg.outerHTML = str;
	} else {
		oImg.setAttribute("src", imgSrc);
		oImg.hspace = 2;
		oImg.setAttribute("onclick", onClick);
		//oImg.setAttribute("ondblclick", onDblClick);
	}
	
	if ( node.pos == NODE_POS_LEFT ) {
		var pView = this.getNodeView(node.parentNode);
		if ( pView ) oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}
}

YView.prototype.setNodeViewStyle = function( node, oView) {
	if ( oView == undefined || oView == null )
		oView = this.getNodeView(node);

	var oArea = this.getNodeViewArea(node,NODE_VIEW_TEXT);

	oArea.style.fontFamily = ( node.font.name == "" )? NODE_FONT_NAME:node.font.name;
	oArea.style.fontSize = ( node.font.size == "" )? NODE_FONT_SIZE+"px":node.font.size+"px";
	oArea.style.fontStyle = ( node.font.italic == "true" )? "italic":"normal";
	oArea.style.fontWeight = ( node.font.bold == "true" )? "bold":"normal";

	oView.style.color = ( node.color == "" )? "#"+NODE_FONT_COLOR:"#"+node.color;

	if ( this.tree.isRootNode(node) ) {
		oView.style.backgroundColor = "";
	} else {
		oView.style.backgroundColor = ( node.bgcolor == "" )? "":"#"+node.bgcolor;
	}
}

YView.prototype.setNodeView = function( node, oView ) {
	if ( oView == undefined || oView == null )
		oView = this.getNodeView(node);
	
	// draw icons on 1 col //////////////////////////////////
	this.setNodeViewIcon(node, oView);

	// draw text on 2 col //////////////////////////////////
	this.setNodeViewText(node, oView);

	// draw hyperlink on 3 col /////////////////////////////
	this.setNodeViewHyperlink(node, oView);

	this.setNodeViewStyle(node);
}

YView.prototype.drawRootShape = function( oView ) {
	if ( gBrowserDetect.browser == "Explorer" ) {
		var oOval = document.getElementById(ROOT_SHAPE_ID);
		if ( oOval == null ) {
			oOval = document.createElement("v:oval");
			if ( oOval == null ) {
				return;
			}
			oOval.setAttribute("id", ROOT_SHAPE_ID);
			oOval.style.position = "absolute";
			oOval.setAttribute("stroked", "true");
			
			var oFill = document.createElement("v:fill");
			if ( oFill != null ) {
				oFill.setAttribute("type", "gradient");
				oFill.setAttribute("angle", 90);
				oFill.setAttribute("color", "#"+ROOT_SHAPE_COLOR);
				oFill.setAttribute("color2", "#"+ROOT_SHAPE_COLOR);
				oOval.appendChild(oFill);
			}
			
			this.panelV.appendChild(oOval);
		}

		oOval.style.left = oView.offsetLeft;
		oOval.style.top = oView.offsetTop - ((ROOT_SHAPE_HEIGHT - oView.offsetHeight)>>1);
		oOval.style.pixelWidth = oView.offsetWidth;
		oOval.style.pixelHeight = ROOT_SHAPE_HEIGHT;
		oOval.setAttribute("strokecolor", "#"+ROOT_SHAPE_STCOLOR);
		oOval.setAttribute("strokeweight", NODE_LNK_WIDTH);
		
	} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
		var oOval = document.getElementById(ROOT_SHAPE_ID);
		if ( oOval == null ) {
			// Watch out the function name! (not createElement)
			oOval = document.createElementNS(SVG_NAMESPACE, "ellipse");
			if ( oOval == null ) {
				return;
			}
	
			oOval.setAttribute("id", ROOT_SHAPE_ID);
			oOval.setAttribute("fill", "none");

			this.panelV.appendChild(oOval);
		}
		
		oOval.setAttribute("cx", oView.offsetLeft + (oView.offsetWidth>>1) );
		oOval.setAttribute("cy", oView.offsetTop + (oView.offsetHeight>>1) );
		oOval.setAttribute("rx", oView.offsetWidth>>1 );
		oOval.setAttribute("ry", ROOT_SHAPE_HEIGHT>>1 );
		oOval.setAttribute("stroke", "#"+ROOT_SHAPE_STCOLOR);
		oOval.setAttribute("stroke-width", NODE_LNK_WIDTH);
	}
}

YView.prototype.drawNodeLinker = function( node ) {
	if ( node.parentNode == null ) return null;
	
	var oView = this.getNodeView(node);
	var pView = this.getNodeView(node.parentNode);
	if ( oView == null || pView == null ) return null;
	
	var oLink = null;
	var pos1X, pos1Y, pos2X, pos2Y;
	var toX, toY;
	var control1X, control1Y, control2X, control2Y;
	var tipLen = 0;

	if ( node.pos == NODE_POS_RIGHT ) {
		pos1X = pView.offsetLeft + pView.offsetWidth;
	} else {
		pos1X = pView.offsetLeft;
	}
	var pos1Y = pView.offsetTop + ((node.parentNode.indent == 0)? pView.offsetHeight>>1:pView.offsetHeight) - 1;
	
	pos2Y = oView.offsetTop + oView.offsetHeight - 1;

	toX = NODE_VIEW_HGAP;
	
	if ( node.childNodes.length > 0 && node.folded ) {
		tipLen = 8;	// need dot
	}
	
	if ( gBrowserDetect.browser == "Explorer" ) {
		oLink = document.getElementById(NODE_LINK_PREFIX+node.id);
		if ( oLink == null ) {
			oLink = document.createElement("v:shape");
			
			if ( oLink == null ) {
				return null;
			}
			
			oLink.setAttribute("id", NODE_LINK_PREFIX+node.id);
			oLink.setAttribute("coordorigin", "0 0");
			oLink.setAttribute("coordsize", "100 100");
			oLink.setAttribute("filled", "f");
			oLink.className = "linker";

			// the only one child element in this shape
			var oStroke = document.createElement("v:stroke");
			if ( oStroke ) {
				oLink.appendChild(oStroke);
			}
			
			this.panelV.appendChild(oLink);
		}
		
		pos2X = oView.offsetLeft;
		
		control1X = 10;
		control2X = 0;
		if ( pos1Y > pos2Y ) {
			toY = pos2Y - pos1Y;
		} else {
			toY = pos2Y - pos1Y;
		}
		control1Y = parseInt(toY/5,10);
		control2Y = toY;

		oLink.style.left = pos1X + "px";
		oLink.style.top = pos1Y + "px";
		oLink.style.pixelWidth = (node.pos == NODE_POS_RIGHT)?100:-100;
		oLink.style.pixelHeight = 100;

		oLink.setAttribute("strokecolor", (node.edge.color == "")? "#"+NODE_LNK_COLOR:"#"+node.edge.color);
		oLink.setAttribute("strokeweight", (node.edge.width == "")? NODE_LNK_WIDTH:node.edge.width);
		
		if ( oLink.children.length > 0 ) {
			if ( tipLen > 0 ) {
				oLink.children[0].setAttribute("endarrow", "oval");
			} else {
				oLink.children[0].setAttribute("endarrow", "none");
			}
		}
		
		var path = "m 0,0 c ";
		path += control1X + "," + control1Y + "," + control2X + "," + control2Y + ",";
		path += toX + "," + toY + " r ";
		path += (oView.offsetWidth + tipLen) + ",0 e";
		oLink.setAttribute("path", path);
		
		return oLink;

	} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {

		oLink = document.getElementById(NODE_LINK_PREFIX+node.id);
		if ( oLink == null ) {
			// Watch out the function name! (not createElement)
			oLink = document.createElementNS(SVG_NAMESPACE, "path");
			
			if ( oLink == null ) {
				return null;
			}
	
			oLink.setAttribute("id", NODE_LINK_PREFIX+node.id);
			oLink.setAttribute("fill", "none");
			//oLink.className = "linker";

			this.panelV.appendChild(oLink);
		}
		
		if ( node.pos == NODE_POS_RIGHT ) {
			pos2X = oView.offsetLeft;
			control1X = pos1X +  10;
		} else {
			pos2X = oView.offsetLeft + oView.offsetWidth;
			control1X = pos1X -  10;
		}

		control1Y = pos1Y;
		control2X = pos1X;
		control2Y = pos2Y;
	
		if ( tipLen > 0 ) {
			oLink.setAttribute("marker-end", "url(#EndMarker)");
		} else {
			oLink.setAttribute("marker-end", "none");
		}
		
		oLink.setAttribute("stroke", (node.edge.color == "")? "#"+NODE_LNK_COLOR:"#"+node.edge.color);
		oLink.setAttribute("stroke-width", (node.edge.width == "")? NODE_LNK_WIDTH:node.edge.width);
		
		var d =
			"M" + pos1X + "," + pos1Y + " " +
			"C" + control1X + "," + control1Y + " " +
				  control2X + "," + control2Y + " " +
				  pos2X + "," + pos2Y + " " +
			"L";
		if ( node.pos == NODE_POS_RIGHT ) {
			d+= (pos2X + oView.offsetWidth + tipLen );
		} else {
			d+= (pos2X - oView.offsetWidth - tipLen );
		}
			d+= "," + pos2Y;

		oLink.setAttribute("d", d);

		return oLink
	}
	
	return null;
}

YView.prototype.setNodeLinkerStyle = function( node ) {
	if ( gBrowserDetect.browser == "Explorer" ) {
		oLink = document.getElementById(NODE_LINK_PREFIX+node.id);
		if ( oLink == null ) {
			return;
		}

		oLink.setAttribute("strokecolor", (node.edge.color == "")? "#"+NODE_LNK_COLOR:"#"+node.edge.color);
		oLink.setAttribute("strokeweight", (node.edge.width == "")? NODE_LNK_WIDTH:node.edge.width);
	} else if ( gBrowserDetect.browser == "Firefox" || gBrowserDetect.browser == "Chrome" ) {
		oLink = document.getElementById(NODE_LINK_PREFIX+node.id);
		if ( oLink == null ) {
			return;
		}
		
		oLink.setAttribute("stroke", (node.edge.color == "")? "#"+NODE_LNK_COLOR:"#"+node.edge.color);
		oLink.setAttribute("stroke-width", (node.edge.width == "")? NODE_LNK_WIDTH:node.edge.width);
	}
}

YView.prototype.getNodeHeight = function( node, pos ) {
	if ( node.childNodes.length == 0 || node.folded ) {
		oView = this.getNodeView(node);
		if ( oView ) {
			return oView.offsetHeight;
		} else {
			return 0;
		}
	}
	
	// accumulate all children's height
	var height = 0;
	var sibCnt = 0;
	for ( var i=0; i < node.childNodes.length; i++ ) {
		cnode = this.tree.getNodeById(node.childNodes[i]);
		if ( cnode.pos != pos ) continue;
		sibCnt++;
		height += this.getNodeHeight(cnode, pos);
	}
	
	height += (sibCnt - 1)*NODE_VIEW_VGAP;
	return height;
}

YView.prototype.drawChildNodes = function( node , bUpdateContent) {
	var oView = this.getNodeView(node);
	if ( oView == null ) {
		return;
	}

	var left;
	var top;

	if ( node.childNodes.length == 0 || node.folded ) {
		return;
	} else {

		var snodes = new Array(null, null);
	
		if ( node.pos == NODE_POS_ROOT ) {
			for ( var i=0; i<node.childNodes.length; i++ ) {
				var tmpNode = this.tree.getNodeById(node.childNodes[i]);
				if ( tmpNode.pos == NODE_POS_RIGHT ) {
					snodes[1] = tmpNode;
					break;
				}
			}

			for ( var i=0; i<node.childNodes.length; i++ ) {
				var tmpNode = this.tree.getNodeById(node.childNodes[i]);
				if ( tmpNode.pos == NODE_POS_LEFT ) {
					snodes[0] = tmpNode;
					break;
				}
			}
		} else if ( node.pos == NODE_POS_RIGHT ) {
			snodes[1] = this.tree.getNodeById(node.childNodes[0]);
		} else if ( node.pos == NODE_POS_LEFT ) {
			snodes[0] = this.tree.getNodeById(node.childNodes[0]);
		}
		
		for ( var i=0; i<2; i++ ) {
			var rnode = snodes[i];
			
			if ( rnode == null ) continue;
			
			var rpos = (i==0)? NODE_POS_LEFT:NODE_POS_RIGHT;
			
			var tmpNode = rnode.getSiblingHead();

			left = oView.offsetLeft + oView.offsetWidth + NODE_VIEW_HGAP;
			top = oView.offsetTop -  ( (Math.abs(this.getNodeHeight(node,rpos) - oView.offsetHeight)) >>1) - ((node.indent==0)?(oView.offsetHeight>>1):0);

			var topOffset;
			while ( tmpNode != null ) {
				var tmpView = this.getNodeView(tmpNode);
				if ( tmpView == null ) return;
				
				if ( bUpdateContent )
					this.setNodeView( tmpNode, tmpView);
				
				topOffset = (this.getNodeHeight(tmpNode,rpos) - tmpView.offsetHeight)>>1;
				if ( i == 0 ) {
					left = oView.offsetLeft - tmpView.offsetWidth - NODE_VIEW_HGAP;
				}

				tmpView.style.left = left + "px";
				tmpView.style.top = top + topOffset + "px";
					
				top += (topOffset*2) + tmpView.offsetHeight + NODE_VIEW_VGAP;
				
				this.drawNodeLinker(tmpNode);
				
				if ( !tmpNode.folded ) {
					this.drawChildNodes(tmpNode, bUpdateContent);
				}
				
				tmpNode = tmpNode.nextNode;
			}
		}

	}
}

YView.prototype.drawNode = function( node, bDrawChildren, bUpdateContent ) {	
	var oView = this.getNodeView(node);
	if ( oView == null ) {
		return;
	}
	if ( this.tree.isRootNode(node) ) {
		//var left = this.rootPosX;
		var left = this.panelD.offsetWidth>>1;
		//var top = this.rootPosY;
		var top = this.panelD.offsetHeight>>1;
		// add unit string for xhtml
		oView.style.left = (left - (oView.offsetWidth>>1)) + "px";
		oView.style.top = top + "px";
		oView.style.paddingLeft = 10 + "px";
		oView.style.paddingRight = 10 + "px";
		oView.style.backgroundColor = "";
		oView.style.border = "none";
		if ( bUpdateContent )
			this.setNodeView(node, oView);
	} else {
		if ( bUpdateContent )
			this.setNodeView(node, oView);
		this.drawNodeLinker(node);
	}

	if ( bDrawChildren ) {
		this.drawChildNodes(node, bUpdateContent);
	}

	// draw node specific appearence	
	if ( this.tree.isRootNode(node) ) {
		//oView.style.top = (oView.offsetTop + (oView.offsetHeight>>1)) + "px";
		this.drawRootShape(oView);
	} else {

	}
}

YView.prototype.setCaretPos = function( oField, iCaretPos ) {
	if (document.selection) { 
		// Set focus on the element
		oField.focus();
  
		// Create empty selection range
		var oSel = document.selection.createRange ();
  
		// Move selection start and end to 0 position
		oSel.moveStart ('character', -oField.value.length);
  
		// Move selection start and end to desired position
		oSel.moveStart ('character', iCaretPos);
		oSel.moveEnd ('character', 0);
		oSel.select ();
	} else if (oField.selectionStart || oField.selectionStart == '0') {
		oField.selectionStart = iCaretPos;
		oField.selectionEnd = iCaretPos;
		oField.focus();
	}
}

YView.prototype.startNodeEdit = function( node, org ) {
	if ( node.isLongNode() ) {
		return this.startLongNodeEdit(node, org);
	}

	if ( this.nodeEditor == undefined || this.nodeEditor == null ) {
		return false;
	}
	
	this.nodeEditor.setAttribute("nodeID", node.id);
	
	var oInput = this.nodeEditor;
	
	oInput.style.fontFamily = ( node.font.name == "" )? NODE_FONT_NAME:node.font.name;
	oInput.style.fontSize = ( node.font.size == "" )? NODE_FONT_SIZE+"px":node.font.size+"px";
	oInput.style.fontStyle = ( node.font.italic == "true" )? "italic":"normal";
	oInput.style.fontWeight = ( node.font.bold == "true" )? "bold":"normal";
	oInput.style.color = ( node.color == "" )? "#"+NODE_FONT_COLOR:"#"+node.color;
	
	var oView = this.getNodeView(node);
	var width = (node.text.length < 16 )? 120 : oView.offsetWidth + 20;
	var height = oView.offsetHeight;
	var left = oView.offsetLeft+this.panelD.offsetLeft-((node.pos == NODE_POS_LEFT)? (width-oView.offsetWidth):0);
	var top = oView.offsetTop+this.panelD.offsetTop;
	
	oInput.style.display = "inline"; // jy
	oInput.style.width = width + "px";
	oInput.style.height = height + "px";
	oInput.style.left = left + "px";
	oInput.style.top = top + "px";
	
	oInput.value = node.text;
	oInput.focus();
	if ( org == CARET_ORG_START ) {
		this.setCaretPos(oInput, 0);
	} else if ( org == CARET_ORG_END ) {
		this.setCaretPos(oInput, node.text.length);
	} else {
		oInput.select();
	}
	
	this.panelD.onmousedown = null;
	
	return true;
}

YView.prototype.stopNodeEdit = function(res) {
	if ( this.nodeEditor == undefined || this.nodeEditor == null ) {
		return null;
	}
	
	if ( res == false ) {
		this.nodeEditor.style.display = "none";
		return null;
	}

	var nodeID = this.nodeEditor.getAttribute("nodeID");
	if ( nodeID == undefined || nodeID == null || nodeID == "") {
		this.nodeEditor.style.display = "none";
		return null;
	}
	
	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) {
		this.nodeEditor.style.display = "none";
		return null;
	}
	var clone = node.clone();
	
	this.nodeEditor.style.display = "none";
	this.nodeEditor.setAttribute("nodeID", "");
	
	var oInput = this.nodeEditor;
	
	var val = F_TrimStr(oInput.value);
	if ( val == node.text ) return null;
	
	node.text = val;
	this.setNodeViewText(node, this.getNodeView(node));

	if ( node.isLongNode() ) {
		this.redrawTree(false);
	} else {
		this.drawNode(node, true, false);
	}

	return clone;
}

/*
YView.prototype.startNodeEdit = function( node, org ) {
	if ( node.isLongNode() ) {
		return this.startLongNodeEdit(node, org);
	}
	var oArea = this.getNodeViewArea(node, NODE_VIEW_TEXT);
	
	var txt = node.text;

	var width = (txt.length < 16 )? 140 : oArea.offsetWidth + 20;
	var height = oArea.offsetHeight;
	
	oArea.innerHTML = "";
	var oInput = document.createElement("input");

	var className = "nodeEdit";
	var onblur = "_M_EditEditNodeEnd('" + node.id + "\')";
	var onkeypress = "if (F_CheckKey(event,[13,27])) _M_EditEditNodeEnd('" + node.id + "\');";
	if ( gBrowserDetect.browser == "Explorer" ) {
		// append input to this div element
		var str  = "<input type='text' "
			+ "class='" + className + "' "
			+ "value='" + txt + "' "
			+ "style='width:" + width + ";height:" + height + ";' "
			+ "onblur=\"" + onblur + "\" "
			+ "onkeypress=\"" + onkeypress + "\">";

		oArea.appendChild(oInput);
		oInput.outerHTML = str;
		
		oInput = oArea.lastChild;
	} else {
		oInput.setAttribute("type", "text");
		oInput.setAttribute("value", txt);
		oInput.setAttribute("onblur", onblur);
		oInput.setAttribute("onkeypress", onkeypress);
		oInput.className = className;
		oInput.style.width = width + "px";
		oInput.style.height = height + "px";

		//oView.style.MozUserSelect = "";
		oArea.appendChild(oInput);
	}
	
	oInput.style.backgroundColor = "#FFFFFF";
	oInput.style.fontFamily = ( node.font.name == "" )? NODE_FONT_NAME:node.font.name;
	oInput.style.fontSize = ( node.font.size == "" )? NODE_FONT_SIZE+"px":node.font.size+"px";
	oInput.style.fontStyle = ( node.font.italic == "true" )? "italic":"normal";
	oInput.style.fontWeight = ( node.font.bold == "true" )? "bold":"normal";
	
	oInput.focus();
	if ( org != undefined && org == CARET_ORG_START ) {
		this.setCaretPos(oInput, 0);
	} else if ( org != undefined && org == CARET_ORG_END ) {
		this.setCaretPos(oInput, txt.length);
	} else {
		oInput.select();
	}
	
	this.panelD.onmousedown = null;
	
	return true;
}

YView.prototype.stopNodeEdit = function(nodeID) {
	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) {
		return null;
	}

	var oView = this.getNodeView(node);
	if ( oView == undefined || oView == null ) {
		return null;
	}
	
	var oArea = this.getNodeViewArea(node, NODE_VIEW_TEXT, oView);

	var oInput = oArea.firstChild;
	node.text = F_TrimStr(oInput.value);
	
	this.setNodeViewText(node, oView);
	this.drawNode(node, true, false);
	
	return node;
}
*/

YView.prototype.startLongNodeEdit = function( node, org ) {
	if ( this.longNodeEditor == undefined || this.longNodeEditor == null ) {
		return false;
	}
	
	var oInput = document.getElementById("_longNodeEditor");
	if ( oInput == undefined || oInput == null ) {
		return false;
	}
	
	this.longNodeEditor.setAttribute("nodeID", node.id);
	
	this.centerEditorView(this.longNodeEditor);

	oInput.style.fontFamily = ( node.font.name == "" )? NODE_FONT_NAME:node.font.name;
	oInput.style.fontSize = ( node.font.size == "" )? NODE_FONT_SIZE+"px":node.font.size+"px";
	oInput.style.fontStyle = ( node.font.italic == "true" )? "italic":"normal";
	oInput.style.fontWeight = ( node.font.bold == "true" )? "bold":"normal";
	
	oInput.value = node.text;
	oInput.focus();
	if ( org != undefined && org == CARET_ORG_START ) {
		this.setCaretPos(oInput, 0);
	} else if ( org != undefined && org == CARET_ORG_END ) {
		this.setCaretPos(oInput, txt.length);
	} else {
		oInput.select();
	}
	
	this.panelD.onmousedown = null;

	return true;
}

YView.prototype.stopLongNodeEdit = function(res) {
	if ( this.longNodeEditor == undefined || this.longNodeEditor == null ) {
		return null;
	}
	
	if ( res == false ) {
		this.longNodeEditor.style.display = "none";
		return null;
	}
	
	var oInput = document.getElementById("_longNodeEditor");
	if ( oInput == undefined || oInput == null ) {
		this.longNodeEditor.style.display = "none";
		return null;
	}
	
	var nodeID = this.longNodeEditor.getAttribute("nodeID");
	if ( nodeID == undefined || nodeID == null || nodeID == "") {
		this.longNodeEditor.style.display = "none";
		return null;
	}

	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) {
		this.longNodeEditor.style.display = "none";
		return null;
	}
	var clone = node.clone();
	
	this.longNodeEditor.setAttribute("nodeID", "");
	this.longNodeEditor.style.display = "none";
	
	var val = F_TrimStr(oInput.value);
	if ( val == node.text ) return null;
	
	node.text = val;
	this.setNodeViewText(node, this.getNodeView(node));

	if ( node.isLongNode() ) {
		this.redrawTree(false);
	} else {
		this.drawNode(node, true, false);
	}

	return clone;
}

YView.prototype.redrawTree = function(bUpdateContent) {  // bUpdateContent:bool
	this.drawNode(this.tree.rootNode, true, bUpdateContent);
}

YView.prototype.appendChildNode = function(node) {
	var tmpNode = this.tree.appendChild(node,"新節點");
	if ( tmpNode != null ) {
		if ( node.folded ) {
			this.toggleNode(node);
			
		}
		this.redrawTree(false);
		this.selectNode(tmpNode, false, false);
	}
	return tmpNode;
}

// 給pnode跟cnode 將它加入到現有的tree中
YView.prototype.appendChildNode_fromsocket = function( parentnode, childnode ) {
	var isappend = this.tree.appendChild_fromsocket(parentnode,childnode);
	if ( isappend ) {
		if ( parentnode.folded ) {
			this.toggleNode(parentnode);
		}
		this.redrawTree(false);
		//this.selectNode(tmpNode, false, false);
	}
	return true;
}

YView.prototype.createNode = function(parent, text, pos, MapID, NodeID ) {
	return this.tree.createNode(parent, text, pos, MapID, NodeID);
}

YView.prototype.appendSiblingNode = function( node, dir ) {
	if ( node.indent == 0 ) {
		return null;
	}
	var tmpNode = this.tree.appendSibling(node,"", dir);
	if ( tmpNode == null ) {
		return null;
	}
	//this.setNodeView(node);
	this.redrawTree(false);
	
	this.selectNode(tmpNode, false, false);
	
	return tmpNode;
}

YView.prototype.appendParentNode = function( node ) {
	if ( node.indent == 0 ) {
		return null;
	}
	
	var tmpNode = this.tree.appendParent(node, "");
	if ( tmpNode == null ) {
		return null;
	}
	
	this.drawNode(tmpNode.parentNode, true, false);
	
	this.selectNode(tmpNode, false, false);
	
	return tmpNode;
}

YView.prototype.deleteNodeView = function( node ) {
	for ( var i=node.childNodes.length-1; i>=0; i-- ) {
		var tmpNode = this.tree.getNodeById(node.childNodes[i]);
		if ( tmpNode == undefined || tmpNode == null ) {
			continue;
		}
		this.deleteNodeView(tmpNode);
	}

	var oView = document.getElementById(NODE_VIEW_PREFIX+node.id);
	var oLnk = document.getElementById(NODE_LINK_PREFIX+node.id);
	
	if ( oView != null ) {
		if ( gBrowserDetect.browser == "Explorer" ) {
			oView.removeNode(true);
		} else {
			this.panelD.removeChild(oView);
		}
	}
	
	if ( oLnk != null ) {
		if ( gBrowserDetect.browser == "Explorer" ) {
			oLnk.removeNode(true);
		} else {
			this.panelV.removeChild(oLnk);
		}
	}
}

/*
YView.prototype.deleteNode = function( node ) {
	if ( this.tree.isRootNode(node) ) {
		return false;
	}

	this.deleteNodeView(node);
	this.tree.removeNode(node);
	
	return true;
}
*/

YView.prototype.deleteNode = function( node ) {
	if ( this.tree.isRootNode(node) ) {
		return false;
	}

	this.deleteNodeView(node);
	return this.tree.detachChild(node.parentNode, node);
	
	return true;
}

YView.prototype.isSelectedNode= function(node) {
	if ( node == null )  return false;
	
	for ( var i=0; i<this.selectedNodes.length; i++ ) {
		if ( this.selectedNodes[i] == node.id ) return true;
	}
	
	return false;
}

YView.prototype.getNearestUnSelectedNode= function(node) {
	if ( node == null ) {
		return this.tree.rootNode;
	}
	
	var parentNode = node.parentNode;
	var prevNode = node.prevNode;
	var nextNode = node.nextNode;
	
	while ( parentNode && parentNode.indent != 0 ) {
		if ( !this.isSelectedNode(parentNode) ) {
			parentNode = parentNode.parentNode;
			continue;
		}
		return this.getNearestUnSelectedNode(parentNode);
	}
	
	while ( nextNode ) {
		if ( this.isSelectedNode(nextNode) ) {
			nextNode = nextNode.nextNode;
			continue;
		}
		return nextNode;
	}
	
	while ( prevNode ) {
		if ( this.isSelectedNode(prevNode) ) {
			prevNode = prevNode.prevNode;
			continue;
		}
		return prevNode;
	}
	
	return node.parentNode;
}

YView.prototype.deleteSelectedNode = function() { // 需加入判斷刪除的是否為root 若非 才可以刪除

	var arr = new Array;	
	var tmpNode = this.getLastSelectedNode();
	
	var arrdeleteid = new Array();
	if ( tmpNode == null ) return arr; 
		
	if (confirm('Are you sure to delete this node?')) {	
		var selNode = this.getNearestUnSelectedNode(tmpNode);
		
		var IsDelNodeSuccess = false; 
		var arrTop = this.getSelectedBranchTopNodes();
		//alert("here" + arrTop[0]);
		//alert(arrTop);

		if ( selNode == null ) {
			selNode = this.tree.rootNode;
			alert("You can't delete this root node");
		} else {
			// 取得所有要刪除的NodeID
			var nodeID;
			for ( var i=0; i<arrTop.length; i++ ) {
				//alert("arrTop[i]" +arrTop[i]);
				var node = this.tree.getNodeById(arrTop[i]);
				//alert(node.NodeID);
				nodeID = node.NodeID; //取得當前被刪除的NodeID;
				arrdeleteid.push(node.NodeID);
			}
			//alert(nodeID);
            
			$.ajax({
				async: false,
				url: 'update',
				type: 'POST',
				dataType: 'text',
				data: {act: 'node_del',delnodeids: arrdeleteid,NodeID:nodeID},
				error: function(res){
					alert('刪除失敗');					
				},
				success: function(res){
					alert(res);  // 刪除成功
					IsDelNodeSuccess = true;
				}
			});
		}
		
		if (IsDelNodeSuccess) {		
			for ( var i=0; i<arrTop.length; i++ ) {
				var node = this.tree.getNodeById(arrTop[i]);
				var clone = node.clone();
				if ( this.deleteNode(node) ) {
					arr.push(clone);
				}
			}

			this.selectedNodes.splice(0,this.selectedNodes.length);

			if ( arr.length > 0 ) {
				this.redrawTree(false);
			}

			this.selectNode(selNode, false, false);
		}
		socket_send_node_delete(arrdeleteid);
		return arr;
	}
}
/*
YView.prototype.deleteSelectedNode = function() {
	var delCnt = 0;

	var tmpNode = this.getLastSelectedNode();
	
	if ( tmpNode == null ) return false;
	
	var selNode = this.getNearestUnSelectedNode(tmpNode);
	if ( selNode == null ) {
		selNode = this.tree.rootNode;
	}
	
	var arrTop = this.getSelectedBranchTopNodes();

	for ( var i=0; i<arrTop.length; i++ ) {
		var node = this.tree.getNodeById(arrTop[i]);
		if ( this.deleteNode(node) ) {
			delCnt++;
		}
	}

	this.selectedNodes.splice(0,this.selectedNodes.length);

	if ( delCnt > 0 ) {
		this.redrawTree(false);
	}
	
	this.selectNode(selNode, false, false);
	
	return true;
}
*/
YView.prototype.getSelectedBranchTopNodes = function() {
	// copy selected node ids except root
	var arrTop = new Array;
	var arrSel = new Array;
	for ( var i=0; i < this.selectedNodes.length; i++ ) {
		var id = this.selectedNodes[i];
		if ( id == this.tree.rootNodeID ) {
			continue;
		}
		var node = this.tree.getNodeById(id);
		if ( node == undefined || node == null ) {
			continue;
		}
		// temporally selection marking
		node.selected = true;
		arrSel.push(id);
	}

	for ( var i=arrSel.length-1; i>=0; i-- ) {
		var id = arrSel[i];
		
		var node = this.tree.getNodeById(id);

		// find selected parentNode
		var bTop = true;
		var parent = node.parentNode;
		while ( parent ) {
			if ( parent.selected ) {
				bTop = false;
				break;
			}
			if ( parent.indent <= 1 ) {
				break;
			}
			parent = parent.parentNode;
		}
		
		if ( bTop ) {
			arrTop.push(id);
		}
	}
	
	for ( var i=arrSel.length-1; i>=0; i-- ) {
		this.tree.getNodeById(arrSel[i]).selected = false;
	}
	
	return arrTop;
}

YView.prototype.swapSibNode = function( dir ) {
	if ( this.getLastSelectedNodeID() == "" ) {
		return null;
	}
	var snode = this.getLastSelectedNode();
	if ( snode == undefined || snode == null || snode.indent == 0 ) {
		return null;
	}
	
	var cloneB = snode.clone();
	if ( snode.switchNode(dir) == null ) {
		return null;
	}
	var cloneA = snode.clone();
	
	this.drawNode( snode.parentNode, true, false);
	
	return [cloneB, cloneA];
}

YView.prototype.navigateNode = function( dir, bSelExpansion ) {
	if ( this.getLastSelectedNodeID() == "" ) {
		return;
	}
	
	var node = this.getLastSelectedNode();
	if ( node == undefined || node == null ) {
		return;
	}
	
	if ( dir == NODE_NAV_PAGEUP ) {
		this.selectNode(node.getSiblingHead(), bSelExpansion, false);
	} else if ( dir == NODE_NAV_PAGEDN ) {
		this.selectNode(node.getSiblingTail(), bSelExpansion, false);
	} else if ( dir == NODE_NAV_UP ) {
		if ( node.prevNode == null ) {
			if ( node.parentNode != null && node.parentNode.prevNode != null ) {
				if ( node.parentNode.prevNode.folded ) {
					this.selectNode(node.parentNode.prevNode, bSelExpansion, false);
					return;
				}
				var tmpNode = this.tree.getChildTail(node.parentNode.prevNode);
				if ( tmpNode != null ) {
					this.selectNode(tmpNode, bSelExpansion, false);
					if ( tmpNode.parentNode.folded ) {
						this.toggleNode( tmpNode.parentNode );
						this.redrawTree(false);
					}
				}
			}
			return;
		}
		this.selectNode(node.prevNode, bSelExpansion, false);
		
	} else if ( dir == NODE_NAV_DOWN ) {
		if ( node.nextNode == null ) {
			if ( node.parentNode != null && node.parentNode.nextNode != null ) {
				if ( node.parentNode.nextNode.folded ) {
					this.selectNode(node.parentNode.nextNode, bSelExpansion, false);
					return;
				}
				var tmpNode = this.tree.getChildHead(node.parentNode.nextNode);
				if ( tmpNode != null ) {
					this.selectNode(tmpNode, bSelExpansion, false);
					if ( tmpNode.parentNode.folded ) {
						this.toggleNode( tmpNode.parentNode );
						this.redrawTree(false);
					}
				}
			}
			return;
		}
		this.selectNode(node.nextNode, bSelExpansion, false);

	} else if ( dir == NODE_NAV_RIGHT ) {
		if ( node.pos == NODE_POS_LEFT ) {
			this.selectNode(node.parentNode, bSelExpansion, false);
		} else {
			if ( node.folded ) {
				this.toggleNode( node );
				this.redrawTree(false);
				return;
			}

			var tmpNode = this.tree.getLastSelectedChild(node, NODE_POS_RIGHT);
			if ( tmpNode == null ) {
				return;
			}

			this.selectNode(tmpNode, bSelExpansion, false);
		}
	} else if ( dir == NODE_NAV_LEFT ) {
		if ( node.pos == NODE_POS_RIGHT ) {
			this.selectNode(node.parentNode, bSelExpansion, false);
		} else {
			if ( node.folded ) {
				this.toggleNode( node );
				this.redrawTree(false);
				return;
			}

			var tmpNode = this.tree.getLastSelectedChild(node, NODE_POS_LEFT);
			if ( tmpNode == null ) {
				return;
			}

			this.selectNode(tmpNode, bSelExpansion, false);
		}
	} else {
		return;
	}
}

YView.prototype.toggleChild = function( node, bShow ) {
	var oView, oLnk;
	for ( var i=0; i<node.childNodes.length; i++ ) {
		var cnode = this.tree.getNodeById(node.childNodes[i]);
		if ( cnode == null ) {
			continue;
		}
		oView = this.getNodeView(cnode);
		oLnk = document.getElementById(NODE_LINK_PREFIX+cnode.id);

		if ( oView == null || oLnk == null ) continue;
		
		if ( bShow ) {
			oView.style.display = "";
			oLnk.style.display = "";
		} else {
			oView.style.display = "none";
			oLnk.style.display = "none";
		}
		
		if ( !cnode.folded ) {
			this.toggleChild(cnode, bShow);
		}
	}
}

YView.prototype.toggleNode = function( node, folded ) {
	var ret = false;
	if ( folded != undefined ) {
		ret = (node.folded == folded)? false:true;
		node.folded = folded;
		this.toggleChild(node, !node.folded);
	} else {
		ret = true;
		node.folded = (node.folded)? false:true;
		this.toggleChild(node, !node.folded);
	}
	
	return ret;
}

// 20120523 暫時設定為只能放一個icon 所以移除時 會經由removeAllIcon()進行
// 當雙擊圖示時 該圖示會被移除
// 註: 每次讀檔時 是按照icon1 2 3 的順序去讀取 可能與當初存入的順序不同
YView.prototype.removeIcon = function( nodeID, oImg ) {
	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) return null;
	
	var oView = this.getNodeView(node);
	var oArea = this.getNodeViewArea(node, NODE_VIEW_ICON, oView);
	var iconIdx = 0; // 設定該icon前方有幾個icon 預設0
	//var tmpview = this;

	// find image index from node position
	var tmpImg = oImg.previousSibling;
	while ( tmpImg ) {
		tmpImg = tmpImg.previousSibling;
		iconIdx++; // 去找前方有幾個icon
	}

	//DB
	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'node_iconremove', NodeID:node.NodeID, iconIdx:iconIdx}, // iconIdx 表示要刪除第N個icon 從0開始
		error: function(res){
			alert('DB Error');
			return false;
		},
		success: function(res){
			if (res == 'failed') {
				alert('db error');
				return false;
			} else {
			
			}
		}
	});
	
	var cloneB = node.clone();
	node.removeIcon(iconIdx);
	oArea.removeChild(oImg);
	
	if ( node.pos == NODE_POS_LEFT ) {
		var pView = this.getNodeView(node.parentNode);
		oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}				
	this.drawNode(node, true, false);
					
	return [cloneB, node.clone()];
}

YView.prototype.removeLastIcon = function( ) {
	var bRootSelected = false;
	var nSelCnt = this.getSelectedNodeCount();
	var nDelconCnt = 0;

	for ( var i=0; i<nSelCnt; i++ ) {
		var nodeID = this.selectedNodes[i];
		
		if ( nodeID == this.tree.rootNodeID ) {
			bRootSelected = true;
			break;
		}
	}
	
	var arr = new Array;
	for ( var i=0; i<nSelCnt; i++ ) {
		var nodeID = this.selectedNodes[i];
		
		var node = this.tree.getNodeById(nodeID);
		
		if ( node == undefined || node == null ) {
			continue;
		}
		
		var cloneB = node.clone();
		var cnt = (node.removeLastIcon())? 1:0;
		if ( cnt > 0 ) {
			var oArea = this.getNodeViewArea(node, NODE_VIEW_ICON);
			oArea.removeChild(oArea.lastChild);
			arr.push(cloneB);
			arr.push(node.clone());
		}
		
		if ( !bRootSelected && cnt > 0 ) {
			this.drawNode(node, true, false);
		}
		
		nDelconCnt += cnt;
	}
	
	if ( bRootSelected && nDelconCnt > 0 ) {
		this.drawNode(this.tree.rootNode, true, false);
	}

	return (arr.length > 0)? arr:null;
}

YView.prototype.removeAllIcon = function( ) {
	var bRootSelected = false;
	var nSelCnt = this.getSelectedNodeCount();
	var nDelconCnt = 0;

	for ( var i=0; i<nSelCnt; i++ ) {
		var nodeID = this.selectedNodes[i];
		
		if ( nodeID == this.tree.rootNodeID ) {
			bRootSelected = true;
			break;
		}
	}
	
	var arr = new Array;
	for ( var i=0; i<nSelCnt; i++ ) {
		var nodeID = this.selectedNodes[i];
		
		var node = this.tree.getNodeById(nodeID);
		
		if ( node == undefined || node == null ) {
			continue;
		}
		
		var cloneB = node.clone();
		var cnt = node.removeIcons();
		
		if ( cnt > 0 ) {
			var oArea = this.getNodeViewArea(node, NODE_VIEW_ICON);
			while (oArea.firstChild) {
				oArea.removeChild(oArea.firstChild);
			}
			arr.push(cloneB);
			arr.push(node.clone());
		}
		
		if ( !bRootSelected && cnt > 0 ) {
			this.drawNode(node, true, false);
		}
		
		nDelconCnt += cnt;
	}
	
	if ( bRootSelected && nDelconCnt > 0 ) {
		this.drawNode(this.tree.rootNode, true, false);
	}


	$.ajax({
		//async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act: 'node_iconremoveall',NodeID: node.NodeID},
		error: function(res){
			alert('error');
		},
		success: function(res){
		}
	});	
	return (arr.length > 0)? arr:null;
}

YView.prototype.appendIcon = function( iconSrc ) {
	var bRootSelected = false;
	var nodeID = this.getLastSelectedNodeID();
	
	if ( nodeID == this.tree.rootNodeID ) {
		bRootSelected = true;		
	}
		
	var node = this.tree.getNodeById(nodeID);
	
	if (node.icons.length >= 1)
	{
		alert('每一節點最多只能放一個小圖示');
		return false;
	}
	if ( node == undefined || node == null ) {
		return false;
	}
	
	for(var i in node.icons)
	{
		if (node.icons[i] == iconSrc) {
			alert('圖示已存在');
			return false;
		}
	}

	var arr = new Array;
	var cloneB = node.clone();
	
	node.appendIcon(iconSrc);
			
	arr.push(cloneB);
	arr.push(node.clone());
	
	this.appendIconImg(node, node.getIconCount()-1);
				
	if ( !bRootSelected ) {
		this.drawNode(node, true, false);
	}
	if ( bRootSelected ) {
		this.drawNode(node, true, true);
	}
		
		
	// 去資料庫更新data
	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'node_iconadd', NodeID:node.NodeID, iconSrc:iconSrc},
		error: function(res){
			alert('DB Error');
			return false;
		},
		success: function(res){
			if (res == 'failed') {
				alert('Connection Error');				
			} else {				
			}
		}
	});
	
	return (arr.length > 0)? arr:null;
}

YView.prototype.appendIconFromSocket = function( iconSrc ) {
	
}

YView.prototype.startAppendImage = function() {
	var node = this.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}
	
	if ( this.imageChooser == undefined || this.imageChooser == null ) {
		return false;
	}
	
	var oInput = document.getElementById("_imageChooser");
	if ( oInput == undefined || oInput == null ) {
		return false;
	}
	
	this.imageChooser.setAttribute("nodeID", node.id);
	
	this.centerEditorView(this.imageChooser);
	
	return true;
}

YView.prototype.stopAppendImage = function(res) {
	if ( this.imageChooser == undefined || this.imageChooser == null ) {
		return null;
	}
	
	if ( res == false ) {
		this.imageChooser.style.display = "none";
		return null;
	}
	
	var oInput = document.getElementById("_imageChooser");
	if ( oInput == undefined || oInput == null ) {
		this.imageChooser.style.display = "none";
		return null;
	}

	var nodeID = this.imageChooser.getAttribute("nodeID");
	if ( nodeID == undefined || nodeID == null || nodeID == "") {
		this.imageChooser.style.display = "none";
		return null;
	}
	
	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) {
		this.imageChooser.style.display = "none";
		return null;
	}
	var clone = node.clone();
	
	this.imageChooser.style.display = "none";
	this.imageChooser.setAttribute("nodeID", "");

	node.text = "<html><img src='" + oInput.value + "' />";
	this.setNodeViewText(node);	
	
	/*
	var oArea = this.getNodeViewArea(node, NODE_VIEW_TEXT);
	var oImg = document.createElement("img");
	oImg.setAttribute("src", F_TrimStr(oInput.value));

	oArea.appendChild(oImg);
	*/

	this.redrawTree(false);
	
	return clone;
}

YView.prototype.startAppendHyperlink = function() {
	var node = this.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}
	
	if ( this.hyperlinkChooser == undefined || this.hyperlinkChooser == null ) {
		return false;
	}
	
	var oInput = document.getElementById("_hyperlinkChooser");
	if ( oInput == undefined || oInput == null ) {
		return false;
	}
	
	this.hyperlinkChooser.setAttribute("nodeID", node.id);
	
	this.centerEditorView(this.hyperlinkChooser);

	oInput.value = node.hyperlink;
	
	return true;
}

YView.prototype.stopAppendHyperlink = function(res) {
	if ( this.hyperlinkChooser == undefined || this.hyperlinkChooser == null ) {
		return null;
	}
	
	if ( res == false ) {
		this.hyperlinkChooser.style.display = "none";
		return null;
	}
	
	var oInput = document.getElementById("_hyperlinkChooser");
	if ( oInput == undefined || oInput == null ) {
		this.hyperlinkChooser.style.display = "none";
		return null;
	}

	var nodeID = this.hyperlinkChooser.getAttribute("nodeID");
	if ( nodeID == undefined || nodeID == null || nodeID == "") {
		this.hyperlinkChooser.style.display = "none";
		return null;
	}
	
	var node = this.tree.getNodeById(nodeID);
	if ( node == undefined || node == null ) {
		this.hyperlinkChooser.style.display = "none";
		return null;
	}
	
	var clone = node.clone();
	
	this.hyperlinkChooser.style.display = "none";
	this.hyperlinkChooser.setAttribute("nodeID", "");

	node.hyperlink = F_TrimStr(oInput.value);
	this.setNodeViewHyperlink(node, this.getNodeView(node));	

	this.drawNode(node, true, false);
	
	return clone;
}

YView.prototype.startFormatColor = function(what) {
	if ( what != NODE_FORMAT_FGCOL && what != NODE_FORMAT_BGCOL && what != NODE_FORMAT_EGCOL ) {
		return false;
	}

	if ( this.getSelectedNodeCount() == 0 ) {
		return false;
	}
	
	if ( this.colorChooser == undefined || this.colorChooser == null ) {
		return false;
	}

	var oInput = document.getElementById("_colorChooser");
	if ( oInput == undefined || oInput == null ) {
		return false;
	}

	var oHid = document.getElementById("_colorTarget");
	if ( oHid == undefined || oHid == null ) {
		return false;
	}

	oHid.value = what;

	this.centerEditorView(this.colorChooser);
	
	return true;
}

YView.prototype.stopFormatColor = function(res) {
	if ( this.getSelectedNodeCount() == 0 ) {
		return null;
	}
	
	if ( res == false ) {
		this.colorChooser.style.display = "none";
		return null;
	}

	if ( this.colorChooser == undefined || this.colorChooser == null ) {
		return null;
	}
	
	var oInput = document.getElementById("_colorChooser");
	if ( oInput == undefined || oInput == null ) {
		this.colorChooser.style.display = "none";
		return null;
	}
	
	var oHid = document.getElementById("_colorTarget");
	if ( oHid == undefined || oHid == null ) {
		this.colorChooser.style.display = "none";
		return null;
	}
	
	var col = F_TrimStr(oInput.value);
	col = (F_IsHexColor(col))? col:"";
	var what = oHid.value;
	
	if ( what != NODE_FORMAT_FGCOL && what != NODE_FORMAT_BGCOL && what != NODE_FORMAT_EGCOL ) {
		this.colorChooser.style.display = "none";
		return null;
	}

	this.colorChooser.style.display = "none";
	var arr = new Array;
	for ( var i=this.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = this.tree.getNodeById(this.selectedNodes[i]);
		if ( node == undefined || node == null ) {
			continue;
		}
		switch(what) {
			case NODE_FORMAT_FGCOL:
				arr.push(node.color);
				node.color = col;
				this.setNodeViewStyle(node);
				break;
			case NODE_FORMAT_BGCOL:
				arr.push(node.bgcolor);
				node.bgcolor = col;
				this.setNodeViewStyle(node);
				break;
			case NODE_FORMAT_EGCOL:
				arr.push(node.edge.color);
				node.edge.color = col;
				this.drawNodeLinker(node);
				break;
		}
		
		arr.push(col);		
		arr.push(node.id);
	}
	
	return [what,arr];
}

YView.prototype.toggleNodeTextStyle = function(what) {
	var tmpNode = this.getLastSelectedNode();
	if ( tmpNode == null ) {
		return;
	}
	var bBool;

	if ( what == NODE_STYLE_BOLD ) {
		bBool = !(tmpNode.font.bold == "true");
	} else if ( what == NODE_STYLE_ITALIC ) {
		bBool = !(tmpNode.font.italic == "true");
	} else {
		return;
	}

	for ( var i=this.selectedNodes.length-1; i>=0; i-- ) {
		var node = this.tree.getNodeById(this.selectedNodes[i].id);

		if ( node == undefined || node == null ) {
			continue;
		}
		
		if ( what == NODE_STYLE_BOLD ) {
			node.font.bold = (bBool)?"true":"false";
		} else if ( what == NODE_STYLE_ITALIC ) {
			node.font.italic = (bBool)?"true":"false";
		}

		this.setNodeViewStyle(node);
	}
}

YView.prototype.setTree = function(tree) {  // jy	
	//this.tree = tree;
	alert(tree.nodes);
	//this.redrawTree(true);
}