
let faActive='Tous';function faCategory(btn){faActive=btn.dataset.fa;document.querySelectorAll('#fire-atlas [data-fa]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));faFilter()}
function faFilter(){const q=document.getElementById('fa-search').value.trim().toLocaleLowerCase('fr');let n=0;document.querySelectorAll('#fire-atlas .fa-cards details').forEach(el=>{const ok=(faActive==='Tous'||el.dataset.faCategory===faActive)&&el.dataset.faText.toLocaleLowerCase('fr').includes(q);el.classList.toggle('fa-hidden',!ok);if(ok)n++});document.getElementById('fa-count').textContent=n+' recettes affichées'}
document.getElementById('fa-search').addEventListener('input',faFilter);faFilter();
