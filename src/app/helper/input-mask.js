const setCursorPosition = (pos, elem) => {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		let range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
const phoneMask = (target) => {
	let matrix = target.defaultValue;
	let i = 0;
	let def = matrix.replace(/\D/g, '');
	let val = target.value.replace(/\D/g, '');
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, () => val.charAt(i++) || '_');
	target.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != target.defaultValue ? i++ : i = matrix.indexOf('_');
	console.log(target.value.length, target.defaultValue.length)
	setCursorPosition(i, target);
}

export default phoneMask;