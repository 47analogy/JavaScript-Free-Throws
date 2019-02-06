/*
For this coding challenge you will be recreating low level logic gates.

You will first create the NAND function and then you will create

NOT, OR, AND, and XOR all using the NAND function that you created.

Implement NAND however you would like and then use NAND to implement the

other logic gates.

See the link below for the truth tables for these logic gates.

https://en.wikipedia.org/wiki/NAND_logic#NAND
https://www.dyclassroom.com/logic-gate/basic-logic-gate-and-or-not

All functions should return a 1 for true and a 0 for false.
*/

// NOT-AND gate is an AND gate followed by a NOT gate
function NAND(x, y) {
	// You can use whatever JS operators that you would like: &&, ||, !
	if (!(x && y)) {
		return 1;
	} else {
		return 0;
	}
}

// Logic NOT Gate is an inverter
// can be made using 2 input NAND (or NOR) gates
function NOT(n) {
	// Do not use !
	if (this.NAND(n, n)) {
		return 1;
	} else {
		return 0;
	}
}

// Logic AND gate is made by inverting the output of a NAND gate
function AND(x, y) {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written
	if (this.NOT(this.NAND(x, y))) {
		return 1;
	} else {
		return 0;
	}
}

function OR(x, y) {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
	// Logic OR gate can be made using NAND gate and inverting the inputs
	if (this.NAND(this.NOT(x), this.NOT(y))) {
		return 1;
	} else {
		return 0;
	}
}

function XOR(x, y) {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written
	// XOR gate can be made by connecting four NAND gates
	if (NAND(NAND(x, NAND(x, y)), NAND(y, NAND(x, y)))) {
		return 1;
	} else {
		return 0;
	}
}
