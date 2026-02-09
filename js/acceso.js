const u=JSON.parse(localStorage.getItem('usuario'));
if(!u)location='index.html';
(async()=>{
 const d=await api({action:'getUser',id:u.id});
 credencial.innerHTML=`<img src="${d.imagen}" class="foto"><h2>${d.nombre}</h2>
 <h1 class="${d.valido?'valid':'invalid'}">${d.valido?'ACCESO VÁLIDO':'NO VÁLIDO'}</h1>`;
})();