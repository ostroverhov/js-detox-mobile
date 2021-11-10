import startScreenSteps from '@/steps/startScreenSteps'
import signInScreenSteps from '@/steps/signInScreenSteps'
import mainScreenSteps from '@/steps/mainScreenSteps'
import testData from '@/testData.json'
const REGISTERED_USER = testData.registeredUser
const UNREGISTERED_USER = testData.unregisteredUser

describe('Testing login', () => {

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  afterEach(async () => {
    await device.terminateApp();    
  });

  it('should present start screen', async () => {
    await startScreenSteps.checkStartScreenVisibility()
  });

  it('should show alert after login with wrong password', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.checkSignInScreenVisibility()
    await signInScreenSteps.typeLoginData(UNREGISTERED_USER.userName, UNREGISTERED_USER.password)
    await signInScreenSteps.tapSignInButton()
    await signInScreenSteps.checkInvalidUserAlertVisibility()
  });

  it('should show main screen after login', async () => {
    await startScreenSteps.tapGetStarted()
    await signInScreenSteps.typeLoginData(REGISTERED_USER.userName, REGISTERED_USER.password)
    await signInScreenSteps.tapSignInButton()
    await mainScreenSteps.checkMainScreenVisibility()
  });
});
