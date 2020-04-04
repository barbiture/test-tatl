import validate from '../helper/validate';
import {useState, connect} from '../helper/use-state';
class template {
	constructor() {
		connect(this.handleInput);
		this.data = {
			email: '',
			tel: '',
			firstName: '',
			lastName: ''
		}
		this.countryCode = '+38'
		this.phoneReg = /\+([0-9]){2}\s([(0-9)]){5}([0-9]){3}-([0-9]){2}-([0-9]){2}/g
	}
	handleInput(els) {
		const [data, setData] = useState({});
		els.forEach(el => {
			'input change blur'.split(' ').forEach(handler => {
				el.addEventListener(handler, ev => {
					const replaceValue = ev.target.type === 'tel' ? ev.target.value.replace(/\D/g, '') : ev.target.value;
					console.log(replaceValue)
					if(replaceValue.length !== 0)
						ev.target.classList.add('active')
					else
						ev.target.classList.remove('active')
					validate.validate(ev.target, handler)
					setData(data[ev.target.id] = ev.target.value)
					this.data = data;
				})
			})
		})
	}
	handleSave(container, el) {
		el.addEventListener('click', ev => {
			ev.preventDefault();
			this.unMount(container)
		})
	}
	didMount(el, template) {
		if(el.target.children.length) {
			return false;
		} else {
			el.insertHtmlInsideTop(template);
			this.btns[0].parentNode.classList.toggle('blur') // TODO:: make easy
			return true;
		}
	}
	unMount(el) {
		el.target.children[0].remove()
		document.querySelector('#main').classList.remove('blur') // TODO:: make easy
	}
	renderForm() {
		return (`
			<section class="pop-up">
				<button class="close"></button>
				<form action="" novalidate class="pop-up__wrapper">
					<div class="form-group">
						<label for="email">
							<input type="email" id="email" />
							<div>Email</div>
						</label>
						<label for="tel">
							<input type="tel" id="tel"
								value="${this.countryCode} (___)___-__-__" />
								<div>Tel</div>
						</label>
						<label for="firstName">
							<input type="text" id="firstName" />
							<div>firstName</div>
						</label>
						<label for="lastName">
							<input type="text" id="lastName" />
							<div>lastName</div>
						</label>
					</div>
					<button type="submit" class="save">Save</button>
				</form>
			</section>`
		);
	}
	userDetail() {

		const emptyValueHandler = (key, value) => value.length ? `<p>${key}: ${value}</p>` : `<p>${key}: empty</p>`
		let data = [];
		for(let key in this.data) {
			data.push(emptyValueHandler(key, this.data[key]))
		}
		const userItem = `${data.map(item =>
			`${item}`
		).join(' ')}`.trim();
		return (
			`<section class="pop-up">
				<button class="close"></button>
				<div class="pop-up__wrapper">
					${userItem}
				</div>
			</section>`
		);
	}
}

export default template;