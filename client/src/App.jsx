import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [textToSummarize, setTextToSummarize] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [summarizedText, setSummarizedText] = useState("");
  
  const [language, setLanguage] = useState("hi")

  const [loading, setLoading] = useState("Summarize");
  const [loadingT, setLoadingT] = useState("Translate");

  const handleOnSubmitSummarize = async(e) => {
    e.preventDefault();
    setLoading("Loading..");
    try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/summarize",
      headers: {
        'Content-Type': "application/json",
      },
      data: JSON.stringify({ inputs: textToSummarize }), 
    }
      let response = await axios.request(config);
      // console.log(response.data);
      setLoading("Summarize");
      setTextToTranslate(response.data);
      setSummarizedText(response.data)
    } catch (error) {
      setLoading("Summarize");
      console.error('Error occurred:', error.message);
      console.error('Error response:', error.response);
    }
  }
  
  const handleOnSubmitTranlate = async(e) => {
    e.preventDefault();
    setLoadingT("Loading..");
    try {
    let config = {
      method: "post",
      url: "http://localhost:3000/translate",
      headers: {
        'Content-Type': "application/json",
      },
      data: JSON.stringify({ text: summarizedText, source: "en", target: language }), 
    }
      let response = await axios.request(config);
      // console.log(response.data);
      setLoadingT("Translate")
      setTextToTranslate(response.data);
    } catch (error) {
      setLoadingT("Translate")
      console.error('Error occurred:', error.message);
      console.error('Error response:', error.response);
    }
  }

  const handleOnChangeLanguage = (e) => {
      setLanguage(e.target.value)
  }

  return (
    <>
      <h1 className='text-4xl md:text-5xl font-bold mb-4'>AI Text Summarizer And Text Translator App</h1>
      <p className='text-base md:text-lg'> Welcome to the AI Text Summarizer && Translator App! This app leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. You can also access the summaries in your own language...</p>
      
      <div className="container flex gap-10 flex-wrap justify-center mx-0 my-auto p-5">
        <div className="text-box w-96 rounded flex flex-col p-5 bg-white shadow-inner">
          <textarea id="text_to_summarize" className='h-80 resize-none border-none p-2 mb-2 text-cyan-950' name="text_to_summarize" value={textToSummarize} onChange={(e) => setTextToSummarize(e.target.value)} placeholder="Paste in some text to summarize. (min/max - length 200/100,000 character.)" maxLength="100000"></textarea>

          <button id="submit-button" onClick={handleOnSubmitSummarize} className="rounded bg-cyan-700 py-2 px-4">
            <span className="submit-button-text">{loading}</span>
          </button>

        </div>
        <div className="text-box w-96 rounded flex flex-col p-5 bg-white shadow-inner">
          <textarea id="summary" value={textToTranslate} onChange={(e) => setTextToTranslate(e.target.value)} className='h-72 resize-none border-none p-2 mb-2 text-cyan-950' name="summarized_text" placeholder="Summarized text will appear here"></textarea>
          <button id="submit-button" className="rounded bg-blue-100 py-1 mb-1 text-cyan-600">
            {/* <span className="submit-button-text">Hindi</span> */}
            <select name="language" value={language} onChange={handleOnChangeLanguage} className='bg-inherit' disabled={textToTranslate===""}>
              <option value="hi">Hindi</option>
              <option value="fr">French</option>
              <option value="ru">Russian</option>
              <option value="de">German</option>
            </select>
            {/* <span className='font-bold'> +</span> */}
          </button>
          <button id="submit-button" onClick={handleOnSubmitTranlate} className="rounded bg-cyan-700 py-2 px-4" disabled={textToTranslate===""}>
            <span className="submit-button-text">{loadingT}</span>
          </button>
        </div>
      </div>
    </>

  )
}

export default App
