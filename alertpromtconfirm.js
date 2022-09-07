const showAlert = () =>{
    const num = Math.random()*10
    console.log(num)
    if(num < 5){
        alert('ki khobor dosto')
    }
}
// console.log('mihir')

const askSomething = () =>{
   const decision = confirm('Are you coming picnic')
   if(decision === true){
    alert('dosto 500 tka bkash kor')
   }
   else{
    console.log('DGM !!! Door e giye mor')
   }
}

const getUsetinfo = () =>{
   const pro =  prompt('please enter your name!')
   console.log(pro)
   if(!!pro){
    console.log('Welcome here',pro)
   }
}