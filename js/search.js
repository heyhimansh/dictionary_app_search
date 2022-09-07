const APIURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const main = document.getElementById('main');
const form = document.getElementById("form");
const search = document.getElementById("search");
const kirimBtn = document.getElementById('btnsearch');
const atasSection = document.getElementById('subtitle');
let audio;

// first data

getData('fact');

async function getData(words) {
    const resp = await fetch(APIURL + words);
    const respData = await resp.json();

    createDataCard(respData);
}

function createDataCard(word) {
    if (word.ok) {
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
          <button class="p-3 text-black hover:text-sky-400" id="audio_play" onclick="playAudio()"><i class="bi bi-volume-up-fill"></i></button>
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

// second data
const secondMain = document.getElementById('main2');
getSecondData('argument');

async function getSecondData(twowords) {
  const resp = await fetch(APIURL + twowords);
  const respData = await resp.json();

  createSecondData(respData);
}

function createSecondData(secondword) {
  if (!secondword.ok) {
   const secondError = `
      <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div class="detail mt-1 flex p-1">
          <h2 class="text-red-500 text-normal">Can't find the meaning. Please, try to search for another word.</h2>
        </div>
      </div>
    `;
    secondMain.innerHTML = secondError;
  }
  const secondCardHTML = `
    <div class="max-w-md mx-auto bg-gray-100 rounded-xl overflow-hidden md:max-w-2xl">
    <div class="p-5">

      <div class="flex justify-between items-stretch">
        <div class="word">
          <h2 class="font-bold text-2xl" id="word">${secondword[0].word}</h2>
          <div class="detail mt-1 flex">
            <p id="partOfSpeech" class="text-sky-400/75 text-md pr-2">${secondword[0].meanings[0].partOfSpeech}</p>
            <p id="phonetics" class="text-gray-400 text-md">${secondword[0].phonetics[0].text}</p>
          </div>
        </div>
        <button class="p-3 text-black hover:text-sky-400" onclick="secondPlayAudio();"><i class="bi bi-volume-up-fill"></i></button>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Definition:</p>
        <p class="word text-sm mb-3" id="definition">${secondword[0].meanings[0].definitions[0].definition}</p>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Example:</p>
        <p class="word text-sm mb-3" id="example">${secondword[0].meanings[0].definitions[0].example}</p>
      </div>

    </div>
  </div>
  `;

  secondAudio = new Audio(secondword[0].phonetics[1].audio);

  secondMain.innerHTML = secondCardHTML;
}

function secondPlayAudio() {
  secondAudio.play();
}

// third data
const thirdMain = document.getElementById('main3');

getThirdData('time');

async function getThirdData(threewords) {
  const resp = await fetch(APIURL + threewords);
  const respData = await resp.json();

  createThirdData(respData);
}

function createThirdData(thridword) {
  if (!thridword.ok) {
   const thridError = `
      <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div class="detail mt-1 flex p-1">
          <h2 class="text-red-500 text-normal">Can't find the meaning. Please, try to search for another word.</h2>
        </div>
      </div>
    `;
    thirdMain.innerHTML = thridError;
  }
  const thridCardHTML = `
    <div class="max-w-md mx-auto bg-gray-100 rounded-xl overflow-hidden md:max-w-2xl">
    <div class="p-5">

      <div class="flex justify-between items-stretch">
        <div class="word">
          <h2 class="font-bold text-2xl" id="word">${thridword[0].word}</h2>
          <div class="detail mt-1 flex">
            <p id="partOfSpeech" class="text-sky-400/75 text-md pr-2">${thridword[0].meanings[0].partOfSpeech}</p>
            <p id="phonetics" class="text-gray-400 text-md">${thridword[0].phonetics[0].text}</p>
          </div>
        </div>
        <button class="p-3 text-black hover:text-sky-400" onclick="thridPlayAudio();"><i class="bi bi-volume-up-fill"></i></button>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Definition:</p>
        <p class="word text-sm mb-3" id="definition">${thridword[0].meanings[0].definitions[0].definition}</p>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Example:</p>
        <p class="word text-sm mb-3" id="example">${thridword[0].meanings[0].definitions[0].example}</p>
      </div>

    </div>
  </div>
  `;

  thridAudio = new Audio(thridword[0].phonetics[3].audio);

  thirdMain.innerHTML = thridCardHTML;
}

function thridPlayAudio() {
  thridAudio.play();
}

// fourth data
const fourthMain = document.getElementById('main4');

getFourthData('aircraft');

async function getFourthData(fourthwords) {
  const resp = await fetch(APIURL + fourthwords);
  const respData = await resp.json();

  createFourthData(respData);
}

function createFourthData(fourthword) {
  if (!fourthword.ok) {
   const thridError = `
      <div class="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div class="detail mt-1 flex p-1">
          <h2 class="text-red-500 text-normal">Can't find the meaning. Please, try to search for another word.</h2>
        </div>
      </div>
    `;
    fourthMain.innerHTML = thridError;
  }
  const fourthCardHTML = `
    <div class="max-w-md mx-auto bg-gray-100 rounded-xl overflow-hidden md:max-w-2xl">
    <div class="p-5">

      <div class="flex justify-between items-stretch">
        <div class="word">
          <h2 class="font-bold text-2xl" id="word">${fourthword[0].word}</h2>
          <div class="detail mt-1 flex">
            <p id="partOfSpeech" class="text-sky-400/75 text-md pr-2">${fourthword[0].meanings[0].partOfSpeech}</p>
            <p id="phonetics" class="text-gray-400 text-md">${fourthword[0].phonetics[0].text}</p>
          </div>
        </div>
        <button class="p-3 text-black hover:text-sky-400" onclick="fourthPlayAudio();"><i class="bi bi-volume-up-fill"></i></button>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Definition:</p>
        <p class="word text-sm mb-3" id="definition">${fourthword[0].meanings[0].definitions[0].definition}</p>
      </div>

      <div class="bg-sky-300/50 rounded-lg pt-3 pb-1 px-3 my-3">
        <p class="font-semibold text-lg">Example:</p>
        <p class="word text-sm mb-3" id="example">${fourthword[0].meanings[0].definitions[0].example}</p>
      </div>

    </div>
  </div>
  `;

  fourthAudio = new Audio(fourthword[0].phonetics[1].audio);

  fourthMain.innerHTML = fourthCardHTML;
}

function fourthPlayAudio() {
  fourthAudio.play();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const word = search.value;
    if (word) {
        getData(word);

        search.value = "";
    }
    secondMain.classList.add('hidden');
    thirdMain.classList.add('hidden');
    fourthMain.classList.add('hidden');
});

kirimBtn.addEventListener ('click', () => {
  e.preventDefault();
  getData();
  
  search.value = "";
})