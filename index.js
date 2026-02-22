// ||HOME SCORE
let HomeScore = document.getElementById("HomeScore");
let num1 = 0;

HomeScore.textContent = String(num1);

function homeSubtractOne() {
	num1 -= 1;
	HomeScore.textContent = String(num1);

	if (num1 <= 0) {
		num1 = 0;
		HomeScore.textContent = String(num1);
	}
}

function homeAddOne() {
	num1 += 1;
	HomeScore.textContent = String(num1);

	if (num1 >= 99) {
		num1 = 99;
		HomeScore.textContent = String(num1);
	}
}

function homeAddTwo() {
	num1 += 2;
	HomeScore.textContent = String(num1);

	if (num1 >= 99) {
		num1 = 99;
		HomeScore.textContent = String(num1);
	}
}

function homeAddThree() {
	num1 += 3;
	HomeScore.textContent = String(num1);

	if (num1 >= 99) {
		num1 = 99;
		HomeScore.textContent = String(num1);
	}
}

// ||GUEST SCORE

let GuestScore = document.getElementById("GuestScore");
let num2 = 0;

GuestScore.textContent = String(num2);

function guestSubtractOne() {
	num2 -= 1;
	GuestScore.textContent = String(num2);

	if (num2 <= 0) {
		num2 = 0;
		GuestScore.textContent = String(num2);
	}
}

function guestAddOne() {
	num2 += 1;
	GuestScore.textContent = String(num2);

	if (num2 >= 99) {
		num2 = 99;
		GuestScore.textContent = String(num2);
	}
}

function guestAddTwo() {
	num2 += 2;
	GuestScore.textContent = String(num2);

	if (num1 >= 99) {
		num2 = 99;
		GuestScore.textContent = String(num2);
	}
}

function guestAddThree() {
	num2 += 3;
	GuestScore.textContent = String(num2);

	if (num2 >= 99) {
		num2 = 99;
		GuestScore.textContent = String(num2);
	}
}

// ||RESET
function reset() {
	num1 = 0;
	num2 = 0;
	HomeScore.textContent = String(num1);
	GuestScore.textContent = String(num2);
}
