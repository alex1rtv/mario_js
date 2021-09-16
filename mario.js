
printPyramid(5);
drawPyramid(5);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
	for  (let i = 0; i < height; i++) {
		//console.log(' '.repeat(height + 1 - (i + 2)) + '#'.repeat(2 + i));
		let s = "";
		
		for (let j = 0; j < height + 1 - (i + 2); j++) {
			s += ' ';
		}
		for (let j = 0; j < i + 2; j++) {
			s += '#';
		}
		console.log(s);
	}	
}

function drawPyramid(height) {
	
	if (height < 1) {
		return;
	}
	
	// remove div "under construction"
	document.getElementById("construction").remove();
		
	let pyramid = document.getElementById("pyramid");
	
	for (let i = 0; i < height; i++) {
		
		// create spaces
		for (let j = 0; j < height + 1 - (i + 2); j++) {
			//s += ' ';
			let div = document.createElement("div");
			div.classList.add("space");
			pyramid.appendChild(div);
		}
		
		// create bricks
		for (let j = 0; j < i + 2; j++) {
			//s += '#';
			let div = document.createElement("div");
			div.classList.add("brick");
			pyramid.appendChild(div);
		}
		
		let br = document.createElement("br");
		pyramid.appendChild(br);	
	}	
}
