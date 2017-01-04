// Check through the code and optimize this. Below are notes on what you’re accomplishing….
//
// For a given image find:
//
// * If it contains a pixel that has the color { r: 0, g: 135, b: 0, a: 100 } (Searching, sorting all of the pixels in the image then finding ones with the color)
// * If there is a pixel of that color is there at least one 20x20 pixel (linear algebra) SOLID box containing that color?
//
// You are able to use the npm
// var lwip = require('lwip');
//
// Work alone or in a group to solve the problem. For a given image of 1280x720 pixels.
//
// What is the time complexity of your solution?
// How might this be done better?
//
// What are some ways that this could be optimized?
//
// If there was 1,000 images that needed to be checked each minute. What problems might there be?
// How could we make this faster (scale image by 1/4 so you are looking only for a 5x5 square) searching through 57,600 pixels instead of 921,600 pixels
//
// Different methods: brute force, find green and then check matrix, binary reduction


/// Check image for green color of a bad still capture
var lwip = require('lwip');
var μs = require('microseconds');
var matrixWith = require('matrix-with');

// we are looking for a 5x5 matrix of green
var searchXSize = 5;
var searchYSize = 5;


//lwip.open('green.png', function(err, image){
//lwip.open('good.png', function(err, image){
lwip.open('bad.jpg', function(err, image){
//lwip.open('test.png', function(err, image){
var before = μs.now();

var referenceMatrix = matrixWith(searchXSize,searchYSize,1);

var imageBitmap = matrixWith(image.width(), image.height(), 0);

var totalGreens = 0;

// identify the green and fill up the matrix
	for(x=0;x<image.width();x++){
		for(y=0;y<image.height();y++){
			const im = image.getPixel(x, y);
//			console.log("This color is: ",im);

			if(im.r===0 && (im.g===136) && im.b===0){
				imageBitmap[x][y]=1;
				// OPTIMZATION!
				// do test for if we are out of bounds potenially
				// test current x pos + searchXSize amount of pixels for green
				// test the search matrix size grid for all green when it fail, exit search
				totalGreens++;
			}
		}

	}

if(totalGreens>3){
	 console.log(`We found ${totalGreens} special green pixels.`);
}else{
	console.log("Good! NO Found Green");
	var time= μs.since(before);

	console.log(μs.parse(time).toString());
	process.exit();
}

console.log("Full image size:",image.width(),"x",image.height());
if(image.width()<50){
	console.log(imageBitmap);
}

for(x=0;x<image.width();x++){

	for(y=0;y<image.height();y++){
		// when we find a 1 we should then look for the next n on the x axis and the same n on the y axis
		if(imageBitmap[x][y]==1){

			//extract n xs and n ys matrix. test that with our text matrix that is full of 1s
			// console.log(searchXSize);
			// console.log(searchYSize);
			// console.log("Found x,y",x,y);
			// console.log(referenceMatrix);
			var testMatrix =[];
			// console.log(testMatrix);

			/// we found a green dot now we have to place our test matrix on top of it
			/// if the full matrix is out of bounds this dot will fail so we should check
			/// for this case.
			/// x = pos on the full matrix that we found the green dot
			/// y = position we are in on the full matrix that we found the green dot
			/// i = horizontal axis of of the test matrix of all 1s
			/// y = vertical axis of the test matrix of all 1s

			/// check to see if x + searchXSize is out of bounds
//			console.log(x+searchXSize,y,imageBitmap[x+searchXSize][y]);

			if((x+searchXSize)>image.width()||(y+searchYSize)>image.height()){
				// console.log("x y search is out of bounds",x+searchXSize,y+searchYSize,image.width(),image.height());
				continue;
			}else{
				if(imageBitmap[x+searchXSize][y]==undefined){
					console.log("We are out of bounds for x", x, (x+searchXSize));
					continue; /// On the the next green dot
				}
				/// check to see if y + searchYSize is out of bounds
				if(imageBitmap[x][y+searchYSize]==undefined){
					console.log("We are out of bounds for y", y, (y+searchYSize));
					continue; /// On the the next green dot
				}
			}

			let testPassed = true;
			for(i=x; i<x+searchXSize; i++){
				for(j=y; j<y+searchYSize; j++){

					// console.log("checking matrix");
					// console.log(imageBitmap[i][j]);
					if(imageBitmap[i][j]!=1){
						testPassed = false;
					}
					/// Ok we have enough room on the full matrix to do out test

//					console.log(i,j,x+i,y+j);
//						testMatrix[i][j]=imageBitmap[x+i][y+j];
				}
			}
			// console.log("Test passed? ",testPassed);

			if(testPassed==true){
				 console.log("Found Too Much Green!", x,y,i,j);
				 var time= μs.since(before);

				 console.log(μs.parse(time).toString());
				 process.exit();

			}

			// console.log(testMatrix);
//			break;



		}

	}
}

var time= μs.since(before);

console.log(μs.parse(time).toString());
// console.log(imageBitmap);
	 });
