import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1 className='text-4xl md:text-5xl font-bold mb-4'>AI Text Summarizer And Text Translator App</h1>
      <p className='text-base md:text-lg'> Welcome to the AI Text Summarizer && Translator App! This app leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. You can also access the summaries in your own language...</p>
      
      <div className="container flex gap-10 flex-wrap justify-center mx-0 my-auto p-5">
        <div className="text-box w-96 rounded flex flex-col p-5 bg-white shadow-inner">
          <textarea id="text_to_summarize" className='h-80 resize-none border-none p-2 mb-2 text-cyan-950' name="text_to_summarize" placeholder="Paste in some text to summarize. (min/max - length 200/100,000 character.)" maxlength="100000"></textarea>
          <button id="submit-button" className="rounded bg-cyan-700 py-2 px-4">
            <span className="submit-button-text">Summarize</span>
          </button>
        </div>
        <div className="text-box w-96 rounded flex flex-col p-5 bg-white shadow-inner">
          <textarea id="summary" className='h-72 resize-none border-none p-2 mb-2 text-cyan-950' name="summarized_text" placeholder="Summarized text will appear here"></textarea>
          <button id="submit-button" className="rounded bg-blue-100 py-1 mb-1 text-cyan-600">
            <span className="submit-button-text">Hindi</span>
            <span className='font-bold'> +</span>
          </button>
          <button id="submit-button" className="rounded bg-cyan-700 py-2 px-4">
            <span className="submit-button-text">Translate</span>
          </button>
        </div>
      </div>
    </>

  )
}

export default App
