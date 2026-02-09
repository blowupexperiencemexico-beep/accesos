async function login(){
 const u=user.value,p=pass.value;
 const r=await api({action:'login',usuario:u,password:p});
 if(!r.success)return alert('Acceso incorrecto');
 localStorage.setItem('usuario',JSON.stringify(r.user));
 location='acceso.html';
}