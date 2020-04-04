/**
 * Call PopUp
 *
 * @params {Array} buttons - NodeList btn.
*/
import $ from '../dom-facade';
import template from './registration.js';
class popUp extends template {
	constructor() {
		super();
		this.btns = $('#main').find('button');
		this.buttonHandle();
	}
	buttonHandle() {
		this.btns.forEach(btn => {
			switch(btn.id) {
				case 'detail':
					
					// btn.removeEventListener('click', this.popupRegister)
					console.log('click')
					btn.addEventListener('click', this.popupDetail)
				break;
				case 'reg':
					// btn.removeEventListener('click', this.popupDetail)
					console.log('click')
					btn.addEventListener('click', this.popupRegister)
				break;
			}
		})
	}
	popupDetail(e) {
		const container = $('#popups');
		const didMount = super.didMount(container, super.userDetail());
		console.log(didMount)
		if(didMount) {
			window.EventBus.dispatchEvent('DATA', {
				data: this.data
			})
		}
	}
	popupRegister(e) {
		const container = $('#popups');
		
		const didMount = super.didMount(container, super.renderForm());
		console.log(didMount)
		if(didMount) {

			const inputs = container.find('input');
			const submit = container.find('.save')[0];
			const close = container.find('.close')[0];
			super.handleInput(inputs);
			super.handleSave(container, submit);
			// close.addEventListener('click', ev => {
			// 	super.unMount(container);
			// })
		}
	}


}
export default popUp;
