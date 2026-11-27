(function(){
const groups={accueil:['accueil'],recettes:['recettes','ultime'],textures:['textures','armesplumes'],vivant:['vivant'],environnements:['environnements','nature','saisons'],lumieres:['lumieres','inspirations','etudes195'],laboratoire:['laboratoire']};
const labels={accueil:'Accueil',recettes:'Recettes & nuancier',textures:'Matériaux & équipements',vivant:'Personnages & créatures',environnements:'Décors & nature',lumieres:'Effets & études visuelles',laboratoire:'Laboratoire'};
function init(){
const nav=document.getElementById('atlas-main-tabs'),sel=document.getElementById('atlas-mobile-select');if(!nav)return;
const views=Array.from(document.querySelectorAll('.atlas-view'));
const sub=document.createElement('nav');sub.setAttribute('aria-label','Sous-rubriques');sub.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:12px 0';(document.getElementById('atlas-mobile-nav')||nav).insertAdjacentElement('afterend',sub);
const oldLabels={recettes:'Catalogue A–Z',ultime:'Atlas 233 pots',textures:'Matériaux & textures',armesplumes:'Armes & équipement',environnements:'Décors & paysages',nature:'Nature & aquatique',saisons:'Saisons',lumieres:'Lumières',inspirations:'Inspirations',etudes195:'Études peintes'};
function groupFor(key){return Object.keys(groups).find(k=>groups[k].includes(key))||'accueil'}
function show(key){const group=groupFor(key);if(!groups[group].includes(key))key=group;
document.body.setAttribute('data-mobile-tab',key);
views.forEach(el=>{const active=el.dataset.atlasTab===key;el.hidden=!active;if(!active){if(!el.dataset.atlasSavedDisplay){el.dataset.atlasSavedDisplay=el.style.display||'unset';}el.style.setProperty('display','none','important');}else{const saved=el.dataset.atlasSavedDisplay;el.style.removeProperty('display');if(['tabs','catalogue'].includes(el.id))el.style.display=saved&&saved!=='unset'?saved:'none';delete el.dataset.atlasSavedDisplay;}});
nav.querySelectorAll('[data-main-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mainTab===group)));
if(sel)sel.value=group;
sub.replaceChildren();if(groups[group].length>1)groups[group].forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=oldLabels[k]||labels[k];b.setAttribute('aria-pressed',String(k===key));b.onclick=()=>show(k);sub.append(b);});
}
nav.querySelectorAll('[data-main-tab]').forEach(b=>{const k=b.dataset.mainTab;if(labels[k])b.textContent=labels[k];else b.style.setProperty('display','none','important');});
if(sel){sel.replaceChildren();Object.keys(groups).forEach(k=>sel.add(new Option(labels[k],k)));sel.removeAttribute('onchange');}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#atlas-main-tabs [data-main-tab]');if(b){e.preventDefault();e.stopImmediatePropagation();show(b.dataset.mainTab);window.scrollTo(0,0);}},true);
document.addEventListener('change',e=>{if(e.target===sel){e.stopImmediatePropagation();show(sel.value);window.scrollTo(0,0);}},true);
window.atlasMobileGo=show;show('accueil');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* V22: navigation vers les ancres statiques, sans modification des fiches. */
(function(){
 function reveal(hash){
   if(!hash || hash==='#')return false;
   let id;try{id=decodeURIComponent(hash.slice(1));}catch(e){return false;}
   const target=document.getElementById(id)||Array.from(document.querySelectorAll('[data-v11-recipe-id]')).find(el=>el.dataset.v11RecipeId===id);if(!target)return false;
   const view=target.closest('.atlas-view');
   if(view && view.dataset.atlasTab && typeof window.atlasMobileGo==='function')window.atlasMobileGo(view.dataset.atlasTab);
   for(let el=target;el;el=el.parentElement){if(el.tagName==='DETAILS')el.open=true;}
   requestAnimationFrame(()=>requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'auto'})));
   return true;
 }
 document.addEventListener('click',function(e){
   if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
   const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.hasAttribute('download')||(a.target&&a.target!=='_self'))return;
   const hash=a.getAttribute('href');if(!reveal(hash))return;
   e.preventDefault();e.stopImmediatePropagation();
   if(location.hash!==hash)history.pushState(null,'',hash);
 },true);
 window.addEventListener('hashchange',()=>reveal(location.hash));
 window.addEventListener('popstate',()=>reveal(location.hash));
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>reveal(location.hash));else reveal(location.hash);
})();
