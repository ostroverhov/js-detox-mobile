import BaseElement from '@/elements/baseElement'

class Label extends BaseElement {

    constructor(name, by) {
        super(`Label ${name}`, by)
    }
}

export default Label;
