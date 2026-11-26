
(function(){
 var sel=document.getElementById('atlas-mobile-select');
 if(!sel)return;
 window.atlasMobileGo=function(key){
   document.body.setAttribute('data-mobile-tab',key);
   var nodes=document.querySelectorAll('.atlas-view');
   for(var i=0;i<nodes.length;i++){
     var active=nodes[i].getAttribute('data-atlas-tab')===key;
     nodes[i].hidden=!active;
     if(active){nodes[i].removeAttribute('hidden');nodes[i].style.removeProperty('display');}
   }
   var btn=document.querySelector('#atlas-main-tabs [data-main-tab="'+key+'"]');
   if(btn){try{btn.click();}catch(e){}}
   // Existing handlers may toggle hidden again; restore selected view.
   for(var j=0;j<nodes.length;j++)if(nodes[j].getAttribute('data-atlas-tab')===key)nodes[j].removeAttribute('hidden');
   sel.value=key;
   window.scrollTo(0,0);
 };
 sel.addEventListener('change',function(){window.atlasMobileGo(sel.value);});
 document.body.setAttribute('data-mobile-tab','accueil');
})();
