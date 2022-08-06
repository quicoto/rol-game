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
</div>`;var y="gamestate",v={player:{name:"John Snow",experience:0,health:{current:100,total:100},attack:10,defense:0}},m={};function s(){window.localStorage.setItem(y,JSON.stringify(m))}function b(){return m=JSON.parse(window.localStorage.getItem(y))||v,s(),m}function n(){return m}function E(){m=v,s()}var l={};function q(){l.progressBar=document.querySelector(".health .progress-bar"),l.healthCurrent=document.getElementById("player-health-current"),l.healthTotal=document.getElementById("player-health-total")}q();function h(){let e="danger";l.healthCurrent.textContent=n().player.health.current,l.healthTotal.textContent=n().player.health.total,l.progressBar.style.width=`${n().player.health.current}%`,n().player.health.current>=25&&(e="warning"),n().player.health.current>=75&&(e="good"),l.progressBar.style.backgroundColor=`var(--progress-${e})`}function S(){h()}var P=[{name:"Apprentice",experience:50},{name:"Adventurer",experience:100},{name:"Slayer",experience:200},{name:"Master",experience:400},{name:"Grandmaster",experience:800},{name:"Legendary",experience:1600}],_={};function Y(){_.progressBar=document.querySelector(".experience .progress-bar")}Y();function k(){_.progressBar.style.width=`${n().player.experience}%`}function B(){let e=n().player.experience;return P.find(a=>e<=a.experience)}var t={};function J(e){let a=t.nameInput.value;e.preventDefault(),n().player.name=a,s(),t.name.textContent=a,t.nameForm.setAttribute("hidden","true")}function O(){t.nameForm.toggleAttribute("hidden"),t.nameForm.hasAttribute("hidden")||t.nameInput.focus()}function R(){t.name=document.getElementById("player-name"),t.nameEdit=document.getElementById("player-name-edit"),t.nameInput=document.getElementById("player-name-input"),t.nameForm=document.getElementById("player-name-form"),t.level=document.getElementById("player-level"),t.attack=document.getElementById("player-attack"),t.defense=document.getElementById("player-defense")}function W(){t.nameForm.addEventListener("submit",J),t.nameEdit.addEventListener("click",O)}function x(){h(),k(),t.level.textContent=B().name,t.attack.textContent=n().player.attack,t.defense.textContent=n().player.defense}function I(){R(),W(),n().player.name&&(t.name.textContent=n().player.name,t.nameInput.value=n().player.name),x()}var c={folder:"svg",ext:".svg"};var r={};function K(){r.dialog=document.querySelector("dialog")}K();function C(){return r.dialog}function L(){r.dialog.removeAttribute("hidden"),r.dialog.setAttribute("open",""),r.dialog.setAttribute("tabindex","0"),document.body.classList.add("dialog-open"),document.body.setAttribute("aria-hidden","true")}function A(){r.dialog.setAttribute("hidden",!0),document.body.classList.remove("dialog-open"),document.body.removeAttribute("aria-hidden")}function M(e,a){r.dialog.classList.add(a),r.dialog.innerHTML=`Searching for monsters...${u}`,setTimeout(()=>{r.dialog.innerHTML=e,twemoji.parse(r.dialog,c)},1500)}function T(e){return`
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
`}var D=`
<div class="game-over w-100">
  <h2 class="mb-2">
    <span class="game-over-stone">\u{1FAA6}</span> <br />
    <span class="mt-1 mb-2">You died!</span>
  </h2>
  <h3 class="d-flex align-items-center mb-2">
    \u2620\uFE0F <span class="ml-0-5 mr-0-5">Game over</span> \u2620\uFE0F
  </h3>
</div>
`;var H=[{name:"Troll",icon:"\u{1F9CC}",health:100,attack:30,defense:30,experience:10},{name:"Goblin",icon:"\u{1F47A}",health:70,attack:15,defense:10,experience:5},{name:"Boar",icon:"\u{1F417}",health:10,attack:5,defense:0,experience:1}];function F(e=[]){if(e.length===0)return e;for(let a=e.length-1;a>0;a-=1){let i=Math.floor(Math.random()*(a+1)),g=e[a];e[a]=e[i],e[i]=g}return e}var p={},o={currentEnemy:null};function G(){p.game.innerHTML=D,twemoji.parse(p.game,c)}function V(){o.currentEnemy=F(H)[0],M(T(o.currentEnemy),"fight"),L()}function X(){if(o.state.player.health.current=Math.max(0,o.state.player.health.current-=o.currentEnemy.attack),o.state.player.experience+=o.currentEnemy.experience,s(),o.state.player.health.current===0){G();return}console.log(`${o.currentEnemy.name} attacked you for ${o.currentEnemy.attack} damage.`),console.log(`You have ${o.state.player.health.current} health remaining.`),x()}function Z(e){let i=e.target.dataset?.action;if(i){switch(i){case"fight":X();break;case"escape":break}A()}}function ee(){p.game=document.getElementById("game"),p.fightSearch=document.getElementById("fight-search")}function te(){p.fightSearch.addEventListener("click",V),C().addEventListener("click",Z)}function j(){o.state=n(),ee(),te(),o.state.player.health.current===0&&G()}function ae(){let e={};function a(){b(),I(),S(),j()}function i(f){f.preventDefault(),E(),window.location.reload(!0)}function g(){e.game=document.getElementById("game"),e.loadingGame=document.getElementById("loading-game"),e.resetGame=document.querySelectorAll(".reset-game")}function N(){e.resetGame.forEach(f=>{f.addEventListener("click",i)})}g(),e.loadingGame.innerHTML=u,N(),a(),setTimeout(()=>{e.loadingGame.setAttribute("hidden",!0),e.game.removeAttribute("hidden")},1500)}ae();twemoji.parse(document.body,c);})();
