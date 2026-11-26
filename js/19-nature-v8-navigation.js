(function(){
function show(key){
 if(!key)return;
 document.body.setAttribute('data-mobile-tab',key);
 document.querySelectorAll('.atlas-view').forEach(function(el){
  var active=el.getAttribute('data-atlas-tab')===key;
  el.hidden=!active;
  el.style.removeProperty('display');
 });
 var sel=document.getElementById('atlas-mobile-select');
 if(sel)sel.value=key;
}
document.addEventListener('change',function(e){if(e.target&&e.target.id==='atlas-mobile-select')show(e.target.value);});
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('#atlas-main-tabs [data-main-tab]');if(b)show(b.getAttribute('data-main-tab'));});
})();