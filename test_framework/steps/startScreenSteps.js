import StartScreen from './../screens/startScreen'

const startScreen = new StartScreen()

async function checkStartScreenVisibility() {
    await startScreen.checkScreenVisibility();
}

async function tapGetStarted() {
    await startScreen.tapGetStartedButton();
}

export default { checkStartScreenVisibility, tapGetStarted };
