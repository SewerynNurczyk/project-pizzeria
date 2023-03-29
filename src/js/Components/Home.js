/*import {select, templates} from '../settings.js';
import {utils} from '../utils.js';
import {app} from '../app.js';

class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }
  render(){
    const thisHome = this;
    const generatedHTML = templates.homePage();
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.containerOf.homePage);
    thisHome.dom.wrapper.appendChild(thisHome.element);
    console.log(generatedHTML);
  }
  initWidgets(){
    const thisHome = this;
    thisHome.links = document.querySelectorAll(select.homePage.links);
    for(let box of thisHome.links){
      box.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const boxID = clickedElement.getAttribute('href').replace('#', '');
        app.activatePage(boxID);
      });
    }
  }
}

export default Home;*/