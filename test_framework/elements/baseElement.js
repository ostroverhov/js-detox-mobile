import logger from './../utils/logger'

function BaseElement(name, by) {
    this.name = name
    this.by = by
}

BaseElement.prototype.tapElement = async function(index = 0) {
    logger.info(`Tap to element ${this.name}`)
    await element(this.by).atIndex(index).tap();
}

BaseElement.prototype.typeText = async function(text) {
    logger.info(`Type ${text} to element ${this.name}`)
    await element(this.by).typeText(text);
}

BaseElement.prototype.isElementVisible = async function(index = 0) {
    logger.info(`Is element ${this.name} visible`)
    await expect(element(this.by).atIndex(index)).toBeVisible()
}

BaseElement.prototype.isElementExist = async function(index = 0) {
    logger.info(`Is element ${this.name} exist`)
    await expect(element(this.by).atIndex(index)).toExist()
}

BaseElement.prototype.waitForVisible = async function() {
    logger.info(`Wait for element ${this.name}`)
    await waitFor(element(this.by)).toBeVisible().withTimeout(5000)
}

module.exports = BaseElement;
