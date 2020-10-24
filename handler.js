'use strict';

const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIA3Z66NBI753PPV6NG',
  secretAccessKey: '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',
});
const sqs = new AWS.SQS({ apiVersion: '2012-11-05'});

const AWS_ACCOUNT = process.env.ACCOUNT_ID;
// https://sqs.us-east-1.amazonaws.com/811678370367/MyQueue
// const QUEUE_URL = `https://sqs.us-east-1.amazonaws.com/${AWS_ACCOUNT}/MyQueue`;

const QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/811678370367/MyQueue';

module.exports.hello = async (event, context) => {

  const parmas = {
    MessageBody: 'Hola',
    QueueUrl: QUEUE_URL,
  };

  console.log('1');
  await sqs.sendMessage(parmas);
  console.log('2');

  context.logStreamName;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'asf1',
        input: event,
      },
      null,
      2
    ),
  };

//  return sqs.sendMessage(parmas, (err, data) => {
//   return {
//           statusCode: 200,
//           body: JSON.stringify(
//             {
//               message: 'asf',
//             },
//             null,
//             2
//           ),
//         };
    // try {

    //   if (err) {
    //     console.log('error: ', 'Fail send message' + err);
    //     return {
    //       statusCode: 500,
    //       body: JSON.stringify(
    //         {
    //           message: 'Error',
    //           input: event,
    //         },
    //         null,
    //         2
    //       ),
    //     };
    //   } else {
    //     console.log('data:', data.MessageId);
    //     return {
    //       statusCode: 200,
    //       body: JSON.stringify(
    //         {
    //           message: data.MessageId,
    //           input: event,
    //         },
    //         null,
    //         2
    //       ),
    //     };
    //   }
    // } catch (error) {
    //   throw new Error(`error: ${error.message}`)
    // }
  //});

  /*return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'aaaa',
        input: event,
      },
      null,
      2
    ),
  };*/

  /*

  

  // Enviar mensagem para o sqs
  sqs.sendMessage(parmas, (err, data) => {
    if (err) {
      console.log('error: ', 'Fail send message' + err);
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            message: 'Error',
            input: event,
          },
          null,
          2
        ),
      };
    } else {
      console.log('data:', data.MessageId);
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: data.MessageId,
            input: event,
          },
          null,
          2
        ),
      };
    }
  });
  */
};

module.exports.sqsHello = async event => {
  console.log('it was called');

  console.log(event);

  return 'ok!';
};
