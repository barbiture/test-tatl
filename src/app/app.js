import '../style.css';
import $ from './dom-facade';
import EventBus from './event-bus';
import popUp from './components/pop-up';
import registration from './components/registration'


document.addEventListener("DOMContentLoaded",function(){
	window.EventBus = new EventBus || {};
  new popUp();
});

// $('#main').insertHtmlInsideTop('<h1>Hello name</h1>');
// console.log('ready state');
// const btns = $('#main').find('button');
// console.log(btns);


