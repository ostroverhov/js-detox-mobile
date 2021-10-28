import BaseElement from './baseElement'

function Label(name, by) {
    BaseElement.call(this, `Label ${name}`, by)
}

Label.prototype = Object.create(BaseElement.prototype);
Label.prototype.constructor = Label;

export default Label;
