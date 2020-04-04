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
	return this.target.querySelectorAll(targets);
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
export default $;
