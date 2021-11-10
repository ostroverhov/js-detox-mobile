import logger from '@/utils/logger'

class BaseScreen {

    constructor(name, by) {
        this.name = name
        this.by = by
    }
    
    async checkScreenVisibility() {
        logger.info(`Check screen ${this.name} is visible`)
        await expect(element(this.by)).toBeVisible()
    }
}

module.exports = BaseScreen;
