const axios = require('axios');
require('dotenv').config();


async function summarizeText(text) {
    try {
      let data = JSON.stringify({
          "inputs": text,
          "parameters": {
            "max_length": 10000,
            "min_length": 30
          }
        });
        
        // console.log(process.env.HUGGING_FACE_API_TOKEN)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`
        },
        data : data
      };
    //   console.log(data)
    const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
    return response.data[0].summary_text;
  }
  catch (error) {
    console.log(error.message);
  }
}

module.exports = summarizeText;