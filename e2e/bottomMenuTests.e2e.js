import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import bottomMenuSteps from './../test_framework/steps/bottomMenuSteps'
import notificationScreenSteps from './../test_framework/steps/notificationScreenSteps'
import profileScreenSteps from './../test_framework/steps/profileScreenSteps'
import exploreScreenSteps from './../test_framework/steps/exploreScreenSteps'
import sideMenuSteps from './../test_framework/steps/sideMenuSteps'
import testData from './../test_framework/testData.json'
const bottomMenuItems = ['Home-bottom', 'Notifications-bottom', 'Profile-bottom', 'Explore-bottom']

describe('Testing bottom menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(testData.registeredUser.userName, testData.registeredUser.password)
    await signInScreenSteps.tapSignInButton()
  });

  afterEach(async () => {
    await bottomMenuSteps.tapBottomMenuItem(bottomMenuItems[0])
    await mainScreenSteps.TapSideMenu()
    await sideMenuSteps.TapSignOut()
    await device.terminateApp();    
  });

  it('should present all bottom menu items', async () => {
    for (const item of bottomMenuItems) {
      await bottomMenuSteps.isPresentBottomMenuItem(item)
    }
  });

  it('should open notification screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(bottomMenuItems[1])
    await notificationScreenSteps.isNotificationScreenOpened()
  });

  it('should open profile screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(bottomMenuItems[2])
    await profileScreenSteps.isProfileScreenOpened()
  });

  it('should open explore screen', async () => {
    await bottomMenuSteps.tapBottomMenuItem(bottomMenuItems[3])
    await exploreScreenSteps.isExploreScreenOpened()
  });
});
