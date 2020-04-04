class validate {
	constructor() {
		this.email = 'please enter a valid email';
		this.phone = 'please enter a valid phone numvber';
		this.firstName = 'please enter a valid phone numvber';
		this.lastName = 'please enter a valid phone numvber';
	}
	handleValidate(ev) {
		const {target} = ev;
		if(target.type === 'email') {
			if(!target.validity.valid || target.value.length < 6){
				target.parentNode.classList.remove('error')
			}
			else{
				target.parentNode.classList.add('error')
			}
			if(target.type === 'phone') {
				if(target.validity.patternMismatch){
					initials.parentNode.classList.remove('error')
				}
				else{
					
					initials.parentNode.classList.add('error')
				}
			}
		}
	}
}
export default validate;