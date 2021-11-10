import BaseElement from '@/elements/baseElement'

class TextBox extends BaseElement {

    constructor(name, by) {
        super(`TextBox ${name}`, by)
    }
}

export default TextBox;
