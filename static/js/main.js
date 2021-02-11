//	main.js
//
//	Updated 2/11/2021.
//
//	Abstract: p5.js tree animation.
//
// 	Credit: Forked and modified by Al Miller from Chris Harrison's https://crh.dev/TreeGenerator/

var input_seed,
	size,
	maxLevel,
	rot,
	lenRand,
	branchProb,
	rotRand,
	leafProb;

var prog = 1,
	growing = false,
	mutating = false,
	randSeed = 80,
	paramSeed = Math.floor(Math.random() * 1000),
	randBias = 0;

// Remove tree animation div after timeout
window.addEventListener('load', function () {
	setTimeout(function () {
		document.getElementById('sketch-container').remove();
	}, 13500)
})

// On load, set cookie after 10s delay
window.addEventListener('load', function () {
	if (window.localStorage.getItem('executedAnimation') == null) {
		setTimeout(function () {
			window.localStorage.setItem('executedAnimation', true);
		}, 10000)
	} else {
		document.getElementById('sketch-container').remove();
		var grid = document.getElementById('grid_container')
		grid.classList.remove('fade_in_page');
		grid.classList.add('rapid_fade_in');
	}
});

setup();

// Set canvas dimensions based on screen size
function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('sketch-container');
	readInputs();
	startGrow();
	noLoop();
}

// p5.js event listener for window resizing, adjust canvas
function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}

function readInputs() {
	size = (windowHeight / 11 + windowWidth / 11) / 2;
	maxLevel = 13;
	rot = PI / 8.5;
	lenRand = 1;
	branchProb = 0.9;
	rotRand = 0.3;
	leafProb = 0.9;
}

//	Draw entire animation
function draw() {
	readInputs();
	stroke(0, 0, 0, 175);
	background(255, 255, 255);
	// Phone
	if (window.innerWidth < 600) {
		translate(width / 3.3, height / 1.6);
	} else {
		translate(width / 4, height / 1.6);
	}
	scale(1, -1);
	branch(1, randSeed);
	noLoop();
}

//	Draw branches
function branch(level, seed) {
	// Stop drawing if at deepest recursion level
	if (prog < level) return;
	randomSeed(seed);
	var seed1 = random(1000),
		seed2 = random(1000);
	var growthLevel = (prog - level > 1) || (prog >= maxLevel + 1) ? 1 : (prog - level);
	strokeWeight(5 * Math.pow((maxLevel - level + 1) / maxLevel, 2));
	var len = growthLevel * size * (1 + rand2() * lenRand);
	line(0, 0, 0, len / level);
	translate(0, len / level);
	var doBranch1 = rand() < branchProb;
	var doBranch2 = rand() < branchProb;
	var doLeaves = rand() < leafProb;

	if (level < maxLevel) {
		var r1 = rot * (1 + rrand() * rotRand);
		var r2 = -rot * (1 - rrand() * rotRand);
		if (doBranch1) {
			push();
			rotate(r1);
			branch(level + 1, seed1);
			pop();
		}
		if (doBranch2) {
			push();
			rotate(r2);
			branch(level + 1, seed2);
			pop();
		}
	}

	//	Draw leaves
	let leafPoints = [];
	let ratio = (width + height) / (1300 + 1300);
	leafPoints = [
		createVector(20 * ratio, 5 * ratio), //top
		createVector(10 * ratio, 20 * ratio),//left
		createVector(20 * ratio, 35 * ratio),//bottom
		createVector(30 * ratio, 20 * ratio) //right
	];
	if ((level >= maxLevel || (!doBranch1 && !doBranch2)) && doLeaves) {
		draw_leaf(leafPoints);
	}
	noLoop();
}

//	Define leaves
function draw_leaf(points) {
	curveTightness(-0.2);
	noStroke();

	// Set leaf color
	fill(48 + 25 * rand2(), 82 + 15 * rand2(), 47 + 15 * rand2(), 155);

	let p1 = p5.Vector.lerp(points[1], points[2], 0.5);
	let p1_reverse = p5.Vector.lerp(points[3], points[2], 0.5);
	let p2 = p5.Vector.lerp(points[0], points[2], 0.95);
	let p23 = p5.Vector.lerp(points[2], points[3], 0.75);
	let p23_reverse = p5.Vector.lerp(points[2], points[1], 0.75);
	let p3 = p5.Vector.lerp(points[1], p23, 0.95)
	let p3_reverse = p5.Vector.lerp(points[3], p23_reverse, 0.95);
	let p4 = p5.Vector.lerp(points[3], points[0], 0.8);
	let p4_reverse = p5.Vector.lerp(points[1], points[0], 0.8);
	let p_5 = p5.Vector.lerp(p4, points[1], 0.09);
	let p_5_reverse = p5.Vector.lerp(p4_reverse, points[3], 0.09);
	let p6 = p5.Vector.lerp(points[0], points[2], 0.05);

	beginShape();
	curveVertex(p1.x, p1.y);
	curveVertex(p2.x, p2.y);
	curveVertex(p3.x, p3.y);
	curveVertex(p_5.x, p_5.y);
	vertex(p6.x, p6.y);
	curveVertex(p_5_reverse.x, p_5_reverse.y);
	curveVertex(p3_reverse.x, p3_reverse.y);
	curveVertex(p2.x, p2.y);
	curveVertex(p1_reverse.x, p1_reverse.y);
	endShape();
}

function startGrow() {
	growing = false;
	prog = 1;
	grow();
}

//	Tree growing animation
function grow() {
	// Grow tree, loop() while level of recursion is below max
	if (prog > (maxLevel + 2)) {
		prog = maxLevel + 3;
		loop();
		growing = false;
		return;
	}

	// Set the amount of time needed for the tree to grow based on the levels of recursion
	var startTime = millis();
	loop();
	var diff = millis() - startTime;
	prog += maxLevel / 8 * Math.max(diff, 20) / 1000;
	setTimeout(grow, Math.max(1, 20 - diff));
}

// Generate random values used for tree parameters.
function rand() {
	return random(1000) / 1000;
}
function rand2() {
	return random(2000) / 1000 - 1;
}
function rrand() {
	return rand2() + randBias;
}