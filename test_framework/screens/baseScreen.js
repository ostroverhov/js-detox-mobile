import logger from '../utils/logger'

function BaseScreen(name, by) {
    this.name = name
    this.by = by
}

BaseScreen.prototype.isScreenOpened = async function() {
    logger.info(`Is ${this.name} opened`)
    await expect(element(this.by)).toBeVisible()
}

module.exports = BaseScreen;
