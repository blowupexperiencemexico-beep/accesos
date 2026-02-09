async function api(data){
 const r = await fetch(API_URL,{method:'POST',body:JSON.stringify(data)});
 return r.json();
}