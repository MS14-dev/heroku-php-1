$(document).ready(()=>{
    hello();
})

const hello =async()=>{
   const data = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
   if(data){
       alert('tada')
   }else{
       alert('kora')
   }
}