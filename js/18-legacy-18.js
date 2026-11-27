document.addEventListener('click',function(e){
const a=e.target.closest('a.v4-direct-recipe');if(!a)return;
e.preventDefault();
const id=a.getAttribute('href').slice(1),d=document.getElementById(id);
if(!d){alert('Cette fiche est introuvable. Association à corriger.');return;}
const view=d.closest('.atlas-view');
if(view&&window.atlasMobileGo)window.atlasMobileGo(view.dataset.atlasTab);
if(view&&view.dataset.subgroup){const nav=Array.from(document.querySelectorAll('[data-subnav]')).find(n=>n.dataset.subnav===view.dataset.atlasTab);const btn=nav&&Array.from(nav.querySelectorAll('[data-subtab]')).find(b=>b.dataset.subtab===view.dataset.subgroup);if(btn)btn.click();}
for(let el=d;el;el=el.parentElement){if(el.tagName==='DETAILS')el.open=true;}
let note=d.querySelector('.atlas-association-note');
if(!note){note=document.createElement('p');note.className='atlas-association-note';note.textContent='Association historique : correspondance avec l’illustration à vérifier. Progression colorimétrique non validée physiquement.';d.append(note);}
requestAnimationFrame(()=>d.scrollIntoView({block:'start'}));
});