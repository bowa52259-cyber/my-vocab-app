// ===== 1. 完整單字資料 (1-16) =====
const words = [
  { id: 1, word: "a / an", phonetic_us: "[ə] / [æn]", pos: "art.", meaning: "一個、每一、任一", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "", grammar: "冠詞 a 用於以輔音字母開頭或不發音的 h 字母。", example: "I want to buy a new bag.", example_zh: "我想買個新包包。", familiarity: 0 },
  { id: 2, word: "able", phonetic_us: "[ˈebl]", pos: "adj.", meaning: "能夠的、會的", synonyms: "", antonyms: "unable", phrases: "be able to... 能夠...", sentence_pattern: "", grammar: "hasn't 是 has not 的縮寫。", example: "Jack hasn't been able to revise the article yet.", example_zh: "傑克還沒能修改這篇文章。", familiarity: 0 },
  { id: 3, word: "about", phonetic_us: "[əˈbaʊt]", pos: "prep. / ad.", meaning: "關於、在...的附近 / 在四周", synonyms: "", antonyms: "nothing 反義詞: everything", phrases: "be about to... 即將要...", sentence_pattern: "", grammar: "", example: "I know nothing about him.", example_zh: "我對他一無所知。", familiarity: 0 },
  { id: 4, word: "above", phonetic_us: "[əˈbʌv]", pos: "prep.", meaning: "在...之上、超過、更大、更多", synonyms: "up 在...之上", antonyms: "below", phrases: "above all 首先", sentence_pattern: "", grammar: "", example: "The book costs above $90.", example_zh: "這本書價格超過九十美元。", familiarity: 0 },
  { id: 5, word: "according to", phonetic_us: "[əˈkɔrdɪŋ tu]", pos: "ph.", meaning: "根據、據...所說", synonyms: "in line with 依據", antonyms: "", phrases: "", sentence_pattern: "have to + 動詞原形", grammar: "", example: "According to Lisa, Lucy has to leave this city.", example_zh: "據麗莎說，露西不得不離開這個城市。", familiarity: 0 },
  { id: 6, word: "across", phonetic_us: "[əˈkrɔs]", pos: "ad. / prep.", meaning: "橫越、遍於...各處 / 橫過", synonyms: "through 通過", antonyms: "", phrases: "across from 在...對面", sentence_pattern: "", grammar: "", example: "Can you walk across the road quickly?", example_zh: "你能快速穿過馬路嗎？", familiarity: 0 },
  { id: 7, word: "act", phonetic_us: "[ækt]", pos: "v. / n.", meaning: "行動、扮演、做事、舉止 / 行為、法案", synonyms: "play 扮演", antonyms: "", phrases: "act as 擔當", sentence_pattern: "before 前後的內容語法一致", grammar: "", example: "We must think carefully before we act.", example_zh: "行動之前，我們必須認真考慮。", familiarity: 0 },
  { id: 8, word: "action", phonetic_us: "[ˈækʃən]", pos: "n.", meaning: "行動、行為、措施", synonyms: "behavior 行為", antonyms: "", phrases: "take action 採取行動", sentence_pattern: "should + 動詞原形", grammar: "", example: "You should put your ideas into action.", example_zh: "你應該把想法變成行動。", familiarity: 0 },
  { id: 9, word: "actor / actress", phonetic_us: "[ˈæktɚ] / [ˈæktrɪs]", pos: "n.", meaning: "男演員 / 女演員", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "", grammar: "actor 通常指男演員，actress 指女演員；不強調性別時可用 actor。", example: "She dreamed of being an actress.", example_zh: "她夢想成為一名女演員。", familiarity: 0 },
  { id: 10, word: "add", phonetic_us: "[æd]", pos: "v.", meaning: "增加、補充", synonyms: "increase 增加", antonyms: "subtract", phrases: "add up 合計", sentence_pattern: "sb. be reluctant to do... 某人不願意做...", grammar: "", example: "She was reluctant to add my name to the list.", example_zh: "她不願意在名單上加上我的名字。", familiarity: 0 },
  { id: 11, word: "address", phonetic_us: "[əˈdrɛs]", pos: "n. / v.", meaning: "地址 / 稱呼、向...致詞", synonyms: "greet 致敬", antonyms: "", phrases: "address book 通訊錄", sentence_pattern: "address 作動詞時是及物動詞", grammar: "", example: "My friend is going to address the meeting tomorrow.", example_zh: "我朋友明天將在會議上致詞。", familiarity: 0 },
  { id: 12, word: "adult", phonetic_us: "[əˈdʌlt]", pos: "n. / adj.", meaning: "成人 / 成年的、成熟的", synonyms: "mature 成熟的", antonyms: "", phrases: "adult education 成人教育", sentence_pattern: "", grammar: "", example: "Her behavior looks like very adult.", example_zh: "她的行為看起來很成熟。", familiarity: 0 },
  { id: 13, word: "afraid", phonetic_us: "[əˈfred]", pos: "adj.", meaning: "害怕的、擔心的", synonyms: "scared 害怕的", antonyms: "bold", phrases: "lend money to sb. 借錢給某人", sentence_pattern: "", grammar: "", example: "I'm afraid that I can't lend money to you.", example_zh: "恐怕我不能借錢給你。", familiarity: 0 },
  { id: 14, word: "after", phonetic_us: "[ˈæftɚ]", pos: "prep.", meaning: "在...之後、在後面", synonyms: "behind 在後面", antonyms: "before", phrases: "go after 追求", sentence_pattern: "", grammar: "", example: "He planned to do housework after school.", example_zh: "放學後他打算做家事。", familiarity: 0 },
  { id: 15, word: "afternoon", phonetic_us: "[ˌæftɚˈnun]", pos: "n.", meaning: "下午、午後", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "", grammar: "swim (p.105)", example: "Shall we go to swim this afternoon?", example_zh: "我們今天下午去游泳怎麼樣？", familiarity: 0 },
  { id: 16, word: "again", phonetic_us: "[əˈɡɛn]", pos: "ad.", meaning: "再次、又", synonyms: "repeatedly 重複地", antonyms: "", phrases: "again and again 再三地", sentence_pattern: "again 與副詞連用", grammar: "", example: "I need to wash the plate again.", example_zh: "我需要再洗一次這個盤子。", familiarity: 0 }
];

// ===== 2. 儲存與讀取功能 (localStorage) =====
function loadProgress() {
  const saved = localStorage.getItem("vocabProgress");
  if (saved) {
    const savedData = JSON.parse(saved);
    words.forEach(word => {
      if (savedData[word.id] !== undefined) {
        word.familiarity = savedData[word.id];
      }
    });
  }
}

function saveProgress() {
  const progress = {};
  words.forEach(word => {
    progress[word.id] = word.familiarity;
  });
  localStorage.setItem("vocabProgress", JSON.stringify(progress));
}

loadProgress();

// ===== 自動發音主程式 (使用 Web Speech API) =====
function speak(text) {
  // 1. 安全檢查：如果瀏覽器不支持發音則跳出
  if (!window.speechSynthesis) {
    console.log("您的瀏覽器不支持語音合成功能");
    return;
  }

  // 2. 停止當前所有正在播放的聲音（避免多個單字疊在一起）
  window.speechSynthesis.cancel();

  // 3. 建立發音實體
  const utterance = new SpeechSynthesisUtterance(text);
  
  // 4. 設定細節參數
  utterance.lang = 'en-US'; // 強制使用美式英語發音
  utterance.rate = 0.85;    // 語速稍微調慢一點點（範圍 0.1 ~ 10），聽得更清楚
  utterance.pitch = 1.0;    // 音調（範圍 0 ~ 2）

  // 5. 執行朗讀
  window.speechSynthesis.speak(utterance);
}

// ===== 4. 演算法：優先練習不熟的 (Level 0) =====
function getNextIndex() {
  const sorted = [...words].sort((a, b) => a.familiarity - b.familiarity);
  const lowestLevel = sorted[0].familiarity;
  const candidates = sorted.filter(w => w.familiarity === lowestLevel);
  const randomWord = candidates[Math.floor(Math.random() * candidates.length)];
  return words.findIndex(w => w.id === randomWord.id);
}

let currentIndex = getNextIndex();
let flipped = false;

// ===== 5. 顯示卡片渲染 =====
function renderCard() {
  const word = words[currentIndex];
  const card = document.getElementById("card-content");

  if (!flipped) {
    card.innerHTML = `
      <div style="font-size: 1rem; color: #888; margin-bottom: 10px;">點擊卡片翻面</div>
      <h2 style="font-size: 3rem; margin: 20px 0;">${word.word}</h2>
      <p style="text-align:center; font-size: 1.2rem; color: #444;">${word.phonetic_us}</p>
    `;
  } else {
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0;">${word.word}</h3>
        <button onclick="event.stopPropagation(); speak('${word.word}')" style="margin:0; padding: 5px 10px; background: #673AB7; color:white;">🔊 朗讀</button>
      </div>
      <p><strong>音標：</strong>${word.phonetic_us}</p>
      <p><strong>詞性：</strong>${word.pos}</p>
      <p><strong>中文：</strong>${word.meaning}</p>
      ${word.synonyms ? `<p><strong>同義/補充：</strong>${word.synonyms}</p>` : ""}
      ${word.antonyms ? `<p><strong>反義：</strong>${word.antonyms}</p>` : ""}
      ${word.phrases ? `<p><strong>片語：</strong>${word.phrases}</p>` : ""}
      ${word.sentence_pattern ? `<p><strong>文法句型：</strong>${word.sentence_pattern}</p>` : ""}
      ${word.grammar ? `<p><strong>重點補充：</strong>${word.grammar}</p>` : ""}
      <hr>
      <p><em>${word.example}</em></p>
      <p>${word.example_zh}</p>
    `;
  }
  updateStats();
}
function flipCard() {
  flipped = !flipped;
  renderCard(); // 先執行畫面的翻轉
  
  // 判斷：如果是翻到背面（顯示中文與例句時），就自動讀出單字
  if (flipped) {
    const currentWordObject = words[currentIndex];
    speak(currentWordObject.word); // 呼叫剛才寫好的發音主程式
  }
}
function nextWord() {
  currentIndex = getNextIndex();
  flipped = false;
  renderCard();
}

function updateFamiliarity(level) {
  words[currentIndex].familiarity = level;
  saveProgress();
  nextWord();
}

function updateStats() {
  const total = words.length;
  const mastered = words.filter(w => w.familiarity === 2).length;
  const progressPercent = Math.round((mastered / total) * 100);

  document.getElementById("stats").innerHTML =
    `已熟悉：${mastered} / ${total}（${progressPercent}%）`;

  document.getElementById("progress-bar").style.width =
    progressPercent + "%";
}

// 初始化
renderCard();


