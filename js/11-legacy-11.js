
(function(){
 const shapes=[['Sphère','sphere','Dégradé continu ; ombre propre en arc'],['Cube','cube','Plans séparés ; arêtes claires'],['Cylindre','cylinder','Bande claire parallèle à l’axe'],['Cône','cone','Transition triangulaire depuis la pointe'],['Pyramide','pyramid','Chaque face reçoit une valeur distincte'],['Anneau / torus','torus','Ombre dans le creux intérieur'],['Épée droite','blade','Bandes NMM alternées et arête nette'],['Lame courbe','curved','Reflet suit la courbure'],['Drapé / pli','cloth','Crête claire, vallée sombre'],['Rocher','rock','Facettes cassées et crevasses'],['Plume','feather','Axe clair et barbes en dégradé'],['Plaque d’armure','armor','Plans lisibles, éclats sur arêtes']];
 const grid=document.getElementById('lv3-grid');if(!grid)return;
 grid.innerHTML=shapes.map(([n,k,d])=>'<div class="lv3-card"><strong>'+n+'</strong><div class="lv3-stage"><span class="lv3-shape lv3-'+k+'"></span></div><p>'+d+'</p></div>').join('');
 function update(){let a=Number(document.getElementById('lv3-dir').value),t=document.getElementById('lv3-temp').value,hard=document.getElementById('lv3-soft').value==='hard';
 let pal={neutral:['#fff0d7','#b1a69d','#35465b'],warm:['#fff0b1','#c98a58','#35435b'],cold:['#d9f5ff','#8aa9c8','#263a60'],green:['#dcffd0','#79a890','#243e4a']}[t];
 let positions={35:[27,22],90:[8,50],'-90':[92,50],0:[50,6],180:[50,94]};let p=positions[a]||[27,22];
 grid.querySelectorAll('.lv3-shape').forEach(el=>{el.style.setProperty('--hx',p[0]+'%');el.style.setProperty('--hy',p[1]+'%');el.style.setProperty('--hi',pal[0]);el.style.setProperty('--mid',pal[1]);el.style.setProperty('--dark',pal[2]);el.style.setProperty('--cut',hard?'22%':'45%')});
 grid.querySelectorAll('.lv3-stage').forEach(el=>el.style.setProperty('--shadow-x',a===90?'18px':a===-90?'-18px':'9px'));
 }
 ['lv3-dir','lv3-temp','lv3-soft'].forEach(id=>document.getElementById(id).addEventListener('change',update));update();
})();
