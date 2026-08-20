const content=document.getElementById("content");

const pages={
overview:()=>`
<div class="hero">
  <div class="eyebrow"><span class="dot">●</span> YOUR WEEK, MADE SIMPLE</div>
  <h1>A plan that <em>fits you.</em></h1>
  <p>Flexible workouts, familiar food, and small steps that make consistency easier.</p>
</div>
<div class="grid2">
  <div class="card fuel"><div class="eyebrow">TODAY'S FUEL</div><div class="fuel-row"><div><div class="big">1,580 <span class="muted" style="font-size:16px">/ 2,668 kcal</span></div><p>Building: aim for about 37g fiber today. Starting estimate — adjust from your weekly progress.</p></div><div class="ring">59%</div></div></div>
  <div class="card"><div class="eyebrow">MACRO BALANCE</div><h2>Enough, not extreme</h2>
    <div class="macro-row">● Protein <b>103g</b><div class="bar"><i style="width:86%"></i></div></div>
    <div class="macro-row">● Carbs <b>467g</b><div class="bar"><i style="width:70%"></i></div></div>
    <div class="macro-row">● Fats <b>43g</b><div class="bar"><i style="width:62%"></i></div></div>
  </div>
</div>
<div class="grid2">
  <div class="card"><div class="section-head"><h2>Today's meal plan</h2><button class="pill">+ Log what I ate</button></div>
    <div class="meal"><div class="meal-left"><div class="meal-icon">☀</div><div><b>Peserattu with curd</b><div class="muted">Breakfast · 380 kcal</div></div></div><span class="check">✓</span></div>
    <div class="meal"><div class="meal-left"><div class="meal-icon">🥗</div><div><b>Paneer rice bowl</b><div class="muted">Lunch · 540 kcal</div></div></div><span class="check">✓</span></div>
    <div class="meal"><div class="meal-left"><div class="meal-icon">🍲</div><div><b>Dal, roti & salad</b><div class="muted">Dinner · 460 kcal</div></div></div><span class="check">○</span></div>
  </div>
  <div class="card shop"><div class="eyebrow">SMART GROCERY LIST</div><h2>Shop once,<br>eat all week.</h2><p>12 ingredients cover 4 meals and stay within your monthly budget.</p><button class="btn">View grocery list</button></div>
</div>`,
workouts:()=>`
<div class="eyebrow">MOVEMENT</div><h1 class="page-title">My workouts</h1><p class="muted">A simple weekly plan built around your available time.</p>
<div class="statgrid"><div class="stat"><div class="muted">This week</div><b>3 / 5</b><p>sessions completed</p></div><div class="stat"><div class="muted">Active minutes</div><b>124</b><p>across 3 sessions</p></div><div class="stat"><div class="muted">Streak</div><b>6 days</b><p>keep it going</p></div></div>
<div class="list">
<div class="workout"><div><b>Full-body strength</b><p class="muted">35 min · Moderate · 6 exercises</p><div class="progress" style="width:280px"><i style="width:100%"></i></div></div><span class="check">✓ Done</span></div>
<div class="workout"><div><b>Low-impact cardio</b><p class="muted">25 min · Easy · Walking + mobility</p><div class="progress" style="width:280px"><i style="width:60%"></i></div></div><button class="btn green">Start</button></div>
<div class="workout"><div><b>Core & mobility</b><p class="muted">20 min · Easy · 5 movements</p></div><button class="pill">View</button></div>
</div>`,
meals:()=>`
<div class="eyebrow">YOUR FOOD RHYTHM</div><h1 class="page-title">Meal plans <span style="color:#77a84d">that feel like home.</span></h1><p class="muted">Flexible fuel, familiar ingredients, and enough structure to make the next meal easy.</p>
<div class="grid2"><div class="card fuel"><div class="eyebrow">TODAY'S FUEL</div><div class="big">1,580 <span class="muted" style="font-size:16px">/ 2,668 kcal</span></div><p>Targeted around your profile and current plan. Recheck your weekly progress before changing targets.</p></div><div class="card"><div class="eyebrow">MACRO BALANCE</div><h2>Enough, not extreme</h2><p>Protein 103g · Carbs 467g · Fats 43g</p></div></div>
<div class="card" style="margin-top:18px"><div class="section-head"><h2>Today's meal plan</h2><button class="btn green" onclick="smartSwap()">✦ Ask for a swap</button></div>
${["Peserattu with curd","Paneer rice bowl","Fruit & yogurt","Dal, roti & salad"].map((x,i)=>`<div class="meal"><div class="meal-left"><div class="meal-icon">${["☀","🥗","🍎","🍲"][i]}</div><div><b>${x}</b><div class="muted">${["Breakfast","Lunch","Snack","Dinner"][i]} · ${[380,540,200,460][i]} kcal</div></div></div><span class="check">✓</span></div>`).join("")}</div>`,
progress:()=>`
<div class="eyebrow">YOUR MOMENTUM</div><h1 class="page-title">Progress</h1><p class="muted">Focus on trends, not perfection.</p>
<div class="statgrid"><div class="stat"><div class="muted">Workouts</div><b>12</b><p>this month</p></div><div class="stat"><div class="muted">Meal logs</div><b>28</b><p>consistent entries</p></div><div class="stat"><div class="muted">Goal score</div><b>78%</b><p>weekly consistency</p></div></div>
<div class="card" style="margin-top:20px"><h2>Weekly consistency</h2><div class="progress" style="height:18px;margin:25px 0"><i style="width:78%"></i></div><p class="muted">You completed 78% of planned activities this week. Keep the next step small and realistic.</p></div>`,
preferences:()=>`
<div class="eyebrow">MAKE IT YOURS</div><h1 class="page-title">Preferences</h1><p class="muted">These settings are used to personalize your workout and meal recommendations.</p>
<div class="pref"><div><b>Fitness goal</b><p class="muted">Build strength & improve consistency</p></div><button class="pill">Edit</button></div>
<div class="pref"><div><b>Workout availability</b><p class="muted">35–45 minutes · 5 days/week</p></div><button class="pill">Edit</button></div>
<div class="pref"><div><b>Food preferences</b><p class="muted">Vegetarian · familiar ingredients · flexible meals</p></div><button class="pill">Edit</button></div>`,
help:()=>`
<div class="eyebrow">SUPPORT</div><h1 class="page-title">Help center</h1><p class="muted">Quick answers for using Fitly.</p>
<div class="card" style="margin-top:25px"><h3>How does personalization work?</h3><p>Fitly combines your stated goals, preferences, available time and activity history to generate practical suggestions. This demo uses a lightweight local recommendation engine; a production build can connect the same interface to an AI provider.</p><hr style="border:0;border-top:1px solid var(--line);margin:25px 0"><h3>Can Fitly replace medical advice?</h3><p>No. Fitness and nutrition suggestions are general guidance and should not replace qualified medical advice.</p></div>
`
};

function showPage(page){
  content.innerHTML=pages[page]();
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
function toggleChat(){document.getElementById("chat").classList.toggle("hidden")}
function sendChat(){
  const input=document.getElementById("chatInput"), text=input.value.trim(); if(!text)return;
  const box=document.getElementById("messages"); box.innerHTML+=`<div class="me">${escapeHtml(text)}</div>`;
  let reply="Try keeping the next step simple: choose one workout and one balanced meal that fit your schedule.";
  if(/meal|food|diet/i.test(text)) reply="A practical option is a protein-rich meal with vegetables and a familiar carbohydrate source. I can also suggest a swap.";
  if(/workout|exercise/i.test(text)) reply="For today, try a 25–35 minute full-body session followed by a short mobility cooldown.";
  box.innerHTML+=`<div class="bot">${reply}</div>`; input.value=""; box.scrollTop=box.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function smartSwap(){alert("Smart swap: replace the current meal with a similar-calorie option matching your preferences.");}
showPage("overview");
