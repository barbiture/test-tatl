/**
 * @param {Object} componentFn - Handle chandge method.
 * @return {Object} - function assign.
 */
export function connect (componentFn) {

	const saved = {
		fn () {
			connect.now = Object.assign(saved, { context: this, args: arguments, slot: 0 });

			const returnValue = componentFn.apply(this, arguments);

			delete connect.now;

			return returnValue;
		},
		data: []
	};
	return saved.fn;
}
/**
 * @param {Object} value - State value.
 * @return {[type]} - Update state value.
 */
export function useState (value) {
	console.log(value)
	const saved = connect.now;
	const { slot } = Object(saved);

	if (saved) {
		++saved.slot;

		value = slot in saved.data
			? saved.data[slot]
		: saved.data[slot] = value;
	}

	return [ value, setValue ];

	function setValue (newValue) {
		if (saved) {
			saved.data[slot] = newValue;

			saved.fn.apply(saved.context, saved.args);
		}
	}
}