const questions = [
  {
    q: "Q1：當別人指出你的錯誤時，你最常的第一反應是？",
    options: ["立刻說明自己的理由", "感到尷尬或受傷，但試著聽下去", "感謝對方並請教更多細節"]
  },
  {
    q: "Q2：你對以下哪句話最有共鳴？",
    options: ["批評只會打擊我的自信", "要是語氣不好，我就聽不下去", "Feedback能讓我更清楚自己的盲點"]
  },
  {
    q: "Q3：在收到負面回饋後，你通常會？",
    options: ["一整天都在想那句話，很難釋懷", "會先有點情緒，但之後會反思", "馬上記下重點，思考如何改善"]
  },
  {
    q: "Q4：你希望別人怎麼給你feedback？",
    options: ["最好不要太直接，不然我會不開心", "有禮貌地說清楚具體問題", "直接說，我喜歡實話實說"]
  },
  {
    q: "Q5：你是否曾主動詢問他人對你的意見？",
    options: ["幾乎沒有，我怕聽到不好聽的話", "偶爾會，在需要改善的時候", "常常會，我覺得很有幫助"]
  },
  {
    q: "Q6：當你收到建議但不同意時，你會？",
    options: ["不理會，覺得對方不了解我", "雖然不同意，但會思考背後的原因", "先聽完再討論，有理就會接受"]
  },
  {
    q: "Q7：你是否曾因為別人給你的feedback而成長或改變？",
    options: ["沒有，反而讓我質疑自己", "曾經有，但次數不多", "有，我很感謝那些給我建議的人"]
  },
  {
    q: "Q8：你在給別人feedback時，會..",
    options: ["避免給負面意見，怕對方不開心", "會給，但盡量說得柔和", "真誠直白，但有同理心"]
  },
  {
    q: "Q9：你認為feedback應該是….",
    options: ["正面讚美比較好", "要有建設性，不要只是批評", "無論正面或負面，只要真誠就好"]
  },
  {
    q: "Q10：當你看到別人進步是因為接受了feedback，你會？",
    options: ["覺得他們比我更能接受批評", "有點佩服，也想試著做到", "覺得這是回饋的價值，我也會這樣做"]
  }
];

const form = document.getElementById('quizForm');

questions.forEach((item, index) => {
  const div = document.createElement('div');
  div.innerHTML = `<p><strong>${item.q}</strong></p>`;
  item.options.forEach((opt, i) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="q${index}" value="${i + 1}" required>
        ${opt}
      </label><br>
    `;
  });
  form.appendChild(div);
});

document.getElementById('submitBtn').addEventListener('click', function () {
  const results = Array.from(new FormData(form).values()).map(Number);

  if (results.length < questions.length) {
    alert("請完成所有題目！");
    return;
  }
  const score = results.reduce((a, b) => a + b, 0);
  let resultText = `你的總得分是：${score} \n\n`;
  document.getElementById('result').innerText = resultText;
});