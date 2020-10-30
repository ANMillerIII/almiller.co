// Forked and modified by Al Miller from Chris Harrison's https://crh.dev/TreeGenerator/

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

setup();

function setup() {
	// Set canvas dimensions based on screen size
	createCanvas(window.innerWidth, window.innerHeight);

	// Place tree seed on canvas
	input_seed = createInput(randSeed);
	input_seed.style('width', '50px')

	readInputs(false);
	startGrow();
}

function windowResized() {
	// p5.js event listener for window resizing, adjust canvas
	resizeCanvas(windowWidth, windowHeight);
}

function readInputs(updateTree) {
	console.log("in read inputs")
	// Set tree parameters
	size = 150; // to 200
	maxLevel = 13;
	rot = PI/8.5; //Pi/2
	lenRand = 1; //0.5
	branchProb = 0.9;
	rotRand = 0.2;
	leafProb = 0.5;
}

function draw() {
	stroke(0, 0, 0);
	background(255, 255, 255);
	translate(width / 3, height);
	scale(1, -1);
	translate(0, 20);
	branch(1, randSeed);
	noLoop();
}

function branch(level, seed) {
	if (prog < level)
		return;

	randomSeed(seed);

	var seed1 = random(1000),
		seed2 = random(1000);

	var growthLevel = (prog - level > 1) || (prog >= maxLevel + 1) ? 1 : (prog - level);

	strokeWeight(4 * Math.pow((maxLevel - level + 1) / maxLevel, 2));

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

	if ((level >= maxLevel || (!doBranch1 && !doBranch2)) && doLeaves) {
		var p = Math.min(1, Math.max(0, prog - level));

		var flowerSize = (size / 100) * p * (1 / 6) * (len / level);

		strokeWeight(1);
		// Change leaf color here!
		stroke(240 + 15 * rand2(), 20 + 15 * rand2(), 20 + 15 * rand2());

		rotate(-PI);
		for (var i = 0; i <= 8; i++) {
			line(0, 0, 0, flowerSize * (1 + 0.5 * rand2()));
			rotate(2 * PI / 8);
		}
	}
}

function startGrow() {
	growing = true;
	prog = 1;
	grow();
}

function grow() {
	// Grow tree, loop() while level of recursion is below max
	if (prog > (maxLevel + 3)) {
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


// Generate random values used for tree parameters

function rand() {
	return random(1000) / 1000;
}

function rand2() {
	return random(2000) / 1000 - 1;
}

function rrand() {
	return rand2() + randBias;
}