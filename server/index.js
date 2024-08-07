const express = require('express');
const summarizeText = require('./services/summarize');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

// Routes
// 1. API ENDPOINT to summarize the text
app.post('/summarize', async(req, res) => {
    // console.log(req.body)
    const summarizedText = await summarizeText(req.body.inputs);
    // console.log(summarizedText)
    res.send(JSON.stringify(summarizedText));
})

// 2. API ENDPOINT to translate the summarized text to the selected language
app.post('/translate', (req, res) => {
    console.log("Translate")
    res.send("Translate")
})

app.listen(PORT, () => {
    console.log("App is listening on the port", PORT)
})