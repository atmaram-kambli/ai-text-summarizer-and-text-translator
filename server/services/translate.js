
async function translateText1(text, sourceLang, targetLang) {
  const response = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: "text"
      }),
      headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
}

async function translateText(text, source, target) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;
    const response = await fetch(url);
    const json = await response.json();
    const matches = await json.matches;
    const translatedText = matches[0].translation || 'No translation found';
    return translatedText
} catch (error) {
    console.log(error);
    return "No translation Found"
}
}




module.exports = translateText;