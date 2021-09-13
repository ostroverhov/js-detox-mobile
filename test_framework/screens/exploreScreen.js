import BaseScreen from './baseScreen'

function ExploreScreen() {
    BaseScreen.call(this, 'Explore screen', by.id('Explore screen'))
}

ExploreScreen.prototype = Object.create(BaseScreen.prototype);
ExploreScreen.prototype.constructor = ExploreScreen;

module.exports = ExploreScreen;
