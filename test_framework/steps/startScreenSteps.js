import StartScreen from './../screens/startScreen'

const startScreen = new StartScreen()

async function isStartScreenOpened() {
    await startScreen.isScreenOpened();
}

async function tapGetStarted() {
    await startScreen.tapGetStartedButton();
}

module.exports = { isStartScreenOpened, tapGetStarted };
