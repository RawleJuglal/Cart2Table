const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({reply:process.env.C2T_API_KEY}),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
