import ExploreScreen from './../screens/exploreScreen'

const exploreScreen = new ExploreScreen()

async function checkExploreScreenVisibility() {
    await exploreScreen.checkScreenVisibility();
}

export default { checkExploreScreenVisibility };
