const adjacentType = [
	'beforebegin',
	'afterbegin',
	'beforeend',
	'afterend'
];
/**
 * EndPoint DOM manipulate;.
 *
 * @param {string} target - Selector.
 * @returns {object} - New instance.
 */
const $ = function (target) {
	return new DomQuery(target);
};

/**
 * QuerySelector.
 *
 * @param {string} target - Selector.
 */
function DomQuery(target) {
	this.target = document.querySelector(target);
}
/**
 * QuerySelectorAll.
 *
 * @param {string} targets - Selector.
 * @returns {Array} - Return NodeList.
 */

DomQuery.prototype.find = function(targets) {
	const el = this.target.querySelectorAll(targets);
	if(el.length === 0){
		throw "Invalid selector!";
		return false
	}
	return el.length === 1 ? el[0] : el;
};

/**
 * InsertAdjacentHTML.
 *
 * @param {staring} templates - Template literals, html syntax.
 * return {Object} - Node element.
 */
DomQuery.prototype.insertHtmlInsideTop = function(templates) {
	this.target.insertAdjacentHTML('afterbegin', templates);
	return this;
};
DomQuery.prototype.insertHtmlInsideBottom = function(templates) {
	this.target.insertAdjacentHTML('beforeend', templates);
	return this;
};
export default $;
