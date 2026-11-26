
(function(){
 const groups=['inspirations','environnements'];const active={inspirations:'Études V3',environnements:'Vue d’ensemble'};
 function apply(){const selected=document.querySelector('#atlas-main-tabs [aria-pressed="true"]')?.dataset.mainTab;
  groups.forEach(group=>{const bar=document.querySelector('[data-subnav="'+group+'"]');if(!bar)return;bar.style.display=selected===group?'flex':'none';
   document.querySelectorAll('[data-atlas-tab="'+group+'"][data-subgroup]').forEach(section=>{section.style.display=(selected===group&&section.dataset.subgroup===active[group])?'':'none';});
   bar.querySelectorAll('[data-subtab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.subtab===active[group])));
  });
 }
 document.querySelectorAll('#atlas-main-tabs [data-main-tab]').forEach(b=>b.addEventListener('click',apply));
 document.querySelectorAll('.v31-subnav button').forEach(b=>b.addEventListener('click',()=>{const group=b.closest('[data-subnav]').dataset.subnav;active[group]=b.dataset.subtab;apply();window.scrollTo({top:0,behavior:'auto'});}));
 document.querySelectorAll('[data-open-recipe]').forEach(b=>b.addEventListener('click',()=>{
  active.environnements=b.dataset.openGroup;apply();const card=document.getElementById(b.dataset.openRecipe);if(card){card.open=true;card.scrollIntoView({block:'center',behavior:'smooth'});}
 }));
 apply();
})();
