import BaseElement from './baseElement'

function TextBox(name, by) {
    BaseElement.call(this, `TextBox ${name}`, by)
}

TextBox.prototype = Object.create(BaseElement.prototype);
TextBox.prototype.constructor = TextBox;

module.exports = TextBox;
