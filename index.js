const openai = require('openai');
const dotenv = require('dotenv');
//load api key
dotenv.config()
openai.apiKey = process.env.OPEN_API_KEY

async function myEndpoint(req, res) {
  //this takes 2 params, promt that user enters, maxToken that controls the response lenght to control cost. 
  async function generateText(prompt, maxToken = 20) {
    const response = await Completion.create({
      //key values for needed this fx.
      engine: "text-davinci-002", 
      prompt: prompt,
      max_tokens: maxToken,
      n: 1,
      stop: null,
      temperature: 0.5
    })
    //this returns a response in a readable way. 
    return response.choices[0].text.trim()
  }
  //my own prompt
  const prompt = "How old is the USA?" 
  //this function can be used to generate text by passing in the param.  pass in then and the param again to get the response
  generateText(prompt).then((generatedText) => {
    console.log(generatedText);
  })
}