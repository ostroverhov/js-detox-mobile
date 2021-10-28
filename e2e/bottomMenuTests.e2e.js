import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import bottomMenuSteps from './../test_framework/steps/bottomMenuSteps'
import notificationScreenSteps from './../test_framework/steps/notificationScreenSteps'
import profileScreenSteps from './../test_framework/steps/profileScreenSteps'
import exploreScreenSteps from './../test_framework/steps/exploreScreenSteps'
import sideMenuSteps from './../test_framework/steps/sideMenuSteps'
import testData from './../test_framework/testData.json'
const REGISTERED_USER = testData.registeredUser
const BOTTOM_MENU_ITEMS = {
  Home: 'Home-bottom',
  Notifications: 'Notifications-bottom',
  Profile: 'Profile-bottom',
  Explore: 'Explore-bottom'
}

describe('Testing bottom menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(REGISTERED_USER.userName, REGISTERED_USER.password)
    await signInScreenSteps.tapSignInButton()
  });

  afterEach(async () => {
    await bottomMenuSteps.tapBottomMenuItem(BOTTOM_MENU_ITEMS.Home)
    await mainScreenSteps.tapSideMenu()
    await sideMenuSteps.tapSignOut()
    await device.terminateApp();    
  });

  it('should present all bottom menu items', async () => {
    for (var item in BOTTOM_MENU_ITEMS) {
      await bottomMenuSteps.checkBottomMenuItemVisibility(BOTTOM_MENU_ITEMS[item])
    }
  });

  it('should open notification screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(BOTTOM_MENU_ITEMS.Notifications)
    await notificationScreenSteps.checkNotificationScreenVisibility()
  });

  it('should open profile screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(BOTTOM_MENU_ITEMS.Profile)
    await profileScreenSteps.checkProfileScreenVisibility()
  });

  it('should open explore screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(BOTTOM_MENU_ITEMS.Explore)
    await exploreScreenSteps.checkExploreScreenVisibility()
  });
});
