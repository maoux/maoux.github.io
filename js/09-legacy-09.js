
(function(){
 const tabs=[...document.querySelectorAll('#atlas-main-tabs [data-main-tab]')];
 function selectTab(key,updateHash){
  document.querySelectorAll('.atlas-view').forEach(el=>{el.hidden=el.dataset.atlasTab!==key});
  tabs.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mainTab===key)));
  if(updateHash){history.replaceState(null,'','#atelier-'+key)}
  window.scrollTo({top:0,behavior:'auto'});
 }
 tabs.forEach(b=>b.addEventListener('click',()=>selectTab(b.dataset.mainTab,true)));
 document.querySelectorAll('.v2-find').forEach(input=>input.addEventListener('input',()=>{
  let q=input.value.toLocaleLowerCase('fr').trim();
  input.closest('section').querySelectorAll('.v2-new-card').forEach(el=>{el.hidden=!el.textContent.toLocaleLowerCase('fr').includes(q)})
 }));
 const start=location.hash.startsWith('#atelier-')?location.hash.slice(9):'accueil';
 selectTab(tabs.some(b=>b.dataset.mainTab===start)?start:'accueil',false);
 document.querySelectorAll('.v2-hero-image').forEach(im=>im.addEventListener('click',()=>{
   let d=document.getElementById('v2-image-modal');if(!d){d=document.createElement('dialog');d.id='v2-image-modal';d.style.cssText='max-width:96vw;max-height:95vh;background:#121820;border:1px solid #b99c63;padding:8px';d.innerHTML='<button type="button" style="display:block;margin:0 0 8px auto;padding:8px">Fermer ✕</button><img style="max-width:92vw;max-height:83vh;object-fit:contain">';d.querySelector('button').onclick=()=>d.close();document.body.append(d)}d.querySelector('img').src=im.src;d.showModal();
 }));
})();
