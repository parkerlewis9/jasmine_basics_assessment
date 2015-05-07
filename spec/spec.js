var grader = require("../grader.js");

describe("Grader Tests", function() {
	it("should returncorrect letter grade", function() {
		expect(grader.letterGrader(90)).toEqual("A");
		expect(grader.letterGrader(99)).toEqual("A");
		expect(grader.letterGrader(87)).toEqual("B");
		expect(grader.letterGrader(80)).toEqual("B");
		expect(grader.letterGrader(79)).toEqual("C");
		expect(grader.letterGrader(70)).toEqual("C");
		expect(grader.letterGrader(66)).toEqual("D");
		expect(grader.letterGrader(60)).toEqual("D");
		expect(grader.letterGrader(52)).toEqual("F");
		expect(grader.letterGrader(3)).toEqual("F");
		expect(grader.letterGrader("F")).toEqual("Please enter a number.");
	});

	it("should return average value of array of letter grades", function() {
		expect(grader.averageScore([1,2,3])).toEqual(2);
		expect(grader.averageScore([55, 32, 12, 34])).toEqual(33.25);
		expect(grader.averageScore([1])).toEqual(1);
		expect(grader.averageScore([5, 10 ,15, 20])).toEqual(12.5);
		expect(grader.averageScore([4, 6])).toEqual(5);
		expect(grader.averageScore()).toEqual("Please enter an array.");
		expect(grader.averageScore([1,2,"B"])).toEqual("Please enter only numbers.");
	});

	it("should return median value of array of letter grades", function() {
	expect(grader.medianScore([1,2,3])).toEqual(2);
	});

	it("should return mode value of array of letter grades", function() {
	expect(grader.modeScore([1,2,3,3])).toEqual(3);
	// expect(grader.modeScore([1, 1, 2, 2])).toEqual(2)
	expect(grader.modeScore([1,1,1,2])).toEqual(1);
	});
});

// Despite running out of time to write the actual functions, they are failing the correct way.