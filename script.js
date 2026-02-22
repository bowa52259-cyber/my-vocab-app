// ===== 1. 完整單字資料 (1-52) =====
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
  { id: 16, word: "again", phonetic_us: "[əˈɡɛn]", pos: "ad.", meaning: "再次、又", synonyms: "repeatedly 重複地", antonyms: "", phrases: "again and again 再三地", sentence_pattern: "again 與副詞連用", grammar: "", example: "I need to wash the plate again.", example_zh: "我需要再洗一次這個盤子。", familiarity: 0 },
  { id: 17, word: "against", phonetic_us: "[əˈɡɛnst]", pos: "prep.", meaning: "反對、違反、倚在、緊靠", synonyms: "opposed to 反對", antonyms: "for", phrases: "against the law 違法", sentence_pattern: "", grammar: "", example: "He is leaning against the wall.", example_zh: "他正靠在牆上。", familiarity: 0 },
  { id: 18, word: "age", phonetic_us: "[edʒ]", pos: "n. / v.", meaning: "年齡、時期 / 變老", synonyms: "period 時期", antonyms: "", phrases: "at the age of... 在...歲時", sentence_pattern: "", grammar: "", example: "What's the age of your cat?", example_zh: "你的貓多大了？", familiarity: 0 },
  { id: 19, word: "ago", phonetic_us: "[əˈɡo]", pos: "ad.", meaning: "以前", synonyms: "before 以前", antonyms: "after", phrases: "long ago 很久以前", sentence_pattern: "過去時間 + ago", grammar: "ago 通常與過去式連用。", example: "I met him two years ago.", example_zh: "我兩年前見過他。", familiarity: 0 },
  { id: 20, word: "agree", phonetic_us: "[əˈɡri]", pos: "v.", meaning: "同意、贊成", synonyms: "consent 贊成", antonyms: "disagree", phrases: "agree with sb. 同意某人", sentence_pattern: "agree to do sth. 同意做某事", grammar: "", example: "I agree with you on this point.", example_zh: "在這一點上我同意你的看法。", familiarity: 0 },
  { id: 21, word: "agreement", phonetic_us: "[əˈɡrimənt]", pos: "n.", meaning: "同意、一致、協議", synonyms: "contract 協議", antonyms: "disagreement", phrases: "reach an agreement 達成協議", sentence_pattern: "", grammar: "", example: "They signed a trade agreement.", example_zh: "他們簽署了一項貿易協議。", familiarity: 0 },
  { id: 22, word: "ahead", phonetic_us: "[əˈhɛd]", pos: "ad. / adj.", meaning: "在前方、領先", synonyms: "forward 向前", antonyms: "behind", phrases: "ahead of time 提前", sentence_pattern: "", grammar: "", example: "You should go ahead of me.", example_zh: "你應該走在我前面。", familiarity: 0 },
  { id: 23, word: "air", phonetic_us: "[ɛr]", pos: "n.", meaning: "空氣、天空、大氣", synonyms: "atmosphere 大氣", antonyms: "", phrases: "by air 搭飛機", sentence_pattern: "", grammar: "air 作為「空氣」時是不可數名詞。", example: "Let's go out for some fresh air.", example_zh: "我們出去呼吸點新鮮空氣吧。", familiarity: 0 },
  { id: 24, word: "aircraft", phonetic_us: "[ˈɛrˌkræft]", pos: "n.", meaning: "航空器、飛機", synonyms: "airplane 飛機", anton_yms: "", phrases: "", sentence_pattern: "", grammar: "aircraft 的單複數同型。", example: "The aircraft took off smoothly.", example_zh: "飛機平穩起飛了。", familiarity: 0 },
  { id: 25, word: "airline", phonetic_us: "[ˈɛrˌlaɪn]", pos: "n.", meaning: "航空公司、航線", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "", grammar: "", example: "Which airline are you flying with?", example_zh: "你要搭哪家航空公司的飛機？", familiarity: 0 },
  { id: 26, word: "airplane / plane", phonetic_us: "[ˈɛrˌplen] / [plen]", pos: "n.", meaning: "飛機", synonyms: "aircraft", antonyms: "", phrases: "by plane 搭飛機", sentence_pattern: "", grammar: "", example: "The airplane is flying over the clouds.", example_zh: "飛機正在雲端飛行。", familiarity: 0 },
  { id: 27, word: "airport", phonetic_us: "[ˈɛrˌpɔrt]", pos: "n.", meaning: "機場", synonyms: "airfield", antonyms: "", phrases: "at the airport 在機場", sentence_pattern: "", grammar: "", example: "I'll meet you at the airport.", example_zh: "我會在機場接你。", familiarity: 0 },
  { id: 28, word: "alarm", phonetic_us: "[əˈlɑrm]", pos: "n. / v.", meaning: "警報、鬧鐘 / 使驚恐", synonyms: "warning 警報", antonyms: "", phrases: "alarm clock 鬧鐘", sentence_pattern: "", grammar: "", example: "The fire alarm went off.", example_zh: "火警響了。", familiarity: 0 },
  { id: 29, word: "alike", phonetic_us: "[əˈlaɪk]", pos: "adj. / ad.", meaning: "相似的 / 相似地", synonyms: "similar 相似的", antonyms: "different", phrases: "look alike 看起來很像", sentence_pattern: "", grammar: "alike 作形容詞時通常不放在名詞前。", example: "The two sisters look very alike.", example_zh: "這對姐妹長得很像。", familiarity: 0 },
  { id: 30, word: "alive", phonetic_us: "[əˈlaɪv]", pos: "adj.", meaning: "活著的、活躍的", synonyms: "living 活著的", antonyms: "dead", phrases: "stay alive 保持活力", sentence_pattern: "", grammar: "alive 通常放在連綴動詞之後（如 be, stay）。", example: "He is still alive after the accident.", example_zh: "事故後他仍然活著。", familiarity: 0 },
  { id: 31, word: "all", phonetic_us: "[ɔl]", pos: "adj. / pron. / ad.", meaning: "全部的 / 全部 / 完全", synonyms: "whole 全部的", antonyms: "none", phrases: "all of a sudden 突然間", sentence_pattern: "all + 名詞", grammar: "", example: "All the students are here.", example_zh: "所有學生都在這裡。", familiarity: 0 },
  { id: 32, word: "allow", phonetic_us: "[əˈlaʊ]", pos: "v.", meaning: "允許、准許", synonyms: "permit 允許", antonyms: "forbid", phrases: "allow for 考慮到", sentence_pattern: "allow sb. to do sth. 允許某人做某事", grammar: "", example: "My parents allow me to go out.", example_zh: "我父母允許我出門。", familiarity: 0 },
  { id: 33, word: "almost", phonetic_us: "[ˈɔlˌmost]", pos: "ad.", meaning: "幾乎、差不多", synonyms: "nearly 幾乎", antonyms: "", phrases: "almost always 幾乎總是", sentence_pattern: "", grammar: "", example: "I've almost finished my work.", example_zh: "我幾乎完成了我的工作。", familiarity: 0 },
  { id: 34, word: "alone", phonetic_us: "[əˈlon]", pos: "adj. / ad.", meaning: "單獨的 / 獨自地", synonyms: "lonely 孤獨的", antonyms: "together", phrases: "leave me alone 讓我一個人待著", sentence_pattern: "", grammar: "alone 指的是客觀的「獨自」，不一定感到孤獨。", example: "She likes to travel alone.", example_zh: "她喜歡獨自旅行。", familiarity: 0 },
  { id: 35, word: "among", phonetic_us: "[əˈmʌŋ]", pos: "prep.", meaning: "在...之中、...之一", synonyms: "", antonyms: "", phrases: "among... 指在三者或三者以上的同類人或事物之間。", sentence_pattern: "", grammar: "", example: "She is the only girl among us.", example_zh: "她是我們當中唯一的女孩。", familiarity: 0 },
  { id: 36, word: "and", phonetic_us: "[ænd]", pos: "conj.", meaning: "和、以及", synonyms: "and so on 等等、諸如此類", antonyms: "", phrases: "", sentence_pattern: "", grammar: "and 連接兩個或兩個以上的單詞、短語或從句，表示並列關係。", example: "My brother and my friend are both reading a book now.", example_zh: "我哥哥和我朋友現在都在看書。", familiarity: 0 },
  { id: 37, word: "anger", phonetic_us: "[ˈæŋɡɚ]", pos: "n.", meaning: "生氣、憤怒", synonyms: "fury 暴怒", antonyms: "", phrases: "be out of control 某人失去控制", sentence_pattern: "", grammar: "", example: "Her anger is out of control.", example_zh: "她無法控制自己的憤怒。", familiarity: 0 },
  { id: 38, word: "angry", phonetic_us: "[ˈæŋɡri]", pos: "adj.", meaning: "生氣的、憤怒的", synonyms: "be angry with sb. 對某人生氣", antonyms: "", phrases: "be angry at sth. 對某事生氣", sentence_pattern: "", grammar: "", example: "She was very angry because I did not wait for her.", example_zh: "她很生氣，因為我沒有等她。", familiarity: 0 },
  { id: 39, word: "animal", phonetic_us: "[ˈænəməl]", pos: "n.", meaning: "動物、牲畜", synonyms: "wild animal 野生動物", antonyms: "", phrases: "be divided into... 被分為...", sentence_pattern: "", grammar: "", example: "Animals can be divided into many species.", example_zh: "動物可分為很多種類。", familiarity: 0 },
  { id: 40, word: "another", phonetic_us: "[əˈnʌðɚ]", pos: "adj. / pron.", meaning: "另一個的、再一個的 / 另一個", synonyms: "", antonyms: "", phrases: "one... the other 指兩者中的另一個", sentence_pattern: "", grammar: "another 泛指三者或三者以上的人或物中不確定的另一個。", example: "Let's find another seat.", example_zh: "我們再找個座位。", familiarity: 0 },
  { id: 41, word: "answer", phonetic_us: "[ˈænsɚ]", pos: "v. / n.", meaning: "回答、答覆", synonyms: "reply 回答", antonyms: "ask 提問", phrases: "answer back 應答、回嘴", sentence_pattern: "It is easy for me to answer the question.", grammar: "", example: "It is easy for me to answer the question.", example_zh: "我可以輕易回答這個問題。", familiarity: 0 },
  { id: 42, word: "ant", phonetic_us: "[ænt]", pos: "n.", meaning: "螞蟻", synonyms: "", antonyms: "", phrases: "have ants in one's pants 因焦急、氣憤等而坐立不安", sentence_pattern: "", grammar: "", example: "I'm afraid of ants.", example_zh: "我害怕螞蟻。", familiarity: 0 },
  { id: 43, word: "any", phonetic_us: "[ˈɛni]", pos: "adj. / pron.", meaning: "任何的、任一的、一些 / 任何一個", synonyms: "anytime 任何時候、隨時", antonyms: "", phrases: "be afraid of doing sth. 是「害怕做某事」。", sentence_pattern: "", grammar: "當「中的任何一個」時，表示的是單數，所以 be 動詞用 is。", example: "Any one of us is a good dancer.", example_zh: "我們之中的任何一個人都跳得很好。", familiarity: 0 },
  { id: 44, word: "anything", phonetic_us: "[ˈɛniˌθɪŋ]", pos: "pron.", meaning: "任何事", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "I can do anything for you if you like.", grammar: "can 是情態動詞，在表達「能、可以」的意思時，後面接動詞原形。", example: "I can do anything for you if you like.", example_zh: "如果你願意，我可以為你做任何事。", familiarity: 0 },
  { id: 45, word: "ape", phonetic_us: "[ep]", pos: "n.", meaning: "猿猴、模仿者", synonyms: "evolve from... 從...演變", antonyms: "", phrases: "", sentence_pattern: "", grammar: "演變而來的「演變」是從一種狀態、形式變成另一種狀態、形式，可用 evolve into 表達。", example: "They say humans evolved from apes.", example_zh: "據說，人類是由猿猴演變而來的。", familiarity: 0 },
  { id: 46, word: "appear", phonetic_us: "[əˈpɪr]", pos: "v.", meaning: "出現、顯露、看起來像", synonyms: "emerge 浮現、顯露", antonyms: "disappear 消失", phrases: "appear to be 好像是", sentence_pattern: "", grammar: "", example: "I hope he can appear on time tomorrow.", example_zh: "我希望他明天能準時出現。", familiarity: 0 },
  { id: 47, word: "apple", phonetic_us: "[ˈæpəl]", pos: "n.", meaning: "蘋果", synonyms: "", antonyms: "", phrases: "", sentence_pattern: "", grammar: "apple 是以母音音標開頭的單字，所以前面用冠詞 an。", example: "This is an apple on his table.", example_zh: "在他桌上的是顆蘋果。", familiarity: 0 },
  { id: 48, word: "April", phonetic_us: "[ˈeprəl]", pos: "n.", meaning: "四月", synonyms: "Apr. 四月", antonyms: "", phrases: "April Fool's Day 愚人節", sentence_pattern: "", grammar: "will 是情態動詞，用於一般未來式，後接動詞原形。", example: "In April, I will return to my native town.", example_zh: "四月份，我將返回故鄉。", familiarity: 0 },
  { id: 49, word: "are", phonetic_us: "[ɑr]", pos: "v.", meaning: "是、在（用於第二人稱單複數）", synonyms: "", antonyms: "", phrases: "look forward to doing... 我們期待做...", grammar: "look forward to 中的 to 是介系詞，所以後面接動詞的 ing 形式。", example: "We are looking forward to buying a new car.", example_zh: "我們期待買一輛新車。", familiarity: 0 },
  { id: 50, word: "area", phonetic_us: "[ˈɛriə]", pos: "n.", meaning: "區域、面積、地區、範圍", synonyms: "district 地區", antonyms: "", phrases: "rural area 農村地區", sentence_pattern: "", grammar: "", example: "It has a population of one million in this area.", example_zh: "這個地區有一百萬人口。", familiarity: 0 },
  { id: 51, word: "arm(1)", phonetic_us: "[ɑrm]", pos: "n.", meaning: "手臂、武器、裝備", synonyms: "weapon 武器", antonyms: "", phrases: "at arm's length 保持距離", sentence_pattern: "", grammar: "形容詞比較級 + than + 比較對象，可表達兩者之間的比較。", example: "His arm is longer than mine.", example_zh: "他的手臂比我的長。", familiarity: 0 },
  { id: 52, word: "arm(2)", phonetic_us: "[ɑrm]", pos: "v.", meaning: "武裝、裝備", synonyms: "equip 武裝", antonyms: "disarm 解除武裝", phrases: "be armed to the teeth 武裝到牙齒", sentence_pattern: "", grammar: "arms 也可作名詞，表達「武器」的意思，但它主要指「炸彈和槍支之類」，而 weapon 指「槍、刀、導彈等能造成人身傷害的東西」。", example: "It is necessary to arm the security guard with the advanced weapons.", example_zh: "用先進武器武裝這個保安人員是十分必要的。", familiarity: 0 }
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

// ===== 3. iPhone 優化版發音功能 =====
function speak(text) {
  if (!window.speechSynthesis) return;

  // 強制停止之前的聲音
  window.speechSynthesis.cancel(); 

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  
  // iPhone 12 Pro 語音優化：長句子語速調至 0.9，短語 0.85
  utterance.rate = text.length > 25 ? 0.9 : 0.85; 
  utterance.pitch = 1.0;
  utterance.volume = 1.0; // 強制音量

  // 針對 iOS 的 bug：有時候需要短暫延遲才能觸發長句朗讀
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 50);
}

// ===== 4. 不熟優先演算法 =====
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
      <div style="font-size: 0.9rem; color: #888; margin-bottom: 10px;">點擊翻面</div>
      <h2 style="font-size: 3rem; margin: 20px 0;">${word.word}</h2>
      <p style="text-align:center; font-size: 1.2rem; color: #444;">${word.phonetic_us}</p>
    `;
  } else {
    // 轉義處理，防止 has not (hasn't) 等單引號破壞代碼
    const safeWord = word.word.replace(/'/g, "\\'");
    const safeExample = word.example.replace(/'/g, "\\'");

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="margin: 0; color: #333;">${word.word}</h3>
        <button onclick="event.stopPropagation(); speak('${safeWord}')" style="margin:0; padding: 8px 15px; background: #673AB7; color:white; border-radius: 20px; border:none; font-size:14px;">🔊 單字</button>
      </div>
      <p><strong>音標：</strong>${word.phonetic_us}</p>
      <p><strong>詞性：</strong>${word.pos}</p>
      <p><strong>中文：</strong>${word.meaning}</p>
      ${word.synonyms ? `<p><strong>同義/補充：</strong>${word.synonyms}</p>` : ""}
      ${word.antonyms ? `<p><strong>反義：</strong>${word.antonyms}</p>` : ""}
      ${word.phrases ? `<p><strong>片語：</strong>${word.phrases}</p>` : ""}
      ${word.sentence_pattern ? `<p><strong>文法句型：</strong>${word.sentence_pattern}</p>` : ""}
      ${word.grammar ? `<p><strong>重點補充：</strong>${word.grammar}</p>` : ""}
      <hr style="border: 0.5px solid #eee; margin: 15px 0;">
      <div style="background: #f9f9f9; padding: 12px; border-radius: 12px; border-left: 5px solid #2196F3;">
        <p style="margin: 0; color: #2c3e50; font-style: italic;">${word.example}</p>
        <p style="margin: 5px 0 10px 0; font-size: 0.95rem; color: #666;">${word.example_zh}</p>
        <button onclick="event.stopPropagation(); speak('${safeExample}')" style="width: 100%; padding: 8px; background: #2196F3; color:white; border-radius: 8px; border:none; font-size:14px;">🔊 聽完整例句</button>
      </div>
    `;
  }
  updateStats();
}

function flipCard() {
  flipped = !flipped;
  renderCard();
  // 翻面自動唸單字（iOS 有時會阻擋此自動行為，手動按鈕最保險）
  if (flipped) {
    speak(words[currentIndex].word);
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
  document.getElementById("stats").innerHTML = `已熟悉：${mastered} / ${total}（${progressPercent}%）`;
  document.getElementById("progress-bar").style.width = progressPercent + "%";
}

renderCard();




