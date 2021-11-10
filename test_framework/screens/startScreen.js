import logger from '@/utils/logger'
import BaseScreen from '@/screens/baseScreen'
import Button from '@/elements/button'

const elements = {
    getStartedButton: new Button('Get Started', by.text('Get Started'))
};

class StartScreen extends BaseScreen {

    constructor() {
        super('Start screen', by.text('Find best food in your locality!'))
    }

    async tapGetStartedButton() {
        logger.info('Tap Get Started')
        await elements.getStartedButton.tapElement();
    }
}

export default StartScreen;
