import logger from '../utils/logger'

function BaseScreen(name, by) {
    this.name = name
    this.by = by
}

BaseScreen.prototype.checkScreenVisibility = async function() {
    logger.info(`Check screen ${this.name} is visible`)
    await expect(element(this.by)).toBeVisible()
}

module.exports = BaseScreen;
