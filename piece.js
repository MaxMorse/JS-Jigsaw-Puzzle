function piece(x, y) {
	this.x = x;
	this.y = y;
	
	this.draw = function() {
		
		
		ctx.fillRect(this.x, this.y, 100, 100);
	}
}