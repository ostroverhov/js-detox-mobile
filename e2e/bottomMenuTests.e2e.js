import startScreenSteps from '@/steps/startScreenSteps'
import signInScreenSteps from '@/steps/signInScreenSteps'
import mainScreenSteps from '@/steps/mainScreenSteps'
import bottomMenuSteps from '@/steps/bottomMenuSteps'
import notificationScreenSteps from '@/steps/notificationScreenSteps'
import profileScreenSteps from '@/steps/profileScreenSteps'
import exploreScreenSteps from '@/steps/exploreScreenSteps'
import sideMenuSteps from '@/steps/sideMenuSteps'
import testData from '@/testData.json'
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
