exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'HVRAIN',
      age: 27,
      email: "hvrain3222@naver.com"
    })
  }
}