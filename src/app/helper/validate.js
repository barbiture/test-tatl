import $ from '../helper/dom-facade.js';
import phoneMask from '../helper/input-mask.js';
/**
 * Check validate.
 * @return {Object} validate - Catch error, add inline error string.
 */
const validate = (function() {
	const _errorList = {
		email: 'please enter a valid email',
		tel: 'please enter a valid phone number',
		firstName: 'first name mast minimum 4 characters',
		lastName: 'last name mast minimum 4 characters'
	};
	const telPattern = /\+([0-9]){2}\s([(0-9)]){5}([0-9]){3}-([0-9]){2}-([0-9]){2}/g;
	/**
	 * @param  {object} parentNode - Parent event element.
	 * @param  {Boolean} isValid - Check validate form field.
	 */
	const _error = (parentNode, isValid) => {
		const {htmlFor} = parentNode;
		if(isValid) {
			parentNode.classList.remove('error')
			parentNode.childNodes.forEach(el => {
				if(el.classList && el.classList.contains('error-message'))
					el.remove()
			})
		} else {
			if(!parentNode.classList.contains('error'))
				parentNode.insertAdjacentHTML('beforeend', `<span class="error-message">${_errorList[htmlFor]}</span>`)
			parentNode.classList.add('error')
		}
	}
	/**
	 * 
	 * 
	 * @param  {object} target - Event element.
	 */
	const handleValidate = (target, handler) => {
		const {parentNode} = target
		if(handler === 'blur') {
			switch(target.type) {
				case 'email':
					_error(parentNode, target.validity.valid && target.value.length > 6);
					break;
				case 'tel':
					_error(parentNode, target.value.match(telPattern));
					break;
				case 'text':
					_error(parentNode, target.value.length > 3);
			}
		} else if(target.type === 'tel'){
				console.log(handler)
				phoneMask(target);
			}
	}
	return {
		validate: handleValidate
	}
})()
export default validate;