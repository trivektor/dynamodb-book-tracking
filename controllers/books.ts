import dynamoDb from '../aws/dynamodb';
import {BOOKS_TABLE} from '../constants';

export const getBooks = (req, res) => {
  dynamoDb.scan({
    TableName: BOOKS_TABLE,
    Limit: 10,
  }, (err, data) => {
    if (err) {
      res.status(500).json({err});
    } else {
      res.json({books: data.Items});
    }
  });
};
