'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

const search=document.getElementById('buscar-certificado');
if(search){
 const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const groups=[...document.querySelectorAll('.grupo-certificados')];
 search.addEventListener('input',()=>{
  const query=normalize(search.value.trim());let total=0;
  groups.forEach(group=>{let count=0;group.querySelectorAll('[data-certificado]').forEach(card=>{const matches=normalize(card.dataset.certificado).includes(query);card.hidden=!matches;if(matches)count++;});group.hidden=count===0;group.open=query.length>0&&count>0;total+=count;});
  document.getElementById('resultado-certificados').textContent=query?total+' documentos encontrados.':'107 documentos de formación organizados por áreas.';
 });
}
