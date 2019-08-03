document.getElementById('get-trivia').onclick =btnclick;
function btnclick(){
   const getSomething = async() =>{
       const trivia_1 =await Trivia_Service.triv1();
        const trivia_2=await Trivia_Service.triv2();
        console.log(trivia_1);
        console.log(trivia_2);
   }
   getSomething();
}
