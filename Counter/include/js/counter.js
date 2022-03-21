const inc=document.getElementById('inc');
const dec=document.getElementById('dec');
const res=document.getElementById('res');

inc.addEventListener('click',()=>{
    const numb=Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML= numb+1;
})

dec.addEventListener('click',()=>{
    const numb=Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML= numb-1;
})

res.addEventListener('click',()=>{
    const numb=Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML= 0;
})