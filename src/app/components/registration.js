import validate from './validate';
import {useState, connect} from '../use-state';
class template extends validate {
	constructor() {
		super();
		connect(this.handleInput);
		this.data = {
			email: '',
			tel: 0,
			firstName: '',
			lastName: ''
		}
	}
	handleInput(els) {
		const [data, setData] = useState({});

		els.forEach(el => {
			'input change'.split(' ').forEach(handler => {
				el.addEventListener(handler, ev => {
					console.log('handle input')
					setData(data[ev.target.id] = ev.target.value)
					this.data = data;
				})
			})
		})
	}
	handleSave(container, el) {
		el.addEventListener('click', ev => {
			if(this.data)
				window.EventBus.dispatchEvent('DATA', {
					data: this.data
				})
			ev.preventDefault();
			ev.stopPropagation();
			container.target.children[0].remove()
		})
	}

	renderForm() {
		console.log('renoder form');
		return (`<section class="pop-up">
				<button class="close">close</button>
				<form action="">
					<label for="mail">
						<span>Email</span>
						<input type="email" id="email" />
						<span class="error">${validate.email}</span>
					</label>
					<label for="tel">
						<span>Tel</span>
						<input type="tel" id="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
						<span class="error">${validate.phone}</span>
					</label>
					<label for="firstName">
						<span>Email</span>
						<input type="text" id="firstName" />
						<span class="error">${validate.firstName}</span>
					</label>
					<label for="lastName">
						<span>Email</span>
						<input type="text" id="lastName" />
						<span class="error">${validate.lastName}</span>
					</label>
					<button type="submit" class="save">Save</button>
				</form>
			</section>`);
	}
	userDetail() {
		return (`<section class="pop-up">
				<h1>tmp</h1>
			</section>`);
	}
	didMount(el, template) {

		console.log(el, template)
		window.EventBus.addEventListener('DATA', e => {
			console.log('didMount', e.detail)
		})
		window.EventBus.removeEventListener('DATA', e => {
			console.log('didMount', e.detail)
		})
		let data
		window.EventBus.addEventListener('DATA', ev => {
			const {data} = ev.detail
			if(data)
				window.EventBus.dispatchEvent('SAVE_DATA', {
					data: ev.detail.data
				})
		})
		if(el.target.children.length) {
			el.target.children[0].remove()
			return false;
		} else {
			el.insertHtmlInsideTop(template);
			return true;
		}

	}
	unMount(el) {
		el.target.children[0].remove()
	}
}

export default template;