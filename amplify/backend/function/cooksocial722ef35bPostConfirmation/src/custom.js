const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  console.log("PostConfirmation event:", JSON.stringify(event, null, 2));

  const params = {
    TableName: process.env.STORAGE_USERS_NAME,
    Item: {
      userId: event.userName,
      email: event.request.userAttributes.email,
      birthdate: event.request.userAttributes.birthdate || null,
      gender: event.request.userAttributes.gender || null,
      nationality: event.request.userAttributes["custom:nationality"] || null,
      allergies: event.request.userAttributes["custom:allergies"] || null,
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await ddb.put(params).promise();
    console.log("✅ User saved to DynamoDB:", params.Item);
  } catch (err) {
    console.error("❌ Error saving user:", err);
  }

  return event; // bắt buộc trả event để Cognito flow tiếp tục
};
