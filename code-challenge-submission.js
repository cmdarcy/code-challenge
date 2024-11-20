const findSum = function (array) {
	return array.reduce((acc, curr) => acc + curr);
};

const findFrequency = function (array) {
	const result = array.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	}, {});
	let mostUsedStr = "";
	let leastUsedStr = "";
	let mostUsedStrCount = 0;
	let leastUsedStrCount = Infinity;
	for (const key in result) {
		if (result[key] > mostUsedStrCount) {
			mostUsedStr = key;
			mostUsedStrCount = result[key];
		}
		if (result[key] < leastUsedStrCount) {
			leastUsedStr = key;
			leastUsedStrCount = result[key];
		}
	}
	return { most: mostUsedStr, least: leastUsedStr };
};

const isPalindrome = function (str) {
	return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
};

const largestPair = function (array) {
	let largestProduct = -Infinity;
	for (let i = 0; i < array.length; i++) {
		if (array[i] * array[i + 1] > largestProduct) {
			largestProduct = array[i] * array[i + 1];
		}
	}
	return largestProduct;
};

const removeParenth = function (str) {
	const strArray = str.split(/[()]/);
	strArray.splice(1, 1);
	const result = strArray.join("");
	return result;
};

const scoreScrabble = function (str) {
	const pointsArray = [];
	for (let letterIndex in str) {
		switch (str[letterIndex]) {
			case "q":
			case "z":
				pointsArray.push(10);
				break;
			case "j":
			case "x":
				pointsArray.push(8);
				break;
			case "k":
				pointsArray.push(5);
				break;
			case "f":
			case "h":
			case "v":
			case "w":
			case "y":
				pointsArray.push(4);
				break;
			case "b":
			case "c":
			case "m":
			case "p":
				pointsArray.push(3);
				break;
			case "d":
			case "g":
				pointsArray.push(2);
				break;
			default:
				pointsArray.push(1);
				break;
		}
	}
	return pointsArray.reduce((acc, curr) => acc + curr);
};
