var display = '';
var first = null;
var new_number = true;
var operation = null;
var button_click = new Audio("button.wav");

function number(num) {
	button_click.play();
	if (display.length>10) {
		return;
	}
	if (new_number) {
		display = num;
		new_number = false;
	} else {
		display = display + num;
	}
	$("#number").val(display);
}

function operation_pressed(oper) {
	button_click.play();
    result();
    operation = oper;
    first = parseInt(display);
    new_number = true;
}

function result() {
	button_click.play();
    if (first==null) return;
	var second = parseInt(display);
	if (operation=='*') {
		display = first * second;
	}
	if (operation=='+') {
		display = first + second;
	}
	if (operation=='-') {
		display = first - second;
	}
	if (operation=='/') {
		display = first / second;
	}
	$("#number").val(display);
	new_number = true;
}

function clear_all() {
	button_click.play();
	button_click.play();
	display = '0';
	second = null;
	first = null;
	operation = null;
	$("#number").val(display);
	active_action=false;
}

function onload() {
	console.log('Start');
	$("#number").val('0');
}