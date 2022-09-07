const APIURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const main = document.getElementById('main');
const form = document.getElementById("form");
const search = document.getElementById("search");
const kirimBtn = document.getElementById('btnsearch');
let audio;



async function getData(words) {
    const resp = await fetch(APIURL + words);
    const respData = await resp.json();

    createDataCard(respData);
}

function createDataCard(word) {
    if (!word.ok) {
     const cannotFind = `
        <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
          <div class="detail mt-1 flex p-1">
            <h2 class="text-red-500 text-normal">Can't find the meaning. Please, try to search for another word.</h2>
          </div>
        </div>
      `;
      main.innerHTML = cannotFind;
    }
    const cardHTML = `
      <div class="max-w-md mx-auto bg-gray-100 rounded-xl overflow-hidden md:max-w-2xl">
      <div class="p-5">

        <div class="flex justify-between items-stretch">
          <div class="word">
            <h2 class="font-bold text-2xl" id="word">${word[0].word}</h2>
            <div class="detail mt-1 flex">
              <p id="partOfSpeech" class="text-sky-400/75 text-md pr-2">${word[0].meanings[0].partOfSpeech}</p>
              <p id="phonetics" class="text-gray-400 text-md">${word[0].phonetics[0].text}</p>
            </div>
          </div>
          <button class="p-3 text-black hover:text-sky-400" onclick="playAudio()"><i class="bi bi-volume-up-fill"></i></button>
        </div>

        <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
          <p class="font-semibold text-lg">Definition:</p>
          <p class="word text-sm mb-3" id="definition">${word[0].meanings[0].definitions[0].definition}</p>
        </div>

        <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
          <p class="font-semibold text-lg">Example:</p>
          <p class="word text-sm mb-3" id="example">${word[0].meanings[0].definitions[0].example}</p>
        </div>

      </div>
    </div>
    `;
  
    audio = new Audio(word[0].phonetics[0].audio);

    main.innerHTML = cardHTML;
}

function playAudio() {
  audio.play();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const word = search.value;
    if (word) {
        getData(word);

        search.value = "";
    } 
});

kirimBtn.addEventListener ('click', () => {
  e.preventDefault();
  getData();
  
  search.value = "";
})