import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import bottomMenuSteps from './../test_framework/steps/bottomMenuSteps'
import profileScreenSteps from './../test_framework/steps/profileScreenSteps'
import testData from './../test_framework/testData.json'
const REGISTERED_USER = testData.registeredUser
const PROFILE_BUTTON = 'Profile-bottom'
const PROFILE_MENU_ITEMS = {
  YourFavorites: 'Your Favorites',
  Payment: 'Payment',
  TellYourFriends: 'Tell Your Friends',
  Support: 'Support',
  Settings: 'Settings'
}

describe('Testing bottom menu', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should present all bottom menu items', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(REGISTERED_USER.userName, REGISTERED_USER.password)
    await signInScreenSteps.tapSignInButton()
    await bottomMenuSteps.tapBottomMenuItem(PROFILE_BUTTON)
    await profileScreenSteps.checkProfileScreenVisibility()
    for (const item in PROFILE_MENU_ITEMS) {
      await profileScreenSteps.checkProfileMenuItemVisiility(PROFILE_MENU_ITEMS[item])
    }
    await profileScreenSteps.tapEditProfile()
    await profileScreenSteps.checkEditProfileLabel()
  });
});
