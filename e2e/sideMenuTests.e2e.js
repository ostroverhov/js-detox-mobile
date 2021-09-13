import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import sideMenuSteps from './../test_framework/steps/sideMenuSteps'
import testData from './../test_framework/testData.json'
const sideMenuItems = ['Home', 'Profile', 'Bookmarks', 'Settings', 'Support']

describe('Testing side menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(testData.registeredUser.userName, testData.registeredUser.password)
    await signInScreenSteps.tapSignInButton()
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should logout successfully', async () => {
    await mainScreenSteps.TapSideMenu()
    await sideMenuSteps.isSideMenuOpened()
    await sideMenuSteps.TapSignOut()
    await startScreenSteps.isStartScreenOpened()
  });

  it('should present all menu item', async () => {
    await mainScreenSteps.TapSideMenu()
    await sideMenuSteps.isSideMenuOpened()
    for (const item of sideMenuItems) {
      await sideMenuSteps.isPresentMenuItem(item)
    }
  });
});
