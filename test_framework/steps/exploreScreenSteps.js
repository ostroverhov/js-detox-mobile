import ExploreScreen from './../screens/exploreScreen'

const exploreScreen = new ExploreScreen()

async function isExploreScreenOpened() {
    await exploreScreen.isScreenOpened();
}

module.exports = { isExploreScreenOpened };
