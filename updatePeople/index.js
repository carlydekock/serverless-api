const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {

  let data;
  // let original;
  let id = event.pathParameters && event.pathParameters.id;

  try {
    
    const { name, phone } = JSON.parse(event.body);
    data = await peopleModel.query('id').eq(id).exec();

    if(name && phone) {
      data = await peopleModel.update({ 'id': id }, { 'name': name, 'phone': phone });
    } else if(name && !phone){
      data = await peopleModel.update({ 'id': id }, { 'name': name });
    } else {
      data = await peopleModel.update({ 'id': id }, { 'phone': phone })
    }

    // data = await peopleModel.query('id').eq(id).exec();
    // const { name, phone } = JSON.parse(event.body);
    // // let id = original.id;
    // let record = new peopleModel({ id, name, phone });
    // data = await record.save();

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    }
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify(data),
  }

  return response;
}
