const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {

  let id = event.pathParameters && event.pathParameters.id;

  try {
        
    // const { name, phone } = JSON.parse(event.body);
    // data = await peopleModel.query('id').eq(id).exec();
    await peopleModel.delete({'id': id})
    // data = await peopleModel.delete({ 'id': id, 'name': name, 'phone': phone });
    // let id = original.id;
    // data = await peopleModel.delete();
    // let record = new peopleModel({ id });
    // data = await record.delete();


  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    }
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify('successfully deleted'),
  }

  return response;
}
