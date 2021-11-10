import logger from '@/utils/logger'
import configuration from '@/config.json'
const ELEMENT_TIMEOUT = configuration.elementTimeout

class BaseElement {

    constructor(name, by) {
        this.name = name
        this.by = by
    }

    async tapElement(index = 0) {
        logger.info(`Tap to element ${this.name}`)
        await element(this.by).atIndex(index).tap();
    }
    
    async typeText(text) {
        logger.info(`Type ${text} to element ${this.name}`)
        await element(this.by).typeText(text);
    }
    
    async checkElementVisiblility(index = 0) {
        logger.info(`Is element ${this.name} visible`)
        await expect(element(this.by).atIndex(index)).toBeVisible()
    }
    
    async checkElementExistence(index = 0) {
        logger.info(`Is element ${this.name} exist`)
        await expect(element(this.by).atIndex(index)).toExist()
    }
    
    async waitForVisible() {
        logger.info(`Wait for element ${this.name}`)
        await waitFor(element(this.by)).toBeVisible().withTimeout(ELEMENT_TIMEOUT)
    }
}

export default BaseElement
