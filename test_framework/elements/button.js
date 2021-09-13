import BaseElement from './baseElement'

function Button(name, by) {
    BaseElement.call(this, `Button ${name}`, by)
}

Button.prototype = Object.create(BaseElement.prototype);
Button.prototype.constructor = Button;

module.exports = Button;
