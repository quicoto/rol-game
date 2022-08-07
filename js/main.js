(()=>{var u=`
<div class="loader loader--style3" title="loading">
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="0.6s"
      repeatCount="indefinite"/>
    </path>
  </svg>
</div>`;var k="gamestate",M={player:{name:"John Snow",experience:0,health:{current:100,total:100},attack:10,defense:0,gold:0}},m={};function l(){window.localStorage.setItem(k,JSON.stringify(m))}function w(){return m=JSON.parse(window.localStorage.getItem(k))||M,l(),m}function a(){return m}function $(){m=M,l()}var c={};function R(){c.progressBar=document.querySelector(".health .progress-bar"),c.healthCurrent=document.getElementById("player-health-current"),c.healthTotal=document.getElementById("player-health-total")}R();function x(){let e="danger";c.healthCurrent.textContent=a().player.health.current,c.healthTotal.textContent=a().player.health.total,c.progressBar.style.width=`${a().player.health.current}%`,a().player.health.current>=25&&(e="warning"),a().player.health.current>=75&&(e="good"),c.progressBar.style.backgroundColor=`var(--progress-${e})`}function _(){x()}var z=[{name:"Apprentice",experienceMin:0,experienceMax:49},{name:"Adventurer",experienceMin:50,experienceMax:99},{name:"Slayer",experienceMin:100,experienceMax:199},{name:"Master",experienceMin:200,experienceMax:399},{name:"Grandmaster",experienceMin:400,experienceMax:799},{name:"Legendary",experienceMin:800,experienceMax:9999999999999}],B={};function J(){B.progressBar=document.querySelector(".experience .progress-bar")}function y(e){return z.find(r=>e>=r.experienceMin&&e<=r.experienceMax)}function v(){let e=y(a().player.experience);B.progressBar.style.width=`${(a().player.experience-e.experienceMin)/(e.experienceMax-e.experienceMin)*100}%`}function A(){J(),v()}function E(e){return Math.floor(Math.random()*e)}function C(e=[]){if(e.length===0)return e;for(let r=e.length-1;r>0;r-=1){let i=Math.floor(Math.random()*(r+1)),h=e[r];e[r]=e[i],e[i]=h}return e}function g(e){return new Intl.NumberFormat("en-US").format(e)}var n={};function U(e){let r=n.nameInput.value;e.preventDefault(),a().player.name=r,l(),n.name.textContent=r,n.nameForm.setAttribute("hidden","true")}function W(){n.nameForm.toggleAttribute("hidden"),n.nameForm.hasAttribute("hidden")||n.nameInput.focus()}function K(){n.name=document.getElementById("player-name"),n.nameEdit=document.getElementById("player-name-edit"),n.nameInput=document.getElementById("player-name-input"),n.nameForm=document.getElementById("player-name-form"),n.level=document.getElementById("player-level"),n.attack=document.getElementById("player-attack"),n.defense=document.getElementById("player-defense"),n.gold=document.getElementById("player-gold")}function Q(){n.nameForm.addEventListener("submit",U),n.nameEdit.addEventListener("click",W)}function b(){x(),v(),n.level.textContent=y(a().player.experience).name,n.attack.textContent=g(a().player.attack),n.defense.textContent=g(a().player.defense),n.gold.textContent=g(a().player.gold)}function L(){K(),Q(),A(),a().player.name&&(n.name.textContent=a().player.name,n.nameInput.value=a().player.name),b()}var s={folder:"svg",ext:".svg"};var o={};function V(){o.dialog=document.querySelector("dialog")}V();function D(){return o.dialog}function F(){o.dialog.removeAttribute("hidden"),o.dialog.setAttribute("open",""),o.dialog.setAttribute("tabindex","0"),document.body.classList.add("dialog-open"),document.body.setAttribute("aria-hidden","true")}function H(){o.dialog.setAttribute("hidden",!0),document.body.classList.remove("dialog-open"),document.body.removeAttribute("aria-hidden")}function G(e,r){o.dialog.classList.add(r),o.dialog.innerHTML=`Searching for monsters...${u}`,setTimeout(()=>{o.dialog.innerHTML=e,twemoji.parse(o.dialog,s)},1500)}function j(e){return`
<div class="fight-dialog">
  <div class="fight-dialog-content">
    <h2 class="fight-dialog-icon">${e.icon}</h2>
    <div>
      <h3 class="mb-1">Watch out, a ${e.name}!</h3>
      <p>Do you want to fight it?</p>
      <ul>
        <li><strong>Attack</strong> ${e.attack}</li>
        <li><strong>Defense</strong> ${e.defense}</li>
        <li><strong>Health</strong> ${e.health}</li>
      </ul>
    </div>
  </div>
  <div class="fight-dialog-warning">
    <p>\u26A0\uFE0F You might get hurt if you try to escape!</p>
  </div>
  <div class="dialog-buttons">
    <button data-action="escape" class="btn btn-secondary btn-full">No</button>
    <button data-action="fight" class="btn btn-primary btn-full">Yes</button>
  </div>
</div>
`}var N=`
<div class="game-over w-100">
  <h2 class="mb-2">
    <span class="game-over-stone">\u{1FAA6}</span> <br />
    <span class="mt-1 mb-2">You died!</span>
  </h2>
  <h3 class="d-flex align-items-center mb-2">
    \u2620\uFE0F <span class="ml-0-5 mr-0-5">Game over</span> \u2620\uFE0F
  </h3>
</div>
`;var Y=[{name:"Troll",icon:"\u{1F9CC}",health:100,attack:30,defense:30,experience:10,gold:10},{name:"Goblin",icon:"\u{1F47A}",health:70,attack:15,defense:10,experience:5,gold:5},{name:"Boar",icon:"\u{1F417}",health:10,attack:5,defense:0,experience:1,gold:1}];var p={},t={currentEnemy:null};function S(){p.game.innerHTML=N,twemoji.parse(p.game,s)}function ee(){t.currentEnemy=C(Y)[0],G(j(t.currentEnemy),"fight"),F()}function te(){let e=E(t.currentEnemy.attack);if(console.log(`Enemy attack: ${t.currentEnemy.attack}, Random: ${e}`),t.state.player.health.current=Math.max(0,t.state.player.health.current-=e),t.state.player.experience+=t.currentEnemy.experience,t.state.player.gold+=t.currentEnemy.gold,l(),t.state.player.health.current===0){S();return}console.log(`${t.currentEnemy.name} attacked you for ${e} (max: ${t.currentEnemy.attack}) damage.`),console.log(`You have ${t.state.player.health.current} health remaining.`)}function ne(){let e=E(t.currentEnemy.attack/2);if(console.log(`Enemy attack: ${t.currentEnemy.attack}, Random: ${e}`),t.state.player.health.current=Math.max(0,t.state.player.health.current-=e),l(),t.state.player.health.current===0){S();return}console.log(`${t.currentEnemy.name} attacked you for ${e} (max: ${t.currentEnemy.attack}) damage.`),console.log(`You have ${t.state.player.health.current} health remaining.`)}function ae(e){let i=e.target.dataset?.action;if(i){switch(i){case"fight":te();break;case"escape":ne();break}b(),H()}}function re(){p.game=document.getElementById("game"),p.fightSearch=document.getElementById("fight-search")}function oe(){p.fightSearch.addEventListener("click",ee),D().addEventListener("click",ae)}function q(){t.state=a(),re(),oe(),t.state.player.health.current===0&&S()}function le(){let e={};function r(){w(),L(),_(),q()}function i(f){f.preventDefault(),$(),window.location.reload(!0)}function h(){e.game=document.getElementById("game"),e.loadingGame=document.getElementById("loading-game"),e.resetGame=document.querySelectorAll(".reset-game")}function P(){e.resetGame.forEach(f=>{f.addEventListener("click",i)})}h(),e.loadingGame.innerHTML=u,P(),r(),setTimeout(()=>{e.loadingGame.setAttribute("hidden",!0),e.game.removeAttribute("hidden")},1500)}le();twemoji.parse(document.body,s);})();
