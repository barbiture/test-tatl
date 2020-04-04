/**
 * Call PopUp
 *
 * @params {Array} buttons - NodeList btn.
*/
import $ from '../helper/dom-facade';
import template from './template';
class popUp extends template {
	constructor() {
		super();
		this.btns = $('#main').find('button');
		this.buttonHandle();
		this.container = $('#popups');
	}
	buttonHandle() {
		this.btns.forEach(btn => {
			switch(btn.id) {
				case 'detail':
					btn.addEventListener('click', this.popupDetail.bind(this))
				break;
				case 'reg':
					btn.addEventListener('click', this.popupRegister.bind(this))
				break;
			}
		})
	}
	popupDetail(e) {
		super.didMount(this.container, super.userDetail());
		const close = this.container.find('.close');
		close.addEventListener('click', ev => {
			super.unMount(this.container);
			this.btns[0].parentNode.classList.remove('blur')
		})
	}
	popupRegister(e) {
		const didMount = super.didMount(this.container, super.renderForm());
		if(didMount) {
			this.btns[0].parentNode.classList.add('blur')
			const inputs = this.container.find('input');
			const submit = this.container.find('.save');
			const close = this.container.find('.close');
			super.handleInput(inputs);
			super.handleSave(this.container, submit);
			close.addEventListener('click', ev => {
				super.unMount(this.container);
				this.btns[0].parentNode.classList.remove('blur')
			})
		}
	}
}
export default popUp;
