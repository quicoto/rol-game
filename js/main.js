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
</div>`;var E="gamestate",S={player:{name:"John Snow",experience:0,health:{current:100,total:100},attack:10,defense:0,gold:0}},m={};function s(){window.localStorage.setItem(E,JSON.stringify(m))}function w(){return m=JSON.parse(window.localStorage.getItem(E))||S,s(),m}function n(){return m}function M(){m=S,s()}var l={};function Y(){l.progressBar=document.querySelector(".health .progress-bar"),l.healthCurrent=document.getElementById("player-health-current"),l.healthTotal=document.getElementById("player-health-total")}Y();function x(){let e="danger";l.healthCurrent.textContent=n().player.health.current,l.healthTotal.textContent=n().player.health.total,l.progressBar.style.width=`${n().player.health.current}%`,n().player.health.current>=25&&(e="warning"),n().player.health.current>=75&&(e="good"),l.progressBar.style.backgroundColor=`var(--progress-${e})`}function _(){x()}var z=[{name:"Apprentice",experienceMin:0,experienceMax:49},{name:"Adventurer",experienceMin:50,experienceMax:99},{name:"Slayer",experienceMin:100,experienceMax:199},{name:"Master",experienceMin:200,experienceMax:399},{name:"Grandmaster",experienceMin:400,experienceMax:799},{name:"Legendary",experienceMin:800,experienceMax:9999999999999}],I={};function J(){I.progressBar=document.querySelector(".experience .progress-bar")}function y(e){return z.find(a=>e>=a.experienceMin&&e<=a.experienceMax)}function v(){let e=y(n().player.experience);I.progressBar.style.width=`${(n().player.experience-e.experienceMin)/(e.experienceMax-e.experienceMin)*100}%`}function B(){J(),v()}function $(e=[]){if(e.length===0)return e;for(let a=e.length-1;a>0;a-=1){let i=Math.floor(Math.random()*(a+1)),f=e[a];e[a]=e[i],e[i]=f}return e}function g(e){return new Intl.NumberFormat("en-US").format(e)}var t={};function R(e){let a=t.nameInput.value;e.preventDefault(),n().player.name=a,s(),t.name.textContent=a,t.nameForm.setAttribute("hidden","true")}function U(){t.nameForm.toggleAttribute("hidden"),t.nameForm.hasAttribute("hidden")||t.nameInput.focus()}function W(){t.name=document.getElementById("player-name"),t.nameEdit=document.getElementById("player-name-edit"),t.nameInput=document.getElementById("player-name-input"),t.nameForm=document.getElementById("player-name-form"),t.level=document.getElementById("player-level"),t.attack=document.getElementById("player-attack"),t.defense=document.getElementById("player-defense"),t.gold=document.getElementById("player-gold")}function K(){t.nameForm.addEventListener("submit",R),t.nameEdit.addEventListener("click",U)}function b(){x(),v(),t.level.textContent=y(n().player.experience).name,t.attack.textContent=g(n().player.attack),t.defense.textContent=g(n().player.defense),t.gold.textContent=g(n().player.gold)}function C(){W(),K(),B(),n().player.name&&(t.name.textContent=n().player.name,t.nameInput.value=n().player.name),b()}var c={folder:"svg",ext:".svg"};var o={};function Q(){o.dialog=document.querySelector("dialog")}Q();function A(){return o.dialog}function T(){o.dialog.removeAttribute("hidden"),o.dialog.setAttribute("open",""),o.dialog.setAttribute("tabindex","0"),document.body.classList.add("dialog-open"),document.body.setAttribute("aria-hidden","true")}function D(){o.dialog.setAttribute("hidden",!0),document.body.classList.remove("dialog-open"),document.body.removeAttribute("aria-hidden")}function F(e,a){o.dialog.classList.add(a),o.dialog.innerHTML=`Searching for monsters...${u}`,setTimeout(()=>{o.dialog.innerHTML=e,twemoji.parse(o.dialog,c)},1500)}function H(e){return`
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
`}var G=`
<div class="game-over w-100">
  <h2 class="mb-2">
    <span class="game-over-stone">\u{1FAA6}</span> <br />
    <span class="mt-1 mb-2">You died!</span>
  </h2>
  <h3 class="d-flex align-items-center mb-2">
    \u2620\uFE0F <span class="ml-0-5 mr-0-5">Game over</span> \u2620\uFE0F
  </h3>
</div>
`;var j=[{name:"Troll",icon:"\u{1F9CC}",health:100,attack:30,defense:30,experience:10,gold:10},{name:"Goblin",icon:"\u{1F47A}",health:70,attack:15,defense:10,experience:5,gold:5},{name:"Boar",icon:"\u{1F417}",health:10,attack:5,defense:0,experience:1,gold:1}];var p={},r={currentEnemy:null};function N(){p.game.innerHTML=G,twemoji.parse(p.game,c)}function Z(){r.currentEnemy=$(j)[0],F(H(r.currentEnemy),"fight"),T()}function ee(){if(r.state.player.health.current=Math.max(0,r.state.player.health.current-=r.currentEnemy.attack),r.state.player.experience+=r.currentEnemy.experience,r.state.player.gold+=r.currentEnemy.gold,s(),r.state.player.health.current===0){N();return}console.log(`${r.currentEnemy.name} attacked you for ${r.currentEnemy.attack} damage.`),console.log(`You have ${r.state.player.health.current} health remaining.`),b()}function te(e){let i=e.target.dataset?.action;if(i){switch(i){case"fight":ee();break;case"escape":break}D()}}function ne(){p.game=document.getElementById("game"),p.fightSearch=document.getElementById("fight-search")}function ae(){p.fightSearch.addEventListener("click",Z),A().addEventListener("click",te)}function q(){r.state=n(),ne(),ae(),r.state.player.health.current===0&&N()}function oe(){let e={};function a(){w(),C(),_(),q()}function i(h){h.preventDefault(),M(),window.location.reload(!0)}function f(){e.game=document.getElementById("game"),e.loadingGame=document.getElementById("loading-game"),e.resetGame=document.querySelectorAll(".reset-game")}function P(){e.resetGame.forEach(h=>{h.addEventListener("click",i)})}f(),e.loadingGame.innerHTML=u,P(),a(),setTimeout(()=>{e.loadingGame.setAttribute("hidden",!0),e.game.removeAttribute("hidden")},1500)}oe();twemoji.parse(document.body,c);})();
