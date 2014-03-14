// by Kristin Henry, @KristinHenry, 2014
//
// font-families supported: serif, sans-serif, and monospace
//


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
	console.log("x1: " + this._x1);
	if(arguments.length > 0){
		this._x1 = x1;
		return this;
	} else {
		console.log("return x1: " + this._x1);
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

    return this;
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
	this._stroke = null;
	this._strokeWidth = null;
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

    return this;
};


// `Rectangle`: cx, cy, center, width, height, stroke, strokeWidth, fill
//------------------------------------------------
// Define Square class with 
// Properties/Methods: cx, cy, center, width, height, stroke, strokeWidth, fill
// and Draw(svg) Method
// 

function Rectangle(){
	this.init();
}

Rectangle.prototype.init = function(){

	this._cx = 0;
	this._cy = 0;
	this._center = [0,0];
	this._width = 10;
	this._height = 20;
	this._x = 5;
	this._y = 10;
	this._stroke = null;
	this._strokeWidth = null;
	this._fill = 'white';
	return this;
};

Rectangle.prototype.x = function(){

	this._x = this._cx - (this._width/2);
	return this._x;
}

Rectangle.prototype.y = function(){
	this._y = this._cy - (this._height/2);
	return this._y;
}

Rectangle.prototype.cx = function(cx) {
	if(arguments.length > 0){
		this._cx = cx;
		return this;
	} else {
		return this._cx;
	}
};	

Rectangle.prototype.cy = function(cy) {
	if(arguments.length > 0){
		this._cy = cy;
		return this;
	} else {
		return this._cy;
	}
};

Rectangle.prototype.center = function(center) {
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

Rectangle.prototype.width = function(width) {
	if(arguments.length > 0){
		this._width = width;
		return this;
	} else {
		return this._width;
	}
};

Rectangle.prototype.height = function(height) {
	if(arguments.length > 0){
		this._height = height;
		return this;
	} else {
		return this._height;
	}
};

Rectangle.prototype.stroke = function(stroke) {
	if(arguments.length > 0){
		//console.log("stroke: " + stroke);
		this._stroke = stroke;
		return this;
	} else {
		return this._stroke;
	}
};

Rectangle.prototype.strokeWidth = function(strokeWidth){
	if(arguments.length > 0){
		this._strokeWidth = strokeWidth;
		return this;
	} else {
		return this._strokeWidth;
	}
};

Rectangle.prototype.fill = function(fill){
	if(arguments.length > 0){
		this._fill = fill;
		return this;
	} else {
		return this._fill;
	}
};

Rectangle.prototype.draw = function(targ){
	//ToDo:  Need to figout out if I need to offset center, so that input sets upper left corner
	// of square's bounding box????

	var svgDocument = targ.ownerDocument;
    var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "rect");
    shape.setAttributeNS(null, "x", this.x()); //this.cx());
    shape.setAttributeNS(null, "y", this.y()); //this.cy());
    shape.setAttributeNS(null, "width", this.width());
    shape.setAttributeNS(null, "height", this.height());
    shape.setAttributeNS(null, "fill", this.fill());
    shape.setAttributeNS(null, "stroke", this.stroke());
    shape.setAttributeNS(null, "stroke-width", this.strokeWidth());

    targ.appendChild(shape);

    return this;
};


// `Square`: cx, cy, center, width, height, stroke, strokeWidth, fill
//------------------------------------------------
// Define Square class with 
// Properties/Methods: cx, cy, center, width, height, stroke, strokeWidth, fill
// and Draw(svg) Method
// 
function Square(){
	this.init();
}

Square.prototype.init = function(){

	this._cx = 0;
	this._cy = 0;
	this._center = [0,0];
	this._x = -10;
	this._y = -10;
	this._width = 30;
	this._height = 30;
	this._stroke = null;
	this._strokeWidth = null;
	this._fill = 'white';
	return this;
};

Square.prototype.x = function(){

	this._x = this._cx - (this._width/2);
	return this._x;
}

Square.prototype.y = function(){
	this._y = this._cy - (this._height/2);
	return this._y;
}

Square.prototype.cx = function(cx) {
	if(arguments.length > 0){
		this._cx = cx;
		return this;
	} else {
		return this._cx;
	}
};	

Square.prototype.cy = function(cy) {
	if(arguments.length > 0){
		this._cy = cy;
		return this;
	} else {
		return this._cy;
	}
};

Square.prototype.center = function(center) {
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

Square.prototype.width = function(width) {
	if(arguments.length > 0){
		this._width = width;
		this._height = width;
		return this;
	} else {
		return this._width;
	}
};

Square.prototype.height = function(height) {
	if(arguments.height > 0){
		this._height = height;
		this._width = height;
		return this;
	} else {
		return this._height;
	}
};

Square.prototype.stroke = function(stroke) {
	if(arguments.length > 0){
		//console.log("stroke: " + stroke);
		this._stroke = stroke;
		return this;
	} else {
		return this._stroke;
	}
};

Square.prototype.strokeWidth = function(strokeWidth){
	if(arguments.length > 0){
		this._strokeWidth = strokeWidth;
		return this;
	} else {
		return this._strokeWidth;
	}
};

Square.prototype.fill = function(fill){
	if(arguments.length > 0){
		this._fill = fill;
		return this;
	} else {
		return this._fill;
	}
};

Square.prototype.draw = function(targ){
	//ToDo:  Need to figout out if I need to offset center, so that input sets upper left corner
	// of square's bounding box????

	var svgDocument = targ.ownerDocument;
    var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "rect");
    shape.setAttributeNS(null, "x", this.x()); //this.cx());
    shape.setAttributeNS(null, "y", this.y()); //this.cy());
    shape.setAttributeNS(null, "width", this.width());
    shape.setAttributeNS(null, "height", this.height());
    shape.setAttributeNS(null, "fill", this.fill());
    shape.setAttributeNS(null, "stroke", this.stroke());
    shape.setAttributeNS(null, "stroke-width", this.strokeWidth());

    targ.appendChild(shape);

    return this;
};


//------------------------------------------------
// Define Text class with 
// Properties/Methods: x, y, text
// and Draw(svg) Method
// 
function Text(){
	this.init();
}

Text.prototype.init = function(){

	this._x = 0;
	this._y = 0;
	this._text = 'text';
	this._fill = 'black';
	this._textAnchor = 'start';
	this._fontFamily = 'sans-serif';
	this._fontSize = '12';
	return this;
};

Text.prototype.x = function(x) {
	if(arguments.length > 0){
		this._x = x;
		return this;
	} else {
		return this._x;
	}
};	

Text.prototype.y = function(y) {
	if(arguments.length > 0){
		this._y = y;
		return this;
	} else {
		return this._y;
	}
};	

Text.prototype.text = function(text) {
	if(arguments.length > 0){
		this._text = text;
		return this;
	} else {
		return this._text;
	}
};

Text.prototype.fill = function(fill) {
	if(arguments.length > 0){
		this._fill = fill;
		return this;
	} else {
		return this._fill;
	}
};	

Text.prototype.textAnchor = function(textAnchor) {
	if(arguments.length > 0){

		this._textAnchor = 'end';

		if(textAnchor == 'middle'){
		  	this._textAnchor = 'middle';

		 } else if(textAnchor == 'start'){
		 	this._textAnchor = 'start';
		} 

		return this;
	} else {
		console.log("anchor out: " + this._textAnchor);
		return this._textAnchor;
	}
};	

Text.prototype.fontSize = function(fontSize) {
	if(arguments.length > 0){
		this._fontSize = fontSize;
		return this;
	} else {
		return this._fontSize;
	}
};	

Text.prototype.fontFamily = function(fontFamily) {
	if(arguments.length > 0){

		this._fontFamily = 'sans-serif';

		if(fontFamily == 'serif'){
			this._fontFamily = 'serif';
		} else if(fontFamily == 'monospace') {
			this._fontFamily = 'monospace';
		}

		return this;
	} else {
		return this._fontFamily;
	}
};

Text.prototype.draw = function(targ){

	var svgDocument = targ.ownerDocument;
    var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "text");
    shape.setAttributeNS(null, "x", this.x());
    shape.setAttributeNS(null, "y", this.y());
    shape.setAttributeNS(null, "fill", this.fill());
    shape.setAttributeNS(null, "text-anchor", this.textAnchor());
    shape.setAttributeNS(null, "font-family", this.fontFamily());
    shape.setAttributeNS(null, "font-size", this.fontSize());

    var textNode = document.createTextNode(this.text());
	shape.appendChild(textNode);

    targ.appendChild(shape);

    return this;
};

