///////////////////////////////////////////////////////////
var rtmpSite='163.22.34.103';
var nodeWebSite='163.22.34.103:8080';
// YMAP CONSTANT
var NODE_POS_ROOT		= 0;
var NODE_POS_LEFT		= 1;
var NODE_POS_RIGHT		= 2;

var NODE_POS_CHILD		= 3;
var NODE_POS_UP			= 4;

var NODE_SIB_PREV		= 0;
var NODE_SIB_NEXT		= 1;

var CARET_ORG_START		= 0;
var CARET_ORG_END		= 1;
var CARET_ORG_SEL		= 2;

var NODE_NAV_PAGEUP		= 0;
var NODE_NAV_PAGEDN		= 1;
var NODE_NAV_LEFT		= 2;
var NODE_NAV_UP			= 3;
var NODE_NAV_RIGHT		= 4;
var NODE_NAV_DOWN		= 5;

var NODE_VIEW_PREFIX	= "NV";
var NODE_VIEW_HGAP		= 20;
var NODE_VIEW_VGAP		= 3;
var NODE_VIEW_BGCOLOR	= "FFFFFF";
var NODE_VIEW_SELCOLOR	= "D0D0D0";

var NODE_VIEW_ICON		= 0;
var NODE_VIEW_TEXT		= 1;
var NODE_VIEW_LINK		= 2;

var NODE_FORMAT_FGCOL	= "0";
var NODE_FORMAT_BGCOL	= "1";
var NODE_FORMAT_EGCOL	= "2";

var NODE_STYLE_BOLD		= 0;
var NODE_STYLE_ITALIC	= 1;

var NODE_FONT_NAME		= "SansSerif";
var NODE_FONT_SIZE		= 12;
var NODE_FONT_COLOR		= "000000";

var NODE_LINK_PREFIX	= "LNK";
var NODE_LNK_WIDTH		= 1;
var NODE_LNK_COLOR		= "888888";

var ROOT_SHAPE_ID		= "V_ROOT";
var ROOT_SHAPE_HEIGHT	= 60;
var ROOT_SHAPE_STCOLOR	= "888888";
var ROOT_SHAPE_COLOR	= "FFFFFF";
var ROOT_SHAPE_SELCOLOR	= "D0D0D0";

var SVG_NAMESPACE		= "http://www.w3.org/2000/svg";
var SVG_RIGHTGRADIENT_ID= "V_RGRA_ID";
var SVG_LEFTGRADIENT_ID	= "V_LGRA_ID";
var SVG_UPGRADIENT_ID	= "V_UGRA_ID";
var SVG_NUTRALGRADIENT_ID= "V_NGRA_ID";

var YMAP_ICON_PATH		= "icons";
var YMAP_UIIMG_PATH		= "ui";

var YMAP_STAT_NODENAV	= 0x00000000;
var YMAP_STAT_NODEEDIT	= 0x00000001;
var YMAP_STAT_EDITLOCK	= 0x00000002;

var ACT_NODE_INSERT_C	= 10;	// [nodeClone(a)]
var ACT_NODE_INSERT_PS	= 11;	// [nodeClone(a)]
var ACT_NODE_INSERT_NS	= 12;	// [nodeClone(a)]
var ACT_NODE_INSERT_P	= 13;	// [nodeClone(a),nodeClone(b)]
var ACT_NODE_REMOVE		= 20;	// [nodeClone(b)]
var ACT_NODE_JOIN		= 21;	// [nodeClone(t),nodeClone(m)
var ACT_NODE_EDIT		= 30;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_ICON		= 31;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_HYPERLINK	= 32;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_IMAGE		= 33;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_MOVE		= 40;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_PASTE		= 50;	// [nodeClone(b),[nodeClones(a)]]
var ACT_NODE_TOGGLE		= 70;	// [folded, node.id]
var ACT_NODE_FMT_PSTYLE	= 60;	// [nodeClone(b),nodeClone(a)]
var ACT_NODE_FMT_FNAME	= 61;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_FSIZE	= 62;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_ITALIC	= 63;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_BOLD	= 64;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_FGCOL	= 65;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_BLCOL	= 66;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_BGCOL	= 67;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_EGCOL	= 68;	// [val(b),val(a),node.id]
var ACT_NODE_FMT_EGWTH	= 69;	// [val(b),val(a),node.id]

var YMAP_MODE_WEB		= 0;
var YMAP_MODE_HTA		= 1;

var YMAP_ATT_FILEPATH	= "filepath";

// Key Code
var YKEYCODE_ENTER		= 13;
var YKEYCODE_ESC		= 27;

var YKEYCODE_INSERT		= 45;
var YKEYCODE_DELETE		= 46;

var YKEYCODE_SPACE		= 32;
var YKEYCODE_PAGEUP		= 33;
var YKEYCODE_PAGEDN		= 34;
var YKEYCODE_END		= 35;
var YKEYCODE_HOME		= 36;
var YKEYCODE_LEFT		= 37;
var YKEYCODE_UP			= 38;
var YKEYCODE_RIGHT		= 39;
var YKEYCODE_DOWN		= 40;

var YKEYCODE_A			= 65;
var YKEYCODE_B			= 66;
var YKEYCODE_C			= 67;
var YKEYCODE_E			= 69;
var YKEYCODE_F			= 70;
var YKEYCODE_I			= 73;
var YKEYCODE_K			= 75;
var YKEYCODE_N			= 78;
var YKEYCODE_V			= 86;
var YKEYCODE_X			= 88;
var YKEYCODE_Y			= 89;
var YKEYCODE_Z			= 90;

var YKEYCODE_F1			= 112;
var YKEYCODE_F2			= 113;
var YKEYCODE_F3			= 114;
var YKEYCODE_F4			= 115;
var YKEYCODE_F5			= 116;
var YKEYCODE_F6			= 117;
var YKEYCODE_F7			= 118;
var YKEYCODE_F8			= 119;
var YKEYCODE_F9			= 120;
var YKEYCODE_F10		= 121;
var YKEYCODE_F11		= 122;
var YKEYCODE_F12		= 123;

var YKEYCODE_PLUS		= 107;
var YKEYCODE_MINUS		= 109;
var status =1;
///////////////////////////////////////////////////////////
// YMAP util function
function F_TrimStr(str) {
	var whitespace= " \n\r\t\f";

	for( var i= 0; i < str.length; i++ )
		if( whitespace.indexOf( str.charAt(i) ) < 0 )
			break;

	for( var j= str.length - 1; j >= i; j-- )
		if( whitespace.indexOf( str.charAt(j) ) < 0 )
			break;

	return str.substring( i,j+1 );
}

function F_IsNaturalNumber(str) {
	var numstr = F_TrimStr(str);

	if ( isNaN(numstr) || numstr.indexOf(".") >= 0 || numstr.indexOf("-") >= 0 ) return false;
	
	return true;
}

function F_CheckKey(evt, codes) {
	evt = (evt) ? evt:window.event;
	code = (evt.keyCode)? evt.keyCode:evt.charCode;
	
	for ( var i=0; i<codes.length; i++ ) {
		if ( codes[i] == code ) {
			return true;
		}
	}
	return false;
}

function F_GetMouseOffset(target, evt){
    evt = evt || window.event;

    var docPos    = F_GetPosition(target);
    var mousePos  = F_GetMouseCoords(evt);
    return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}

function F_GetMouseCoords(evt){
    if(evt.pageX || evt.pageY){
        return {x:evt.pageX, y:evt.pageY};
    }
    return {
        x:evt.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:evt.clientY + document.body.scrollTop  - document.body.clientTop
    };
}

function F_GetPosition(e){
    var left = 0;
    var top  = 0;

    while (e.offsetParent){
        left += e.offsetLeft;
        top  += e.offsetTop;
        e     = e.offsetParent;
    }

    left += e.offsetLeft;
    top  += e.offsetTop;

    return {x:left, y:top};
}

function F_RGB2Hex(red, green, blue)
{
    var decColor = red + 256 * green + 65536 * blue;
    var clr = decColor.toString(16);
	for(var i =clr.length;i<6;i++){
		clr = "0"+clr;
	}
	return clr;
}

function F_BlendHexColor(a,b) {
	if ( !F_IsHexColor(a) || !F_IsHexColor(b) ) return "888888";
	
	var aRGB = new Array;
	var bRGB = new Array;
	for ( var i=0; i<3; i++ ) {
		aRGB[i] = eval("0X"+a.substring(i*2, i*2+2));
		bRGB[i] = eval("0X"+b.substring(i*2, i*2+2));
	}
	
	return F_RGB2Hex(
		parseInt( (3*aRGB[2] + bRGB[2])/4, 10),
		parseInt( (3*aRGB[1] + bRGB[1])/4, 10),
		parseInt( (3*aRGB[0] + bRGB[0])/4, 10)
	);
}

function F_IsHexColor(val)
{
    return (/^([A-F0-9]{6})$/i.test(val));
}

///////////////////////////////////////////////////////////
// YMAP Menu from XulMenu

function YMenu(id) {
	this.type = "horizontal";
	this.position = {
		"level1": { "top": 0, "left": 0},
		"levelX": { "top": 0, "left": 0}
	}
	this.zIndex = {
		"visible": 500,
		"hidden": 200
	}

	// Browser detection
	this.browser = {
		"ie": Boolean(document.body.currentStyle)
	};

    // Initialize the menu
	this.init = function() {
		if (!document.getElementById(this.id)) alert("Element '"+ this.id +"' does not exist in this document. YMenu cannot be initialized.");
		if (this.type != "horizontal" && this.type != "vertical") { return alert("YMenu.init() failed. Unknown menu type: '"+this.type+"'"); }
		//document.onmousedown = click;
		this.parse(document.getElementById(this.id).childNodes, this.tree, this.id);
	}

	// Parse menu structure, create events, position elements 只能用在IE上嗎?
	this.parse = function(nodes, tree, id) {
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].nodeType != 1) { continue };
			switch (nodes[i].className) {
				case "menu":
					nodes[i].id = id + "-" + tree.length;
					tree.push(new Array());
					nodes[i].onmouseover = menuOver;
					nodes[i].onclick = menuClick;
					break;
				case "context":
					nodes[i].id = id + "-" + tree.length;
					tree.push(new Array());
					nodes[i].style.display = "none";
					nodes[i].onmouseover = menuOver;
					nodes[i].onclick = menuClick;
					self.conID = nodes[i].id;
					break;
				case "item":
					nodes[i].id = id + "-" + tree.length;
					tree.push(new Array());
					nodes[i].onmouseover = itemOver;
					nodes[i].onmouseout = itemOut;
					nodes[i].onclick = itemClick;
					break;
				case "button":
					nodes[i].onmouseover = buttonOver;
					nodes[i].onmouseout = buttonOut;
					nodes[i].onclick = buttonClick;
					break;				
				case "section":
					nodes[i].id = id + "-" + (tree.length - 1) + "-section";
					var box1 = document.getElementById(id + "-" + (tree.length - 1));
					var box2 = document.getElementById(nodes[i].id);
					var el = new Element(box1.id);
					if (el.level == 1) {
						if (this.type == "horizontal") {
							box2.style.top = (box1.offsetTop + box1.offsetHeight + this.position.level1.top) + "px";
							box2.style.left = (box1.offsetLeft + this.position.level1.left) + "px";
						} else if (this.type == "vertical") {
							box2.style.top = (box1.offsetTop + this.position.level1.top) + "px";
							box2.style.left = (box1.offsetLeft + box1.offsetWidth + this.position.level1.left) + "px";
						}
					} else {
						box2.style.top = (box1.offsetTop + this.position.levelX.top) + "px";
						box2.style.left = (box1.offsetLeft + box1.offsetWidth + this.position.levelX.left) + "px";
					}
					break;
			}
			if (nodes[i].childNodes) {
				if (nodes[i].className == "section") {
					this.parse(nodes[i].childNodes, tree[tree.length - 1], id + "-" + (tree.length - 1));
				} else {
					this.parse(nodes[i].childNodes, tree, id);
				}
			}
		}
	}

	// Hide all sections
	this.hideAll = function() {
		for (var i = this.visible.length - 1; i >= 0; i--) {
			this.hide(this.visible[i]);
		}
	}

	// Hide higher or equal levels
	this.hideHigherOrEqualLevels = function(n) {
		for (var i = this.visible.length - 1; i >= 0; i--) {
			var el = new Element(this.visible[i]);
			if (el.level >= n) {
				this.hide(el.id);
			} else {
				return;
			}
		}
	}

	// Hide a section
	this.hide = function(id) {
		var el = new Element(id);
		document.getElementById(id).className = (el.level == 1 ? "menu" : "item");
		document.getElementById(id + "-section").style.visibility = "hidden";
		document.getElementById(id + "-section").style.zIndex = this.zIndex.hidden;
		if (this.visible.contains(id)) {
			if (this.visible.getLast() == id) {
				this.visible.pop();
			} else {
				throw "YMenu.hide("+id+") failed, trying to hide element that is not deepest visible element";
			}
		} else {
			throw "YMenu.hide("+id+") failed, cannot hide element that is not visible";
		}
	}

	// Show a section
	this.show = function(id) {
		var el = new Element(id);
		document.getElementById(id).className = (el.level == 1 ? "menu-active" : "item-active");
		document.getElementById(id + "-section").style.visibility = "visible";
		document.getElementById(id + "-section").style.zIndex = this.zIndex.visible;
		this.visible.push(id);
	}
    
	this.showContextMenu = function(e) {
		if ( self.conID == "" ) return;
    	
		var el = document.getElementById(self.conID + "-section");

		el.style.left = e.clientX + "px";
		el.style.top = e.clientY + "px";
		el.style.zIndex = this.zIndex.visible;
		el.style.display="inline";
		el.style.visibility="visible";
		this.visible.push(self.conID);
	}
	
	this.isContextMenuPopuped = function() {
		if ( self.conID == "" ) return false;
		
		var el = document.getElementById(self.conID + "-section");
		
		return ( el.style.visibility == "visible" );
	}

	// event, document.onmousedown
	function click(e) {
		var el;
		if (e) {
			el = e.target.tagName ? e.target : e.target.parentNode;
		} else {
			el = window.event.srcElement;
			if (el.parentNode && /item/.test(el.parentNode.className)) {
				el = el.parentNode;
			}
		}
		if (!self.visible.length) { return };
		if (!el.onclick) { self.hideAll(); }
	}
    
	// event, menu.onmouseover
	function menuOver() {
		if (!self.visible.length) { return; }
		if (self.visible.contains(this.id)) { return };
		self.hideAll();
		var el = new Element(this.id);
		if (el.hasChilds()) {
			self.show(this.id);
		}
	}

	// event, menu.onclick
	function menuClick() {
		this.blur();
		if (self.visible.length) {
			self.hideAll();
		} else {
			var el = new Element(this.id);
			if (el.hasChilds()) {
				self.show(this.id);
			}
		}
	}

	// event, item.onmouseover
	function itemOver() {
		var el = new Element(this.id);
		document.getElementById(this.id).className = "item-active";
		self.hideHigherOrEqualLevels(el.level);
		if (el.hasChilds()) {
			self.show(this.id);
		}
	}

	// event, item.onmouseout
	function itemOut() {
		var el = new Element(this.id);
		if (!el.hasChilds()) {
			document.getElementById(this.id).className = "item";
		}
	}

	// event, item.onclick
	function itemClick() {
		this.blur();
		var el = new Element(this.id);
		self.hideHigherOrEqualLevels(el.level);
		if (el.hasChilds()) {
			self.show(this.id);
		}
		self.hideAll();
	}
	
	function buttonOver() {
		this.className="button-active";
	}

	function buttonOut() {
		this.className="button";
	}
	
	function buttonClick() {
		self.hideAll();
	}
    
	function Element(id) {
		// Get Level of given id
		// Examples: menu-1 (1 level), menu-1-4 (2 level)
		this.getLevel = function() {
			var s = this.id.substr(this.menu.id.length);
			return s.substrCount("-");
		}

		// Check whether an element has a sub-section
		this.hasChilds = function() {
			return Boolean(document.getElementById(this.id + "-section"));
		}

		if (!id) { throw "YMenu.Element(id) failed, id cannot be empty"; }
		this.menu = self;
		this.id = id;
		this.level = this.getLevel();
	}

	this.id = id;
	var self = this;
	this.conID = "";

	this.tree = new Array(); // Multidimensional array, structure of the menu
	this.visible = new Array(); // Example: Array("menu-0", "menu-0-4", ...), succession is important !
}

// Check whether array contains given string
if (typeof Array.prototype.contains == "undefined") {
	Array.prototype.contains = function(s) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === s) { return true; }
		}
		return false;
	}
}

// Get the last element from the array
if (typeof Array.prototype.getLast == "undefined") {
	Array.prototype.getLast = function() {
		return this[this.length-1];
	}
}

// Counts the number of substring occurrences
if (typeof String.prototype.substrCount == "undefined") {
	String.prototype.substrCount = function(s) {
		return this.split(s).length - 1;
	}
}

///////////////////////////////////////////////////////////
// YMAP BrowserDetect object from http://www.quirksmode.org/js/detect.html

var gBrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{	string: navigator.userAgent,	subString: "Chrome",	identity: "Chrome"		},
		{ 	string: navigator.userAgent,	subString: "OmniWeb",	versionSearch: "OmniWeb/",		identity: "OmniWeb"		},
		{	string: navigator.vendor,		subString: "Apple",		identity: "Safari",				versionSearch: "Version"		},
		{	prop: window.opera,				identity: "Opera"		},
		{	string: navigator.vendor,		subString: "iCab",		identity: "iCab"		},
		{	string: navigator.vendor,		subString: "KDE",		identity: "Konqueror"		},
		{	string: navigator.userAgent,	subString: "Firefox",	identity: "Firefox"		},
		{	string: navigator.vendor,		subString: "Camino",	identity: "Camino"		},
		{	// for newer Netscapes (6+)
			string: navigator.userAgent,	subString: "Netscape",	identity: "Netscape"		},
		{	string: navigator.userAgent,	subString: "MSIE",		identity: "Explorer",			versionSearch: "MSIE"		},
		{	string: navigator.userAgent,	subString: "Gecko",		identity: "Mozilla",			versionSearch: "rv"		},
		{	// for older Netscapes (4-)
			string: navigator.userAgent,	subString: "Mozilla",	identity: "Netscape",			versionSearch: "Mozilla"		}
	],
	dataOS : [
		{	string: navigator.platform,		subString: "Win",		identity: "Windows"		},
		{	string: navigator.platform,		subString: "Mac",		identity: "Mac"		},
		{	string: navigator.userAgent,	subString: "iPhone",	identity: "iPhone/iPod"	    },
		{	string: navigator.platform,		subString: "Linux",		identity: "Linux"		}
	]

};
gBrowserDetect.init();

///////////////////////////////////////////////////////////
// YHistory, YAction

YHistory.prototype				= new Object();
YHistory.prototype.constructor	= YHistory;
YHistory.superclass				= Object.prototype;

function YHistory(view, max) {
	this.view		= view;
	this.max		= max;
	this.actions	= new Array;
	this.idx		= -1;
	this.pos		= -1;
}

YHistory.prototype.isMapModified = function() {
	return ( this.idx !=  this.pos );
}

YHistory.prototype.clear = function() {
	for ( var i=this.actions.length-1; i>=0; i-- ) {
		this.drop(i);
	}
	this.actions.splice(0, this.actions.length);
	this.idx = -1;
	this.pos = -1;
}

YHistory.prototype.snapshot = function() {
	this.pos = this.idx;
}

YHistory.prototype.drop = function(idx) {
	if ( idx < 0 || idx >= this.actions.length ) {
		return;
	}
	
	var action = this.actions[idx];
	var i, j;
	if ( action.type == ACT_NODE_INSERT_C || action.type == ACT_NODE_INSERT_PS || action.type == ACT_NODE_INSERT_NS ) {
		for (i=0; i<action.arr.length; i++ ) {
			var node = this.view.tree.getNodeById(action.arr[i].id);
			if ( node == undefined || node == null ) continue;
			this.view.tree.removeDetachedNode(node);
		}
	} else if ( action.type == ACT_NODE_INSERT_P ) {
		for (i=0; i<action.arr.length; i+=2 ) {
			var node = this.view.tree.getNodeById(action.arr[i].id);
			if ( node == undefined || node == null ) continue;
			this.view.tree.removeDetachedNode(node);
		}
	} else if ( action.type == ACT_NODE_PASTE ) {
		for (i=0; i<action.arr.length; i+=2 ) {
			arrTopClones = action.arr[i+1];
			for (j=arrTopClones.length - 1; j>=0; j--) {
				var node = this.view.tree.getNodeById(arrTopClones[j].id);
				if ( node == undefined || node == null ) continue;
				this.view.tree.removeDetachedNode(node);
			}
		}
	} else if ( action.type == ACT_NODE_JOIN ) {
		for (i=1; i<action.arr.length; i++ ) {
			var node = this.view.tree.getNodeById(action.arr[i].id);
			if ( node == undefined || node == null ) continue;
			this.view.tree.removeDetachedNode(node);
		}
	}
}

YHistory.prototype.push = function (type, arr) {
	if ( arr.length == 0 ) return false;

	for ( var i=this.actions.length-1; i>this.idx; i-- ) {
		this.drop(i);
		this.actions.splice(i, 1);
	}
	
	if ( this.max != 0 && this.actions.length >= this.max ) {
		this.drop(0);
		this.actions.splice(0, 1);
		this.idx--;
	}
	
	var action = new YAction(type, arr);
	this.actions.push(action);
	this.idx++;
	
	var curDateTime	= new Date();
	var strDateTime = curDateTime.getTime();
	
	switch(type) {
		case ACT_NODE_EDIT:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_ICON:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var node = this.view.tree.getNodeById(cloneB.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_HYPERLINK:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var node = this.view.tree.getNodeById(cloneB.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_IMAGE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_MOVE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_TOGGLE:
			for (i=0; i<action.arr.length; i+=2) {
				var val = !(action.arr[i]);
				var node = this.view.tree.getNodeById(action.arr[i+1]);
				if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_FMT_PSTYLE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var node = this.view.tree.getNodeById(cloneB.id);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_FMT_FNAME:
		case ACT_NODE_FMT_FSIZE:
		case ACT_NODE_FMT_ITALIC:
		case ACT_NODE_FMT_BOLD:
		case ACT_NODE_FMT_FGCOL:
		case ACT_NODE_FMT_BLCOL:
		case ACT_NODE_FMT_BGCOL:
		case ACT_NODE_FMT_EGCOL:
		case ACT_NODE_FMT_EGWTH:
			for (i=0; i<action.arr.length; i+=3) {
				var nodeID = action.arr[i+2];
				var node = this.view.tree.getNodeById(nodeID);
				if ( node == undefined || node == null ) continue;
				
				node.Modified = strDateTime;
			}
			break;
		case ACT_NODE_JOIN:
			var clone = action.arr[0];
			var node = this.view.tree.getNodeById(clone.id);
			if ( node ) {
				node.Modified = strDateTime;
			}
			break;
	}

	return true;
}

YHistory.prototype.undo = function () {
	if ( this.idx < 0 || this.idx >= this.actions.length ) {
		return false;
	}

	var action = this.actions[this.idx];
	var i,j;

	switch(action.type) {
		case ACT_NODE_INSERT_C:
		case ACT_NODE_INSERT_PS:
		case ACT_NODE_INSERT_NS:
			var parentNode = null;
			var prevNode = null;
			var nextNode = null;
			
			this.view.deSelectNodes();
			for (i=0; i<action.arr.length; i++) {
				var clone = action.arr[i];
				var node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				parentNode	= node.parentNode;
				prevNode	= node.prevNode;
				nextNode	= node.nextNode;

				this.view.deleteNode(node);
			}
			this.view.redrawTree(false);
			if ( action.type == ACT_NODE_INSERT_C && parentNode ) {
				this.view.selectNode(parentNode, false, false);
			} else if ( action.type == ACT_NODE_INSERT_PS && nextNode ) {
				this.view.selectNode(nextNode, false, false);
			} else if ( action.type == ACT_NODE_INSERT_NS && prevNode ) {
				this.view.selectNode(prevNode, false, false);
			} else {
				this.view.selectNode(parentNode, false, false);
			}
			break;
		case ACT_NODE_INSERT_P:
			this.view.deSelectNodes();
			var selNode = null;
			for (i=0; i<action.arr.length; i+=2) {
				var nodeP = this.view.tree.getNodeById(action.arr[i].id);
				var nodeC = this.view.tree.getNodeById(action.arr[i+1].id);
				
				if ( nodeP == undefined || nodeP == null || nodeC == undefined || nodeC == null ) continue;
				
				this.view.deleteNode(nodeP);
				this.view.tree.detachChild(nodeP, nodeC);
				this.view.tree.revertNodeHierarchy(nodeC, action.arr[i+1]);
				this.view.tree.attachChild(nodeC.parentNode, nodeC);
				
				selNode = nodeC;
			}
			this.view.redrawTree(false);
			this.view.selectNode(selNode, false, false);
			break;
		case ACT_NODE_REMOVE:
			for(i=action.arr.length-1; i>=0; i--) {
				var clone = action.arr[i];
				var node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeHierarchy(node, clone);
				this.view.tree.attachChild(node.parentNode, node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_JOIN:
			var clone = action.arr[0];
			var node = this.view.tree.getNodeById(clone.id);
			if ( node ) {
				node.text = clone.text;
				this.view.setNodeViewText(node);
			}
			for(i=action.arr.length-1; i>=1; i--) {
				clone = action.arr[i];
				node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeHierarchy(node, clone);
				this.view.tree.attachChild(node.parentNode, node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_EDIT:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.text = cloneB.text;
				this.view.setNodeViewText(node, this.view.getNodeView(node));
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_ICON:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var node = this.view.tree.getNodeById(cloneB.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeContent(node, cloneB);
				this.view.setNodeViewIcon(node);
				this.view.drawNode(node, true, false);
			}
			break;
		case ACT_NODE_HYPERLINK:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.hyperlink = cloneB.hyperlink;
				this.view.setNodeViewHyperlink(node);
				this.view.drawNode(node, true, false);
			}
			break;
		case ACT_NODE_IMAGE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.text = cloneB.text;
				this.view.setNodeViewText(node, this.view.getNodeView(node));
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_MOVE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.detachChild(node.parentNode, node);
				this.view.tree.revertNodeHierarchy(node, cloneB);
				this.view.tree.attachChild(node.parentNode, node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_PASTE:
			this.view.deSelectNodes();
			for (i=0; i<action.arr.length; i+=2) {
				var node = this.view.tree.getNodeById(action.arr[i].id);
				if ( node == undefined || node == null ) continue;

				var arrTopClones = action.arr[i+1];
				for (j=arrTopClones.length - 1; j>=0; j--) {
					var cnode = this.view.tree.getNodeById(arrTopClones[j].id);
					if ( cnode == undefined || cnode == null ) continue;
					
					this.view.deleteNode(cnode);
				}
				this.view.selectNode(node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_TOGGLE:
			for (i=0; i<action.arr.length; i+=2) {
				var val = !(action.arr[i]);
				var node = this.view.tree.getNodeById(action.arr[i+1]);
			//for (i=action.arr.length-1; i>=0; i-=2) {
			//	var val = !(action.arr[i-1]);
			//	var node = this.view.tree.getNodeById(action.arr[i]);
				if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
				
				this.view.toggleNode(node,val);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_FMT_PSTYLE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var node = this.view.tree.getNodeById(cloneB.id);
				
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeAttribute(node, cloneB);
				this.view.setNodeViewStyle(node);
			}
			this.view.redrawTree(false);
			this.view.refreshSelectedNodes();
			break;
		case ACT_NODE_FMT_FNAME:
		case ACT_NODE_FMT_FSIZE:
		case ACT_NODE_FMT_ITALIC:
		case ACT_NODE_FMT_BOLD:
		case ACT_NODE_FMT_FGCOL:
		case ACT_NODE_FMT_BLCOL:
		case ACT_NODE_FMT_BGCOL:
		case ACT_NODE_FMT_EGCOL:
		case ACT_NODE_FMT_EGWTH:
			var bRedraw = false;
			var bRefreshSelectedNode = false;
			for (i=0; i<action.arr.length; i+=3) {
				var valB = action.arr[i];
				var nodeID = action.arr[i+2];
				var node = this.view.tree.getNodeById(nodeID);
				
				if ( node == undefined || node == null ) continue;
				
				if ( action.type == ACT_NODE_FMT_FNAME ) {
					node.font.name = valB;
				} else if ( action.type == ACT_NODE_FMT_FSIZE ) {
					node.font.size = valB;
					bRedraw = true;
				} else if ( action.type == ACT_NODE_FMT_ITALIC ) {
					node.font.italic = valB;
				} else if ( action.type == ACT_NODE_FMT_BOLD ) {
					node.font.bold = valB;
				} else if ( action.type == ACT_NODE_FMT_FGCOL || action.type == ACT_NODE_FMT_BLCOL ) {
					node.color = valB;
				} else if ( action.type == ACT_NODE_FMT_BGCOL ) {
					node.bgcolor = valB;
				} else if ( action.type == ACT_NODE_FMT_EGCOL ) {
					node.edge.color = valB;
				} else if ( action.type == ACT_NODE_FMT_EGWTH ) {
					node.edge.width = valB;
				} else {
					continue;
				}
				
				if ( action.type == ACT_NODE_FMT_EGCOL || action.type == ACT_NODE_FMT_EGWTH ) {
					this.view.setNodeLinkerStyle(node);
				} else {
					this.view.setNodeViewStyle(node);
					bRefreshSelectedNode = true;
				}
			}
			if ( bRedraw == true ) this.view.redrawTree(false);
			if ( bRefreshSelectedNode == true )this.view.refreshSelectedNodes();
			break;
	}
	
	this.idx--;
	
	return true;
}

YHistory.prototype.redo = function () {
	if ( this.idx < -1 || this.idx >= (this.actions.length-1) ) {
		return false;
	}

	var action = this.actions[this.idx+1];
	var i;

	switch(action.type) {
		case ACT_NODE_INSERT_C:
		case ACT_NODE_INSERT_PS:
		case ACT_NODE_INSERT_NS:
			for (i=0; i<action.arr.length; i++) {
				var clone = action.arr[i];
				var node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeHierarchy(node, clone);
				this.view.tree.attachChild(node.parentNode, node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_INSERT_P:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneP = action.arr[i];
				var nodeP = this.view.tree.getNodeById(action.arr[i].id);
				var nodeC = this.view.tree.getNodeById(action.arr[i+1].id);
				
				if ( nodeP == undefined || nodeP == null || nodeC == undefined || nodeC == null ) continue;

				if ( cloneP.parentId != nodeC.parentNode.id || cloneP.childNodes.length != 1 || cloneP.childNodes[0] != nodeC.id ) continue;
				
				this.view.tree.detachChild(nodeC.parentNode, nodeC);
				this.view.tree.revertNodeHierarchy(nodeP, cloneP, true);
				this.view.tree.attachChild(nodeP.parentNode, nodeP);
				nodeC.parentNode = nodeP;
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_REMOVE:
			this.view.deSelectNodes();
			for(i=0; i<action.arr.length; i++) {
				var clone = action.arr[i];
				var node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.selectNode(node, true, false);
			}
			this.view.deleteSelectedNode();
			break;
		case ACT_NODE_JOIN:
			this.view.deSelectNodes();
			var clone;
			var node;
			var str = "";
			for(i=1; i<action.arr.length; i++) {
				clone = action.arr[i];
				node = this.view.tree.getNodeById(clone.id);
				if ( node == undefined || node == null ) continue;
				
				str += "\n" + node.text;
				
				this.view.deleteNode(node);
			}
			clone = action.arr[0];
			node = this.view.tree.getNodeById(clone.id);
			if ( node ) {
				node.text = clone.text + str;
				this.view.setNodeViewText(node);
				this.view.selectNode(node, false, false);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_EDIT:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.text = cloneA.text;
				this.view.setNodeViewText(node, this.view.getNodeView(node));
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_ICON:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeContent(node, cloneA);
				this.view.setNodeViewIcon(node);
				this.view.drawNode(node, true, false);
			}
			break;
		case ACT_NODE_HYPERLINK:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.hyperlink = cloneA.hyperlink;
				this.view.setNodeViewHyperlink(node);
				this.view.drawNode(node, true, false);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_IMAGE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				node.text = cloneA.text;
				this.view.setNodeViewText(node, this.view.getNodeView(node));
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_MOVE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneB = action.arr[i];
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.detachChild(node.parentNode, node);
				this.view.tree.revertNodeHierarchy(node, cloneA);
				this.view.tree.attachChild(node.parentNode, node);
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_PASTE:
			for (i=0; i<action.arr.length; i+=2) {
				var node = this.view.tree.getNodeById(action.arr[i].id);
				if ( node == undefined || node == null ) continue;

				var arrTopClones = action.arr[i+1];
				for (j=0; j<arrTopClones.length; j++) {
					var cnode = this.view.tree.getNodeById(arrTopClones[j].id);
					if ( cnode == undefined || cnode == null ) continue;
					
					this.view.tree.revertNodeHierarchy(cnode, arrTopClones[j]);
					this.view.tree.attachChild(node, cnode);
				}
			}
			this.view.redrawTree(false);
			break;
		case ACT_NODE_TOGGLE:
			//for (i=0; i<action.arr.length; i+=2) {
			for (i=action.arr.length-1; i>=0; i-=2) {
				var val = action.arr[i-1];
				var node = this.view.tree.getNodeById(action.arr[i]);
				if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
				
				this.view.toggleNode(node,val);
			}
			this.view.redrawTree(false);
		case ACT_NODE_FMT_PSTYLE:
			for (i=0; i<action.arr.length; i+=2) {
				var cloneA = action.arr[i+1];
				var node = this.view.tree.getNodeById(cloneA.id);
				
				if ( node == undefined || node == null ) continue;
				
				this.view.tree.revertNodeAttribute(node, cloneA);
				this.view.setNodeViewStyle(node);
			}
			this.view.redrawTree(false);
			this.view.refreshSelectedNodes();
		case ACT_NODE_FMT_FNAME:
		case ACT_NODE_FMT_FSIZE:
		case ACT_NODE_FMT_ITALIC:
		case ACT_NODE_FMT_BOLD:
		case ACT_NODE_FMT_FGCOL:
		case ACT_NODE_FMT_BLCOL:
		case ACT_NODE_FMT_BGCOL:
		case ACT_NODE_FMT_EGCOL:
		case ACT_NODE_FMT_EGWTH:
			var bRedraw = false;
			var bRefreshSelectedNode = false;
			for (i=0; i<action.arr.length; i+=3) {
				var valA = action.arr[i+1];
				var nodeID = action.arr[i+2];
				var node = this.view.tree.getNodeById(nodeID);
				
				if ( node == undefined || node == null ) continue;
				
				if ( action.type == ACT_NODE_FMT_FNAME ) {
					node.font.name = valA;
				} else if ( action.type == ACT_NODE_FMT_FSIZE ) {
					node.font.size = valA;
					bRedraw = true;
				} else if ( action.type == ACT_NODE_FMT_ITALIC ) {
					node.font.italic = valA;
				} else if ( action.type == ACT_NODE_FMT_BOLD ) {
					node.font.bold = valA;
				} else if ( action.type == ACT_NODE_FMT_FGCOL || action.type == ACT_NODE_FMT_BLCOL ) {
					node.color = valA;
				} else if ( action.type == ACT_NODE_FMT_BGCOL ) {
					node.bgcolor = valA;
				} else if ( action.type == ACT_NODE_FMT_EGCOL ) {
					node.edge.color = valA;
				} else if ( action.type == ACT_NODE_FMT_EGWTH ) {
					node.edge.width = valA;
				} else {
					continue;
				}
				
				if ( action.type == ACT_NODE_FMT_EGCOL || action.type == ACT_NODE_FMT_EGWTH ) {
					this.view.setNodeLinkerStyle(node);
				} else {
					this.view.setNodeViewStyle(node);
					bRefreshSelectedNode = true;
				}
			}
			if ( bRedraw == true ) this.view.redrawTree(false);
			if ( bRefreshSelectedNode == true )this.view.refreshSelectedNodes();
			break;
	}
	
	this.idx++;
	
	return true;
}

YAction.prototype				= new Object();
YAction.prototype.constructor	= YAction;
YAction.superclass				= Object.prototype;

function YAction(type, arr) {
	this.type		= type;
	this.arr		= new Array;
	
	for ( var i=0; i<arr.length; i++ ) {
		this.arr.push(arr[i]);
	}
}

///////////////////////////////////////////////////////////
// YMap Application
// Require : YTree.js, YView.js

YApp.prototype				= new Object();
YApp.prototype.constructor	= YApp;
YApp.superclass				= Object.prototype;

var gYApp	= null;

function YApp(view) {
	this.view				= view;
	this.menu				= null;
	
	this.mapStat			= YMAP_STAT_NODENAV;
	this.mapMode			= YMAP_MODE_WEB;
	
	// hold custom attributes for user data
	// eg. attributes["userid"] = "yeonisalive"
	this.attributes			= new Array;

	// dragging object status
	this.dragObject			= null;
	this.dragPos			= 0;
	this.dragOldLeft		= 0;
	this.dragOldTop			= 0;
	this.dragXOff			= 0;
	this.dragYOff			= 0;
	this.mouseOffset		= null;
	
	// node clipboard (array of clone)
	this.clones				= new Array;
	// used for copy & paste format ( clone of node )
	this.formatter			= null;
	
	// history
	this.history			= new YHistory(view,100);
	
	if (logplay) {
		document.onmousemove	= null;
		document.onmouseup		= null;
		document.onkeydown		= null;
	} else {
		document.onmousemove	= EVT_MouseMove;
		document.onmouseup		= EVT_MouseUp;
		document.onkeydown		= EVT_KeyPress;
	}
	
	document.oncontextmenu	= function () {return false;}  // 滑鼠右鍵失效
	
	gYApp 					= this;
	
	// Firefox ENTER key head-ache :(
	// Firefox ENTER key will produce unexpected another key event. I guess so...
	this.keyEnterHit		= 0;
	
	if ( gBrowserDetect.browser == "Explorer" ) {
		view.panelD.ondragstart = function() { return false; }
		view.panelD.onselectstart = function() { return (gYApp.isStatSet(YMAP_STAT_NODEEDIT))? true:false; }
	}
	
	view.panelD.onclick = function() {
		if ( gYApp.menu ) gYApp.menu.hideAll();
		if ( !gYApp.isStatSet(YMAP_STAT_NODEEDIT) && !logplay) EVT_MakeDraggable(view.panelD);
	}
}

YApp.prototype.getView = function () {
	return this.view;
}

YApp.prototype.createMenu = function (menuId, bReplace) {
	if ( this.menu && !bReplace ) return;

	if ( this.menu && bReplace ) {
		delete this.menu;
		this.menu = null;
	}
	
	this.menu = new YMenu(menuId);
	this.menu.init();
}

YApp.prototype.setStat = function (flag) {
	this.mapStat |= flag;
}

YApp.prototype.clearStat = function (flag) {
	this.mapStat &= ~(flag);
}

YApp.prototype.isStatSet = function (flag) {
	return (this.mapStat & flag);
}

YApp.prototype.setMapMode = function (mode) {
	this.mapMode = mode;
}

YApp.prototype.getMapMode = function (mode) {
	return this.mapMode;
}

YApp.prototype.setAttribute = function(key, val) {
	this.attributes[key] = val;
}

YApp.prototype.getAttribute = function(key) {
	if ( this.attributes[key] == undefined || this.attributes[key] == null ) {
		return null;
	}
	
	return this.attributes[key];
}

YApp.prototype.removeAttribute = function(key) {
	if ( this.attributes[key] == undefined || this.attributes[key] == null ) {
		return null;
	}
	
	val = this.attributes[key];
	delete this.attributes[key];
	
	return val;
}

///////////////////////////////////////////////////////////
// YMap event handler

function EVT_MouseMove(evt){
	evt = evt || window.event;
	var mousePos = F_GetMouseCoords(evt);
    
	var view = gYApp.getView();

	if(gYApp.dragObject && !gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) {
		if ( gYApp.dragObject.getAttribute("nodeID") && view.getSelectedNodeCount() > 1 ) return false;
		gYApp.dragObject.style.top	= (mousePos.y - gYApp.mouseOffset.y + gYApp.dragYOff)+"px";
		gYApp.dragObject.style.left	= (mousePos.x - gYApp.mouseOffset.x + gYApp.dragXOff)+"px";
	}

	if ( gYApp.dragObject ) {
		view.panelD.style.cursor = "move";
	}

	return false;
}

function EVT_MouseUp(evt){	
	evt = evt || window.event;
	
	var view = gYApp.getView();
	
	if ( gYApp.dragObject != null && gYApp.dragObject.getAttribute("nodeID") ) {
		var nodeID = gYApp.dragObject.getAttribute("nodeID");
		gYApp.dragObject.style.left	= gYApp.dragOldLeft + "px";
		gYApp.dragObject.style.top	= gYApp.dragOldTop + "px";

		gYApp.dragObject.style.zIndex = 10;
		
		view.hideNodeSelector();
		view.selectNode(nodeID, false, false);

	}
	
	gYApp.dragObject = null;
	view.panelD.style.cursor = "default";
    
	return false;
}

function EVT_NodeMouseUp(evt,nodeID) {	
	evt = evt || window.event;
	var view = gYApp.getView();
		
	if ( gYApp.dragObject != null && gYApp.dragObject.getAttribute("nodeID") ) {		
		var snode = view.tree.getNodeById(gYApp.dragObject.getAttribute("nodeID")); // 被操作的節點 source node
		var tnode = view.tree.getNodeById(nodeID); // 被移到的節點 target node
		var bAttached = false;

		// 設定node被拖曳時 滑鼠放開後所要執行的動作
		if ( snode != null && tnode != null && snode.id != tnode.id && !logplay) {
			var mousePos = F_GetMouseCoords(evt);
			var oView = view.getNodeView(tnode);
			var oPos = F_GetPosition(oView);
			var cloneB = snode.clone();			
			var oldParent= snode.parentNode;
			
			if ( tnode.indent == 0 ) { // 當有node被加入到跟節點下方時
				bAttached = view.tree.attachToNode(tnode, snode, gYApp.dragPos);
			} else {
				if ( gYApp.dragPos == NODE_POS_UP ) { // 當某一節點 拖到某一節點上方時 其順序會改變至該節點的前面 (非變成parent)
					bAttached = view.tree.attachToNode(tnode, snode, tnode.pos, true);
				} else { // 當有節點加入到非根節點的下方時
					bAttached = view.tree.attachToNode(tnode, snode, tnode.pos);
				}
			}

			
			if ( bAttached ) { // 如果node有被拖曳成功過
				if (updatenodeposition(tnode.NodeID, snode.NodeID, snode.pos)) { // 去DB更新資訊 若成功
					socket_send_node_drag(tnode.NodeID, snode.NodeID, gYApp.dragPos); // socket廣播 遠端同步
					if ( tnode.folded ) { // 如果拖曳到一個已經folded的節點上 會加入到該node後面 並將該node展開
						view.toggleNode(tnode);
					}
					var cloneA = snode.clone();
					gYApp.history.push(ACT_NODE_MOVE, [cloneB, cloneA]);

				} else { //update DB failed
					//roll back the node attachement
					view.tree.attachToNode(oldParent, snode, oldParent.pos); //assume this will success anyhow. Error not handled here
				}
				view.redrawTree(false);				
			}
			
		}

		if ( !bAttached ) { // 拖曳無更動
			gYApp.dragObject.style.left = gYApp.dragOldLeft + "px";
			gYApp.dragObject.style.top = gYApp.dragOldTop + "px";
		} else {
			view.selectNode(snode, false, false);
		}
		
		gYApp.dragObject.style.zIndex = 10;
		
		view.hideNodeSelector();
	}
		
	gYApp.dragObject = null;
	view.panelD.style.cursor = "default";
	
	
	if ( gBrowserDetect.browser == "Explorer" ) {
		evt.cancelBubble = true;
	} else {
		evt.stopPropagation();
	}
	return false;
}

function EVT_NodeMouseOver(evt,nodeID,ThisNodeID) {
	M_LoadNodeBriefInfo(ThisNodeID);
	
	if ( gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) return false;
	
	if ( gYApp.menu && gYApp.menu.isContextMenuPopuped() ) return false;

	evt = evt || window.event;
	
	var view = gYApp.getView();
	
	if ( evt.shiftKey || evt.ctrlKey || view.getSelectedNodeCount() > 1) {
		return false;
	}
	
	if ( gYApp.dragObject && gYApp.dragObject.getAttribute("nodeID") ) {
		view.selectNode(nodeID, false, true);
		return false;
	} else {
		view.selectNode(nodeID, false, false);
	}
	
	if ( view.getSelectedNodeCount() == 1 && !gYApp.isStatSet(YMAP_STAT_NODEEDIT) && nodeID != gYApp.view.tree.rootNodeID) {
		
		if ( gYApp.isStatSet(YMAP_STAT_EDITLOCK) ) return true;
		
		EVT_MakeDraggable(view.getNodeView(view.tree.getNodeById(nodeID)));
	}
	
	return false;
}

function EVT_NodeMouseMove(evt,nodeID) {
	if ( gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) return false;
	
	if ( gYApp.menu && gYApp.menu.isContextMenuPopuped() ) return false;

	var view = gYApp.getView();
	
	if ( gYApp.dragObject && gYApp.dragObject.getAttribute("nodeID") && gYApp.dragObject.getAttribute("nodeID") != nodeID ) {
		var node = view.tree.getNodeById(nodeID);
		var oView = view.getNodeView(node);
		var oPos = F_GetPosition(oView);
		var mousePos = F_GetMouseCoords(evt);

		if ( mousePos.x > (oPos.x + (oView.offsetWidth>>1)) ) {
			if ( view.tree.isRootNode(node) ) {
				view.selectNodePos(node, NODE_POS_RIGHT);
				gYApp.dragPos = NODE_POS_RIGHT;
			} else if ( node.pos == NODE_POS_RIGHT ) {
				view.selectNodePos(node, NODE_POS_CHILD);
				gYApp.dragPos = NODE_POS_CHILD;
			} else {
				view.selectNodePos(node, NODE_POS_UP);
				gYApp.dragPos = NODE_POS_UP;
			}
		} else {
			if ( view.tree.isRootNode(node) ) {
				view.selectNodePos(node, NODE_POS_LEFT);
				gYApp.dragPos = NODE_POS_LEFT;
			} else if ( node.pos == NODE_POS_RIGHT ) {
				view.selectNodePos(node, NODE_POS_UP);
				gYApp.dragPos = NODE_POS_UP;
			} else {
				view.selectNodePos(node, NODE_POS_CHILD);
				gYApp.dragPos = NODE_POS_CHILD;
			}
		}
	}
	/*
	if ( gBrowserDetect.browser == "Explorer" ) {
		evt.cancelBubble = true;
	} else {
		evt.stopPropagation();
	}
	*/
	return false;
}


function EVT_NodeContextMenu(evt,nodeID) {
//搞到我快瘋了 花了3小時
  function getTagNames(cb) {  
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
        url:'/getPermmit',
        type:'POST',
        async:false,
        dataType:'text',
        data:{NodeID:nodeID},
        success:function(result){
            //檢查app.post('/getPermmit'回傳值用  alert(result); 
            if(result == "false"){
               //alert('該節點已鎖住'); 
              showLockMessage();//0828new
               cb(result);
            }else cb('true');
            
        },error:function(){
            alert('fail');
        }
    });
  }
  getTagNames(function(check) {
    // do something with tagArray
     if(check == 'false'){
        return false;
    }
    else{
	    if ( gYApp.menu == null ) return false;

	    evt = evt || window.event;
	
	    var node = gYApp.view.tree.getNodeById(nodeID);
	    if ( node == null ) return false;
	
	    gYApp.view.selectNode(node, evt.shiftKey || evt.ctrlKey, false);
	
	    gYApp.menu.showContextMenu(evt);
    }
  });

/*
    var check  = checkAuthority(); //這裡會是undefined 原本是要接受 return false
    //把它想成是 $.ajax
    if(check == undefined){
        return false;
    }
    else{
	if ( gYApp.menu == null ) return false;

	evt = evt || window.event;
	
	var node = gYApp.view.tree.getNodeById(nodeID);
	if ( node == null ) return false;
	
	gYApp.view.selectNode(node, evt.shiftKey || evt.ctrlKey, false);
	
	gYApp.menu.showContextMenu(evt);
  }
  
  */
}

function EVT_MakeDraggable(item){
    if(!item) return false;

    item.onmousedown = function(evt){
    	var nodeID = this.getAttribute("nodeID");
    	
    	if ( gYApp.dragObject && nodeID ) gYApp.dragObject.onmousedown = null;

        gYApp.dragObject = this;
        gYApp.dragOldLeft = this.offsetLeft;
        gYApp.dragOldTop = this.offsetTop;
        gYApp.mouseOffset = F_GetMouseOffset(this, evt);
        
        if( nodeID != null && nodeID != "" ) {
        	gYApp.dragYOff = 0 - gYApp.view.panelD.offsetTop + item.offsetHeight + 10;
        	gYApp.dragXOff = 0 - gYApp.view.panelD.offsetLeft;
        	this.style.zIndex = 50;
        } else {
        	gYApp.dragYOff = 0;
        	gYApp.dragXOff = 0;
        }
        
        evt = evt || window.event;
        
        if ( gBrowserDetect.browser == "Explorer" ) {
        	if ( evt.srcElement.tagName == "IMG" ) {
        		evt.srcElement.fireEvent("onmouseup");
			}			
        	evt.cancelBubble = true;
        } else {
        	evt.stopPropagation();
        }
        
        return false;
    }
    return true;
}


function EVT_KeyPress(evt) {
	if ( document.activeElement.id == 'mapname') return true; // 當焦點在建立新專案的textbox中的時候
	if ( document.activeElement.id == 'loginFormID' || document.activeElement.id == 'loginFormPwd') return true; // 當焦點login form的時候
	if ( document.activeElement.id == 'message') // 當焦點在聊天室輸入訊息的時候
	{
		evt = evt || window.event;
		var code = evt.keyCode;
		if (code == YKEYCODE_ENTER)
			sendmessage();
		return true; 
	}
	
	if ( document.activeElement.id == 'Node_Content') // 當焦點在Node編輯時
	{
		return true; 
	}
	if ( document.activeElement.id == 'Node_ps') 
	{
		return true; 
	}
	//0913 預算new
	if ( document.activeElement.id == 'Node_Finish') 
	{
		return true; 
	}
	if ( document.activeElement.id == 'datepicker_start') 
	{
		return true; 
	}
	if ( document.activeElement.id == 'datepicker_end') 
	{
		return true; 
	}
	if ( document.activeElement.id == 'budget') 
	{
		return true; 
	}
	if ( document.activeElement.id == 'leader') 
	{
		return true; 
	}
	if ( document.activeElement.id == 'keUrl') // 當焦點在討論編輯器的超連節視窗時
	{
		return true;
	}
	
	if ( gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) return true;
	
	if ( gYApp.menu && gYApp.menu.isContextMenuPopuped() ) return true;

	evt = evt || window.event;

	//var code = (evt.keyCode)? evt.keyCode:evt.charCode;
	var code = evt.keyCode;
	
	var view = gYApp.view;
	return true; //巫 20150907
	switch( code ) {
		case YKEYCODE_A:
			if ( evt.ctrlKey ) {
			} else if ( evt.ctrlKey && evt.shiftKey) {
			}
			break;
		case YKEYCODE_B:
			if ( evt.ctrlKey ) {
				M_FormatFontStyle("bold");
			}
			break;
		case YKEYCODE_C:
			if ( evt.ctrlKey ) {
				M_EditCopy(true);
			} else if ( evt.ctrlKey && evt.shiftKey ) {
				M_EditCopy(false);
			} else if ( !evt.ctrlKey && evt.altKey ) {
				M_EditCopyFormat();
			}
			break;
		case YKEYCODE_F:
			if ( evt.altKey ) {
				M_FormatColor(NODE_FORMAT_FGCOL);
			}
			break;
		case YKEYCODE_I:
			if ( evt.ctrlKey ) {
				M_FormatFontStyle("italic");
			}
			break;
		case YKEYCODE_K:
			if ( evt.ctrlKey ) {
				M_InsertHyperlink();
			} else if ( evt.altKey ) {
				M_InsertImage();
			}
			break;
		case YKEYCODE_N:
			if ( evt.ctrlKey && evt.shiftKey ) {
				M_FormatPhysicalStyle("Normal");
			}
			break;
		case YKEYCODE_V:
			if ( evt.ctrlKey ) {
				M_EditPaste();
			} else if ( evt.altKey ) {
				M_EditPasteFormat();
			}
			break;
		case YKEYCODE_X:
			if ( evt.ctrlKey ) {
				M_EditCut();
			}
			break;
		case YKEYCODE_Y:
			if ( evt.ctrlKey ) {
				M_EditRedo();
			}
			break;
		case YKEYCODE_Z:
			if ( evt.ctrlKey ) {
				M_EditUndo();
			}
			break;
		case YKEYCODE_F1:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("WatingTopic");
			} else {
				M_FormatPhysicalStyle("Default");
			}
			break;
		case YKEYCODE_F2:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("ObjectKeyword");
			} else {
				M_EditEditNode();
			}
			break;
		case YKEYCODE_F3:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("ObjectOfCode");
			} else {
				M_FormatPhysicalStyle("OK");
			}
			break;
		case YKEYCODE_F4:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("Question");
			} else {
				M_FormatPhysicalStyle("NeedsAction");
			}
			break;
		case YKEYCODE_F5:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("OpenQuestion");
			} else {
				M_FormatPhysicalStyle("Hot");
			}
			break;
		case YKEYCODE_F6:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("Bad");
			} else {
				M_FormatPhysicalStyle("Detail");
			}
			break;
		case YKEYCODE_F7:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("Blue");
			} else {
				M_FormatPhysicalStyle("Folder");
			}
			break;
		case YKEYCODE_F8:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("Pink");
			} else {
				M_FormatPhysicalStyle("Topic");
			}
			break;
		case YKEYCODE_F9:
			if ( evt.ctrlKey ) {
				M_FormatPhysicalStyle("Cyan");
			} else {
				M_FormatPhysicalStyle("LargerTopic");
			}
			break;
		case YKEYCODE_ENTER:
			if ( gBrowserDetect.browser == "Firefox" ) {
				this.keyEnterHit		= 0;
			}
			if ( evt.ctrlKey ) {
				M_EditEditLongNode();
			} else if ( evt.shiftKey ) {
				M_InsertNewPreviousSiblingNode();
			} else {
				//M_InsertNewSiblingNode();
			}
			break;
		case YKEYCODE_ESC:
			break;
		case YKEYCODE_DELETE:
			M_EditRemoveNode();
			break;
		case YKEYCODE_SPACE:
			if ( evt.ctrlKey ) {
				M_NavigateToggleChildren();
			} else {
				M_NavigateToggleFolded();
			}
			break;
		case YKEYCODE_PAGEUP:
			view.navigateNode(NODE_NAV_PAGEUP, false);
			break;
		case YKEYCODE_PAGEDN:
			view.navigateNode(NODE_NAV_PAGEDN, false);
			break;
		case YKEYCODE_END:
			M_EditEditNode(CARET_ORG_END);
			break;
		case YKEYCODE_HOME:
			M_EditEditNode(CARET_ORG_START);
			break;
		case YKEYCODE_LEFT:
		case YKEYCODE_UP:
		case YKEYCODE_RIGHT:
		case YKEYCODE_DOWN:
			if ( evt.ctrlKey && (code == YKEYCODE_UP || code == YKEYCODE_DOWN) ) {
				M_NavigateNodeUpDown( (code == YKEYCODE_UP)? 'up' : 'down' );
			} else {
				var navPos;
				if ( code == YKEYCODE_LEFT ) {
					navPos = NODE_NAV_LEFT;
				} else if ( code == YKEYCODE_UP ) {
					navPos = NODE_NAV_UP;
				} else if ( code == YKEYCODE_RIGHT ) {
					navPos = NODE_NAV_RIGHT;
				} else if ( code == YKEYCODE_DOWN ) {
					navPos = NODE_NAV_DOWN;
				} else {
					break;
				}
				view.navigateNode( navPos, evt.shiftKey);
			}
			break;
		case YKEYCODE_INSERT:
			if ( evt.shiftKey ) {
				M_InsertNewParentNode();
			} else {
				//M_InsertNewChildNode();
				M_node_InsertNewChildNode();
			}
			break;
		case YKEYCODE_PLUS:
			if ( evt.ctrlKey) {
				M_FormatFontSize("+");
			}
			break;
		case YKEYCODE_MINUS:
			if ( evt.ctrlKey) {
				M_FormatFontSize("-");
			}
			break;
	}

	if ( gBrowserDetect.browser == "Explorer" ) {
		evt.cancelBubble = true;
	} else {
		evt.stopPropagation();
	}
	return false;
}

function EVT_NodeEditKey(evt) {
	evt = evt || window.event;

	if (F_CheckKey(evt,[27])) {
		M_EditEditNode(false);
	} else if (F_CheckKey(evt,[13])) {
		if ( gBrowserDetect.browser == "Firefox" && gYApp.keyEnterHit++ == 0 ) {
			return false;
		}
		_M_EditEditNode(true);

		return false;
	}
	
	return true;
}

function listMember(main) {  //檢查陣列物件裡的東西
  var s = "";
  for( key in main )  // 使用 in 運算子列舉所有成員
  s += key + ": " + main[key] + "\n";
  return s;
}


function EVT_NodeClick(evt,nodeID) {
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;

    //alert(listMember(node));
    //alert(node.parentNode);
    if(node.parentNode == "null"){
    	return false;
    }else{


    $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
        url:'/getPermmit',
        type:'POST',
        async:false,
        dataType:'text',
        data:{NodeID:nodeID},
        success:function(result){
            //檢查app.post('/getPermmit'回傳值用  alert(result); 
            if(result == "false"){
               showLockMessage();
               return false;
            }
        },error:function(){
            alert('fail');
        }
    });

//

	if ( gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) return false;

	evt = evt || window.event;
	
	var view = gYApp.getView();

	var node = view.tree.getNodeById(nodeID);

	if ( node == undefined || node == null ) {
		return true;
	}
	
	var selNodeCnt = view.getSelectedNodeCount();
	if ( node.childNodes.length > 0 && selNodeCnt == 1 && !evt.shiftKey && !evt.ctrlKey ) {
		if (view.toggleNode(node)) {
			gYApp.history.push( ACT_NODE_TOGGLE, [node.folded, node.id]);
		}
		view.redrawTree(false);
		return false;
	}

	if ( selNodeCnt > 1 && evt.ctrlKey && view.isSelectedNode(node) ) {
		view.deSelectNodes(node);
		return false;
	}
	view.selectNode(node, evt.ctrlKey, false);

	if ( selNodeCnt <= 1 && view.getSelectedNodeCount() == 1 && node.childNodes.length == 0 &&
		!evt.shiftKey && !evt.ctrlKey) {

		if ( gYApp.isStatSet(YMAP_STAT_EDITLOCK) ) return false;
		
		// 跳出node編輯視窗JY
		dbarinit();
		M_dbarNodeInfo(node);
		node_dbar = node;
		
		//M_EditEditNode(CARET_ORG_SEL);
		//if ( view.startNodeEdit(node, CARET_ORG_SEL) ) {
		//	gYApp.setStat(YMAP_STAT_NODEEDIT);
		//}
	}
	
	return true;
  }
}

function EVT_NodeIconClick(evt, oImg, nodeID) {
	evt = (evt) ? evt:window.event;
	
	if ( gBrowserDetect.browser == "Explorer" ) {
		evt.cancelBubble = true;
	} else {
		evt.stopPropagation();
	}
	
	return false;
}


function EVT_NodeIconDblClick(evt, oImg, nodeID) {
	if ( gYApp.isStatSet(YMAP_STAT_NODEEDIT) ) return false;

	var view = gYApp.getView();
	
	if ( oImg == null ) {
		return false;
	}

	var arr = view.removeIcon(nodeID, oImg);
	if ( arr ) {
		var node = view.tree.getNodeById(nodeID);
		var icon =  geticonfromoImg(oImg);
		socket.emit('node_iconremove', [node.NodeID,icon]);
		gYApp.history.push(ACT_NODE_ICON, arr);
	}
	
	return false;
}

function EVT_NodeHyperlinkClick(evt) {
	evt = (evt) ? evt:window.event;
	
	if ( gBrowserDetect.browser == "Explorer" ) {
		evt.cancelBubble = true;
	} else {
		evt.stopPropagation();
	}
	
	return false;
}

///////////////////////////////////////////////////////////
// YMap Menu Handler

function M_DEBUG_TEST() {
	var view = gYApp.getView();
	if ( view.getSelectedNodeCount() != 1 ) {
		return;
	}
	
	var indent = view.tree.getUnfoldedMaxIndent(view.getLastSelectedNode());
	
	/*
	var arr = gYApp.getView().getSelectedBranchTopNodes();
	
	var str = ">> ";
	for ( var i=0; i<arr.length; i++ ) {
		var node = gYApp.getView().tree.getNodeById(arr[i]);
		str += node.text + ";";
	}
	alert(str);
	*/
}

// File //////////////////////
function M_FileNew() {
	if($('#mapname').val() == "")
		return;
	// 建立新map
	if(gYApp != null)
	{
		var view = gYApp.getView();
		view.deleteNodeView(view.tree.rootNode);
        
	}
	init();
	socket.emit('set_mapid', prjID);
	/*alert('ff');*/
	document.onkeydown		= EVT_KeyPress;
	//gYApp.view.initMap("Start");
	//setCurrentPrjID(0); //By JC
	dbarinit();
	jQuery('#dropdowntoolbarcontainer').accordion("activate",-1);
	$.unblockUI();
	


}


/*
// File //////////////////////
function M_FileNew() {
	if(gYApp != null)
	{
		var view = gYApp.getView();
		view.deleteNodeView(view.tree.rootNode);		
	}
	
	init();
	//gYApp.view.initMap("Start");
	setCurrentPrjID(0); //By JC
	$.unblockUI();

}
*/
// 20120513 移除
// 因為它是menubar 所以在init()時 不能再create一次 不然會GG

function M_FileNew0() {
	if(gYApp != null)
	{
		var view = gYApp.getView();
		view.deleteNodeView(view.tree.rootNode);		
	}
	
	yTree = new YTree("Start");
	yView = new YView(yTree, document.getElementById("panelDOM"), document.getElementById("panelSVG"));
	yView.setNodeEditor(document.getElementById("nodeEditor"));
	yView.setLongNodeEditor(document.getElementById("longNodeEditor"));
	yView.setImageChooser(document.getElementById("imageChooser"));
	yView.setHyperlinkChooser(document.getElementById("hyperlinkChooser"));
	yView.setColorChooser(document.getElementById("colorChooser"));
	yView.setFontNameSelector(document.getElementById("fontNameSelector"));
	yView.setFontSizeSelector(document.getElementById("fontSizeSelector"));

	yApp = new YApp(yView);
	//yApp.createMenu("menu1");
	yView.redrawTree(true);	

	//gYApp.view.initMap("Start");
	//setCurrentPrjID(0); //By JC
	$.unblockUI();

}

function M_FileNew_view() {
	//document.onkeydown		= null;
	var loadhtml = "<table width=100%><tr><td  width=30% rowspan='2'>新會議：</td><td  width=25%>名稱：</td><td><input type='text' id='mapname' MAXLENGTH=20 style='width:100%'/></td></tr><tr><td>匿名：</td><td><p><label><input name='RadioGroup_isanonymity' type='radio' id='RadioGroup_isanonymity_0' value='1' checked='checked' />是</label><label><input type='radio' name='RadioGroup_isanonymity' value='0' id='RadioGroup_isanonymity_1' />否</label><br /></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td  align='right'><input type='button' value='建立' onclick='M_FileNew()' /><input type='button' value='取消' onclick='M_FileNew_view_cancel();' /></td></tr></table>";	
	$.blockUI({ message: loadhtml, css: {
		top: '30%'
	}});	
}

function M_FileNew_view_cancel() {
	//document.onkeydown		= EVT_KeyPress;
	$.unblockUI();
}

// IE HTA only!!!
function checkForSave()
{ 
	var checkSave=showModalDialog('YMapCheckForSave.htm','','dialogHeight:125px;dialogWidth:250px;scroll:off');
  	return checkSave;
}
//FileOpen這改回 回到個人專業
function M_FileOpen() {
	//get current project list from ajax	
	$.post( "update", 
			{act: 'listPrj'},
			function (prjList) {
				// 建立讀檔畫面
				var loadhtml = "</br><table align='center'><caption> 會議清單 </caption><tr><td>" + prjList + "</td></tr>";
				loadhtml += "<tr><td align='center'><input type='button' value='開啟' onclick='LoadMap(0)')>";
				loadhtml += "<input type = 'button' value = '取消' onclick='$.unblockUI()'></td></tr></table></br>";
				
				$.blockUI({ message: loadhtml, css: {
					top: '30%'
				}}); 
	});
}

function LoadMap(mapid) {
	if (mapid <=0)  mapid = $('#prjselect').val();
	if( mapid != null && mapid>0) {
		ajaxLoadMap(mapid);
		dbarinit();
		jQuery('#dropdowntoolbarcontainer').accordion("activate",-1);
	}
	socket.emit('set_mapid', mapid);
}

//
function M_Logon(i,p) {
	var id = $('#'+i).val();
	var pwd = $('#'+p).val();
//	alert('login with ' + id + " "+pwd);
	$.ajax({
		async: false,
		url: 'login',
		type: 'POST',
		dataType: 'text',
		data: {id: id, pwd:pwd},
		error: function(res){
			alert('ajax 連線錯誤, 請稍後再試.');
		},
		success: function(res){
			if (res=="success") {
				alert('登入成功');
				$.unblockUI();
			} else {
				alert('帳密錯誤, 請再試一次.');
			}
		}
	});
}


function M_EnterSite() {
alert('c c c ');
/**
	//get current project list from ajax
	$.post( "update",
			{act: 'listPrj'},
			function (prjList) {
				if (prjList.substr(0,4) != '401 ') {
                //建立讀檔畫面
				var loadhtml ="";
			    loadhtml += "<table align='center' width=100%><caption>專案清單: </caption><tr><td>" + prjList + "</td></tr>";
				loadhtml += "<tr><td align='center'><input type='button' value='開啟' onclick='LoadMap(0)')>";
				loadhtml += "</td></tr></table></br></div>";
				$.blockUI({ message: loadhtml, css: {
					top: '30%'
				}});
				} else {
					loadhtml="<div style='width:100%;'>Login<br />ID:<input type='text' id='loginFormID' /><br />pwd:<input type='password' id='loginFormPwd' value='' size='12' /><br /><input type='button' value='login' onclick='M_Logon(\"loginFormID\",\"loginFormPwd\")' /></div>";
				
				$.blockUI({ message: loadhtml}); 

				}
	});
**/
}
//Person
function M_EnterSiteData(name) {

    var TargetName = "%"+name+"%";
    var data;
    //var TargetProjectName = name; //搜尋框專案的名稱
	$.ajax({url:"update",
			data:{act: 'listPrj' , Name:TargetName},type:'POST',async:false,
			success:function (prjList) {
      
				if (prjList.substr(0,4) != '401') {
                  //建立讀檔資訊
                  //將/prjList中的 <option>值插入到Person_Manage.html頁面中
                  data = prjList;
                  $('#fileRead').replaceWith("<div id='fileRead' align='center' style='height:450px'>" +data + "</div>");
				}
            }});
}



/*
function M_FileOpen() {
	
	if ( gYApp.getMapMode() == YMAP_MODE_HTA ) {
		if ( gYApp.history.isMapModified() ) {
			var ret = checkForSave();
			if ( ret == null ) {
				if ( gYApp.menu ) gYApp.menu.hideAll();
				return;
			}
			if ( ret ) {
				M_FileSave();
			}
		}
				
		cDialog.CancelError=true;
		var xmlSTR = "";
		try{
			cDialog.Filter="FreeMind Files (*.mm)"
			cDialog.ShowOpen();
			var ForReading = 1;
			var fso = new ActiveXObject("Scripting.FileSystemObject");
		   	var f = fso.OpenTextFile(cDialog.filename, ForReading);
		  	var xmlSTR = f.ReadAll();
		  	f.close();
		  	
		  	gYApp.view.initMap("");
		  	gYApp.view.tree.loadFreeMind(xmlSTR);
		  	gYApp.view.redrawTree(true);
		  	if ( gYApp.menu ) gYApp.menu.hideAll();
		  	gYApp.setAttribute(YMAP_ATT_FILEPATH, cDialog.filename);
		  	gYApp.history.clear();
		} catch(e) {
			var sCancel="true";
			return sCancel;
		}
	} else {		
		if ( gYApp.history.isMapModified() ) {
			var ret = confirm("Save changes to this document?");
			if ( ret ) {
				M_FileSave();
			}
		}
		
		//gYApp.view.initMap("");
				// replace xmlSTR with your mm document
				//var xmlSTR = '<map version="0.8.0"><node CREATED="1244913838583" MODIFIED="" TEXT="Start"><node CREATED="1244913838583" MODIFIED="" POSITION="left" TEXT="Left"><node CREATED="1244913838583" MODIFIED="" TEXT="Children1"></node><node CREATED="1244913838583" MODIFIED="" COLOR="E0000ff" BACKGROUND_COLOR="#00ff00" TEXT="Children2"><edge COLOR="#00ff00" /><font NAME="SansSerif" SIZE="18" BOLD="true" /></node><node CREATED="1244913838583" MODIFIED="" TEXT="Children3"></node><node CREATED="1244913838583" MODIFIED="1244913845961" TEXT="Right"><edge COLOR="#ff0000" /><icon BUILTIN="attach" /></node></node></node></map>';
				//gYApp.view.tree.loadFreeMind(xmlSTR);
		
		ajaxListProject(); //Added by JC
		gYApp.view.redrawTree(true);
		if ( gYApp.menu ) gYApp.menu.hideAll();
		gYApp.history.clear();
	}	
}
*/
/*
function M_FileOpen() {
	getloadstate(); 
	if(loadstate)
	{
		if ( gYApp.getMapMode() == YMAP_MODE_HTA ) {		
			if ( gYApp.history.isMapModified() ) {
				var ret = checkForSave();
				if ( ret == null ) {
					if ( gYApp.menu ) gYApp.menu.hideAll();
					return;
				}
				if ( ret ) {
					M_FileSave();
				}
			}
			
			cDialog.CancelError=true;
			var xmlSTR = "";
	   		try{
	   			cDialog.Filter="FreeMind Files (*.mm)"
	  			cDialog.ShowOpen();
	   			var ForReading = 1;
	  			var fso = new ActiveXObject("Scripting.FileSystemObject");
	   			var f = fso.OpenTextFile(cDialog.filename, ForReading);
	  			var xmlSTR = f.ReadAll();
	  			f.close();
	  			
	  			gYApp.view.initMap("");
	  			gYApp.view.tree.loadFreeMind(xmlSTR);
	  			gYApp.view.redrawTree(true);
	  			if ( gYApp.menu ) gYApp.menu.hideAll();
	  			
	  			gYApp.setAttribute(YMAP_ATT_FILEPATH, cDialog.filename);
	  			gYApp.history.clear();
			} catch(e) {
				var sCancel="true";
				return sCancel;
			}
		} else {
			if ( gYApp.history.isMapModified() ) {
				var ret = confirm("Save changes to this document?");
				if ( ret ) {
					M_FileSave();
				}
			}
			gYApp.view.initMap("");
			// replace xmlSTR with your mm document
			//var xmlSTR = '<map version="0.8.0"><node CREATED="1244913838583" MODIFIED="" TEXT="Start"><node CREATED="1244913838583" MODIFIED="" POSITION="left" TEXT="Left"><node CREATED="1244913838583" MODIFIED="" TEXT="Children1"></node><node CREATED="1244913838583" MODIFIED="" COLOR="E0000ff" BACKGROUND_COLOR="#00ff00" TEXT="Children2"><edge COLOR="#00ff00" /><font NAME="SansSerif" SIZE="18" BOLD="true" /></node><node CREATED="1244913838583" MODIFIED="" TEXT="Children3"></node><node CREATED="1244913838583" MODIFIED="1244913845961" TEXT="Right"><edge COLOR="#ff0000" /><icon BUILTIN="attach" /></node></node></node></map>';
			//gYApp.view.tree.loadFreeMind(xmlSTR);
	
			//ajaxListProject(); //Added by JC
			gYApp.view.redrawTree(true);
			if ( gYApp.menu ) gYApp.menu.hideAll();
			gYApp.history.clear();
		}
	} else {
		ajaxListProject();
	}	
}

*/


// 20120509刪除此功能 改成自動儲存
function M_FileSave() {
	if ( gYApp.getMapMode() == YMAP_MODE_HTA ) {
		var filepath = gYApp.getAttribute(YMAP_ATT_FILEPATH);
		if ( filepath == undefined || filepath == null || filepath == "" ) {
			cDialog.CancelError=true;
			try{
				cDialog.Filter="FreeMind Files (*.mm)"
				cDialog.ShowSave();
				var fso = new ActiveXObject("Scripting.FileSystemObject");
				var f = fso.CreateTextFile(cDialog.filename,  true);
				var xmlSTR = gYApp.view.tree.unLoadFreeMind();
				f.write(xmlSTR);
				f.Close();
				
				if ( gYApp.menu ) gYApp.menu.hideAll();
			} catch(e) {
				var sCancel="true";
				return sCancel;
			}
		} else {
			try{
				var fso = new ActiveXObject("Scripting.FileSystemObject");
				var f = fso.CreateTextFile(filepath,  true);
				var xmlSTR = gYApp.view.tree.unLoadFreeMind();
				f.write(xmlSTR);
				f.Close();
				
				gYApp.history.snapshot();
				if ( gYApp.menu ) gYApp.menu.hideAll();
			} catch(e) {
				var sCancel="true";
				return sCancel;
			}
		}
	} else {
		var xmlSTR = gYApp.view.tree.unLoadFreeMind();
		ajaxSaveArray(); //added by JC
		// save xmlSTR into your database table
		
		gYApp.history.snapshot();
		if ( gYApp.menu ) gYApp.menu.hideAll();
	}
}

function M_FileSaveAs() {
			ajaxSaveArray(); //added by JC
}

function M_FileRevert() {
}

function M_FileClose() {
}

function M_FileExport(type) {
}

function M_FileImport(type) {
}

function M_FilePrint() {
}

function M_FileQuit() {
}


// Edit //////////////////////
function M_EditUndo() {
	alert('Undo功能暫時不開放');
	//gYApp.history.undo();
}

function M_EditRedo() {
	alert('Redo功能暫時不開放');
	gYApp.history.redo();
}

function M_EditCut() {
	M_EditCopy(true);
	M_EditRemoveNode();
}

function M_EditCopy(bfull) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;

	gYApp.clones.splice(0,gYApp.clones.length);;
	for ( var i = view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var id = view.selectedNodes[i];
		var node = view.tree.getNodeById(id);
		if ( node == undefined || node == null ) continue;
		view.tree.branchClone(node, gYApp.clones, bfull, 0);
	}
}

function M_EditPaste() {
	var view = gYApp.getView();
	
	if (view.getSelectedNodeCount() < 1 ) return;
	
	if ( gYApp.clones.length == 0 ) return;
	
	var arr = new Array;
	for ( var i = view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var id = view.selectedNodes[i];
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null ) continue;
		
		var topNodeIDs = new Array;
		view.tree.attachClone(node, gYApp.clones, topNodeIDs, 0, 0);

		var arrTopClones = new Array;
		for (var j=0; j<topNodeIDs.length; j++ ) {
			arrTopClones.push(view.tree.getNodeById(topNodeIDs[j]).clone());
		}
		arr.push(node.clone());
		arr.push(arrTopClones);
	}
	gYApp.history.push(ACT_NODE_PASTE, arr);
	
	gYApp.view.redrawTree(false);
}

function M_EditCopyFormat() {
	var view = gYApp.getView();
	
	var node = view.getFirstSelectedNode();
	if ( node == null ) return;
	
	gYApp.formatter = node.clone();
}

function M_EditPasteFormat() {
	var view = gYApp.getView();
	
	if (view.getSelectedNodeCount() < 1 || gYApp.formatter == null ) return;
	
	for ( var i=0; i<view.selectedNodes.length; i++ ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null ) continue;
		node.setCloneFormat(gYApp.formatter);
		view.setNodeViewStyle(node);
	}
	view.redrawTree(false);
	view.refreshSelectedNodes();
}

/*
function M_EditEditNode(arg) {
	var view = gYApp.getView();

	if ( view.getSelectedNodeCount() == 1 ) {
		var node = view.getLastSelectedNode();
		if ( node == null ) {
			return false;
		}
		if ( view.startNodeEdit(node, arg) ) {
			gYApp.setStat(YMAP_STAT_NODEEDIT);
			return true;
		}
	}
	return false;
}

function _M_EditEditNodeEnd(nodeID) {
	var view = gYApp.getView();

	view.stopNodeEdit(nodeID)
	
	gYApp.clearStat(YMAP_STAT_NODEEDIT);

	return true;
}
*/

function M_EditEditNode(arg) {
	var view = gYApp.getView();

	var node = view.getLastSelectedNode();

	if ( node == null ) {
		return false;
	}
	
	dbarinit(); // 清除dbar所有資料
	
    node_dbar = node;
	M_dbarNodeInfo(node);
	
    ShowNodeName(node.NodeID);
	M_LoadNodeDiscusstion(node.NodeID);
	M_LoadNodeInfo(node); // 將node資訊連帶讀取
	getfilelist(); 
    M_LoadSelectedNodeInfo(node.NodeID);
	return true;
	/*
	if ( view.startNodeEdit(node, CARET_ORG_SEL) ) {
		gYApp.setStat(YMAP_STAT_NODEEDIT);
		return true;
	}
	
	return false;
	*/
}

// 離開編輯時 執行這邊
function _M_EditEditNode(res) {
	var view = gYApp.getView();

	var clone = view.stopNodeEdit(res);

	if ( res && clone ) {
		var node = view.tree.getNodeByNodeID(clone.NodeID);
		if (updatenodecontent(node)) { // 若更新成功, 廣播
			socket_send_node_edit(clone.NodeID, node.text);
			gYApp.history.push(ACT_NODE_EDIT, [clone, view.tree.getNodeById(clone.id).clone()]);
		}
}
	gYApp.clearStat(YMAP_STAT_NODEEDIT);

	return true;;
}

function M_EditEditLongNode() {
	var view = gYApp.getView();

	var node = view.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}

	if ( view.startLongNodeEdit(node) ) {
		gYApp.setStat(YMAP_STAT_NODEEDIT);		
		return true;
	}
	return false;
}

function _M_EditEditLongNode(res) {
	var view = gYApp.getView();
	
	var clone = view.stopLongNodeEdit(res);
	if ( res && clone ) {
		gYApp.history.push(ACT_NODE_EDIT, [clone, view.tree.getNodeById(clone.id).clone()]);
	}
	
	gYApp.clearStat(YMAP_STAT_NODEEDIT);

	return true;;
}

function M_EditRemoveNode() {

	if(status==0){
	    alert('執行中不能刪除');
		return false;
	}
	if(status==2){
	    alert('結案了,專案只能供參考');
		return false;
	}
	else{

	    var view = gYApp.getView();
	    var clones = view.deleteSelectedNode();
	
	    gYApp.history.push(ACT_NODE_REMOVE, clones);
	//socket_send_node_delete();
	}
}

// Insert ////////////////////
function M_InsertNewChildNode() {
	if(status==0){
	    alert('執行中不能更新');
		return false;
	}
	if(status==2){
	    alert('結案了,專案只能供參考');
		return false;
	}
	else{
	    var view = gYApp.getView();

	    var node = view.getLastSelectedNode();
	    if ( node == null ) {
		    return false;
	    }
	
	    var tmpNode = view.appendChildNode(node);
	    if ( tmpNode ) {
		    gYApp.history.push(ACT_NODE_INSERT_C, [tmpNode.clone()]);
		//M_EditEditNode(CARET_ORG_SEL);
			
		    return true;
	    }
	    return false;
    }
}

function M_node_InsertNewChildNode() {	// local activities
	if(status==0){
	    alert('執行中不能增加節點');
	    return false;
	}
    if(status==2){
	    alert('結案了,個案只供參考哦');
	    return false;
	}
	else{
	var view = gYApp.getView();
	var node = view.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}
	//var NodeID_Send = view.getNodeByID(node.id);	
	var tmpNode = view.appendChildNode(node);
	if ( tmpNode ) {
		gYApp.history.push(ACT_NODE_INSERT_C, [tmpNode.clone()]);
		//M_EditEditNode(CARET_ORG_SEL);
		socket_send_node_create(tmpNode); // socket broadcast 給被加入的node
		return true;
	}
	return false;	
    }
}



function M_InsertNewSiblingNode() {
	var view = gYApp.getView();

	var node = view.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}

	var tmpNode = null;
	if ( node.indent == 0 ) {
		tmpNode = view.appendChildNode(node);
	} else {
		tmpNode = view.appendSiblingNode(node, NODE_SIB_NEXT);
	}
	if ( tmpNode ) {
		gYApp.history.push((node.indent == 0)? ACT_NODE_INSERT_C:ACT_NODE_INSERT_NS, [tmpNode.clone()]);
		M_EditEditNode(CARET_ORG_SEL);
				
		return true;		
	}
	
	return false;
}

function M_InsertNewPreviousSiblingNode() {
	var view = gYApp.getView();

	var node = view.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}

	var tmpNode = null;
	if ( node.indent == 0 ) {
		tmpNode = view.appendChildNode(node);
	} else {
		tmpNode = view.appendSiblingNode(node, NODE_SIB_PREV);
	}
	if ( tmpNode ) {
		gYApp.history.push((node.indent == 0)? ACT_NODE_INSERT_C:ACT_NODE_INSERT_PS, [tmpNode.clone()]);
		M_EditEditNode(CARET_ORG_SEL);
		return true;
	}
	
	return false;
}

function M_InsertNewParentNode() {
	var view = gYApp.getView();

	var node = view.getLastSelectedNode();
	if ( node == null ) {
		return false;
	}

	var cloneC = node.clone();
	var tmpNode = view.appendParentNode(node);
	if ( tmpNode ) {
		var cloneP = tmpNode.clone();
		gYApp.history.push(ACT_NODE_INSERT_P, [cloneP, cloneC]);
		if ( view.startNodeEdit(tmpNode, CARET_ORG_SEL) ) {
			gYApp.setStat(YMAP_STAT_NODEEDIT);
		}
		return true;
	}
	
	return false;
}

function M_RemoveLastIcon() {
	var view = gYApp.getView();
	var arr = view.removeLastIcon();
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);
	}
}

// 收到socket訊息
function M_RemoveAllIcons(NodeID) {
	var view = gYApp.getView();
	var bRootSelected = false;
	var node = view.getNodeByNodeID(NodeID);
	
	if ( node == undefined || node == null ) {
		return false;
	}
	
	if (node.id == 'r')
		bRootSelected = true;
	
	var arr = new Array;
		
	var cloneB = node.clone();
	var cnt = node.removeIcons();
		
	if ( cnt > 0 ) {
		var oArea = view.getNodeViewArea(node, NODE_VIEW_ICON);
		while (oArea.firstChild) {
			oArea.removeChild(oArea.firstChild);
		}
		arr.push(cloneB);
		arr.push(node.clone());
	}
	
	if ( !bRootSelected && cnt > 0 ) {
		view.drawNode(node, true, false);
	}
	
	if ( bRootSelected && cnt > 0 ) {
		view.drawNode(view.tree.rootNode, true, false);
	}
	
	var arr = (arr.length > 0)? arr:null;
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);
	}
}

function M_node_RemoveAllIcons() {
	var view = gYApp.getView();
	var arr = view.removeAllIcon();
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);
		socket.emit('node_iconremoveall',arr[0].NodeID); 
	}
}

// 20120523 移除
// 加入小圖示
function M_InsertIcons(NodeID, name) {
	var view = gYApp.getView();
	var bRootSelected = false;
	var node = view.getNodeByNodeID(NodeID);
	
	if ( node == undefined || node == null ) {
		return false;
	}
	
	if ( node.id == 'r') {
		bRootSelected = true;		
	}

	var arr = new Array;
	var cloneB = node.clone();	
	node.appendIcon(name);
			
	arr.push(cloneB);
	arr.push(node.clone());
	
	view.appendIconImg(node, node.getIconCount()-1);
				
	if ( !bRootSelected ) {
		view.drawNode(node, true, false);
	}
	if ( bRootSelected ) {
		view.drawNode(node, true, true);
	}
	
	arr = (arr.length > 0)? arr:null;		
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);		
	}
	
	
}

function M_node_InsertIcons(name) {
	var view = gYApp.getView();
	var arr = view.appendIcon(name);
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);
		socket.emit('node_iconadd', [arr[0].NodeID,name]);
	}
}

function M_InsertImage() {
	var view = gYApp.getView();
	if ( view.startAppendImage() ) {
		gYApp.setStat(YMAP_STAT_NODEEDIT);
	}
}

function _M_InsertImage(res) {
	var view = gYApp.getView();

	var clone = view.stopAppendImage(res);
	if ( res && clone ) {
		gYApp.history.push(ACT_NODE_IMAGE, [clone, view.tree.getNodeById(clone.id).clone()]);
	}
	
	gYApp.clearStat(YMAP_STAT_NODEEDIT);
}

function M_InsertHyperlink() {
	var view = gYApp.getView();
	if ( view.startAppendHyperlink() ) {
		gYApp.setStat(YMAP_STAT_NODEEDIT);
	}
}

function _M_InsertHyperlink(res) {
	var view = gYApp.getView();

	var clone = view.stopAppendHyperlink(res);
	if ( res && clone ) {
		gYApp.history.push(ACT_NODE_HYPERLINK, [clone, view.tree.getNodeById(clone.id).clone()]);
	}
	
	gYApp.clearStat(YMAP_STAT_NODEEDIT);
}

// Format ////////////////////
function M_FormatPhysicalStyle(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		
		if ( node == undefined || node == null ) continue;
		
		var cloneB = node.clone();
		
		with (node){ color = ""; bgcolor = ""; }
		
		switch (arg) {
			case "Default":
				with (node.font){ name = "SansSerif"; size = 12; italic = ""; bold = ""; }
				with (node.edge){ color = ""; style = ""; width = ""; }
				node.removeIcons();
				break;
			case "Normal":
				break;
			case "OK":
				node.color	= "338800";
				break;
			case "NeedsAction":
				node.color	= "990000";
				break;
			case "Hot":
				node.color	= "ff0000";
				break;
			case "Detail":
				node.color	= "999999";
				with (node.font){ name = "SansSerif"; size = 12; italic = ""; bold = ""; }
				break;
			case "Folder":
				node.color	= "006699";
				break;
			case "Topic":
				node.color	= "669900";
				break;
			case "LargerTopic":
				node.color	= "006633";
				break;
			case "WatingTopic":
				node.color	= "b3b95c";
				break;
			case "ObjectKeyword":
				node.color	= "996600";
				break;
			case "ObjectOfCode":
				node.color	= "cc6600";
				break;
			case "Question":
				node.color	= "999900";
				break;
			case "OpenQuestion":
				node.color	= "cc3300";
				break;
			case "Bad":
				node.color	= "990099";
				break;
			case "Blue":
				node.color	= "0033ff";
				break;
			case "Pink":
				node.color	= "ff6666";
				break;
			case "Cyan":
				node.color	= "009999";
				break;
			case "BlueWithEdges":
				node.color	= "000099";
				with (node.edge){ color = "009999"; width = 4; }
				break;
		}
		
		arr.push(cloneB);
		arr.push(node.clone());
		
		view.setNodeViewStyle(node);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_PSTYLE, arr);
	}
	
	view.redrawTree(false);
	view.refreshSelectedNodes();
}

function M_FormatFontName(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		
		if ( node == undefined || node == null ) continue;
		
		if ( node.font.name == "" ) {
			node.font.name = NODE_FONT_NAME;
		}
		
		arr.push(node.font.name);
		node.font.name = arg;

		arr.push(node.font.name);
		arr.push(node.id);
		
		view.setNodeViewStyle(node);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_FNAME, arr);
	}
	
	view.redrawTree(false);
	view.refreshSelectedNodes();
}

function M_FormatFontSize(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var arr = new Array;
	var fsize = 0;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		
		if ( node == undefined || node == null ) continue;
		
		fsize = (node.font.size == "")? NODE_FONT_SIZE:node.font.size;
		
		if ( fsize == 1 && arg == "-" ) {
			continue;
		}
		
		if ( arg == "+" ) {
			arr.push(fsize);
			node.font.size++;
		} else if ( arg == "-" ) {
			arr.push(fsize);
			node.font.size--;
		} else if ( arg != "" && !isNaN(arg) ) {
			arr.push(fsize);
			node.font.size = parseInt(arg, 10);
		} else if ( arg == "" ) {
			arr.push(fsize);
			node.font.size = "";
		} else {
			continue;
		}

		arr.push(node.font.size);
		arr.push(node.id);
		
		view.setNodeViewStyle(node);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_FSIZE, arr);
	}
	
	view.redrawTree(false);
	view.refreshSelectedNodes();
}

function M_FormatFontStyle(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var val = "";
	if ( arg == "bold" ) {
		val = (view.getLastSelectedNode().font.bold == "true")? "":"true";
	} else if ( arg == "italic" ) {
		val = (view.getLastSelectedNode().font.italic == "true")? "":"true";
	} else {
		return;
	}
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		
		if ( node == undefined || node == null ) continue;
		
		if ( arg == "bold" ) {
			arr.push(node.font.bold);
			node.font.bold = val;
		} else if ( arg == "italic" ) {
			arr.push(node.font.italic);
			node.font.italic = val;
		} else {
			continue;
		}
		
		arr.push(val);
		arr.push(node.id);
		
		view.setNodeViewStyle(node);
	}
	
	if ( arr.length > 1 ) {
		gYApp.history.push((arg == "bold")? ACT_NODE_FMT_BOLD:ACT_NODE_FMT_ITALIC, arr);
	}
	
	//view.redrawTree(false);
	view.refreshSelectedNodes();
}

function M_FormatColor(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	if ( view.startFormatColor(arg) ) {
		gYApp.setStat(YMAP_STAT_NODEEDIT);
	}
}

function _M_FormatColor(res) {
	var view = gYApp.getView();

	var ret = view.stopFormatColor(res);
	if ( ret[1].length > 0 ) {
		if ( ret[0] == NODE_FORMAT_FGCOL ) {
			gYApp.history.push(ACT_NODE_FMT_FGCOL, ret[1]);
		} else if ( ret[0] == NODE_FORMAT_BGCOL ) {
			gYApp.history.push(ACT_NODE_FMT_BGCOL, ret[1]);
		} else if ( ret[0] == NODE_FORMAT_EGCOL ) {
			gYApp.history.push(ACT_NODE_FMT_EGCOL, ret[1]);
		}
	}
	
	view.refreshSelectedNodes();

	gYApp.clearStat(YMAP_STAT_NODEEDIT);
}

function M_FormatBlendColor() {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		
		if ( node == undefined || node == null ) continue;
		
		arr.push(node.color);
		node.color = F_BlendHexColor("FFFFFF", bCol = (node.color == "")? NODE_FONT_COLOR:node.color);
		arr.push(node.color);
		arr.push(node.id);
		
		view.setNodeViewStyle(node);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_BLCOL, arr);
	}
	
	view.refreshSelectedNodes();
}

function M_RemoveNodeBGColor() {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null ) {
			continue;
		}
		
		arr.push(node.bgcolor);
		node.bgcolor = NODE_VIEW_BGCOLOR;
		arr.push(node.bgcolor);
		arr.push(node.id);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_BGCOL, arr);
	}
}

function M_FormatEdgeWidth(arg) {
	var view = gYApp.getView();

	if (view.getSelectedNodeCount() < 1 ) return;
	
	if ( arg != "parent" && arg != "thin" && arg != 1 && arg != 2 && arg != 4 && arg != 8 ) {
		return;
	}
	
	var arr = new Array;
	for ( var i=view.getSelectedNodeCount()-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null || node.parentNode == null ) {
			continue;
		}
		
		arr.push(node.edge.width);
		switch(arg) {
			case "parent":
				node.edge.width = node.parentNode.edge.width;
				break;
			case "thin":
				node.edge.width = "";
				break;
			case 1:
			case 2:
			case 4:
			case 8:
				node.edge.width = arg;
				break;
		}
		
		arr.push(node.edge.width);
		arr.push(node.id);
		
		view.drawNodeLinker(node);
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_FMT_EGWTH, arr);
	}
}

// Navigate //////////////////
function M_NavigateNodeUpDown(arg) {
	var view = gYApp.getView();
	var arr = view.swapSibNode( (arg == 'up')? NODE_SIB_PREV : NODE_SIB_NEXT );
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_MOVE, arr);
	}
}

function M_NavigateMoveToRoot() {
	var view = gYApp.getView();
	
	view.selectNode(view.tree.rootNode, false, false);
	view.centerPanelView();
}

function M_NavigateToggleFolded() {
	var view = gYApp.getView();

	var selCnt = view.getSelectedNodeCount();
	var unfoldedCnt = 0;
	var foldedCnt = 0;

	if (selCnt < 1 ) return;
	
	var i;
	var bCollapsed = false;
	
	for ( i=selCnt; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null ) continue;
		if ( node.childNodes.length == 0 ) continue;
		
		(node.folded)? foldedCnt++:unfoldedCnt++;
	}
	
	if ( foldedCnt == 0 && unfoldedCnt == 0 ) {
		return;
	}
	
	bCollapsed = (unfoldedCnt > 0)? true:false;
	
	var arr = new Array;
	for ( i=selCnt; i>=0; i-- ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null ||
			node.childNodes.length == 0 || view.tree.isRootNode(node) ) continue;
		
		if( view.toggleNode(node, bCollapsed) ) {
			arr.push(bCollapsed);
			arr.push(node.id);
		}
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_TOGGLE, arr);
	}
	
	view.redrawTree(false);
	
	var selectedBranchTopNodes = view.getSelectedBranchTopNodes();

	view.deSelectNodes();	

	for ( i=selectedBranchTopNodes.length-1; i>=0; i-- ) {
		view.selectNode(selectedBranchTopNodes[i], true, false);
	}
}

function M_NavigateToggleChildren() {
	var view = gYApp.getView();

	var selCnt = view.getSelectedNodeCount();

	if (selCnt < 1 ) return;
	
	var i,j;
	var affectedNodeCnt = 0;
	
	var selectedBranchTopNodes = view.getSelectedBranchTopNodes();
	
	var arr = new Array;
	for ( i=selectedBranchTopNodes.length-1; i>=0; i-- ) {
		var node = view.tree.getNodeById(selectedBranchTopNodes[i]);
		
		if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
		
		var unfoldedCnt = 0;
		var foldedCnt = 0;
		var bCollapsed = false;
		
		for ( j=node.childNodes.length -1; j>=0; j-- ) {
			var cnode = view.tree.getNodeById(node.childNodes[j]);
			if ( cnode == undefined || cnode == null ||
				cnode.childNodes.length == 0 ) continue;
			
			(cnode.folded)? foldedCnt++:unfoldedCnt++;
		}
		
		if ( foldedCnt == 0 && unfoldedCnt == 0 ) {
			continue;
		}
		
		bCollapsed = (unfoldedCnt > 0)? true:false;
		
		for ( j=node.childNodes.length -1; j>=0; j-- ) {
			var cnode = view.tree.getNodeById(node.childNodes[j]);
			if ( cnode == undefined || cnode == null || 
				cnode.childNodes.length == 0 ) continue;
			
			affectedNodeCnt++;
			if ( view.toggleNode(cnode, bCollapsed) ) {
				arr.push(bCollapsed);
				arr.push(cnode.id);
			}
		}
	}
	
	if ( affectedNodeCnt == 0 ) {
		return;
	}
	
	if ( arr.length > 0 ) {
		gYApp.history.push(ACT_NODE_TOGGLE, arr);
	}
	
	view.redrawTree(false);
	view.deSelectNodes();

	for ( i=selectedBranchTopNodes.length-1; i>=0; i-- ) {
		view.selectNode(selectedBranchTopNodes[i], true, false);
	}
}

function M_NavigateToggleAll(arg) {
	var view = gYApp.getView();
	
	var selCnt = view.getSelectedNodeCount();

	if (selCnt < 1 ) return;
	
	var i;
	var affectedNodeCnt = 0;
	
	var selectedBranchTopNodes = view.getSelectedBranchTopNodes();
	var affectedNodes = new Array;
	var bRootNodeSelected = view.isSelectedNode(view.tree.rootNode);
	
	if ( bRootNodeSelected ) {
		for ( i=view.tree.rootNode.childNodes.length-1; i>=0; i-- ) {
			var node = view.tree.getNodeById(view.tree.rootNode.childNodes[i]);

			if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
			
			view.tree.toggleChildren(node, arg, affectedNodes);
			if ( node.folded != arg ) affectedNodes.push(node.id);
		}
	} else {
		for ( i=selectedBranchTopNodes.length-1; i>=0; i-- ) {
			var node = view.tree.getNodeById(selectedBranchTopNodes[i]);
			
			if ( node == undefined || node == null || node.childNodes.length == 0 ) continue;
			
			view.tree.toggleChildren(node, arg, affectedNodes);
			if ( node.folded != arg ) affectedNodes.push(node.id);
		}
	}

	if ( affectedNodes.length == 0 ) {
		return;
	}

	var arr = new Array;
	for ( i=0; i<affectedNodes.length; i++ ) {
		var tmpNode = view.tree.getNodeById(affectedNodes[i]);
		view.toggleNode(tmpNode, arg);

		arr.push(arg);
		arr.push(affectedNodes[i]);
	}
	gYApp.history.push(ACT_NODE_TOGGLE, arr);
	
	view.redrawTree(false);
	view.deSelectNodes();
	
	for ( i=selectedBranchTopNodes.length-1; i>=0; i-- ) {
		view.selectNode(selectedBranchTopNodes[i], true, false);
	}
	
	if ( bRootNodeSelected ) {
		view.selectNode(view.tree.rootNode, true, false);
	}
	
}

// Tool //////////////////////
function M_ToolJoin() {
	var view = gYApp.getView();
	
	var selCnt = view.getSelectedNodeCount();
	
	if ( selCnt < 2 ) return;
	
	var arr = new Array;
	
	var tnode = gYApp.view.getLastSelectedNode();
	
	arr.push(tnode.clone());
	for ( var i=0;i<selCnt; i++ ) {
		var node = view.tree.getNodeById(view.selectedNodes[i]);
		if ( node == undefined || node == null || node.childNodes.length > 0 ) {
			alert("Cannot join nodes with children");
			if ( gYApp.menu ) gYApp.menu.hideAll();
			return false;
		}
		
		if ( tnode.id == node.id ) {
			continue;
		}
		
		tnode.text += "\n" + node.text;
		
		arr.push(node.clone());
		gYApp.view.deleteNode(node);
	}
	
	gYApp.history.push(ACT_NODE_JOIN, arr);
	
	gYApp.view.setNodeViewText(tnode);
	gYApp.view.redrawTree(false);
	
}

// 離開操作node時 資訊更新到DB中
function updatenodecontent(node) {
	var view = gYApp.getView();		
	var ParentNodeID = (node.parentNode==undefined)?0:node.parentNode.NodeID; // undefined 表示為 root	
	var sign = false;
//alert(node.Modified)


	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		//0913 預算new data後面多了 finishDate
		data: {NodeID: node.NodeID, act:'node_edit', Content:node.text, ps:node.ps, starttime:node.starttime, endtime:node.endtime, budget:node.budget, leader:node.leader, ParentNodeID:ParentNodeID, Modified:node.Modified, Position:node.pos, FinishDate:node.FinishDate,RealCost:node.RealCost},
		error: function(res){
			alert('ajax error: update node position: node_drag');
			sign= false;
		},
		success: function(res){
			if (res=="success") {
				sign = true;
			} else {
				alert(res);
				sign= false;
			}
		}
	});
	return sign;
/*	$.post( "update", 
		{NodeID: node.NodeID, act:'node_edit', Content:node.text, ParentNodeID:ParentNodeID, Modified:node.Modified, Position:node.pos},
		function (res) {
	});*/
}
/* $(function () {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: "{}",
                url: "update",
                dataType: "json",
                success: function (data) {
                    //enable date picker 
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    debugger;
                }
            });
        }); */
// 把tid設為sid's parentNodeID 並儲存新位置(左/右)
function updatenodeposition(tid, sid, newpos) {

/*	$.post( "update", 
		{act:'node_drag', tid:tid, sid:sid, pos:newpos},
		function (res) {
	});	
*/
	var sign = false;
	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'node_drag', tid:tid, sid:sid, pos:newpos},
		error: function(res){
			alert('ajax error: update node position: node_drag');
			sign= false;
		},
		success: function(res){
			if (res == "failed") {
				alert("Error updating node positions.");
				sign= false;
			} else
			sign=true;
		}
	});	
	//updatenodeposition(tnode.NodeID, snode.NodeID);
	return sign;
}

function M_Quit() {
	window.location = '/logout';
}

function M_dbarNodeInfo(node) {
	if (node == null) return;

	if ($('#dropdowntoolbar_NodeEdit').is(':hidden')) {  // 跳出node編輯視窗
		//$('#dropdowntoolbar_NodeEdit').show('normal');
		var accordions = jQuery('#dropdowntoolbarcontainer');
		accordions.accordion("activate", 0);		
	}



	node_dbar = node;
	M_LoadNodeInfo(node);
	M_LoadNodeDiscusstion (node.NodeID); // 將node的討論串連帶讀取
	getfilelist(); // 將檔案清單連帶讀取
//Node_Content Node_Created Node_Modified Node_Creater Node_Modifier Node_MapID	
}



function M_LoadNodeInfo(node) {
	if (node == null ) return ;
	var sign=false;
	$.ajax({
		async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'loadnodeinfo', NodeID: node.NodeID},
		error: function(res){
			alert('Ajax Error: Load Node Info.');
			sign= false;
		},
		success: function(res){
			// alert(res);
			if (res == "failed") {
				alert("Error loading node info from server.");
				sign= false;
			} else {
				try {
			var nodeinfo = JSON.parse(res);			
			$('#Node_Content').attr('value',nodeinfo.Content);
			$('#Node_Created').text(dataformat(nodeinfo.Created));
			$('#Node_ps').attr('value',nodeinfo.ps);
			//0913 預算new
//ps is realcost
			$('#Node_Finish').attr('value',nodeinfo.FinishDate);
// alert("check here" + nodeinfo.FinishDate);

			$('#datepicker_start').attr('value',nodeinfo.starttime);
			$('#datepicker_end').attr('value',nodeinfo.endtime);
			$('#budget').attr('value',nodeinfo.budget);
			$('#leader').attr('value',nodeinfo.leader);
			$('#Node_Modified').text(dataformat(nodeinfo.Modified));
			$('#Node_Creater').text(nodeinfo.CreaterName);
			$('#Node_Modifier').text(nodeinfo.ModifierName);
			sign =true;
				} catch(err) {
					alert('Malform JSON string: node info');
					sign=false
				}
			}
		}
	});
	return sign;
}


function dataformat (ms) {
	var date = new Date(ms);
	var year = date.getYear() + 1900;
	var seperator = "-";
	var month = date.getMonth()+1;
	var strDate = date.getDate();
	var strHour = date.getHours();
	var strMinutes = date.getMinutes();
	var strSeconds = date.getSeconds();
	
	if(month>=1 && month<=9) {
		month = "0"+month;
	}
	if(strDate>=0&& strDate<=9)	{
		strDate = "0"+ strDate;
	}
	if(strHour>=0 && strHour<=9) {
		strHour = '0' + strHour;
	}
	if(strMinutes>=0 && strMinutes<=9) {
		strMinutes = '0' + strMinutes;
	}
	if(strSeconds>=0 && strSeconds<=9) {
		strSeconds = '0' + strSeconds;
	}
	
	 return year+seperator+month+seperator+strDate+' '+strHour+':'+strMinutes+':'+strSeconds;
}

var tmpnodecontent;// 用來暫存目前node content
var tmpnodeps;
var tmpnodestarttime;
var tmpnodeendtime;
var tmpnodebudget;
var tmpnodeleader;

//0913  預算
var tmpnodeFinish;

function dbarNodeEdit() {
	if (node_dbar == null || node_dbar == undefined) {
		return false; 
	} else return true;
		
	if( $('#dbar_lockerNode_ID').val() == "0") { // 若目前不是屬於lock狀態
		//reset button labels
		$('#dbar_Node_edit').val("編輯") 
		$('#Node_Content').attr('disabled',true);
		$('#Node_ps').attr('disabled',true);
		//0913 預算new
		$('#Node_Finish').attr('disabled',true);
		$('#datepicker_start').attr('disabled',true);
		$('#datepicker_end').attr('disabled',true);
		$('#budget').attr('disabled',true);
		$('#leader').attr('disabled',true);
		$('#dbar_Node_update').hide();
		// try to lock this node for edit
		$.ajax({
			async: false,
			url: 'update',
			type: 'POST',
			dataType: 'text',
			data: {act:'node_getlock', NodeID:node_dbar.NodeID},
			error: function(res){
				alert('ajax error: dbarNodeEdit: node_getlock');
				return false;
			},
			success: function(res){
				if (res != 'success') {
					alert('目前無法鎖定節點, 請稍後再試');
					return false;
				} else {
					tmpnodecontent = $('#Node_Content').val(); 
					tmpnodeps = $('#Node_ps').val();
					//0913 預算新增
					tmpnodeFinish = $('#Node_Finish').val();

					tmpnodestarttime = $('#datepicker_start').val();
					tmpnodeendtime = $('#datepicker_end').val();
					tmpnodebudget = $('#budget').val();
					tmpnodeleader = $('#leader').val();
					//set button labels
					$('#Node_Content').attr('disabled',false).focus();
					$('#Node_ps').attr('disabled',false).focus();
                    //0913 預算new 預算新增
					$('#Node_Finish').attr('disabled',false).focus();

					$('#datepicker_start').attr('disabled',false).focus();
					$('#datepicker_end').attr('disabled',false).focus();
					$('#budget').attr('disabled',false).focus();
					$('#leader').attr('disabled',false).focus();
					$('#dbar_Node_edit').attr('value', '取消');
					$("#dbar_Node_update").show();
					//document.getElementById("dbar_Node_update").style.display="inline";
					return true;
				}
			}
		});	
	
	} else if( $('#dbar_Node_edit').val() == "取消") { // user pressed cancel
		// 設回unlock 讓其他人可進行編輯
		if ($('#dbar_lockerNode_ID').val() > '0' ) { //if the node is locked, unlock it
		$.ajax({
			async: false,
			url: 'update',
			type: 'POST',
			dataType: 'text',
			data: {act:'node_unlock', NodeID:node_dbar.NodeID},
			error: function(res){
				alert('Ajax Error: dbarNodeEdit-node_unlock');
				return false;
			},
			success: function(res){				
		//reset button labels
			$('#Node_Content').val(tmpnodecontent);
			$('#Node_ps').val(tmpnodeps);
  //0913 預算新增
            $('#Node_Finish').val(tmpnodeFinish);

			$('#datepicker_start').val(tmpnodestarttime);
			$('#datepicker_end').val(tmpnodeendtime);
			$('#budget').val(tmpnodebudget);
			$('#leader').val(tmpnodeleader);
			$('#dbar_Node_edit').val("編輯") 
			$('#Node_Content').attr('disabled',true);
			$('#Node_ps').attr('disabled',true);
            //0913 new 預算
            $('#Node_Finish').attr('disabled',true);
            

			$('#datepicker_start').attr('disabled',true);
			$('#datepicker_end').attr('disabled',true);
			$('#budget').attr('disabled',true);
			$('#leader').attr('disabled',true);
			$('#dbar_Node_update').hide();
			$('#dbar_lockerNode_ID').val('0'); //reset current locked node ID
//				document.getElementById("dbar_Node_update").style.display="none";
			}
		});
		} else { //if not locked, reset labels anyway
			$('#Node_Content').val(tmpnodecontent);
			$('#Node_ps').val(tmpnodeps);
//0913
            $('#Node_Finish').val(tmpnodeFinish);

			$('#datepicker_start').val(tmpnodestarttime);
			$('#datepicker_end').val(tmpnodeendtime);
			$('#budget').val(tmpnodebudget);
			$('#leader').val(tmpnodeleader);
			$('#dbar_Node_edit').val("編輯"); 
			$('#Node_Content').attr('disabled',true);
			$('#Node_ps').attr('disabled',true);
//0913
 			$('#Node_Finish').attr('disabled',true);


			$('#datepicker_start').attr('disabled',true);
			$('#datepicker_end').attr('disabled',true);
			$('#budget').attr('disabled',true);
			$('#leader').attr('disabled',true);
			$('#dbar_Node_update').hide();
		}
	}
}
function checkstatus(mapid) {
    $.ajax({
		//async: false,
		url: 'check',
		type: 'POST',
		dataType: 'text',
		data:{mapid: mapid},
		error: function(res){
			alert('Ajax Error:fileupload-setnodeid:'+res);
			return false;
		},
		success: function(res){
            
			status=parseInt(res);
		}
	});
}
// function listMember(main) {
//   var s = "";
//   for( key in main )  // 使用 in 運算子列舉所有成員
//   s += key + ": " + main[key] + "\n";
//   alert("node_dbar is " +s);
// }

function dbarNodeUpdate() {
    // listMember(node_dbar);


	//0913 預算 做總預算更新的動作
    var check = CalculateRemainBudget() ;
	if(check == "fail"){
		alert("預算更新 FAIL");
	    return false; 
	}else{ 
  
		if (node_dbar == null || node_dbar == undefined)
		    {
			    alert('invalid node to update');
			    return false;
		    }
		var view = gYApp.getView();	
	//  var curDateTime	= new Date();
	//	node_dbar.Modified = curDateTime.getTime();
		var txtBakup = node_dbar.text;
		var psBakup = node_dbar.ps;
		var starttime = node_dbar.starttime;
		var endtime = node_dbar.endtime;
		var budget = node_dbar.budget;
		var leader = node_dbar.leader;
//0913
        var FinishTime = node_dbar.FinishDate;
//alert("check FinishTime" + FinishTime);



		node_dbar.text = $('#Node_Content').val();
	    node_dbar.ps = $('#Node_ps').val();
//0913
        node_dbar.FinishDate = $('#Node_Finish').val();
//alert("check FinishDate" +  node_dbar.FinishDate);


		node_dbar.starttime = $('#datepicker_start').val();
		node_dbar.endtime = $('#datepicker_end').val();
		node_dbar.budget = $('#budget').val();
		node_dbar.leader = $('#leader').val();
		if (updatenodecontent(node_dbar) ) { //若更新成功
		    socket_send_node_edit(node_dbar.NodeID, node_dbar.text);
		  
			//alert('更新了');

		} else {
		    alert('server update failed');
		    node_dbar.text = txtBakup;
	 	    node_dbar.ps = psBakup;
		    node_dbar.starttime = starttime;
		    node_dbar.endtime = endtime;
		    node_dbar.budget = budget;
		    node_dbar.leader = leader;
//0913new 預算
		    node_dbar.FinishDate = FinishTime;
		}
	/*	$('#Node_Content').attr('disabled',true);
		$("#dbar_Node_update").hide(); //style.display="none";
		$('#dbar_Node_edit').attr('value', '編輯');
	*/
		view.drawNode(node_dbar, true, true);	
		M_LoadNodeInfo(node_dbar); // 更新dropdown的node資訊
		    
	    //0907 new dbarNodeUpdate
	    $.unblockUI();
		return true;
	}
}

function dbarinit() {
	node_dbar = null;
	$('#Node_Content').attr('value','');
    //0913 預算新增
    $('#Node_Finish').attr('disabled','');

	$('#Node_ps').attr('disabled','');
	$('#datepicker_start').attr('value','');
	$('#datepicker_end').attr('value','');
	$('#budget').attr('value','');
	$('#leader').attr('value','');
//	$('#Node_Content').attr('disabled',true);
//	$('#dbar_Node_edit').attr('value', '編輯');	
//	document.getElementById("dbar_Node_update").style.display="none";
	$('#Node_Created').text('');
	$('#Node_Modified').text('');
	$('#Node_Creater').text('');
	$('#Node_Modifier').text('');
	//$('#discusstion').text('');
	$('#discusstion').empty();
	editor.html('');	
	$('#filelist').text('');
	getfilelist();
	$('#loglist').text('');
	if(status==0){
	    $('#Node_Content').attr('disabled',true);
//0913 預算新增
		$('#Node_Finish').removeAttr('disabled','');
		$('#Node_ps').removeAttr('disabled','');

		$('#datepicker_start').attr('disabled','');
		$('#datepicker_end').attr('disabled','');
		$('#budget').attr('disabled','');
		$('#leader').attr('disabled','');
	}
	else if(status==2){
        $('#Node_Content').attr('disabled',true);
		$('#Node_ps').attr('disabled','');
		//0913 預算新增
		$('#Node_Finish').attr('disabled','');
		$('#datepicker_start').attr('disabled','');
		$('#datepicker_end').attr('disabled','');
		$('#budget').attr('disabled','');
		$('#leader').attr('disabled','');
	}
}

// 因為圖片加入後 位子都會噴掉 所以加上這段  原是M_NavigateToggleAll的內容
function M_icon() {
	jQuery('#dropdowntoolbarcontainer').accordion("activate",-1);
	//var view = gYApp.getView();
	//view.redrawTree(false);
}

function geticonfromoImg (oImg) {
	if (oImg == null || oImg == undefined)
		return;
	var src = oImg.src;  //  src = http://xxxx.xxxx.xxxx/ooo/aaa.gif
	arr = src.split('/');  // arr[arr.length-1] = aaa.gif
	var arr2 = arr[arr.length-1].split('.'); // arr2[0] = aaa
	return arr2[0];	
}

function geticonsfromnode(node) {
	var view = gYApp.getView();
	var nodeview = view.getNodeView(node);
	alert(nodeview.rows[0].cells[0]);
} 

function nodediscusstionsubmit() {
	if (node_dbar == null || node_dbar == undefined)
		return false;
	
	var html = "<p>" + editor.html() + "</p>";
	var msgdata = editor.html();
	editor.html('');
	var nowtime = new Date();

	var posttime = nowtime.getTime();

	var strtime = nowtime.getFullYear() + "-" + nowtime.getMonth() + "-" + nowtime.getDate() + " " + nowtime.getHours() + ":"+ nowtime.getMinutes() + ":" + nowtime.getSeconds();
	
	
	html += "<div style='text-align:right'><font size='1'>由 我 於 " + strtime + " 發表</font></div><hr>";
	$('#discusstion').append(html);
	$('#nodediscusstion').scrollTop(+1000); // 自動下捲

	$.post( "update", 
		{act: 'discusstion_save',NodeID:node_dbar.NodeID,Content:msgdata,posttime:posttime},
		function (res) {

	});
	
	socket.emit('nodediscuss', [node_dbar.NodeID,msgdata,posttime]);  // NodeID 討論內容本文 跟時間
}
function nodediscusstionclear() {
	editor.html('');
}

function M_Nodediscusstion() {
    ShowRightSideBar(); 
    

	var view = gYApp.getView();
	var node = view.getLastSelectedNode();

	if ( node == null ) {
		return false;
	}
	
	dbarinit();
	node_dbar = node;

	//0912 NEW 修改
    ShowNodeName(node.NodeID);


	M_LoadNodeDiscusstion(node.NodeID);
	M_LoadNodeInfo(node); // 將node資訊連帶讀取
	getfilelist(); // 將檔案清單連帶讀取
	if ($('#dropdowntoolbar_NodeDiscusstion').is(':hidden')) {  // 跳出node編輯視窗
		//$('#dropdowntoolbar_NodeEdit').show('normal');
		var accordions = jQuery('#dropdowntoolbarcontainer');
		accordions.accordion("activate", 0);
	}

	return true;
}

function M_LoadMapDiscussion (MapID) {	
	$.ajax({
		//async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'map_discussion_load', MapID: MapID},
		error: function(res){
			alert('Ajax Error: M_LoadMapDiscussion-discussion_load');
			return false;
		},
		success: function(res){
			var objnodediscussion = JSON.parse(res);
			// objnodediscusstion.length 表示有五筆資料 
			var html = '<hr />';
			for( var i=0; i<objnodediscussion.length; i++) {
				html += "<table border='0' width='100%'><tr><td style='text-align:left'>";
				if (objnodediscussion[i]['Receiver']='public') {
					html +=  "<img src='/pic/"+objnodediscussion[i]['filename']+"' class='img-thumbnail' width='7%' height='10%'>"+"&nbsp"+ objnodediscussion[i]['name'] + ": "+ objnodediscussion[i]['Content'] + "</td>";  // 內容
				} else {
					html +=  "[私]" + objnodediscussion[i]['Receiver'] + ": "+ objnodediscussion[i]['Content'] + "</td>";  // 內容
				}
				html += "<td  style='text-align:right'><font size='1'>" + timeformat(objnodediscussion[i]['Time']) + "</font></td></tr></table>";
			}
			$('#lines').html(html);
			return true;
		}
	});
}

function M_LoadNodeDiscusstion (NodeID) {
	
	$.ajax({
		//async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'discusstion_load', NodeID:NodeID},
		error: function(res){
			alert('Ajax Error: M_LoadNodeDiscusstion-discusstion_load');
			return false;
		},
		success: function(res){
			var objnodediscusstion = JSON.parse(res);
			// objnodediscusstion.length 表示有五筆資料 

			var html = '';
			for( var i=0; i<objnodediscusstion.length; i++) {
				html += "<p>" +  objnodediscusstion[i]['Content'] + "</p>";  // 內容
				//alert("HERE" + objnodediscusstion[i]['Time']);
				html += "<div style='text-align:right'><font size='1'>由 " + objnodediscusstion[i]['Poster'] + " 於 " + timeformat(objnodediscusstion[i]['Time']) + " 發表</font></div><hr>";
			}
			$('#discusstion').append(html);
			return true;
		}
	});
}

function timeformat (ms) {
	var date = new Date(ms);
	var year = date.getYear() + 1900;
	var seperator = "-";
	var month = date.getMonth()+1;
	var strDate = date.getDate();
	var strHour = date.getHours();
	var strMin = date.getMinutes();
	var strSec = date.getSeconds();
	
	if(month>=1 && month<=9)
	{
		month = "0"+month;
	}
	if(strDate>=0&& strDate<=9)
	{
		strDate = "0"+ strDate;
	}
	 return year+seperator+month+seperator+strDate+" "+strHour+":"+strMin+":"+strSec;
}

function socket_get_node_discuss(data) {
	if (node_dbar != null || node_dbar != undefined)
	{
		var NodeID = data[0];
		var msgdata = data[1];
		var posttime = data[2];
		var poster = data[3];
		
		if (node_dbar.NodeID == NodeID) // 如果正在觀看此node的討論資訊時  才會更新內容
		{		
			var html = msgdata + "<div style='text-align:right'><font size='1'>由 " + poster + "於 " + timeformat(posttime) + " 發表</font></div><hr>";
			$('#discusstion').append(html);
			$('#nodediscusstion').scrollTop(+1000); // 自動下捲
		}
	}
}

function fileupload() {
	//alert($('#thumbnail').attr('title'));
	
	var type;
	var NodeID;

	type = $('#filetypeselect').val();
	
	if (node_dbar == null || node_dbar == undefined) 
	{
		if (type == "node")
		{
			$('#fileuploadstate').text('請先選擇節點');
			return false;
		}
	}

	$('#fileuploadstate').text('uploading...');

	if (type == "node") {
		NodeID = node_dbar.NodeID;
	} else NodeID = 0;
	

	$.ajax({
			//async: false,
			url: 'update',
			type: 'POST',
			dataType: 'text',
			data: {act:'setnodeid', NodeID:NodeID},
			error: function(res){
				alert('Ajax Error:fileupload-setnodeid:'+res);
				return false;
			},
			success: function(res){
				if(res == "failed") {
					alert("Invalid server response.");
					return false;
				}
			    $('#thumbnail').upload('/upload', function(res) {
			    	$('#fileuploadstate').text(res);
			    	getfilelist(); // 重讀檔案清單
			    	socket.emit('renewfilelist');
					//alert('File uploaded');
					//$(res).insertAfter('#thumbnail');
				}, 'html');
				//$('#fileuploadform').submit();
			}
		});
}

function M_getfilelist() {
    ShowRightSideBar();
    
	var view = gYApp.getView();
	var node = view.getLastSelectedNode();
	if( node == null || node == undefined) return false;
	dbarinit();
	node_dbar = node;
	getfilelist();
 //0912 NEW 修改
	ShowNodeName(node.NodeID);
    

	M_LoadNodeDiscusstion(node.NodeID); // 將討論串連帶讀取
	M_LoadNodeInfo(node); // 將node資訊連帶讀取
	if ($('#dropdowntoolbar_NodeFiles').is(':hidden')) {  // 跳出node編輯視窗
		//$('#dropdowntoolbar_NodeEdit').show('normal');
		var accordions = jQuery('#dropdowntoolbarcontainer');
		accordions.accordion("activate", 2); //0907new  
	}
}

function getfilelist() {
	var type = $('#filetypeselect').val();	
	
	if(type == "map"){
		$.ajax({
			//async: false,
			url: 'update',
			type: 'POST',
			dataType: 'text',
			data: {act:'getfilelist_map'},
			error: function(res){
				alert('Ajax Error:getfilelist-getfilelist_map');
				return false;
			},
			success: function(res){
				if (res == "failed") {
					alert("Error! Cannot Read file list from server.");
					return false;
				}
				res = JSON.parse(res);
				
				var html = "<table class=\"table table-striped\" style='font-size:12'><tr><td>瀏覽</td><td>刪除</td><td>檔案名稱</td><td>上傳者</td><td>上傳時間</td></tr>";
	
				for ( var i=0; i<res.length; i++)
				{				
					//filedelete(arrfilename);   
					//html += "<div style='text-align:left'> <input type='button' onclick='fileopen(" + res[i].toString() + ")' value='瀏覽'/> <font size='2'>檔案名稱： " + res[i] + " </font></div>";
					html += "<tr><td><a href='/files?filename=" + res[i]['filename'].toString() + "' target='_blank'><img src='/ui/btn_find.gif'></a></td>";				
					html += "<td><a onclick=\"filedelete(" + res[i]['no'] + ");\"><img src='/ui/btn_x.gif'></a></td>";
					html += "<td>" + res[i]['filename'] + "</td>";
					html += "<td>" + res[i]['poster'] + "</td>";
					html += "<td>" + timeformat(res[i]['time']) + "</td></tr>";
				}
				//"onclick=\"" + onClick + ";\" " +
				
				html += "</table>";
				$('#filelist').text(''); // 清空檔案清單
				$('#filelist').append(html);
				return true;
				
			}
		});
	} else if (type == "node") 
	{
		if (node_dbar == null || node_dbar == undefined) 
			$('#filelist').text(''); // 清空檔案清單
		else {
			$.ajax({
				//async: false,
				url: 'update',
				type: 'POST',
				dataType: 'text',
				data: {act:'getfilelist_node',NodeID:node_dbar.NodeID},
				error: function(res){
					alert('Ajax Error:getfilelist-getfilelist_node');
					return false;
				},
				success: function(res){
					if (res == "failed") {
						alert("Error! Cannot Read file list from server.");
						return false;
					}
					res = JSON.parse(res);
					
					var html = "<table class=\"table table-striped\" style='font-size:12'><tr><td>瀏覽</td><td>刪除</td><td>檔案名稱</td><td>上傳者</td><td>上傳時間</td></tr>";
		
					for ( var i=0; i<res.length; i++)
					{
						//filedelete(arrfilename);   
						//html += "<div style='text-align:left'> <input type='button' onclick='fileopen(" + res[i].toString() + ")' value='瀏覽'/> <font size='2'>檔案名稱： " + res[i] + " </font></div>";
						html += "<div style='text-align:left'><tr><td><a href='/files?filename=" + res[i]['filename'].toString() + "' target='_blank'><img src='/ui/btn_find.gif'></a></td>";				
						html += "<td><a onclick=\"filedelete(" + res[i]['no'] + ");\"><img src='/ui/btn_x.gif'></a></td>";
						html += "<td>" + res[i]['filename'] + "</td>";
						html += "<td>" + res[i]['poster'] + "</td>";
						html += "<td>" + timeformat(res[i]['time']) + "</td>";
					}
					//"onclick=\"" + onClick + ";\" " +
					
					html += "</table>";
					$('#filelist').text(''); // 清空檔案清單
					$('#filelist').append(html);
					return true;					
				}
			});
		}
	}
	
	
}

function filedelete(fileno) {
	$.ajax({
		//async: false,
		url: 'update',
		type: 'POST',
		dataType: 'text',
		data: {act:'delfile',no:fileno},
		error: function(res){
			alert('Ajax Error:filedelete-delfile');
			return false;
		},
		success: function(res){
			getfilelist();
			$('#fileuploadstate').text('delete success');
			socket.emit('renewfilelist');
			return true;
		}
	});
}

function M_logplay() {
	window.open('/play','Log Play','height=1000,width=1000');
}
//這裡 <img src='/pic/"+objnodediscussion[i]['filename']+"' class='img-thumbnail' width='7%' height='10%'>"
//收到訊息 將訊息傳到其他人的聊天室中
//聊天室大頭貼
function updatmessage_public(data) {  // 得到 msg prjID uname
	//alert(data);
	var html = '';
	//alert(data[2]);
	html = "<img src='/pic/"+data[3]+"' class='img-thumbnail' width='5.7%' height='7%'>" + data[2] + '\t\t\t:\t\t\t' + data[0] + '<br/>';
	$('#lines').append(html);
	$('#messages').scrollTop(+1000);
}

function ZapChatBoard(){
	$("#lines").html("");
	$('#messages').scrollTop(+1000); // 自動下捲	
}

function updatmessage_private(data) {   // data = [session.uname+'[私信]',msg,prjID]
	if ($('#chatroommessagecontainer').is(':hidden')) {
		$('#chatroommessagecontainer').show('normal');
	}
	
	var html = '';
	html = data[0] + '\t\t\t:\t\t\t' + data[1] + '<br/>';
	$('#lines').append(html);
	$('#messages').scrollTop(+1000);
}

function updatmessage_error(data) { // data = [to_uname,msg]
	var html = '';
	html = '發送給 ' + data[0] + ' 的訊息失敗 (' + data[1] + ')<br/>';
	$('#lines').append(html);
	$('#messages').scrollTop(+1000);
}
	
function onconnecting() {
	if(isLoad == false) return;
	$.blockUI({ message: '<h3><img src="ui/busy.gif" /> Server connecting...</h3>' });
}

// 送出聊天訊息
function sendmessage() {
	var msgdata = $('#message').val();
	//alert(msg);

	if (msgdata.substring(0,1) == '@') // 表示這是私人訊息
	{
		var arr = msgdata.split(' ');
		var to_uname = arr[0].substring(1); // 接收者的uname
		$('#message').val( arr[0] + ' '); // 清除送出內容
		
		var msg = ''; // 去除掉 @xxx 後的訊息內容
		for( var i=1; i<arr.length; i++)
		{
			msg += arr[i] + ' ';
		}
		
		$('#lines').append('to ' + to_uname + '\t\t\t:\t\t\t' + msg + '<br/>');
		socket.emit('privatemessage', [to_uname,msg,prjID]);
	} else {
		if(msgdata == 'xxxxx'){
			//輸入xxxxx來清除版面中的訊息
			$('#message').val("");
			$("#lines").html("");
			socket.emit('delmessages', [prjID]); //call app.js中的delmessages
		}
		else{
			$('#message').val(""); // 清除送出內容
			$('#lines').append('我\t\t\t:\t\t\t' + msgdata + '<br/>');
			socket.emit('publicmessage', [msgdata,prjID]);
		}
	}
	
	$('#messages').scrollTop(+1000); // 自動下捲	
	$('#messages').focus();
}
//new 0914 預算新增
function socket_send_node_create(node) {
	//將其他人的心智圖新增節點
	var nodeContent = '新節點';
	//alert("hi");
  	//socket.emit('node_create', [node.NodeID, node.MapID, node.parentNode.NodeID, node.text, node.ps, node.starttime, node.endtime, node.created, node.pos, node.FinishDate]); // 
  	socket.emit('node_create', [node.NodeID, node.MapID, node.parentNode.NodeID, nodeContent, node.ps, node.starttime, node.endtime, node.created, node.pos, node.FinishDate]); // 
}
	
// 收到node_create訊息所要進行的動作 data包含了新增節點的資訊 依序為 NodeID,MapID,ParentNodeID,Content,Created,Position
function socket_get_node_create(data) {

	var NodeID = parseInt(data[0]),
		MapID = parseInt(data[1]),
		ParentNodeID = parseInt(data[2]),
		Content = data[3],
		ps = data[4],
		starttime = data[5],
		endtime = data[6],
		budget = data[7],
		leader = data[8],
		Created = parseInt(data[10]),
		Position = parseInt('0' + data[13],10),
		//0914 預算新增
		FinishDate = data[6];
	var view = gYApp.getView();

	var pnode = view.getNodeByNodeID(ParentNodeID); // 先抓到parent node
	var cnode = view.createNode(pnode, Content, Position, MapID, NodeID);

	if ( pnode == null ) {
	alert("pnode null");
		return false;
	}
	
	var isappend = view.appendChildNode_fromsocket(pnode,cnode);
	if ( isappend ) {
		gYApp.history.push(ACT_NODE_INSERT_C, [cnode.clone()]);
		//M_EditEditNode(CARET_ORG_SEL);
		return true;
	}
	return false;
}

function socket_send_node_edit(nodeid, content) {
	socket.emit('node_edit', [nodeid,content]);
}

function socket_get_node_edit(data) {
	var NodeID = parseInt(data[0]),
		Content = data[1];
		
		//ps = data[2];              //不需要
		//starttime = data[3];
		//endtime = data[4];
		//budget = data[5],
		//leader = data[6],

	var view = gYApp.getView();
	var node = view.tree.getNodeByNodeID(NodeID);
	
	if (node)
	{
		node.text = Content;
		/*node.ps = ps;              //不需要
		node.starttime = starttime;
		node.endtime = endtime;
		node.budget = budget;
		node.leader = leader;*/
		view.setNodeViewText(node, view.getNodeView(node));
		
		if ( node.isLongNode() ) {
			view.redrawTree(false);
		} else {
			view.drawNode(node, true, false);
		}
		
		if (node_dbar != undefined && node_dbar != null && node_dbar.NodeID == NodeID) { // 讓dropdownbar的node資訊可以同步更新
			M_LoadNodeInfo(node);
		}
	}
}

function socket_send_node_delete(arrnodeids) {
  	socket.emit('node_delete', arrnodeids); 
}

function socket_get_node_delete(arrnodeids) {
	//alert('delete' + arrnodeids);
	var arr = new Array;
	var view = gYApp.getView();
	for ( var i=0; i<arrnodeids.length; i++ ) {
		var node = view.tree.getNodeByNodeID(arrnodeids[i]);
		if( node != undefined)
		{
			var clone = node.clone();
			if ( view.deleteNode(node) ) {
				arr.push(clone);
			}
		}
	}

	view.selectedNodes.splice(0,view.selectedNodes.length);
	if ( arr.length > 0 ) {
		view.redrawTree(false);
	}
	
	gYApp.history.push(ACT_NODE_REMOVE, arr);
}

function showonline(n) {
	var html = '';
	n.forEach(function(v){
		//html += '<div style="border:1px solid #cccccc;" onclick="private_message(\'' + v + '\')">' + v + '</div>';		
		html += '<div style="border:1px solid #cccccc;"><input type="text" style="border:0px;TEXT-ALIGN:center;" size="5" onclick="private_message(\'' + v + '\')" value="' + v + '" readonly="readonly"><img src="/ui/webcam.gif" onclick="vediochat(\'' + v + '\')"></div>';
	});
	$('#onlinelist').html(html);
	//$('onlinelistcontrol').("線上人員 ( ++ )");
	$('#onlinepeople').text('線上人員 ( ' + n.length + ' )');
}

function socket_get_node_iconadd(data) { // 得到[NodeID,icon]
	//M_InsertIcons(data[0],data[1]);
	//socket_get_node_iconadd(data[0],data[1]);
	//alert(data);
		
	var NodeID = data[0];
	var name = data[1];
	var view = gYApp.getView();
	var bRootSelected = false;
	var node = view.getNodeByNodeID(NodeID);
	
	if ( node == undefined || node == null ) {
		return false;
	}
	
	if ( node.id == 'r') {
		bRootSelected = true;		
	}

	var arr = new Array;
	var cloneB = node.clone();	
	node.appendIcon(name);
			
	arr.push(cloneB);
	arr.push(node.clone());
	
	view.appendIconImg(node, node.getIconCount()-1);
				
	if ( !bRootSelected ) {
		view.drawNode(node, true, false);
	}
	if ( bRootSelected ) {
		view.drawNode(node, true, true);
	}
	
	arr = (arr.length > 0)? arr:null;		
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);		
	}
		
	
	
}

function socket_get_node_iconremove(data) { // data = NodeID,icon
	//alert('');
	/*
	var NodeID = parseInt(data[0]);
	var icon = data[1];
	var view = gYApp.getView();
	var node = view.getNodeByNodeID(NodeID);
	if ( node == undefined || node == null ) return null;
			
	var arricons = geticonsfromnode(node); // jy
	
	var oView = view.getNodeView(node);
	var oArea = view.getNodeViewArea(node, NODE_VIEW_ICON, oView);
	var iconIdx = 0; // 設定該icon前方有幾個icon 預設0	

	// find image index from node position
	var tmpImg = oImg.previousSibling;
	while ( tmpImg ) {
		tmpImg = tmpImg.previousSibling;
		iconIdx++; // 去找前方有幾個icon
	}

	var cloneB = node.clone();
	node.removeIcon(iconIdx);
	oArea.removeChild(oImg);
	
	if ( node.pos == NODE_POS_LEFT ) {
		var pView = view.getNodeView(node.parentNode);
		oView.style.left = pView.offsetLeft - oView.offsetWidth - NODE_VIEW_HGAP + "px";
	}				
	view.drawNode(node, true, false);
					
	var arr = [cloneB, node.clone()];	
	
	if ( arr ) {
		gYApp.history.push(ACT_NODE_ICON, arr);
	}
	
	return false;	
	*/
}

function socket_get_node_iconremoveall(data) { // data = nodeid
	M_RemoveAllIcons(parseInt(data));
}

//////////////////
//  http://api.jquery.com/attr/
function private_message(uname) { // 要跟uname的人聊天	
	
	if ($('#chatroommessagecontainer').is(':hidden')) {
		$('#chatroommessagecontainer').show();
	}

	$('#message').focus();
	$('#message').val('@' + uname + ' ');	

	/*
	// 動態創建div 跳出個別交談視窗 
	var divname = "chatprivatecontainer_" + uname;
	var div = document.createElement('div');

	$('div').attr("id", divname);
	$(divname).attr('html','ooxx');
	$('#chatcontrolbar').append($(divname));
	*/
}

//////////////
function dropdowntoolbar_nodeedittitleview() {
	$('#dropdowntoolbar_nodeeditcontainer_content').slideToggle('normal');
	$('#dropdowntoolbar_nodeeditcontainer_title').toggleClass('');
	return false;	
}

function dropdowntoolbar_discusstiontitleview() {
	
	$('#dropdowntoolbar_discusstioncontainer_content').slideToggle('normal');
	$('#dropdowntoolbar_discusstioncontainer_title').toggleClass('');
	return false;	
}

function onlinelistview()
{
	//alert('here');
	$('#onlinelist').slideToggle('normal');	
	$('#onlinelistcontrol').toggleClass('');
	return false;
}

function chatroomview(){
	$('#chatroommessagecontainer').slideToggle('normal');
	$('#chatroomcontrol').toggleClass('');
	return false;
}
function reload_status(mapid) {
	  socket.emit('reload',[mapid]);
	  LoadMap(mapid);
}
function socket_send_node_drag(tNodeID, sNodeID, dragpos) {
	socket.emit('node_drag', [tNodeID, sNodeID, dragpos]);
}

function socket_get_node_drag(data) {	
	var tNodeID = parseInt(data[0]),
		sNodeID = parseInt(data[1]),
		dragpos = parseInt(data[2]);
		
	var view = gYApp.getView();
	var tnode = view.getNodeByNodeID(tNodeID),
		snode = view.getNodeByNodeID(sNodeID);
	
	if ( tnode ) { //表示在同一map下操作			
			//var mousePos = F_GetMouseCoords(evt);
			//var oView = view.getNodeView(tnode);
			//var oPos = F_GetPosition(oView);
			var cloneB = snode.clone();			
			var bAttached = false;
			
			if ( tnode.indent == 0 ) { // 當有node被加入到跟節點下方時
				bAttached = view.tree.attachToNode(tnode, snode, dragpos);
			} else {
				if ( gYApp.dragPos == NODE_POS_UP ) { // 當某一節點 拖到某一節點上方時 其順序會改變至該節點的前面 (非變成parent)
					bAttached = view.tree.attachToNode(tnode, snode, tnode.pos, true);
				} else { // 當有節點加入到非根節點的下方時
					bAttached = view.tree.attachToNode(tnode, snode, tnode.pos);
				}
			}

			
			if ( bAttached ) { // 如果node有被拖曳成功過
				if ( tnode.folded ) { // 如果拖曳到一個已經folded的節點上 會加入到該node後面 並將該node展開
					view.toggleNode(tnode);
				}
				view.redrawTree(false);
				
				var cloneA = snode.clone();
				gYApp.history.push(ACT_NODE_MOVE, [cloneB, cloneA]);
			}
			
			/*
			if ( !bAttached ) { // 拖曳無更動
				gYApp.dragObject.style.left = gYApp.dragOldLeft + "px";
				gYApp.dragObject.style.top = gYApp.dragOldTop + "px";
			} else {
				view.selectNode(snode, false, false);
			}
			*/
			//gYApp.dragObject.style.zIndex = 10;
			
			//view.hideNodeSelector();

			gYApp.dragObject = null;
			view.panelD.style.cursor = "default";
			/*
			if ( gBrowserDetect.browser == "Explorer" ) {
				evt.cancelBubble = true;
			} else {
				evt.stopPropagation();
			}
			*/		
	}
}


function init() {
	yTree = new YTree("Start");
	yView = new YView(yTree, document.getElementById("panelDOM"), document.getElementById("panelSVG"));
	//yView = new YView(yTree, $('#panelDOM'), $('#panelSVG'));

	yView.setNodeEditor(document.getElementById("nodeEditor"));
	yView.setLongNodeEditor(document.getElementById("longNodeEditor"));
	yView.setImageChooser(document.getElementById("imageChooser"));
	yView.setHyperlinkChooser(document.getElementById("hyperlinkChooser"));
	yView.setColorChooser(document.getElementById("colorChooser"));
	yView.setFontNameSelector(document.getElementById("fontNameSelector"));
	yView.setFontSizeSelector(document.getElementById("fontSizeSelector"));
	
	yApp = new YApp(yView);
	yApp.createMenu("menu1");
	yView.redrawTree(true);
}

//儲存用 已拿掉 改成自動儲存
function ajaxSaveArray() {
	var xmlstr = yTree.unLoadFreeMind(yTree.rootNode);
	//alert(xmlstr);
	//ajax post to server side php	
	$.post( "updateNode.php", 
	{act: 'save', json: xmlstr}, 
	function (data) {
		alert(data);  // 儲存成功 跳出saved畫面
	});
}

// 20120511 remove 
// 列出所有專案清單
function ajaxListProject() {
	//get current project list from ajax	
	$.post( "update", 
			{act: 'listPrj'},
			function (prjList) {
				
				prjList = "<input type='button' value='Close' onclick=hideDIV('ProjectSelector')><hr />"+prjList;
				$('#ProjectSelector').html(prjList);
				showDIV('ProjectSelector');
	});
}


//讀檔
function ajaxLoadMap(prjID) {
	prjID = parseInt(prjID);

	//hideDIV('ProjectSelector');	
	isLoad = true;
	
	if( gYApp != null)
	{
		gYApp.history.clear();
		gYApp.view.redrawTree(true);
		if ( gYApp.menu ) gYApp.menu.hideAll();
		gYApp.history.clear();

		var view = gYApp.getView();
		view.deleteNodeView(view.tree.rootNode);		
	}
	
	init();
	
	yTree.loadFreeMind(prjID);   //loadFreeMind讀檔傳入一個專案ID 建立成tree
	yView.redrawTree(true);

	setCurrentPrjID(prjID);	
	socket.emit('set_mapid', prjID);
	M_loglistreload(); // 將專案歷程一起讀進來
    checkstatus(prjID);
	isLoad = false;	
	$.unblockUI();
	M_LoadMapDiscussion(prjID); // 將討論串連帶讀取
}

function showDIV(id) {
	obj=document.getElementById(id);
	if (obj) { obj.style.display='block'; }
}

function hideDIV(id) {
	obj=document.getElementById(id);
	if (obj) { obj.style.display='none'; }
}

function setCurrentPrjID(id) {
	prjID=id;
}

function getCurrentPrjID() {
	return prjID;
}

function M_loglistreload() {
	$('#loglist').text('');
	$.post( "update", 
	{act: 'loglistload'}, 
	function (data) {		
		var arrlog = JSON.parse(data);
		//var html = "";
		//html += "<tr><td>" + timeformat(arrlog[i]['time']) + "</td><td>" + arrlog[i]['action'] +"</td><td>" + arrlog[i]['uname'] + "</td></tr><hr>";
		var html = "<table align='center' class='table table-striped' style='font-size:16'><tr class='active'><td>時間</td><td>行為</td><td>操作人</td></tr>";
		for(var i=0;i<arrlog.length;i++)
		{						
			var myact;		
			var colortype;	
			if (arrlog[i]['action'] == "node_create") {
				myact="新增節點";
				colortype="success";
		    }
			if (arrlog[i]['action'] == "node_edit"){
				 myact="編輯節點";
				 colortype="warning";
			}
			if (arrlog[i]['action'] == "node_drag") {
				myact="移動節點";
				colortype="warning";
			}
			if (arrlog[i]['action'] == "node_delete"){
				 myact="刪除節點";
				 colortype="danger";
			}
			if (arrlog[i]['action'] == "node_iconadd") {
				myact="加入圖示";
				colortype="info";
			}
			if (arrlog[i]['action'] == "node_iconremoveall"){
				 myact="移除圖示";
				 colortype="danger";
			}
			
		

			//html += "<div style='text-align:left'><font size='1'>" + timeformat(arrlog[i]['time']) + "</font></div><hr>";
			html += "<tr class='"+colortype+"'><td>" + timeformat(arrlog[i]['time']) + "</td ><td>" + myact +"</td><td>" + arrlog[i]['uname'] + "</td></tr>";
			
		}
		html += "</table>";
		$('#loglist').append(html);
	});
}

function vediochat(uname) {	
	socket.emit('vediochat_private', uname);  // 
}

function vediochat_private_local(data) {  // data = [from_uname,to_uname,from_uid,to_uid]
	var from_uname = data[0];
	var to_uname = data[1];
	var from_uid = data[2];
	var to_uid = data[3];

	// 自己的視訊設定
	//$('#vediochat_local').prop('src','rtmp://163.22.32.104/myapp?publish=' + from_uname);
	
	var newElement = document.createElement('div');	
	var objid = 'vediochat_local';
	
	if(!document.getElementById(objid)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement.id = objid;
	} else {
		return false;
	}			
var vediostr = "<object type='application/x-shockwave-flash' data='http://" + nodeWebSite+"/VideoIO.swf' width='200 height='160'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://"+rtmpSite+"/myapp?publish=" + from_uid + "'/></object>";
//	var vediostr = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='200 height='160'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://127.0.0.1/myapp?publish=" + from_uid + "'/></object>";
	newElement.innerHTML = vediostr;	
	newElement.style.position = 'fixed';
	newElement.style.bottom = '0px';
	newElement.style.left = '0px';
	newElement.style.width = '180px';
	newElement.style.height = '150px';
	document.body.appendChild(newElement);	

	// 對方的視訊	
	var newElement2 = document.createElement('div');	
	var objid2 = 'vediochat_' + from_uname;
	
	if(!document.getElementById(objid2)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement2.id = objid2;
	} else {
		return false;
	}	
	
	newElement2.title = 'vedio chat with ' + to_uname;   
var vediostr2 = "<object type='application/x-shockwave-flash' data='http://"+nodeWebSite+"/VideoIO.swf' width='300' height='240'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://"+rtmpSite+"/myapp?play=" + to_uid +"'/></object>";	
//	var vediostr2 = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='300' height='240'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://127.0.0.1/myapp?play=" + to_uid +"'/></object>";
	newElement2.innerHTML = vediostr2;
	document.body.appendChild(newElement2);

	$('#' + newElement2.id).dialog();
	$('#' + newElement2.id).bind( "dialogclose", function(event, ui) {
		$('#' + newElement2.id).dialog("destroy");
		$('#' + newElement.id).remove();
		$('#' + newElement2.id).remove();
	});
}

// 收到通知 別人想和我視訊通話
function vediochat_private_remote(data) { // data = [from_uname,to_uname,from_uid,to_uid]	
	var from_uname = data[0];  // 這是別人的姓名
	var to_uname = data[1];  // 這是我的姓名
	var from_uid = data[2];
	var to_uid = data[3];	

	// 自己的視訊設定
	var newElement = document.createElement('div');	
	var objid = 'vediochat_local';
	
	if(!document.getElementById(objid)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement.id = objid;
	} else {
		return false;
	}		
	
	var vediostr = "<object type='application/x-shockwave-flash' data='http://"+nodeWebSite+"/VideoIO.swf' width='200 height='160'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://"+rtmpSite+"/myapp?publish=" + to_uid + "'/></object>";
//	var vediostr = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='200 height='160'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://127.0.0.1/myapp?publish=" + to_uid + "'/></object>";	
	newElement.innerHTML = vediostr;
	
	newElement.style.position = 'fixed';
	newElement.style.bottom = '0px';
	newElement.style.left = '0px';
	newElement.style.width = '200px';
	newElement.style.height = '160px';
	document.body.appendChild(newElement);
			
	// 對方的視訊
	var newElement2 = document.createElement('div');	
	var objid2 = 'vediochat_' + from_uname;
	
	if(!document.getElementById(objid2)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement2.id = objid2;
	} else {
		return false;
	}
	
	newElement2.title = 'vedio chat with ' + from_uname;
var vediostr2 = "<object type='application/x-shockwave-flash' data='http://"+nodeWebSite+"/VideoIO.swf' width='300' height='240'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://"+rtmpSite+"/myapp?play=" + from_uid +"'/></object>";
//	var vediostr2 = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='300' height='240'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://127.0.0.1/myapp?play=" + from_uid +"'/></object>";	
	newElement2.innerHTML = vediostr2;
	document.body.appendChild(newElement2);

	$('#' + newElement2.id).dialog();
	$('#' + newElement2.id).bind( "dialogclose", function(event, ui) {
		$('#' + newElement2.id).dialog("destroy");
		$('#' + newElement.id).remove();
		$('#' + newElement2.id).remove();
	});	
}

function vediochat_broadcast(){
	socket.emit('vediochat_broadcast');
}

function vediochat_broadcast_local(data) {  // data = [from_uid]	
	var from_uid = data[0];
	
	// 自己的視訊設定
	var newElement = document.createElement('div');	
	var objid = 'vediochat_local';
	
	if(!document.getElementById(objid)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement.id = objid;
	} else {
		return false;
	}
	
var vediostr = "<object type='application/x-shockwave-flash' data='http://"+nodeWebSite+"/VideoIO.swf' width='200 height='160'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://"+rtmpSite+"/myapp?publish=" + from_uid + "'/></object>";
//	var vediostr = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='200 height='160'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&cameraQuality=80&src=rtmp://127.0.0.1/myapp?publish=" + from_uid + "'/></object>";	
	newElement.innerHTML = vediostr;
	
	newElement.style.position = 'fixed';
	newElement.style.bottom = '0px';
	newElement.style.left = '0px';
	newElement.style.width = '200px';
	newElement.style.height = '160px';
	document.body.appendChild(newElement);	
}

function vediochat_broadcast_remote(data) { // data = [from_uname,from_uid]
	var from_uname = data[0];
	var from_uid = data[1];

	// 遠端廣播的視訊
	var newElement2 = document.createElement('div');	
	var objid2 = 'vediochat_' + from_uname;
	
	if(!document.getElementById(objid2)) { // 先判斷視訊聊天室窗是否有重複開啟
		newElement2.id = objid2;
	} else {
		return false;
	}
	
	newElement2.title = from_uname + ' broadcast';
	var vediostr2 = "<object type='application/x-shockwave-flash' data='http://"+nodeWebSite+"/VideoIO.swf' width='300' height='240'><param name='movie' value='http://"+nodeWebSite+"/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://"+rtmpSite+"/myapp?play=" + from_uid +"'/></object>";
//	var vediostr2 = "<object type='application/x-shockwave-flash' data='http://127.0.0.1:8080/VideoIO.swf' width='300' height='240'><param name='movie' value='http://127.0.0.1:8080/VideoIO.swf' /><param name='quality' value='high' /><param name='bgcolor' value='#000000' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='' /><param name='flashVars' value='controls=true&src=rtmp://127.0.0.1/myapp?play=" + from_uid +"'/></object>";	
	newElement2.innerHTML = vediostr2;
	document.body.appendChild(newElement2);

	$('#' + newElement2.id).dialog();
	$('#' + newElement2.id).bind( "dialogclose", function(event, ui) {
		$('#' + newElement2.id).dialog("destroy");		
		$('#' + newElement2.id).remove();
	});
}

function vediochat_broadcast_stop() {
	//socket.emit('vediochat_broadcast_stop');
	$('#vediochat_local').remove();
}

// 20120607 功能尚未放上去
function vediochat_broadcast_stop_local(data) {  // data = [from_uid]	
	var from_uid = data[0];
	$('#vediochat_local').remove();
}

// 20120607 功能尚未放上去
function vediochat_broadcast_stop_remote(data) { // data = [from_uname,from_uid]
	
}

// 20141001 開視窗  ip更改
function openwindow1() {
    window.open("http://127.0.0.1/views/chart/search.php");
}
function openwindow2() {
    window.open("http://127.0.0.1/prjAdm/admin.php");
}
//20150609 node即時資訊
function M_LoadNodeBriefInfo(node){
        if (node == null ) return ;
        $.ajax({
                async: false,
                url: 'update',
                type: 'POST',
                dataType: 'text',
                data: {act:'loadbriefnodeinfo', NodeID:node},
                error: function(res){
                        alert('Ajax Error: Load Node Info.');
                },
                success: function(res){
                        if (res == "failed") {
                                //alert("Error loading node info from server.");
							// $("#briefInfo").html("");
							$("#briefInfo_Content").html("");
							$('#briefInfo_leader').html("");
							$("#briefInfo_starttime").html("");
							$("#briefInfo_endtime").html("");
							$("#briefInfo_budget").html("");
							$('#progressbar').empty();
                        } else {
							//先清空現有資訊
							// $("#briefInfo").html("");
							$("#briefInfo_Content").html("");
							$('#briefInfo_leader').html("");
							$("#briefInfo_starttime").html("");
							$("#briefInfo_endtime").html("");
							$("#briefInfo_budget").html("");
							$('#progressbar').empty();
							//插入新資訊
							var nodeinfo = JSON.parse(res);
							
							// $('#briefInfo').append("<b>----Node相關資訊----</b>");
							$('#briefInfo_Content').append("名稱:"+ nodeinfo.Content);
							$('#briefInfo_leader').append("負責人:"+ nodeinfo.leader);
							$('#briefInfo_starttime').append("起始時間:"+ nodeinfo.starttime);
							$('#briefInfo_endtime').append("結束時間:"+ nodeinfo.endtime);
							$('#briefInfo_budget').append("預算:"+ nodeinfo.budget);
							var d1=new Date(nodeinfo.starttime);
							var d2=new Date(nodeinfo.endtime);
							var d3=(d2-d1)/86400000;
							var now =new Date();
							var d4=(now-d1)/86400000;
							d4 = 100*(d4/d3); 
							d4 = Math.round(d4*100)/100.00;
							if(d4 > 100){
								d4 = 100;
							}else if(d4<0){
								$('#progressbar').append("Time bar:"+d4+"%<div style=\"background-image:url(/pic/pb00.jpg);\"><img src=\"/pic/pb03.jpg\" width=\""+d4+"%\" height=\"20\" /></div>");
							}
							if(0<=d4 && d4<100){
								$('#progressbar').append("Time bar:"+d4+"%<div style=\"background-image:url(/pic/pb00.jpg);\"><img src=\"/pic/pb01.jpg\" width=\""+d4+"%\" height=\"20\" /></div>");
							}else if(d4 == 100){
								$('#progressbar').append("Time bar:"+d4+"%<div style=\"background-image:url(/pic/pb00.jpg);\"><img src=\"/pic/pb02.jpg\" width=\""+d4+"%\" height=\"20\" /></div>");
							}
                        } //$('#progressbar').append("<img src=\"/pic/pb02.jpg\" width=\""+d4+"%\" height=\"30px\" />");
                }
        });
}

//0924 選取節點的資訊顯示 新增
function M_LoadSelectedNodeInfo(node){
    $.ajax({
        async: false,
        url: 'update',
        type: 'POST',
        dataType: 'text',
        data: {act:'loadbriefnodeinfo', NodeID:node},
        error: function(res){
                alert('Ajax Error: Load Node Info.');
        },
        success: function(res){
    
    		$("#CurrentNodePerson").html("");
			$("#CurrentNodeStart").html("");
			$('#CurrentNodeEnd').html("");
			$("#CurrentBudget").html("");
			$("#CurrentSpend").html("");
			$("#CurrentFinish").html("");
			var nodeinfo = JSON.parse(res);

			$('#CurrentNodePerson').append(nodeinfo.leader);
			$('#CurrentNodeStart').append(nodeinfo.starttime);
			$('#CurrentNodeEnd').append(nodeinfo.endtime);
			$('#CurrentBudget').append(nodeinfo.budget);
			$('#CurrentSpend').append(nodeinfo.ps);
			$('#CurrentFinish').append(nodeinfo.FinishDate);
        }
    });
}


//2015/6/30  Person
function getCookieValue(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) 
            return c.substring(name.length,c.length);
    }
    return "";
}

//============================新增===================
function getUserID(){
    var userID;
    
}
//0921 介面
function OpenAddNewProject(){
        $.blockUI({ 
            message: $('#addProjectForm'),
            css: { 
            	width: '60%',
            	height: '30%',
            	 backgroundColor: '#FFFFFF', 
               '-webkit-border-radius': '40px', 
               '-moz-border-radius': '40px',
               left:'20%',
               top:'15%'


     	   }            
        }); 
}

function AddNewProject(name){
    $.ajax({
        url:'addProject',
        type:'POST',
        async:false,
        dataType: 'text',
        data:{Name: name},
        success:function(res){

            AddNewProject1(res);
            //$.unblockUI();
        },
        error: function(){
            alert('無法新增專案');
            $.unblockUI();
        }
    });
}

function AddNewProject1(mapname){
var detail;
var Mapname = mapname;
var mapid;
var username; //在這個function得到username 用json轉成的物件去取值
    $.ajax({
        url:'addProject1',
        type:'POST',
        async:false,
        dataType: 'text',
        data:{Name: mapname},
        success:function(res){
            //res = JSON.parse(res); //將json result轉換為物件
            //date = detail[0]['created'];

          
            detail = JSON.parse(res); //將json result轉換為物件
            username = detail.user; //注意app.js中 url addProject1 裡的json宣告為什麼 
            mapid = detail.mapID;

            AddNewProject2(mapid,Mapname,username);
        },
        error: function(){
            alert('無法新增專案');
            $.unblockUI();
        }
    });
}
function AddNewProject2(mapid,mapname,username){//新增accesscontrol到資料庫
var Mapid1 = mapid; //避免跟下面 的Mapid重複
var Mapname = mapname;
var Username = username;
    $.ajax({
        url:'addProject2',
        async:false,
        type:'POST',
        dataType: 'text',
        data:{Mapid: mapid},
        success:function(res){
        },
        error: function(){
            alert('無法新增專案');
            $.unblockUI();
        }
    });
    
    $.ajax({
        url:'/addNewProjectNodeInfo',
        type:'POST',
        async:false,
        dataType:"text",
        data:{Mapid:mapid,  Name:mapname,  creater:username},
        success:function(res){
            //alert('新增成功!');
            return true;
        },
        error:function(){
            $.unblockUI();
        }
    });
    
      $.unblockUI();
      location.reload() ;
}

//刪除專案
function OpenDeleteProject(){
        $.blockUI({ 
            message: $('#deleteProjectForm'),
            css: { 
              width: '20%',
              top:'35%',
              left:'40%',
              height:'30%',
              backgroundColor: '#FFFFFF', 
               '-webkit-border-radius': '40px', 
               '-moz-border-radius': '40px'
        	}            
            
        }); 
}

function deleteProject(mapid){
    
    $.ajax({
        url:'delete',
        type:'POST',
        dataType:'text',
        data:{Mapid: mapid},
        success:function(){
            alert('刪除成功');
            $.unblockUI();
             location.reload() ;
        },
        error:function(){
            alert('刪除失敗');
             $.unblockUI();
        },
    });
}

function getUserName(){
var username;
    $.ajax({
        url:'userid',
        type:'POST',
        async:false,
        dataType:'text',
        success:function(result){
            username = result;
        },
        error:function(){
            alert('fail');
            username = '訪客';
        }
    });
    return username;
}
//0913 budget new
function projectDetail(mapid){
var detail;
var status;
var date;

    $.ajax({
        url:'projectDetail',
        type:'POST',
        async:false,
        data:{Mapid:mapid},
        dataType:'text',
        success:function(result){
            detail = JSON.parse(result); //將jsonresult轉換為物件
            date = detail[0]['created'];
            //alert(detail);
    
            $("#Detailuser").replaceWith("<div id='Detailuser'>"+  detail[0]['mapid'] +" </div>");
            //0912 new 修改
            if(detail[0]['status'] == '0'){
                status = '執行中';
            }else if(detail[0]['status'] == '2'){
                status = '已結案';
            }else if(detail[0]['status'] == '1'){
            	status = '規劃中';
            }
            $("#Detailname").replaceWith("<div id='Detailname'>" + detail[0]['name'] +"</div>");
            $("#Detailstatus").replaceWith("<div id='Detailstatus'>"+  status +" </div>");
            //$("#Detaildate").replaceWith("<div id='Detaildate'>" + dataformat(detail[0]['created'])+ "</div>");
            $("#Detaildate").replaceWith("<div id='Detaildate'>" + detail[0]['EndTime']+ "</div>");
            $("#Detailstartdate").replaceWith("<div id='Detailstartdate'>" + detail[0]['StartTime']+ "</div>");
            //0913 budget new
            $("#DetailTotalBudget").replaceWith("<div id='DetailTotalBudget'>" + detail[0]['TotalBudget']+ "</div>");
  			$("#showProjectBudget").replaceWith("<div id='showProjectBudget'>" + detail[0]['TotalBudget']+ "</div>");

  			//0920 介面修改 新增
            $("#Project_start").attr('value',detail[0]['StartTime']);
            $("#Project_end").attr('value',detail[0]['EndTime']);
            $("#ProjectBudget").attr('value',detail[0]['TotalBudget']);
        
            switch(detail[0]['status']){
            	case 0: $("input[name=Projectstatus][value='0']").attr('checked',true);  break;
            	case 1: $("input[name=Projectstatus][value='1']").attr('checked',true);  break;
            	case 2: $("input[name=Projectstatus][value='2']").attr('checked',true);  break;
            }
            //0920 介面新增 
            $("#showProjectBuget").replaceWith("<div id='showProjectBuget'>" + detail[0]['TotalBudget'] +"</div>");
            $("#showProjectStartDay").replaceWith("<div id='showProjectStartDay'>" + detail[0]['StartTime'] +"</div>");
            $("#showProjectEndtDay").replaceWith("<div id='showProjectEndtDay'>" + detail[0]['StartTime'] +"</div>");
            
            $("#showProjectStatus").replaceWith("<div id='showProjectStatus'>" + status +"</div>");
            
        },
        error:function(){
            alert('fail');
        }
    });
    
	//0904new
        $.ajax({
        url:'/getProjectMember',
        type:'POST',
        async:false,
        dataType:'text',
        data:{Mapid:mapid},
        success:function(result){
            member = JSON.parse(result); //將jsonresult轉換為物件
            var data = "<ul>";
            for(var i=0; i<member.length;i++)
              //if(member[i]['filename']= "undefined")	
                data +=  "<li><img class='img-circle' src='/pic/" + member[i]['filename']+ "' width='50px' height='50px'> "+ member[i]['name']+"</li>";
            data += "</ul>";
              $("#DetailMember").replaceWith("<div class='DetailMember' id='DetailMember'>" + data+ "</div>");

            
        },error:function(){alert('fail');}
    });

    return detail;
    
}
        
function OpenUploadPic(){
        $.blockUI({ 
            message: $('#changeUserPic'),
            css: { width: '400px'}            
            
        }); 
}

function UploadUserPic(){
    $('#thumbnail').upload('/uploadUserpic', function(res) {
        //alert('success' + res);
        $.unblockUI();
         location.reload();
    }, 'html');

}

function GetUserPicture(){
    $.ajax({
        url:'/getUserPicture',
        type:'POST',
        dataType:'text',
        success:function(res){
            var result = JSON.parse(res);
            
            var length = Object.keys(result).length;
            var filename = result[0]['filename']; //因為目前還沒有將之前使用者上傳的照片刪除 所以用最後一個新增到資料庫的id (也就是物件的長度作為使用者的大頭貼
            $('#userPic').replaceWith("<img src='/pic/" + filename+ "' width='100px' height='100px'> ");
      


        },
        error:function(){
            alert('fail');
        }
    });
}
    
////////////////////////////////////////////////////////////////////////////////////////////conference 的權限編輯
// function checkProjectOwner(){
//     $.ajax({
//         url:'/checkProjectOwner',
//         dataType:'text',
//         type:'POST',
//         success:function(results){
//             if(results == "YES") M_SetAuthorities();
//             else alert('你不是專案總負責人');
//         },error:function(){
//            alert('fail');
//         }
//     });
// }
        
// function M_SetAuthorities(){
//     var view = gYApp.getView();
//     var node = view.getLastSelectedNode();
//     var nodeID = node.NodeID;
//     //取得目前選取的node值
    
//     $.blockUI({
//         message:$('#nodeAuthority'),
//         css:{
//               width: '50%',
//               top:'10%',
//               left:'25%',
//               height:'60%',
//               backgroundColor: '#FFFFFF', 
//                '-webkit-border-radius': '40px', 
//                '-moz-border-radius': '40px'
// 	    }
//     });
//     //show出專案人員供選擇
//     $.ajax({
//         url:'/listProjectMember',
//         type:'POST',
//         dataType:'text',
//         success(results){ //會傳回 <option>帶有專案成員的值
//             $('#projectMember').replaceWith("<div id='projectMember'>" + results +"</div>");
//         },error:function(){
//             //alert('fail');
//         }
//     });
//     //show出 目前已經可以編輯此node的人員
//     $.ajax({
//         url:'/listNodeMember',
//         type:'POST',
//         dataType:'text',
//         data:{NodeID:nodeID},
//         success(results){
//             $('#nodeMember').replaceWith("<div id='nodeMember'>" + results +"</div>");
//         },error:function(){
//             alert('fail');
//         }
//     });
// }

function SetAuthority(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    
    var islock=1; 
    if($("input[name=lock]:checked").val() == 'Yes')  islock= 1;  //是否要鎖節點 radio中的是或否的值
    else islock=0;   

    //寫入map中的 islock
    $.ajax({
        url:'/islock',
        type:'POST',
        data:{NodeID:nodeID,Islock:islock},
        dataType:'text',
        success:function(){
        },error:function(){}
    });
    

    $.unblockUI();
}
function addNodeEditMember(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    //以上取得目前所選的nodeID值
    var member = $('#memberSelect').val();
    
    $.ajax({
        url:'/AddNodeMember',
        type:'POST',
        data:{Member:member,NodeID:nodeID},
        dataType:'text',
        success:function(result){
            alert(result);
        },error:function(){
            alert('fail');
        }
    });
}
    
function DeleteNodeEditMember(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    var member = $('#NodeMemberInclude').val();
    
    $.ajax({
        url:'/DeleteNodeMember',
        type:'POST',
        data:{Member:member,NodeID:nodeID},
        dataType:'text',
        success:function(result){
            //alert(result);
            return true;
        },error:function(){
            alert('fail');
        }
    });
}
function CancelSetAuthority(){
    $.unblockUI();
}

function checkAuthority(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
        url:'/getPermmit',
        type:'POST',
        async:false,
        dataType:'text',
        data:{NodeID:nodeID},
        success:function(result){
            //檢查app.post('/getPermmit'回傳值用  alert(result); 
            if(result == "false"){
               //alert('該節點已鎖住');  //0828new
                showLockMessage();
               return false;
            }
            else return true;
        },error:function(){
            alert('fail');
        }
        
    });
}

function LoadNewMap(){
    var selectMapID = $('#prjselect').val();
    document.cookie ="prjselect=" + selectMapID;
    window.location = '/conference';
}

//0830 lin
function checkProjectOwner(){
    $.ajax({
        url:'/checkProjectOwner',
        dataType:'text',
        type:'POST',
        success:function(results){
            if(results == "YES") M_SetAuthorities();
            else alert('你不是專案總負責人');
        },error:function(){
           alert('fail');
        }
    });
}
function M_SetAuthorities(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    //alert(nodeID);
    //取得目前選取的node值
    
    $.blockUI({
        message:$('#nodeAuthority'),
          css:{
              width: '50%',
              top:'10%',
              left:'25%',
              height:'80%',
              backgroundColor: '#FFFFFF', 
               '-webkit-border-radius': '40px', 
               '-moz-border-radius': '40px'
	    }
    });
    //show出 目前已經可以編輯此node的人員
    /*
    $.ajax({
        url:'/listNodeMember',
        type:'POST',
        dataType:'text',
        data:{NodeID:nodeID},
        success(results){
            $('#nodeMember').replaceWith("<div id='nodeMember'>" + results +"</div>");
        },error:function(){
            alert('fail');
        }
    });
    */
    listProjectMember();
    checkNodeEditStatus(nodeID);
    listNodeMember(nodeID);

}

function listProjectMember(){
 //show出專案人員供選擇
    $.ajax({
        url:'/listProjectMember',
        type:'POST',
        dataType:'text',
        success:function(results){ //會傳回 <option>帶有專案成員的值
            $('#projectMember').replaceWith("<div id='projectMember'>" + results +"</div>");
        },error:function(){
            //alert('fail');
        }
    });
}

function listNodeMember(nodeID){
	//alert(nodeID);
    $.ajax({
        url:'/listNodeMember',
        type:'POST',
        dataType:'text',
        data:{NodeID:nodeID},
        success:function(results){
            $('#nodeMember').replaceWith("<div id='nodeMember'>" + results +"</div>");
        },error:function(){
            alert('fail');
        }
    });
}
//待修正 ajax呼叫不到
function checkNodeEditStatus(nodeID){
	//alert("hello");
    $.ajax({
		url:'/checkNodeEditStatus',
		type:'POST',
		async:false,
		dataType:'text',
		data:{NodeID:nodeID},
		success:function(results){
			//alert("fuck");
			var data = JSON.parse(results);
            
			switch(data[0]['islock']){
	        	case 0:
	        	    $('input[name="lock"]')[1].checked = true;
	        	    hideNodeAuthorityMember();
	        	    //$("input[name='lock'][value='NO']").attr('checked',true);  
	        	    break;
	        	case 1: 
	        		$('input[name="lock"]')[0].checked = true;
	        		showNodeAuthorityMember();
	        	    //$("input[name='lock'][value='Yes']").attr('checked',true); 
	        	    break;
	        }
		}
    });
    //alert("hi");
}

function SetAuthority(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    
    var islock=1; 
    if($("input[name=lock]:checked").val() == 'Yes')  islock= 1;  //是否要鎖節點 radio中的是或否的值
    else islock=0;   

    //寫入map中的 islock
    $.ajax({
        url:'/islock',
        type:'POST',
        data:{NodeID:nodeID,Islock:islock},
        dataType:'text',
        success:function(){
        },error:function(){}
    });
    

    $.unblockUI();
}
function addNodeEditMember(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    //以上取得目前所選的nodeID值
    var member = $('#memberSelect').val();
    
    $.ajax({
        url:'/AddNodeMember',
        type:'POST',
        data:{Member:member,NodeID:nodeID},
        dataType:'text',
        success:function(result){
            alert(result);
            listNodeMember(nodeID);
        },error:function(){
            alert('fail');
        }
    });
}
function DeleteNodeEditMember(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    var member = $('#NodeMemberInclude').val();
    
    $.ajax({
        url:'/DeleteNodeMember',
        type:'POST',
        data:{Member:member,NodeID:nodeID},
        dataType:'text',
        success:function(result){
            alert(result);
            listNodeMember(nodeID);
        },error:function(){
            alert('fail');
        }
    });
}
function CancelSetAuthority(){
    $.unblockUI();
}

function checkAuthority(){
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
        url:'/getPermmit',
        type:'POST',
        async:false,
        dataType:'text',
        data:{NodeID:nodeID},
        success:function(result){
            //檢查app.post('/getPermmit'回傳值用  alert(result); 
            if(result == "false"){
               //alert('該節點已鎖住');  //0828new
                showLockMessage();
               return false;
            }
            else return true;
        },error:function(){
            alert('fail');
        }
        
    });
}

function showLockMessage(){
     $.blockUI({ 
            message: '<h1>該節點已被鎖住</h1>', 
            fadeIn: 700, 
            fadeOut: 700, 
            timeout: 2000, 
            showOverlay: false, 
            centerY: true, 
            css: { 
                width: '350px', 
                top: '80%', 
                left: '50', 
                right: '10px', 
                border: 'none', 
                padding: '5px', 
                backgroundColor: '#000', 
                '-webkit-border-radius': '40px', 
                '-moz-border-radius': '40px', 
                opacity: .6, 
                color: '#fff' 
            } 
        }); 
}
//0912 修改 新增
function OpenaddProjectMember(mapid){
  if(mapid == ""){
     alert("請選擇專案");
     return false;
  }else{
      $.ajax({
        url:'/checkProjectOwnerOption',
        dataType:'text',
        type:'POST',
        data:{Mapid:mapid},
        success:function(results){
            if(results == "YES"){
                $.blockUI({
			        message:$('#appProjectMember'),
			        css:{
			              width: '50%',
			              top:'10%',
			              left:'25%',
			              height:'60%',
			              backgroundColor: '#FFFFFF', 
			               '-webkit-border-radius': '40px', 
			               '-moz-border-radius': '40px'
			        }
			    });
			    showProjectMember(mapid);
			    projectNameinSearch(mapid);
 			}   
            else alert('你不是專案總負責人');
        },error:function(){
           alert('fail');
        }
     });
  }
}

function SearchProjectMember(mapid,input){
   //projectNameinSearch(mapid);
var target = "%"+input+"%";
   $.ajax({
       url:'/searchProjectMember',
       type:'POST',
       async:false,
       dataType:'text',
       data:{Mapid:mapid,keyword:target},
       success:function(result){
          $('#showMemberSearch').replaceWith("<div id='showMemberSearch'>" + result +"</div>");
       },error:function(){}
    });
   
}

function addProjectEditMember(mapid,member){
  


    if(member !="undefined"){
        $.ajax({
        	url:'/checkExistMember',
        	type:'POST',
        	data:{Member:member,Mapid:mapid},
        	dataType:'text',
        	success:function(result){
        		
        		if(result =="Nodata"){
			      $.ajax({
			        url:'/AddProjectMember',
			        type:'POST',
			        data:{Member:member,Mapid:mapid},
			        dataType:'text',
			        success:function(result){
			            showProjectMember(mapid);
			        },error:function(){
			            alert('fail');
			        }
			      });
			    }else{
			    	alert("該成員已存在");
			    	return false;
			    }
        	}
        });

    }
    return false;

 
}

function DeleteProjectEditMember(mapid,member){
    $.ajax({
        url:'/DeleteProjectMember',
        type:'POST',
        data:{Mapid:mapid,Member:member},
        dataType:'text',
        success:function(result){
            showProjectMember(mapid);
        },error:function(){
           alert('fail delete projectEditer');
        }
    });
}

function showProjectMember(mapid){
    $.ajax({
        url:'/listProjectMember1',
        type:'POST',
        async:false,
        dataType:'text',
        data:{Mapid:mapid},
        success(results){ //會傳回 <option>帶有專案成員的值
            $('#showProjectMember').replaceWith("<div id='showProjectMember'>" + results +"</div>");
        },error:function(){
            alert('fail');
        }
    });
}

function projectNameinSearch(mapid){
   $.ajax({
       url:'/projectNameinSearch',
       type:'POST',
       dataType:'text',
       data:{Mapid:mapid},
       success:function(result){
          $('#projectNameinSearch').replaceWith("<div id='projectNameinSearch'><span>專案名稱:</span>" + result +"</div>");
       },error:function(){}
    });
}

//20150904 巫 conference工具列功能修正
function ConfAddNewProject(){
	var loadhtml ="<table><tr><td>Project Name: </td><td><input type='text' id='PrjName'/></td></tr><tr><td colspan='2' align='right'><input type='button' value='新增' onClick='Conf_AddNewPrj()'/></td><td><input type='button' value='取消' onClick='Conf_BlockUI_cancel()'/></td></tr></table>";
        $.blockUI({ message: loadhtml, css: {
		top: '30%'
	}});
}
function Conf_AddNewPrj(){
	var prj = document.getElementById('PrjName').value;
    $.ajax({
        url:'addProject',
        type:'POST',
        async:false,
        dataType: 'text',
        data:{Name: prj},
        success:function(res){
            AddNewProject1(res);
        },
        error: function(){
            alert('Error to Create.');
            $.unblockUI();
        }
    });
}
function Conf_BlockUI_cancel(){
    $.unblockUI();
}
function ConfOpenMap(name){
	//insert info area.
    // var loadhtml ="
    //   <div class='switchMap'>
    // 	<table align='center' class='table-striped'>
    // 		<tr><td>Project Name</td></tr>
    // 		<tr><td><div id=\"PrjName\" align='center'></div></td></tr>
    // 		<tr><td><input type='button' value='Open' onclick='ConfLoadNewMap()'/>&nbsp;
    // 			<input type='button' value='Cancel' onclick='Conf_BlockUI_cancel()'/>
    // 		</td></tr>
    // 	</table>
    //   </div>
    // 	";
        $.blockUI({
        	 message: $("#switchMap"), 
        	 css: {
				top: '15%',
			    backgroundColor: '#FFFFFF', 
	           '-webkit-border-radius': '40px', 
	           '-moz-border-radius': '40px'
			 }
		});	
	//Get info.
	var TargetName = "%"+name+"%";
    var data;
	$.ajax({url:"update",
			data:{act: 'listPrj' , Name:TargetName},type:'POST',async:false,
			success:function (prjList) {
				if (prjList.substr(0,4) != '401') {
					data = prjList;
                  $('#PrjName').replaceWith("<div id='PrjName' align='center'>" +data+ "</div>");
				}
    }});
}
function ConfLoadNewMap(){
    var selectMapID = $('#prjselect').val();
    document.cookie ="prjselect=" + selectMapID;
    window.location = '/conference';
}
//150907  巫 嵌入式html留言板
function poster_UI(){
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	var loadhtml = "<div id=\"outer\"><H1>Media Center 多媒體檢視區</H1></br><hr style=\"border-width: 5px;\"/><div id=\"ContentArea\" style=\"overflow-y:scroll;\"></br>";
	loadhtml += "</div>";
	loadhtml += "<script type=\"text/javascript\">";
	loadhtml += "var winWidth = window.innerWidth;";
	loadhtml += "var winHeight = window.innerHeight;";
	//調整content 避免因為擠壓造成按鈕消失
	loadhtml += "	document.getElementById(\"ContentArea\").style.width = winWidth*0.5-20 + \"px\";";
	loadhtml += "	document.getElementById(\"ContentArea\").style.height = winHeight*0.66 + \"px\";";
	loadhtml += "onload_posterUI();";
	loadhtml += "</script>";
	loadhtml += "</br><div id=\"Outside\"><button class='btn btn-default btn-success' onclick='poster_post()'> <span class='glyphicon glyphicon-ok-sign' aria-hidden='true'></span>發佈</button>&nbsp;&nbsp;&nbsp<button class='btn btn-default btn-warning' onclick='Conf_BlockUI_cancel()'> <span class='glyphicon glyphicon-remove-sign' aria-hidden='true'></span>離開</button></div></br></div>";
	loadhtml += "<script type=\"text/javascript\">";
	//重新調整視窗大小
	loadhtml += "window.onresize=function ChangeDimensions(){";
	loadhtml += "	var winWidth = window.innerWidth;";
	loadhtml += "	var winHeight = window.innerHeight;";
	loadhtml += "	document.getElementById(\"ContentArea\").style.width = winWidth*0.5-20 + \"px\";";
	loadhtml += "	document.getElementById(\"ContentArea\").style.height = winHeight*0.66 + \"px\";";
	loadhtml += "};";
	loadhtml += "</script>";
	// <input type=\"button\"  value=\"Back\" onClick=\"Conf_BlockUI_cancel()\" />
	$.blockUI({ message: loadhtml, css: {
			width: winWidth*0.5+'px',
			height: winHeight*0.9+'px',
			top:'5%',
			left:'25%',
			  backgroundColor: '#FFFFFF', 
	           '-webkit-border-radius': '40px', 
	           '-moz-border-radius': '40px'
		}
	});
}
//待修復 introduction 介紹
function showIntroduction(){
	$.blockUI({ 
		message: $(".ShowIntroduction"), 
		css: {
			width: '80%',
			height: '70%',
			top:'5%',
			left:'10%'
		}
	});
}


function onload_posterUI(){
	$.ajax({
        url:'/MSGboard_onload',
        type:'POST',
        data:{mapid:prjID},
        dataType:'text',
        success:
		function(res){
			var msgdata = JSON.parse(res);
			var html="";
			if(msgdata.length<1){
				html += "<HR/><H3><B>No Comments.</B></H3>";
			}
			for( var i=0; i<msgdata.length; i++) {
				if(i < 1){
					html += "<HR/>#"+ (msgdata.length-i) +"&nbsp;&nbsp;<B><font color=\"blue\" style=\"text-align:left\">"+msgdata[i]['poster'] +"：</font></B></br>";
				}
				else{
					html += "#"+ (msgdata.length-i) +"&nbsp;&nbsp;<B><font color=\"blue\" style=\"text-align:left\">"+msgdata[i]['poster'] +"：</font></B></br>";
				}
				html += msgdata[i]['content']+"</br>";
				html += "</br><font  color=\"#888888\"style='text-align:right'>posted at "+poster_timeformat(msgdata[i]['time'])+"</font></br>";
				html += "<HR size=\"5\"/>";
			}
			$('#ContentArea').html(html);
			return true;
		},
		error:
		function(res){
           alert("error while loading msg board.");
        }
    });
}
function poster_post(){
	var loadhtml ="<script type=\"text/javascript\">";
	loadhtml += "var uname = \" \"+getUserName()+\"\";document.getElementById('poster_uname').innerHTML = uname;";
	loadhtml += "$('#postSubmit').click(function(){";
	loadhtml += "var text = document.getElementById('poster_text').value;";
	loadhtml += "if(text.length > 800){";
	loadhtml += "alert(\"More than 800 words.\");}else if(text.length < 1){alert(\"Type your messages in the textarea.\");}else{poster_msgSent(text);}});</script>";
	loadhtml += "</br><form><table><tr><td colspan=2><div id=\"poster_uname\"></div></td></tr><tr><td colspan=2 align=left>Comments here ( 800 words limited ):</td></tr><tr><td colspan=2><textarea wrap=\"virtual\" id=\"poster_text\" rows=\"5\" cols=\"60\"></textarea></td></tr><tr><td colspan=2 align=center><input type=\"button\" value=\" Submit \" id=\"postSubmit\" />　&nbsp;<input type=\"reset\" value=\" Reset \"/></td></tr></table></form></br><input type='button' value='Cancel' onclick='poster_UI()'/>";
	$.blockUI({ message: loadhtml, css: {width: '670px', top: '20%'}});
}
function poster_msgSent(msg){
	var uname = getUserName();
	var nowtime = new Date();
	var posttime = nowtime.getTime();
	var strtime = nowtime.getFullYear() + "-" + nowtime.getMonth() + "-" + nowtime.getDate() + " " + nowtime.getHours() + ":"+ nowtime.getMinutes() + ":" + nowtime.getSeconds();
	$.ajax({
        url:'/MSGboard_upload',
        type:'POST',
        data:{mapid:prjID,uname:uname,time:strtime,content:msg},
        dataType:'text',
        success:function(result){
			poster_UI();
        },
		error:function(x){
           alert(x);
        }
    });
}
function poster_timeformat (ms) {

	var date = new Date(ms);
	var year = date.getYear() + 1900;
	var seperator = "-";
	var month = date.getMonth()+2;
	var strDate = date.getDate();
	var strHour = date.getHours();
	var strMin = date.getMinutes();
	var strSec = date.getSeconds();
	if(month>=1 && month<=9)
	{
		month = "0"+month;
	}
	if(strDate>=0&& strDate<=9)
	{
		strDate = "0"+ strDate;
	}
	 return year+seperator+month+seperator+strDate+" "+strHour+":"+strMin+":"+strSec;
}
//0831 //0912修改
function addNewTodolist(){ //新增清單 並將清單內容寫進資料庫
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    //var nodeID = node.NodeID;
    var nodeID = node_dbar.NodeID;
    var listValue = $('#addnewTodolistValue').val();
    var checkListValue = listValue.trim();
    if(checkListValue == ""){
     	alert("請輸入名稱");
     	return false;
    }else{
	    $.ajax({
	        url:'/newList',  
	        type:'POST',
	        dataType:'text',
	        data:{Name:listValue,NodeID:nodeID,isFinish:0},
	        success:function(){ //寫入資料庫成功 將新增的list 填到Todolist <div>中
	            //$('#showTodolist').append("<input );
	            ShowNodeList(nodeID);//重新載入list清單
	        }
	    });
	}  
}
function M_LoadNodeTodolist(nodeID){ //顯示出該node的清單資訊
	ShowRightSideBar();
  	var view = gYApp.getView();
	var node = view.getLastSelectedNode();

	if ( node == null ) {
		return false;
	}
	
	dbarinit();
	node_dbar = node;
    ShowNodeList(node_dbar.NodeID); //召喚nodeList出來
    //0912NEW 修改
    ShowNodeName(node.NodeID);


	if ($('#dropdowntoolbar_Todolist').is(':hidden')) {  // 跳出node編輯視窗
		//$('#dropdowntoolbar_NodeEdit').show('normal');
		var accordions = jQuery('#dropdowntoolbarcontainer');
		accordions.accordion("activate", 1); //0907new   新增
	}

}

function ShowNodeList(nodeID){
    
      $.ajax({
        url:'/getTodoList',
        type:'POST',
        dataType:'text',
        data:{NodeID: nodeID},
        success:function(data){ 
            $('#showTodolist').replaceWith("<div id='showTodolist'>" + data + "</div>");
        }
    });
}
//node上的list 一按下去就會去更新資料庫狀態 //0912修改
function refreshListStatue(listID){
    var ListID = "Todolist" + listID;
 
    var isFinish = $("input[id*='"+ListID+"'][type='checkbox']").attr('checked');
    var IsFinish = (isFinish == "checked") ? 1 : 0;
    doajax(IsFinish);
    function doajax(isFinish){
  
      $.ajax({
        url:'/updateNodeList',
        type:'POST',
        dataType:'text',
        data:{ListID1:listID,IsFinish:isFinish}, //這裡要傳入nodeid值
        success:function(data){
           //alert("data");
        },error:function(){alert('refreshList fail');}
      });
    }


   //alert(IsFinish);

}
        
// function NodeEditInput(evt,nodeID){
//     var NodeID = "#" + nodeID;
//     var inputNodeID = nodeID+"input"; //編輯框
//     //popbox(nodeID);
// // alert(inputNodeID);
// // alert(NodeID);
//     //$(NodeID).append("<input type='text'>");
//     //alert(inputNodeID);
//         // var frag = document.createDocumentFragment();
//         // var input = document.createElement("textarea");
       
//         // input.id=inputNodeID;
//         // //input.autofocus;
//         // //alert(inputNodeID);
//         // //input.onblur = UpdateNodeInput(nodeID);

//         // frag.appendChild(input);
//         // document.getElementById(inputNodeID).appendChild(frag);
//         // document.getElementById(inputNodeID).focus();


//         $("#"+inputNodeID).replaceWith("<td id='"+inputNodeID+"' ><textarea style='width:50px'  onblur='UpdateNodeInput("+nodeID+")' autofocus></textarea></td>");
//         $(NodeID).hide();
       



//         // $("#"+inputNodeID).focus(function(){
//         //     alert('I have been target');
//         // });
// }

// function popbox(nodeID){
// 	var NodeID = "#" + nodeID;
//     var inputNodeID = "#"+nodeID+"input"; //編輯框
// 	$('.box').remove();
// 	// var box = $('<div>').addClass('box');
// 	var box = $('<input>').attr('type', 'text').css('z-index', '100000000000000');;
// 	$('body').append(box);
// 	// $(NodeID).hide();
// }



// function UpdateNodeInput(nodeID){
//     var NodeID = "#" + nodeID;
//     var inputNodeID = NodeID+"input"; //編輯框的值
//     var textValue = $(inputNodeID).val();
    
//      if (UpdatenodeText(textValue,nodeID) ) { //若更新成功
//          socket_send_node_edit(NodeID, name);
// 		 alert('更新了');
//     }
//     $(NodeID).show();

//     $(inputNodeID).hide();
// }

function UpdatenodeText(name,nodeID){
    $.ajax({
        url:'/updateNodeText',
        type:'POST',
        dataType:'text',
        data:{Name:name,NodeID:nodeID},
        success:function(result){
            alert('update success');
            return true;
        },error:function(){ alert('update fail');}
    });
}

function ReturnToProjectPage(){
	history.back();
}
// 介面更新修改 0922
function OpenNodeEdit(){
    //alert("hello");
    var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    //alert(node.parentNode);
    //alert(listMember(node));
    //alert(node.parentNode);
    if(node.parentNode == null){
    	return false;
    }else{

	    $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
	        url:'/getPermmit',
	        type:'POST',
	        async:false,
	        dataType:'text',
	        data:{NodeID:nodeID},
	        success:function(result){
	            //檢查app.post('/getPermmit'回傳值用  alert(result); 
	            if(result == "false"){
	               showLockMessage();
	               return false;
	            }else{
	            	$.blockUI({ 
				        message: $('.nodeEditeAttrbute'),
				        css: {
				        	top:'100px', 
				        	width: '450px',
				        	height:'400px',
				    	   backgroundColor: '#FFFFFF', 
					       '-webkit-border-radius': '40px', 
					       '-moz-border-radius': '40px'
				        }            
				    }); 
				    M_EditEditNode();
	            }
	        },error:function(){
	            alert('fail');
	        }
	    });
    }
}

function ShowRightSideBar(){
	$(function() {
	  $(".right_sidebar").animate({
          right:0
      },500);

      $(".right_sidebar_arrow").hide();
    
      $(".right_sidebar_arrow_click").show();
    });
}

// function checkNodeEditor(){
// 	function getTagNames(cb) {  
//     var view = gYApp.getView();
//     var node = view.getLastSelectedNode();
//     var nodeID = node.NodeID;
//     $.ajax({ //抓是否islock 和 accesscontrol中有出現的名單  會再app.js 用session.uid中判斷目前使用者是否能夠編輯此節點
//         url:'/getPermmit',
//         type:'POST',
//         async:false,
//         dataType:'text',
//         data:{NodeID:nodeID},
//         success:function(result){
//             //檢查app.post('/getPermmit'回傳值用  alert(result); 
//             if(result == "false"){
//                //alert('該節點已鎖住'); 
//               showLockMessage();//0828new
//               return false;
//             }else{return true;}
            
//         },error:function(){
//             alert('fail');
//         }
//     });
//   }
// }

//0912new 修改 節點名稱
function ShowNodeName(nodeID){

    $.ajax({
    	url:'/getnodename',
    	type:'POST',
    	data:{NodeID:nodeID},
    	datatype:'text',
    	success:function(nodename){
    		$('#PickNodeName').replaceWith("<span id='PickNodeName'>"+nodename+"</span>");
    	},error:function(){
    		
    	}
    });
}

function ShowProjectOption(mapid){
  if(mapid == ""){
     alert("請選擇專案");
     return false;
  }else{
      $.ajax({
        url:'/checkProjectOwnerOption',
        dataType:'text',
        type:'POST',
        data:{Mapid:mapid},
        success:function(results){
            if(results == "YES"){
                $.blockUI({
			   	    message: $("#ProjectOption"),
				   	css: {
				   		top:'100px',
				   		left:'30%',
				   		width: '700px',
				   		height:'500px',
				   		 backgroundColor: '#FFFFFF', 
		               '-webkit-border-radius': '40px', 
		               '-moz-border-radius': '40px'
				   	}
			   });
 			}   
            else alert('你不是專案總負責人');
        },error:function(){
           alert('ShowProjectOption fail');
        }
     });
  }
}
//budget new //0919 行事曆new
function SetProjectOption(){
	var mapid = document.getElementById('prjselect').value;
	var status = $('input[name=Projectstatus]:checked').val();

	var startDay = $("#Project_start").val();
	var endDay = $("#Project_end").val();

    //var ProjectTotalBudget = document.getElementById('ProjectBudget').value;

    $.ajax({
    	url:'/settingProjectStatus',
    	type:'POST',
    	data:{Status:status,Mapid:mapid, StartDay:startDay,EndDay:endDay},
    	datatype:'text',
    	success:function(){
    		alert("專案資料更新成功");
    	
    	},error:function(){
    		alert('STATUS更新FAIL');
    	}
    });

    // $.ajax({
    // 	url:'/projectBudgetUpdate',
    // 	type:'POST',
    // 	data:{projectBudget:ProjectTotalBudget, Mapid:mapid},
    // 	dataType:'text',
    // 	success:function(){
    // 		alert("總預算寫入成功");
    // 	}
    // });
 
    
}

function SetProjectBudget(){
	var mapid = document.getElementById('prjselect').value;
    var ProjectTotalBudget = document.getElementById('ProjectBudget').value;

	$.ajax({
    	url:'/projectBudgetUpdate',
    	type:'POST',
    	data:{projectBudget:ProjectTotalBudget, Mapid:mapid},
    	dataType:'text',
    	success:function(){
    	
    		projectDetail(mapid);
           // FinishProjectBudgetSetting();
    	},error:function(){
    		alert("寫入失敗");
    	}
    });
}


//再新增節點時 做預算更新的動作0913
function CalculateRemainBudget(){
    var newNodeBudget = $("#budget").val();
    var Result;
    $.ajax({
        url:'/getChildNodeBudget',
        dataType:'text',
        
        type:'POST',
        success:function(result){
            var data = JSON.parse(result);  //將json轉物件
            var totalbudget = data[0]['TotalBudget'];
       
            //var length = data.length;  //子節點數量
            for(var i=0; i<data.length;i++){
            	totalbudget -= data[i]['budget'];
            }
            if(newNodeBudget>totalbudget){
            	alert("超出總預算 目前剩餘預算為:"+ totalbudget);
                $("#budget").attr('value', '');
            	Result = "fail";
              
            }else{
                Result = "success";
            }
                
            
            //updateProjectTotalBudget(remain);
        },error:function(){
        	alert("fail");
        }
    });
    return Result;
}

function CreateBudgetChart(){

	var arr = {
		budget: [],
		cost:[],
		Content:[]
	};
    $.ajax({
    	url:"/getBudgetInfo",
    	dataType:'text',

    	type:'POST',
    	success:function(data){
            // alert(result.length);
            var results = JSON.parse(data);
            // alert(results.length);  檢查陣列長度
            for(var i=0; i<results.length; i++){
                // var budgetNameTime ="";
                // budgetNameTime = results[i]['Content'] + " " + results[i]['FinishTime'];
				//要考慮將 content 塞進chart裡面
                // alert(budgetNameTime);
            	arr.budget.push(results[i]['budget']);
            	arr.cost.push(results[i]['ps']);
            	arr.Content.push(results[i]['Content']);

            }

            //alert(arr.budget);

			var DataResult = {
				labels : arr.Content,
				datasets : [
					{
						fillColor : "#F45C5C",
						strokeColor : "rgba(220,220,220,1)",
						data : arr.cost
					},
					{
						fillColor : "#97A7E8",
						strokeColor : "rgba(151,187,205,1)",
						data : arr.budget
					}
				]
			};	



		

			showBudgetChart(DataResult);
			// var ctx = document.getElementById("FinishProjectBudgetChart").getContext("2d");
		 //    var ProjectBudgetChart = new Chart(ctx).Bar(DataResult,options);
     	},error:function(){
     		alert("getBudgetInfo error");
     	}
    })
}

var getRandomColor = function(){
    return "hsb(" + Math.random()  + ", 1, 1)";
}

//0916 花費比例new

function showBudgetChart(data){
	var ctx = document.getElementById("FinishProjectBudgetChart").getContext("2d");
	var options = {
			scaleBeginAtZero: true,
			responsive: true,
				scaleFontSize : 24,
		};
	ProjectBudgetChart = new Chart(ctx).Bar(data, options);
}

function exportXML(){
	$.ajax({
		url: '/update',
		type: 'POST',
		dataType: 'text',
		data: {act:'getxml', MapID: prjID},
		error: function(res){
			console.log('DB Error');
			return false;
		},
		success: function(res) {
			var link = document.createElement("a");
			link.download = 'export.xml';
			link.href = res;
			link.click();
		}
	});				
}

function exportXML_byNode(){
 var view = gYApp.getView();
 var node = view.getLastSelectedNode();
 var pos = xml_getPosition(node.NodeID);
 if(pos != 0){
    $.ajax({
	  url: '/update',
	  type: 'POST',
	  dataType: 'text',
	  data: {act:'getxml_bynode', MapID: prjID,NodeID:node.NodeID},
	  error: function(res){
		  console.log('DB Error');
		  return false;
      },
      success: function(res) {
	   if(res!=""){
	    nodesinfo = res;
	    exportprocess_byNode(nodesinfo);
	   }else return;
  	  }
  	}); 
 }else{
  exportXML();
 }
}
function exportprocess_byNode(nodesinfo){
	var token = nodesinfo.split(" ");
	var query = "NodeID=";
	var selected  = token[0];
	//alert(token.length);
	for(i=0;i<token.length;i++){
		//alert(token[i]);
		if(i<token.length-2){
		//多減一次是為了處理上一個app.js的尾端處理
			query +=token[i]+" or NodeID=";
		}
		if(i>token.length-3){
			query +=token[i]+"";
		}
	}
	var sqlquery = "SELECT * FROM node WHERE "+query;
	//alert(sqlquery);
	//output
	$.ajax({
	url: 'update',
	type: 'POST',
	dataType: 'text',
	data: {act:'getxml_bynode_exportprocess',sqlquery:sqlquery,selected:selected},
	error: function(res){
	console.log('DB Error');
	return false;
	},
	success: function(res) {
			var link = document.createElement("a");
			link.download = 'export.xml';
			link.href = res;
			link.click();
		}
	}); 
}
function ChartCheckStr(){

	$.ajax({
		url: '/ChartCheck',
		type: 'POST',
		dataType: 'text',
		data: {MapID: prjID},
		error: function(res){
		console.log('ChartCheckStr Error');
		return false;
		},
		success: 
		function(res) {
			if(res == 'yes'){
				$.blockUI({ 
				message: $('.budgetChartInfo'),
				css: {top:'100px', width: '1000px',height:'600px',left:'30%'}            
				}); 
				CreateBudgetChart();
			}else{
				alert("規劃階段的專案無法檢視。");
			}
		}
	}); 
}

//20150915 xml匯入 巫
function importXML_UI(){
	 $.blockUI({ 
            message: $('#xmlupload'),
            css: { width: '400px'}            
        }); 
}
function xmlpath(){
	    $('#thumbnai').upload('/uploadxml', function(res) {
			window.setTimeout("",300);
			if(res!='fail'){
				var objnodes = JSON.parse(res);
				xml_importprocess_controller(objnodes);
			}else{
				alert("Error upload.");
				$.unblockUI();
			}
    }, 'html');
}
function xml_importprocess_controller(objnodes){
	var view = gYApp.getView();
	var node = view.getLastSelectedNode();
	XML_buildNode(node,objnodes);
	$.unblockUI();
	alert("Inserted successfully.");
	window.setTimeout("xml_refresh()",450);
}
function xml_refresh(){
	 window.location.reload();
}
function xml_getPosition(NodeID){
	var x;
	$.ajax({
			url: '/getPosition',
			async:false,
			type: 'POST',
			dataType: 'text',
			data: {NodeID:NodeID},
			error:function(res){
				 err = JSON.stringify(res);
				alert(err);
			},
			success:function(res) {
				x = res;
			}
		});
		return x;
}
/**
**		export to import:
**		json to xml --> xml type to json --> json to string -->   string to jsonObject   --> jsonObject to value. 
**			(output)		(encode)			js.loader		 get value by reference			(decode)
**/
function XML_buildNode(selected,xnode){//選取的,JSON裡面的,執行迴圈次數,position buffer
//**buffer**
var pos;
var hasNext;

//**root node**
	/** ---   value   --- **/
	var NodeID = xnode.mapdata.NodeID;
	var MapID = prjID;
	var ParentNodeID = selected.NodeID; //選定節點為母
	var Content = "";
	Content = xnode.mapdata.Content;
	var ps = xnode.mapdata.ps;
	var starttime = xnode.mapdata.starttime;
	var endtime = xnode.mapdata.endtime;
	var budget = xnode.mapdata.budget;
	var leader = "";
	leader = xnode.mapdata.leader;
	var Creater = xnode.mapdata.Creater;
	var Modifier = xnode.mapdata.Modifier;
	var Position = xml_getPosition(selected.NodeID); //以母position向下擴展: 
	if(ParentNodeID==0){ //如果selected是root，預設往右邊擴
		Position = 2;
	}
	var second_level_parentID;
	var created = xnode.mapdata.Created;
	var Modified = xnode.mapdata.Modified;
	var Childs = xnode.mapdata.Childs;
	var has_image="0";
	var icons = xnode.mapdata.icons.toString ("utf8");
	if(icons.trim()!=""){
		has_image="1";
	}
	Content = Content.toString ("utf8");
	leader = leader.toString ("utf8");
	/** ---  sql update  --- **/
		$.ajax({ //async = true 才能同步處理多線程
			async:false,
			url: '/XML_newNode',
			type: 'POST',
			dataType: 'text',
			data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:Position,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
			error: 
			function(res){
				alert('xml_newnode Error');
			},
			success: 
			function(res) {
				second_level_parentID = res;
			}
		});
/**  2nd level **/
		hasNext = String(xnode.mapdata.Childs[0].NodeID);
		if(hasNext != 'undefined')//if has childs
		{
			var CountChilds = xnode.mapdata.Childs[0].NodeID.length;//num of 2 level child-node
			var tmpXNode;// = xnode.mapdata.Childs[0];//given next level's node's' to tmpXnode
			var parentID_2;
			for(var z_2=0;z_2<CountChilds;z_2++){
				tmpXNode = xnode.mapdata.Childs[0];//重新定址tmpXNode
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_2];
				 MapID = prjID;
				 ParentNodeID = second_level_parentID;
					//	second level:直接get rootNodeID為PARENTID
					//	third level以下:gettmpXNode.NodeID為PARENTID
				 Content = "";
				 Content = tmpXNode.Content[z_2];
				 ps = tmpXNode.ps[z_2];
				 starttime = tmpXNode.starttime[z_2];
				 endtime = tmpXNode.endtime[z_2];
				 budget = tmpXNode.budget[z_2];
				 leader = "";
				 leader = tmpXNode.leader[z_2];
				 Creater = tmpXNode.Creater[z_2];
				 Modifier = tmpXNode.Modifier[z_2];
				 created = tmpXNode.Created[z_2];
				 Modified = tmpXNode.Modified[z_2];
				 Childs = tmpXNode.Childs[z_2];
				 pos = xml_getPosition(selected.NodeID); //以母position向下擴展: 
				if(ParentNodeID==0){ //如果選定了root，預設往右邊擴
					pos = 2;
				}
				has_image="0";
				icons = tmpXNode.icons[z_2].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_2 = res;
						
					}
				});//end of ajax 2
				hasNext = String(tmpXNode.Childs[z_2].NodeID);
				if(hasNext != 'undefined')//if has childs
/**  3rd level **/
			{
			var CountChilds_3 = tmpXNode.Childs[z_2].NodeID.length;//num of 2 level child-node
			for(var z_3=0;z_3<CountChilds_3;z_3++){
				var parentID_3;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2];//重新定址tmpXNode
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_3];
				 MapID = prjID;
				 ParentNodeID = parentID_2;
					//	second level:直接get rootNodeID為PARENTID
					//	third level以下:gettmpXNode.NodeID為PARENTID
				 Content = "";
				 Content = tmpXNode.Content[z_3];
				 ps = tmpXNode.ps[z_3];
				 starttime = tmpXNode.starttime[z_3];
				 endtime = tmpXNode.endtime[z_3];
				 budget = tmpXNode.budget[z_3];
				 leader = "";
				 leader = tmpXNode.leader[z_3];
				 Creater = tmpXNode.Creater[z_3];
				 Modifier = tmpXNode.Modifier[z_3];
				 created = tmpXNode.Created[z_3];
				 Modified = tmpXNode.Modified[z_3];
				 Childs = tmpXNode.Childs[z_3];
				has_image="0";
				icons = tmpXNode.icons[z_3].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_3 = res;
					}
				});//end of ajax 2
				hasNext = String(tmpXNode.Childs[z_3].NodeID);
				if(hasNext != 'undefined'){
/**  4th level **/
			{
			var CountChilds_4 = tmpXNode.Childs[z_3].NodeID.length;//num of 2 level child-node
			for(var z_4=0;z_4<CountChilds_4;z_4++){
				var parentID_4;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3];//重新定址tmpXNode
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_4];
				 MapID = prjID;
				 ParentNodeID = parentID_3;
					//	second level:直接get rootNodeID為PARENTID
					//	third level以下:gettmpXNode.NodeID為PARENTID
				 Content = "";
				 Content = tmpXNode.Content[z_4];
				 //alert("4nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_4];
				 starttime = tmpXNode.starttime[z_4];
				 endtime = tmpXNode.endtime[z_4];
				 budget = tmpXNode.budget[z_4];
				 leader = "";
				 leader = tmpXNode.leader[z_4];
				 Creater = tmpXNode.Creater[z_4];
				 Modifier = tmpXNode.Modifier[z_4];
				 created = tmpXNode.Created[z_4];
				 Modified = tmpXNode.Modified[z_4];
				 Childs = tmpXNode.Childs[z_4];
				has_image="0";
				icons = tmpXNode.icons[z_4].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_4 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_4].NodeID);
				//alert("tmpXNode.Childs[z_4].NodeID  "+hasNext)
				if(hasNext != 'undefined'){
/**  5 level **/
			{
			var CountChilds_5 = tmpXNode.Childs[z_4].NodeID.length;//num of 2 level child-node
			for(var z_5=0;z_5<CountChilds_5;z_5++){
				var parentID_5;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4];//重新定址tmpXNode
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_5];
				 MapID = prjID;
				 ParentNodeID = parentID_4;
					//	second level:直接get rootNodeID為PARENTID
					//	third level以下:gettmpXNode.NodeID為PARENTID
				 Content = "";
				 Content = tmpXNode.Content[z_5];
				 //alert("5nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_5];
				 starttime = tmpXNode.starttime[z_5];
				 endtime = tmpXNode.endtime[z_5];
				 budget = tmpXNode.budget[z_5];
				 leader = "";
				 leader = tmpXNode.leader[z_5];
				 Creater = tmpXNode.Creater[z_5];
				 Modifier = tmpXNode.Modifier[z_5];
				 created = tmpXNode.Created[z_5];
				 Modified = tmpXNode.Modified[z_5];
				 Childs = tmpXNode.Childs[z_5];
				has_image="0";
				icons = tmpXNode.icons[z_5].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_5 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_5].NodeID);
				if(hasNext != 'undefined'){
/**  6 level **/
			{
			var CountChilds_6 = tmpXNode.Childs[z_5].NodeID.length;//num of 2 level child-node
			for(var z_6=0;z_6<CountChilds_6;z_6++){
				var parentID_6;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4].Childs[z_5];//重新定址tmpXNode
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_6];
				 MapID = prjID;
				 ParentNodeID = parentID_5;
					//	second level:直接get rootNodeID為PARENTID
					//	third level以下:gettmpXNode.NodeID為PARENTID
				 Content = "";
				 Content = tmpXNode.Content[z_6];
				 //alert("6nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_6];
				 starttime = tmpXNode.starttime[z_6];
				 endtime = tmpXNode.endtime[z_6];
				 budget = tmpXNode.budget[z_6];
				 leader = "";
				 leader = tmpXNode.leader[z_6];
				 Creater = tmpXNode.Creater[z_6];
				 Modifier = tmpXNode.Modifier[z_6];
				 created = tmpXNode.Created[z_6];
				 Modified = tmpXNode.Modified[z_6];
				 Childs = tmpXNode.Childs[z_6];
				has_image="0";
				icons = tmpXNode.icons[z_6].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_6 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_6].NodeID);
				if(hasNext != 'undefined'){
/**  7 level **/
			{
			var CountChilds_7 = tmpXNode.Childs[z_6].NodeID.length;//num of 2 level child-node
			for(var z_7=0;z_7<CountChilds_7;z_7++){
				var parentID_7;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4].Childs[z_5].Childs[z_6];
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_7];
				 MapID = prjID;
				 ParentNodeID = parentID_6;
				 Content = "";
				 Content = tmpXNode.Content[z_7];
				 //alert("7nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_7];
				 starttime = tmpXNode.starttime[z_7];
				 endtime = tmpXNode.endtime[z_7];
				 budget = tmpXNode.budget[z_7];
				 leader = "";
				 leader = tmpXNode.leader[z_7];
				 Creater = tmpXNode.Creater[z_7];
				 Modifier = tmpXNode.Modifier[z_7];
				 created = tmpXNode.Created[z_7];
				 Modified = tmpXNode.Modified[z_7];
				 Childs = tmpXNode.Childs[z_7];
				has_image="0";
				icons = tmpXNode.icons[z_7].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_7 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_7].NodeID);
				if(hasNext != 'undefined'){
/**  8 level **/
			{
			var CountChilds_8 = tmpXNode.Childs[z_7].NodeID.length;//num of 2 level child-node
			for(var z_8=0;z_8<CountChilds_8;z_8++){
				var parentID_8;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4].Childs[z_5].Childs[z_6].Childs[z_7];
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_8];
				 MapID = prjID;
				 ParentNodeID = parentID_7;
				 Content = "";
				 Content = tmpXNode.Content[z_8];
				 //alert("6nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_8];
				 starttime = tmpXNode.starttime[z_8];
				 endtime = tmpXNode.endtime[z_8];
				 budget = tmpXNode.budget[z_8];
				 leader = "";
				 leader = tmpXNode.leader[z_8];
				 Creater = tmpXNode.Creater[z_8];
				 Modifier = tmpXNode.Modifier[z_8];
				 created = tmpXNode.Created[z_8];
				 Modified = tmpXNode.Modified[z_8];
				 Childs = tmpXNode.Childs[z_8];
				has_image="0";
				icons = tmpXNode.icons[z_8].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_8 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_8].NodeID);
				if(hasNext != 'undefined'){
/**  9 level **/
			{
			var CountChilds_9 = tmpXNode.Childs[z_8].NodeID.length;//num of 2 level child-node
			for(var z_9=0;z_9<CountChilds_9;z_9++){
				var parentID_9;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4].Childs[z_5].Childs[z_6].Childs[z_7].Childs[z_8];
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_9];
				 MapID = prjID;
				 ParentNodeID = parentID_8;
				 Content = "";
				 Content = tmpXNode.Content[z_9];
				 //alert("9nd level NOW IN "+Content);
				 ps = tmpXNode.ps[z_9];
				 starttime = tmpXNode.starttime[z_9];
				 endtime = tmpXNode.endtime[z_9];
				 budget = tmpXNode.budget[z_9];
				 leader = "";
				 leader = tmpXNode.leader[z_9];
				 Creater = tmpXNode.Creater[z_9];
				 Modifier = tmpXNode.Modifier[z_9];
				 created = tmpXNode.Created[z_9];
				 Modified = tmpXNode.Modified[z_9];
				 Childs = tmpXNode.Childs[z_9];
				has_image="0";
				icons = tmpXNode.icons[z_9].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_9 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_9].NodeID);
				if(hasNext != 'undefined'){
/**  10 level **/
			{
			var CountChilds_10 = tmpXNode.Childs[z_9].NodeID.length;//num of 2 level child-node
			for(var z_10=0;z_10<CountChilds_10;z_10++){
				var parentID_9;
				tmpXNode = xnode.mapdata.Childs[0].Childs[z_2].Childs[z_3].Childs[z_4].Childs[z_5].Childs[z_6].Childs[z_7].Childs[z_8].Childs[z_9];
				/** ---   value   --- **/
				 NodeID = tmpXNode.NodeID[z_10];
				 MapID = prjID;
				 ParentNodeID = parentID_9;
				 Content = "";
				 Content = tmpXNode.Content[z_10];
				 //alert("10 level NOW IN "+Content);
				 ps = tmpXNode.ps[z_10];
				 starttime = tmpXNode.starttime[z_10];
				 endtime = tmpXNode.endtime[z_10];
				 budget = tmpXNode.budget[z_10];
				 leader = "";
				 leader = tmpXNode.leader[z_10];
				 Creater = tmpXNode.Creater[z_10];
				 Modifier = tmpXNode.Modifier[z_10];
				 created = tmpXNode.Created[z_10];
				 Modified = tmpXNode.Modified[z_10];
				 Childs = tmpXNode.Childs[z_10];
				has_image="0";
				icons = tmpXNode.icons[z_10].toString ("utf8");
				if(icons.trim()!=""){
					has_image="1";
				}
				Content = Content.toString ("utf8");
				leader = leader.toString ("utf8");
				$.ajax({
					url: '/XML_newNode',
					async:false,
					type: 'POST',
					data: {MapID:MapID,ParentNodeID:ParentNodeID,Content:Content,ps:ps,starttime:starttime,endtime:endtime,budget:budget,leader:leader,Creater:Creater,Modifier:Modifier,Position:pos,created:created,Modified:Modified,Childs:Childs,icons:icons,has_image:has_image},
					error: 
					function(res){
						alert('xml_newnode Error');
					},
					success: 
					function(res) {
						parentID_10 = res;
					}
				});//end of ajax
				hasNext = String(tmpXNode.Childs[z_10].NodeID);
				if(hasNext != 'undefined'){
					
				}
				//end of hasnext10
			}//end of for10
			}//end of 10
				
				}
				//end of hasnext9
			}//end of for9
			}//end of 9
				}
				//end of hasnext8
			}//end of for8
			}//end of 8
				}
				//end of hasnext7
			}//end of for7
			}//end of 7
				}
				//end of hasnext6
			}//end of for6
			}//end of 6
				}
				//end of hasnext5
			}//end of for5
			}//end of 5
				}
				//end of hasnext4
			}//end of for4
			}//end of 4
				}
				//end of hasnext3
			}//end of for3
			}//end of 3
			}//end of for2
		}//end of hasnext2
}


//0916 甘特圖新增
function ShowNodegnattchart(){

 
    $.ajax({
    	url:"/getNodetInfo",
    	dataType:'text',
    	type:'POST',
    	success:function(data){
            var results = JSON.parse(data);
  //startime endtime Content 
  //name = Content 	desc=startTime  from=Date(starttime) to=Date(endtime) label=
			"use strict";
			var dataCount = results.length;
	
	        var NodeGanettData = new Array(dataCount);  
	        var NodeGanettDataQQ = new Array(dataCount); //指引到NodeGaneetDataQQ	//給source的data  name,desc,values
	        //將每個陣列裡的值 去串接一個陣列物件   
            for(var i=0; i<dataCount;i++){
            	NodeGanettDataQQ[i] = {
            		name:[],
            		desc:[],
            		values:[]
            	};
            	NodeGanettData[i] = NodeGanettDataQQ[i];
            }
            
            for(var i=0; i<dataCount;i++){   
                var ArrscheduleQQ = new Array(dataCount);
            	
            	for(var j=0; j<dataCount;j++){
            	  	 ArrscheduleQQ[j]= {
            	  	 	to:[],
                    	from:[],
		            	label:[],
		            	customClass:[]
		            };
            	}               
                ArrscheduleQQ[i]['from'] = getNodeTime(results[i]['starttime']); 
                ArrscheduleQQ[i]['to'] = getNodeTime(results[i]['endtime']);          
                ArrscheduleQQ[i]['label'] = results[i]['Content'];
        
                switch(i%4){
                	 case 0: ArrscheduleQQ[i]['customClass'] = "ganttRed"; break;
                	 case 1: ArrscheduleQQ[i]['customClass'] = "ganttBlue"; break;
                	 case 2: ArrscheduleQQ[i]['customClass'] = "ganttGreen"; break;
                	 case 3: ArrscheduleQQ[i]['customClass'] = "ganttOrange"; break;
                }
     
 				NodeGanettData[i]['values'].push(ArrscheduleQQ[i]);  //不能直接用 = 去塞ArrsheduleQQ(因為會使value不為陣列)
            }
		    for(var i=0; i<dataCount;i++){
		
		    	NodeGanettData[i]['name']=results[i]['Content'];
		    	NodeGanettData[i]['desc']=results[i]['starttime'];
		    }
            var sourceData = JSON.stringify(NodeGanettData);  //將物件轉成 json給source
            //alert(sourceData);

			$(".gantt").gantt({
				source: NodeGanettData,
				navigate: "scroll",
				maxScale: "hours",
				itemsPerPage: 10,
				onItemClick: function(data) {
					alert("可以檢視每個節點的時程!");
				},
				onAddClick: function(dt, rowId) {
					alert("可以檢視每個節點的時程");
				},
				onRender: function() {
					if (window.console && typeof console.log === "function") {
						console.log("chart rendered");
					}
				}
			});


			// $(".gantt").popover({
			// 	selector: ".bar",
			// 	title: "I'm a popover",
			// 	content: "And I'm the content of said popover.",
			// 	trigger: "hover"
			// });


    	},error:function(){
    		alert("getNodeInfo fail");
    	}
    });
}

function listMember(main) {
  var s = "";
  for( key in main )  // 使用 in 運算子列舉所有成員
  s += key + ": " + main[key] + "\n";
  return s;
}

function getNodeTime(time){
    var date = time.substring(0,5);
    var year = time.slice(-4);
    var str = date+","+year;
    var temp = new Date(str);
    var FinalTime = temp.getTime();
    var GanettDateStr = "/Date("+FinalTime+")/"
    return GanettDateStr;
}

function ShowProjectCalendar(){
  $(document).ready(function() {
	    var date = new Date();
	    var d = date.getDate();
	    var m = date.getMonth();
	    var y = date.getFullYear();
	    
	    $.ajax({
	    	url:'/ProjectCalendar',
	    	dataType:'text',
	    	type:'POST',
	    	success:function(results){
                //alert(results);
                var x = JSON.parse(results);
 				var source = new Array(x.length);
 				var data = new Array(x.length);
 				
 				for(var i=0; i<x.length;i++){
 				    data[i] = {
 						title : [],
 						start : [],
 						end : []
 					};
              
 					data[i]['title'] = x[i]['mapname'];
 

 					data[i]['start'] = x[i]['StartTime'];

 					data[i]['end'] = x[i]['EndTime'];

 					source[i] = data[i];


 				}
                var sourceData = JSON.stringify(source); 
                //alert("check  " +sourceData);

			    $('#calendar').fullCalendar({
			        editable: true,
			        eventLimit: 4, // allow "more" link when too many events //限制4個
			        events: source
			    });

	    	}
	    });
    });
}

function getUserData(){
　	$.ajax({
		url:'/getuserData',
		dataType:'text',
		type:'POST',
		async:false,
		success:function(result){
			$("#personDataName").html("");
			$("#personDataID").html("");
			$("#personDataID2").html("");
			$("#personDataName2").html("");
			$('#personDataSex').html("");
			$('#personDataCompany').html("");
			$("#personDataMail").html("");
			$("#personDataJob").html("");
			$("#personDataIntro").html("");
		    var data = JSON.parse(result);	
		


		    $("#personDataName").append(data[0]['name']);
		     $("#personDataName2").append(data[0]['name']);
            if(data[0]['sex'] == 'M')     $("#personDataSex").append("男");
            else     $("#personDataSex").append("女");


            $("#personDataID").append(data[0]['userid']);
            $("#personDataID2").append(data[0]['userid']);
			$("#personDataMail").append(data[0]['email']);
			$("#personDataJob").append(data[0]['job']);
			$("#personDataCompany").append(data[0]['company']);
			$("#personDataIntro").append(data[0]['intro']);

			$("#email").attr('value',data[0]['email']);
			$("#job").attr('value',data[0]['job']);
			$("#company").attr('value',data[0]['company']);
			$("#intro").attr('value',data[0]['intro']);


			//$("#Project_start").attr('value',detail[0]['StartTime']);

		},error:function(){
			alert("get userdata fail");
		}
	    
	});
}

function SetPersonData(){
    var sex = $("#selectSex").val();
    var email = $("#email").val();
    var job = $("#job").val();
    var company = $("#company").val();
    var intro = $("#intro").val();

    $.ajax({
    	url:'/SetPersonData',
    	datatype:'text',
    	type:'POST',
    	data:{Sex:sex,Email:email,Job:job,Company:company,Intro:intro},
    	success:function(results){
    		// alert("OK");
    	},error:function(){
    		alert("setPersonDataFail");
    	}
    });
}

function SendPersonMessage(){

	var userid = $("#findreceiver").val();
	var content = $("#MessageConent").val();
	var title = $("#MessageTitle").val();
    if(userid == ""){
    	alert("請輸入收件人");
    	return false;
    }else{
    	//check是否有該收件人存在
    }
    if(content ==""){
    	alert("內容不可為空白");
    	return false;
    }
    if(title ==""){
    	alert("請輸入主旨");
    	return false;
    }
  
 //    var date = new Date();
	// var time = date.getTime();
	var nowtime = new Date();
	var posttime = nowtime.getTime();
	var strtime = nowtime.getFullYear() + "-" + nowtime.getMonth() + "-" + nowtime.getDate() + " " + nowtime.getHours() + ":"+ nowtime.getMinutes() + ":" + nowtime.getSeconds();

    $.ajax({
        url:'/SendPersonMessage',
        type:'POST',
        datatype:'text',
        async:false,
        data:{UserID:userid,Content:content,Time:posttime,Title:title},
        success:function(results){
        	alert(results);
            $('#findreceiver').attr('value','');
			 $('#MessageConent').attr('value','');
			 $("#MessageTitle").attr('value','');
            // $("#findreceiver").attr('', 'value');
            // $("#MessageConent").attr('', 'value'); //=傳送成功將訊息清空

        },error:function(){
        	alert("sendMessage fail");
        }
    });
}

function LoadMessage(){
   // <div class="col-sm-8">
   $.ajax({
        url:'/loadMessage',
        datatype:'text',
        async:false,
        type:'POST',
        success:function(res){
            //alert(JSON.stringify(results));
          
            var results = JSON.parse(res);
            //alert(results);
	        var data ="";
	        data += "<ul class='list-style'>";
	        for(var i=0; i<results.length;i++){
                //check meassage的長度大小  //300px
                var str = results[i]['title'];
                var title ; //存處理過後的主旨
                if(str.length > 15){
                   title = str.slice(15) +"...";
                }else{
 					title = str;
                }
                var messageid= "msgID" + results[i]['MID'];
                
			    
				//alert(posttime);
				//var strtime = posttime.getFullYear() + "-" + posttime.getMonth() + "-" + posttime.getDate() + " " + posttime.getHours() + ":"+ posttime.getMinutes() + ":" + posttime.getSeconds();
                var SendtTime = parseInt(results[i]['SendTime']); //將字串轉成數字 塞進timeformat
       

	        	data+= "<li id=\"" + messageid + "> <a href=\"#\" onClick=\"showMessageContent('  "+messageid+" ','"+results[i]['name']+   " ' )\">";
	        	data+= "<div class=\"messageLine\">";
	        	data+= "  <div class=\"messageIMG\"><img class=\"img-thumbnail\" src=\"/pic/" + results[i]['filename'] + "\" width=\"80px\" height=\"80px\"></div> ";
	        	data+= "  <div class=\"messageText\"><span>"+results[i]['name']+": </span><br><span class=\"messagetitle\"> "+title+"</span></div>";
	        	data+= " <div class=\"messageTime\"><span>寄送時間: "+ timeformat(SendtTime); +"</span> </div>"
	        	data+= "</div>";
	        	data+= "</li>";
	        }
	        data +="</ul>";
          
			$(".messageList").html("");
			$(".messageList").append(data);
          


       },error:function(){
       	 alert("loadMessage fail");
       }
   });

}

function showMessageContent(messageid,name){
	
	var id = messageid.slice(7);
	
	
	$.ajax({
	    url:'/showMessageContent',
	    datatype:'text',
	    type:'POST',
	    data:{ID:id},
	    success:function(results){
	    	var data = JSON.parse(results);
     
 
   			var SendtTime = parseInt(data[0]['SendTime']); //將字串轉成數字 塞進timeformat
   		    var time = timeformat(SendtTime);
 			var content = "";
			content +=     "<h3>From:"+name+"</h3><h5>"+time+"</h5><br>";
			content +=    "<h4>"+data[0]['content'] +"</h4>";
  

	    	$(".messageCheckList").html("");
			$(".messageCheckList").append(content);
	    }
	});
}

function addfriend(){
	var userid = $("#friendID").val();

	$.ajax({
		url:'/addfriend',
		datatype:'text',
		type:'POST',
		data:{Userid:userid},
		success:function(res){
			if(res =="OK"){
				alert("addfriend success");
				//showfriendlist();
				$.unblockUI();
			}
		},error:function(){
			alert("addfriends fail");
		}
	})
}


function showfriendlist(){

	$.ajax({
		url:'/showfriend',
		datatype:'text',
		type:'POST',
		success:function(res){
	
		    var results = JSON.parse(res);

    		var data ="";
	        data += "<ul class='list-style'>";

            for(var i=0;i<results.length;i++){
            	
                //var filename = GetFriendUserPicture(results[i]['follower']);
                // alert(filename);
                var friendID = "";
                friendID += results[i]['follower'];

				GetFriendUserPicture(results[i]['follower'],myCallback);
                function myCallback(filename) {
				    // code that depends on 'result'
			    	data+= "<li> ";
		        	data+= "<div class=\"FriendLine\">";
		        	data+= "  <div class=\"messageIMG\"><img class=\"img-thumbnail\" src=\"/pic/" + filename + "\" width=\"100px\" height=\"100px\"></div> ";
		        	data+= "  <div class=\"messageText\"><span>"+results[i]['name']+" </span><br>";
		        	data+= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
		        	data+= "<span class=\"messagetitle\"><button onclick=\"showfriendData("+"'"+friendID+"'"+")\" class=\"btn btn-default btn-info btn-xs\" id=\"delete\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>";
	                //data+= "<button  class=\"btn btn-default btn-info btn-xs\" id=\"delete\"><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>";


		        	data+= " <div class=\"messageTime\"><span></span> </div>"
		        	data+= "</div>";
		        	data+= "</li>";
				}
	      	}
	        $(".memberlistContent").html("");
			$(".memberlistContent").append(data);
          
		},error:function(){
			alert("addfriends fail");
		}
	})
}


function GetFriendUserPicture(userid,callback){
	$.ajax({
		url:'/getFriendUserpicture',
		dataType:'text',
		async:false,
		type:'POST',
		data:{Userid:userid},
		success:function(result){
			
			var data = JSON.parse(result);
            var filename = data[0]['filename'];
		    callback(filename);
		}
	});
}


function showfriendData(userid){
	// var friend;
	//     friend += "<div class=\"ShowFriendData\">" ;    
	//     friend += " <table class=\"table table-striped\" align=\"center\">";
	//     friend += " <tr><td>名稱:</td><td>  <div id=\"personfriendDataName\">1</div></td></tr>";
	//     friend +=  "<tr><td>代號(ID):</td><td>  <div id=\"personfriendDataID\">1</div></td></tr>";
	//     friend += " <tr><td>性別:</td><td>  <div id=\"personfriendDataSex\">2</div></td></tr>";
	//     friend += " <tr><td>信箱:</td><td>  <div id=\"personfriendDataMail\">3</div></td></tr>";
	//     friend += " <tr><td>職稱:</td><td>  <div id=\"personfriendDataJob\">4</div></td></tr>";
	//     friend += " <tr><td>公司:</td><td>  <div id=\"personfriendDataCompany\">5</div></td></tr>";
	//     friend += " <tr><td>自我簡介:</td><td>  <div id=\"personfriendDataIntro\">6</div></td></tr>";
	//     friend += " </table>";
	//     friend += " <button onclick=\"cancel()\" class=\"btn btn-info btn-group-l\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>  關閉</button>	  </div>";
	$.blockUI({
		  message: $("#FriendData"),
           css: {
              top:'10%',
              left:'30%',
              width:'40%',
              height:'70%',
              backgroundColor: '#FFFFFF', 
               '-webkit-border-radius': '40px', 
               '-moz-border-radius': '40px'
           }            
    }); 
    getFriendData(userid);
}

function getFriendData(userid){
	//alert("userid is" +userid);
　	$.ajax({
		url:'/getFriendData',
		dataType:'text',
		type:'POST',
		data:{Userid:userid},
		async:false,
		success:function(result){
			$("#personfriendDataName").html("");
			$("#personfriendDataID").html("");
			$('#personfriendDataSex').html("");
			$("#personfriendDataMail").html("");
			$("#personfriendDataJob").html("");
			$("#personfriendDataCompany").html("");
			$("#personfriendDataIntro").html("");
		    var data = JSON.parse(result);	
		
		    $("#personfriendDataName").append(data[0]['name']);
            if(data[0]['sex'] == 'M')     $("#personDataSex").append("男");
            else     $("#personDataSex").append("女");


            $("#personfriendDataID").append(data[0]['userid']);
    
			$("#personfriendDataMail").append(data[0]['email']);
			$("#personfriendDataJob").append(data[0]['job']);
			$("#personfriendDataCompany").append(data[0]['company']);
			$("#personfriendDataIntro").append(data[0]['intro']);

		

		},error:function(){
			alert("get userdata fail");
		}
	    
	});
}


function cancel(){
	$.unblockUI();
}

function showNodeAuthorityMember(){
	$(".showNodeAuthorityEdit").show();
}
function hideNodeAuthorityMember(){
	$(".showNodeAuthorityEdit").hide();
}

function ShowNodeEdit(){
 	var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;
    //alert(node.parentNode);
    //alert(listMember(node));
    //alert(node.parentNode);
    if(node.parentNode == null){
    	alert("總專案節點");
    	return false;
    }else{

	  $.blockUI({ 
	       message: $('.nodeEditeAttrbute'),
	       css: {
	       	top:'100px',
	        width: '450px',
	        height:'400px',
	        backgroundColor: '#FFFFFF', 
		       '-webkit-border-radius': '40px', 
		       '-moz-border-radius': '40px'
	    	}
	    }); 
	    M_EditEditNode();
	}
}

function saveLockstatus(){
	var view = gYApp.getView();
    var node = view.getLastSelectedNode();
    var nodeID = node.NodeID;

	var lock =$('input[name=lock]:checked').val() ;
    var status;

	if(lock == "No"){
		status = '0';
	}else{
		status = '1';
	}
    $.ajax({
    	url:'/saveLockstatus',
    	dataType:'text',
    	data:{NodeID:nodeID,Status:status},
    	type:'POST',
    	success:function(results){
    		SetAuthority();
    		$.unblockUI();
    	}
    });  
}