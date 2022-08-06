(()=>{var p=`
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
</div>`;var x="gamestate",v={player:{name:"John Snow",experience:0,health:{current:100,total:100},attack:10,defense:0}},c={};function s(){window.localStorage.setItem(x,JSON.stringify(c))}function b(){return c=JSON.parse(window.localStorage.getItem(x))||v,s(),c}function n(){return c}function E(){c=v,s()}var l={};function j(){l.progressBar=document.querySelector(".health .progress-bar"),l.healthCurrent=document.getElementById("player-health-current"),l.healthTotal=document.getElementById("player-health-total")}j();function h(){let e="danger";l.healthCurrent.textContent=n().player.health.current,l.healthTotal.textContent=n().player.health.total,l.progressBar.style.width=`${n().player.health.current}%`,n().player.health.current>=25&&(e="warning"),n().player.health.current>=75&&(e="good"),l.progressBar.style.backgroundColor=`var(--progress-${e})`}function S(){h()}var N=[{name:"Apprentice",experience:50},{name:"Adventurer",experience:100},{name:"Slayer",experience:200},{name:"Master",experience:400},{name:"Grandmaster",experience:800},{name:"Legendary",experience:1600}];function k(){let e=n().player.experience;return N.find(a=>e<=a.experience)}var t={};function Y(e){let a=t.nameInput.value;e.preventDefault(),n().player.name=a,s(),t.name.textContent=a,t.nameForm.setAttribute("hidden","true")}function q(){t.nameForm.toggleAttribute("hidden"),t.nameForm.hasAttribute("hidden")||t.nameInput.focus()}function z(){t.name=document.getElementById("player-name"),t.nameEdit=document.getElementById("player-name-edit"),t.nameInput=document.getElementById("player-name-input"),t.nameForm=document.getElementById("player-name-form"),t.level=document.getElementById("player-level"),t.attack=document.getElementById("player-attack"),t.defense=document.getElementById("player-defense")}function J(){t.nameForm.addEventListener("submit",Y),t.nameEdit.addEventListener("click",q)}function y(){h(),t.level.textContent=k().name,t.attack.textContent=n().player.attack,t.defense.textContent=n().player.defense}function _(){z(),J(),n().player.name&&(t.name.textContent=n().player.name,t.nameInput.value=n().player.name),y()}var m={folder:"svg",ext:".svg"};var r={};function O(){r.dialog=document.querySelector("dialog")}O();function B(){return r.dialog}function C(){r.dialog.removeAttribute("hidden"),r.dialog.setAttribute("open",""),r.dialog.setAttribute("tabindex","0"),document.body.classList.add("dialog-open"),document.body.setAttribute("aria-hidden","true")}function L(){r.dialog.setAttribute("hidden",!0),document.body.classList.remove("dialog-open"),document.body.removeAttribute("aria-hidden")}function $(e,a){r.dialog.classList.add(a),r.dialog.innerHTML=`Searching for monsters...${p}`,setTimeout(()=>{r.dialog.innerHTML=e,twemoji.parse(r.dialog,m)},1500)}function A(e){return`
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
`}var M=`
<div class="game-over w-100">
  <h2 class="mb-2">
    <span class="game-over-stone">\u{1FAA6}</span> <br />
    <span class="mt-1 mb-2">You died!</span>
  </h2>
  <h3 class="d-flex align-items-center mb-2">
    \u2620\uFE0F <span class="ml-0-5 mr-0-5">Game over</span> \u2620\uFE0F
  </h3>
</div>
`;var T=[{name:"Troll",icon:"\u{1F9CC}",health:100,attack:30,defense:30,experience:10},{name:"Goblin",icon:"\u{1F47A}",health:70,attack:15,defense:10,experience:5},{name:"Boar",icon:"\u{1F417}",health:10,attack:5,defense:0,experience:1}];function D(e=[]){if(e.length===0)return e;for(let a=e.length-1;a>0;a-=1){let i=Math.floor(Math.random()*(a+1)),g=e[a];e[a]=e[i],e[i]=g}return e}var u={},o={currentEnemy:null};function H(){u.game.innerHTML=M,twemoji.parse(u.game,m)}function K(){o.currentEnemy=D(T)[0],$(A(o.currentEnemy),"fight"),C()}function Q(){if(o.state.player.health.current=Math.max(0,o.state.player.health.current-=o.currentEnemy.attack),s(),o.state.player.health.current===0){H();return}console.log(`${o.currentEnemy.name} attacked you for ${o.currentEnemy.attack} damage.`),console.log(`You have ${o.state.player.health.current} health remaining.`),y()}function U(e){let i=e.target.dataset?.action;if(i){switch(i){case"fight":Q();break;case"escape":break}L()}}function V(){u.game=document.getElementById("game"),u.fightSearch=document.getElementById("fight-search")}function X(){u.fightSearch.addEventListener("click",K),B().addEventListener("click",U)}function F(){o.state=n(),V(),X(),o.state.player.health.current===0&&H()}function ee(){let e={};function a(){b(),_(),S(),F()}function i(f){f.preventDefault(),E(),window.location.reload(!0)}function g(){e.game=document.getElementById("game"),e.loadingGame=document.getElementById("loading-game"),e.resetGame=document.querySelectorAll(".reset-game")}function G(){e.resetGame.forEach(f=>{f.addEventListener("click",i)})}g(),e.loadingGame.innerHTML=p,G(),a(),setTimeout(()=>{e.loadingGame.setAttribute("hidden",!0),e.game.removeAttribute("hidden")},1500)}ee();twemoji.parse(document.body,m);})();
