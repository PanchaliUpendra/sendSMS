const { PublishCommand } = require('@aws-sdk/client-sns');
const { snsClient } = require('./snsClient');

// Function to send SMS
async function sendSMS(data) {
  try {
    const response = await snsClient.send(new PublishCommand({
      // Message: `lead created by ${data.name}, ${data.id}`,
      Message:`${data.message}`,
      PhoneNumber: `+91${data.phone}`,
    }));

    console.log('SMS sent:', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the sendSMS function to send the SMS
module.exports={
    sendSMS,
}