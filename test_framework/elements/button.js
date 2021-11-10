import BaseElement from '@/elements/baseElement'

class Button extends BaseElement {

    constructor(name, by) {
        super(`Button ${name}`, by)
    }
}

export default Button;
