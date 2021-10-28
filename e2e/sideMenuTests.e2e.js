import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import sideMenuSteps from './../test_framework/steps/sideMenuSteps'
import testData from './../test_framework/testData.json'
const REGISTERED_USER = testData.registeredUser
const SIDE_MENU_ITEMS = {
  Home: 'Home',
  Profile: 'Profile',
  Bookmarks: 'Bookmarks',
  Settings: 'Settings',
  Support: 'Support'
}

describe('Testing side menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(REGISTERED_USER.userName, REGISTERED_USER.password)
    await signInScreenSteps.tapSignInButton()
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should logout successfully', async () => {
    await mainScreenSteps.tapSideMenu()
    await sideMenuSteps.checkSideMenuVisibility()
    await sideMenuSteps.tapSignOut()
    await startScreenSteps.checkStartScreenVisibility()
  });

  it('should present all menu item', async () => {
    await mainScreenSteps.tapSideMenu()
    await sideMenuSteps.checkSideMenuVisibility()
    for (const item in SIDE_MENU_ITEMS) {
      await sideMenuSteps.checkMenuItemVisibility(SIDE_MENU_ITEMS[item])
    }
  });
});
