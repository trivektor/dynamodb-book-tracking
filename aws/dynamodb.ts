import AWS from 'aws-sdk';

import {
  AWS_REGION,
  AWS_DYNAMODB_API_VERSION,
} from '../constants';

AWS.config.update({region: AWS_REGION});

const dynamoDb = new AWS.DynamoDB({
  apiVersion: AWS_DYNAMODB_API_VERSION,
});

export {dynamoDb as default};
