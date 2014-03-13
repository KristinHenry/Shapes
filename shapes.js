

// Define Line class with 
// Properties/Methods: x1, y1, x2, y2, stroke, strokeWidth
// and Draw(svg) Method
// 
function Line(){
	this.init();
}

Line.prototype.init = function(){

	this._x1 = 0;
	this._y1 = 0;
	this._x2 = 100;
	this._y2 = 100;
	this._stroke = 'black';
	this._strokeWidth = 1;
	return this;
};

Line.prototype.x1 = function(x1) {
	if(arguments.length > 0){
		this._x1 = x1;
		return this;
	} else {
		return this._x1;
	}
};

Line.prototype.y1 = function(y1) {
	if(arguments.length > 0){
		this._y1 = y1;
		return this;
	} else {
		return this._y1;
	}
};

Line.prototype.x2 = function(x2) {
	if(arguments.length > 0){
		this._x2 = x2;
		return this;
	} else {
		return this._x2;
	}
};

Line.prototype.y2 = function(y2) {
	if(arguments.length > 0){
		this._y2 = y2;
		return this;
	} else {
		return this._y2;
	}
};

Line.prototype.stroke = function(stroke) {
	if(arguments.length > 0){
		//console.log("stroke: " + stroke);
		this._stroke = stroke;
		return this;
	} else {
		return this._stroke;
	}
};

Line.prototype.strokeWidth = function(strokeWidth){
	if(arguments.length > 0){
		this._strokeWidth = strokeWidth;
		return this;
	} else {
		return this._strokeWidth;
	}
};

Line.prototype.draw = function(targ){
	var svgDocument = targ.ownerDocument;
    var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "line");
    shape.setAttributeNS(null, "x1", this.x1());
    shape.setAttributeNS(null, "y1", this.y1());
    shape.setAttributeNS(null, "x2",  this.x2());
    shape.setAttributeNS(null, "y2",  this.y2());
    shape.setAttributeNS(null, "stroke", this.stroke());
    shape.setAttributeNS(null, "stroke-width", this.strokeWidth());

    targ.appendChild(shape);
};

//------------------------------------------------
// Define Circle class with 
// Properties/Methods: cx, cy, center, width, stroke, strokeWidth, fill
// and Draw(svg) Method
// 
function Circle(){
	this.init();
}

Circle.prototype.init = function(){

	this._cx = 0;
	this._cy = 0;
	this._center = [0,0];
	this._width = 20;
	this._stroke = 'black';
	this._strokeWidth = 1;
	this._fill = 'grey'
	return this;
};

Circle.prototype.cx = function(cx) {
	if(arguments.length > 0){
		this._cx = cx;
		return this;
	} else {
		return this._cx;
	}
};	

Circle.prototype.cy = function(cy) {
	if(arguments.length > 0){
		this._cy = cy;
		return this;
	} else {
		return this._cy;
	}
};	

Circle.prototype.center = function(center) {
	if(arguments.length > 0){
		this._center = [arguments[0], arguments[1]];
		this._cx = this._center[0];
		this._cy = this._center[1];
		for(var i = 0; i< arguments.length; i++){
			console.log("center: " + arguments[i]);
		}
		return this;
	} else {
		return this._center;
	}
};

Circle.prototype.width = function(width) {
	if(arguments.length > 0){
		this._width = width;
		return this;
	} else {
		return this._width;
	}
};	

Circle.prototype.stroke = function(stroke) {
	if(arguments.length > 0){
		//console.log("stroke: " + stroke);
		this._stroke = stroke;
		return this;
	} else {
		return this._stroke;
	}
};

Circle.prototype.strokeWidth = function(strokeWidth){
	if(arguments.length > 0){
		this._strokeWidth = strokeWidth;
		return this;
	} else {
		return this._strokeWidth;
	}
};

Circle.prototype.fill = function(fill){
	if(arguments.length > 0){
		this._fill = fill;
		return this;
	} else {
		return this._fill;
	}
};

Circle.prototype.draw = function(targ){
	//ToDo:  Need to figout out if I need to offset center, so that input sets upper left corner
	// of circle's bounding box????

	var svgDocument = targ.ownerDocument;
    var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "circle");
    shape.setAttributeNS(null, "cx", this.cx());
    shape.setAttributeNS(null, "cy", this.cy());
    shape.setAttributeNS(null, "r",  this.width()/2);
    shape.setAttributeNS(null, "fill", this.fill());
    shape.setAttributeNS(null, "stroke", this.stroke());
    shape.setAttributeNS(null, "stroke-width", this.strokeWidth());

    targ.appendChild(shape);
};

//------------------------------------------------


