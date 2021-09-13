import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import bottomMenuSteps from './../test_framework/steps/bottomMenuSteps'
import profileScreenSteps from './../test_framework/steps/profileScreenSteps'
import testData from './../test_framework/testData.json'
const profileButton = 'Profile-bottom'
const profileMenuItems = ['Your Favorites', 'Payment', 'Tell Your Friends', 'Support', 'Settings']

describe('Testing bottom menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should present all bottom menu items', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(testData.registeredUser.userName, testData.registeredUser.password)
    await signInScreenSteps.tapSignInButton()
    await bottomMenuSteps.tapBottomMenuItem(profileButton)
    await profileScreenSteps.isProfileScreenOpened()
    for (const item of profileMenuItems) {
      await profileScreenSteps.isPresentProfileMenuItem(item)
    }
    await profileScreenSteps.tapEditProfile()
    await profileScreenSteps.isPresentEditProfileLabel()
  });
});
