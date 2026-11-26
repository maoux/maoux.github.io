
let efActive='Tout';function efCategory(btn){efActive=btn.dataset.ef;document.querySelectorAll('#electric-fabrics [data-ef]').forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));efFilter()}
function efFilter(){const q=document.getElementById('ef-search').value.trim().toLocaleLowerCase('fr');let n=0;document.querySelectorAll('#electric-fabrics .ef-grid details').forEach(el=>{const ok=(efActive==='Tout'||el.dataset.efCategory===efActive)&&el.dataset.efText.toLocaleLowerCase('fr').includes(q);el.classList.toggle('ef-hidden',!ok);if(ok)n++});document.getElementById('ef-count').textContent=n+' fiches affichées'}
document.getElementById('ef-search').addEventListener('input',efFilter);efFilter();
