var numbers = document.querySelectorAll('.number');
var displycalc = document.getElementById('disply');
var num = document.getElementById('num');
var operation = document.querySelectorAll('.operation');
var clear = document.querySelectorAll('.clear')
var ram = 0;
var rom = false;
var sd = '';

for (var i = 0; i < numbers.length; i++) {
 var number = numbers[i];
 number.addEventListener('click', function (event) {
	numpress(event.target.textContent);

 });
};
for (var i = 0; i < operation.length; i++) {
 var operations = operation[i];
 	operations.addEventListener('click', function (event) {
 	operationcalc(event.target.textContent);
  });
};
for (var i = 0; i < clear.length; i++) {
 var clears = clear[i];
 	clears.addEventListener('click', function (event) {
 	clearbtn(event.target.textContent);
  });
};

function numpress (number) {
	if (rom) {
		displycalc.value = number;
		rom = false;
	}else{
		if (displycalc.value === '0') {
			displycalc.value = number;
		}else {
			displycalc.value += number;
		};
	};
};

function operationcalc(opr) {
var loc = displycalc.value;

	if (rom && sd !== '=') {
		displycalc.value = ram;
	}else {
		rom = true;
		if (sd === '+') {
			ram += parseFloat(loc);
		}else if (sd === '-') {
			ram -= parseFloat(loc);
		}else if (sd === '*') {
			ram *= parseFloat(loc);
		}else if (sd === '/') {
			ram /= parseFloat(loc);
		}else {
			ram = parseFloat(loc);
		};
		displycalc.value = ram;
		sd = opr;
	};
};
function clearbtn (id) {
	if (id === 'ce') {
		displycalc.value = '0';
		rom = true;
	}else if (id === 'c') {
		displycalc.value = '0';
		rom = true;
		ram = 0;
		sd = '';
	};
};