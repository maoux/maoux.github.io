
function igFilter(){const q=document.getElementById('ig-search').value.trim().toLocaleLowerCase('fr');const cat=document.getElementById('ig-collection')?.value||'';document.querySelectorAll('#inspiration-gallery .ig-tile').forEach(el=>el.classList.toggle('ig-hidden',!el.dataset.keywords.toLocaleLowerCase('fr').includes(q)||(cat&&el.dataset.collection!==cat)))}
document.getElementById('ig-search').addEventListener('input',igFilter);
function igZoom(el){const d=document.getElementById('ig-lightbox');d.querySelector('img').src=el.src;d.querySelector('img').alt=el.alt;d.showModal()}
function igFind(term){
  const tab=document.querySelector('#atlas-main-tabs [data-main-tab="recettes"]');if(tab)tab.click();
  const q=document.getElementById('search');if(q){q.value=term;q.dispatchEvent(new Event('input',{bubbles:true}));q.scrollIntoView({block:'center'})}
}
function igGo(term,tab){
 const b=document.querySelector('#atlas-main-tabs [data-main-tab="'+tab+'"]');if(b)b.click();
 if(tab==='armesplumes') {const q=document.getElementById('wp-search');if(q){q.value=term;q.dispatchEvent(new Event('input',{bubbles:true}));q.scrollIntoView({block:'center'})}}
 else if(tab==='vivant'){document.getElementById('v2-wings-collection')?.scrollIntoView({block:'start'})}
 else igFind(term);
}
