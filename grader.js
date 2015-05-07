module.exports = {

	letterGrader: function(num) {
		var grade = Math.floor(num);
		if ((grade >= 90) && (grade <= 99)) {
			return "A"
		} else if ((grade >= 80) && (grade <= 89)) {
			return "B"
		} else if ((grade >= 70) && (grade <= 79)) {
			return "C"
		} else if ((grade >= 60) && (grade <= 69)) {
			return "D"
		} else if ((grade >= 0) && (grade <= 59)) {
			return "F"
		} else {
			return "Please enter a number."
		}
	},

	averageScore: function(arr) {
		if(!arr) {
			return "Please enter an array."
		} else {
				var sum = 0
				for(var i = 0; i < arr.length; i++) {
					if(typeof arr[i] !== "number") {
						return "Please enter only numbers."
					} else {
					sum += arr[i];
					};
				}
				return sum/arr.length;
		};

	},

	medianScore: function(arr) {
		var temp = 0
		for (var i = 0; i < arr.length; i++) {
			for(var j = 0; j < arr.length; j++) {
				if(arr[j] > arr[j+1]) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		};
		i

	},

	modeScore: function(arr) {
		var myObj = {};
		for(var i = 0; i < arr.length; i++) {
			if(myObj[arr[i]]) {
				myObj[arr[i]]++;
			} else {
				myObj[arr[i]] = 1;
			}
		}
		var most = 0;
		var mode = 0;
		for (key in myObj) {
			if (myObj[key] > most) {
				most = myObj[key];
				mode = key;
			}
		}
		return parseInt(mode);
	},

}

// I've run out of time to write the remaining code for these functions