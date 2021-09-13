import startScreenSteps from '../test_framework/steps/startScreenSteps'
import signInScreenSteps from '../test_framework/steps/signInScreenSteps'
import mainScreenSteps from '../test_framework/steps/mainScreenSteps'
import testData from './../test_framework/testData.json'

describe('Testing login', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should present start screen', async () => {
    await startScreenSteps.isStartScreenOpened()
  });

  it('should show alert after login with wrong password', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.isSignInScreenOpened()
    await signInScreenSteps.typeLoginData(testData.unregisteredUser.userName, testData.unregisteredUser.password)
    await signInScreenSteps.tapSignInButton()
    await signInScreenSteps.isInvalidUserAlertVisible()
  });

  it('should show main screen after login', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(testData.registeredUser.userName, testData.registeredUser.password)
    await signInScreenSteps.tapSignInButton()
    await mainScreenSteps.isMainScreenOpened()
  });
});
