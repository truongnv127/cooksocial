/**
 * @type {import('@types/aws-lambda').CustomMessageTriggerHandler}
 */
exports.handler = async (event) => {
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const { codeParameter } = event.request;
    
    const message = `Welcome to Cooksocial! Your verification code is: ${codeParameter}`;
    
    event.response.smsMessage = message;
    event.response.emailSubject = 'Verify your Cooksocial account';
    event.response.emailMessage = message;
  }

  return event;
};
