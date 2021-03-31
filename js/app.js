'use strict';
 
     alert ("Hello there!");
         let sum =0 ;
         let userName =prompt ("Please Enter Your Name");
    alert ("Dear M.r/Miss "+userName + "\n"+" Hope this messege finds you well ");
  
  
        // Q 1
        function question1(){
        
            let myTall=prompt("am 150 cm ? "+"\n"+"What do you think?");
                myTall=myTall.toLowerCase();
           //   while (myTall.toLocaleLowerCase() !== 'yes' || myTall !=='y' && myTall.toLocaleLowerCase() !== 'no' || myTall!=='n') {
           //   myTall = prompt('please, if am 150 cm answer with yes if am not answer no'); 
           // }
   
       if (myTall==='no'||myTall==='n'){
           alert('amaizing!! '+ userName + ' go on to the next Q');
           // console.log("amaizing!! go on to the next Q");
           sum++;  
       }
       else if(myTall === 'yes'|| myTall==='y'){
           alert("ops! keep on never give up");
           // console.log("ops! keep on never give up");
       }
       alert('for the mytall quaistion your answer was ' + myTall);
        }

    // Q2 !
    function question2(){

        let myFavoriteFood=prompt(" maglobeh is my favorite food"+"\n"+"What do you think?");
            myFavoriteFood=myFavoriteFood.toLowerCase();
    
        if(myFavoriteFood==="yes"||myFavoriteFood==="y"){
          alert('amaizing!! '+ userName + ' go on to the next Q');
            // console.log("amaizing!! go on to the next Q");
            sum++;
        }
        else if (myFavoriteFood ==='no'|| myFavoriteFood === 'n'){
            alert("ops! keep on never give up");
            // console.log("ops! keep on never give up");
        }else {
            alert("please chose between just yes/y or no/n")
        }
        alert('for the my favorite Food quaistion your answer was ' + myFavoriteFood);
    }


    // Q3 !
    function question3(){

        let BestActor=prompt("jason statham is the best actor "+"\n"+"What do you think?");
            BestActor=BestActor.toLowerCase();
     
        if(BestActor==="yes"||BestActor==="y"){
         alert("ops! keep on never give up");
         // console.log("amaizing!! go on to the next Q");
        }else if(BestActor==='no'|| BestActor === 'n'){
         alert('amaizing!! '+ userName + ' go on to the next Q');
         // console.log("ops! keep on never give up");
             sum++;
        }else {
             alert("please chose between just yes/y or no/n")
         }
             alert('for the my Best Actor quaistion your answer was ' + BestActor);
    }

      // Q 4!
      function question4(){

          let myBestCity=prompt("Roma is the best city "+"\n"+"What do you think?");
              myBestCity=myBestCity.toLowerCase();
          
          if(myBestCity==="yes"||myBestCity==="y"){
           alert('amaizing!! '+ userName + ' go on to the next Q');
           // console.log("amaizing!! go on to the next Q");
           sum++;
          }else if(myBestCity === 'no'|| myBestCity === 'n'){
           alert("ops! keep on never give up");
               // console.log("ops! keep on never give up");
          }else {
           alert("please chose between just yes/y or no/n")
       }
           alert('for the my best city quaistion your answer was ' + myBestCity);
      }


      // Q5!
      function question5(){

          let bestMajor=prompt("Civil Engineering is the best major "+"\n"+"What do you think?");
              bestMajor=bestMajor.toLowerCase();
          if(bestMajor==="yes"||bestMajor==="y"){
           alert("ops! keep on never give up");
           // console.log("amaizing!! go on to the next Q");
          }else if(bestMajor === 'no'|| bestMajor === 'n'){
           alert('amaizing!! '+ userName + ' go on to the next Q');
           // console.log("ops! keep on never give up");
               sum++;
       
          }else {
           alert("please chose between just yes/y or no/n")
       }
           alert('for the my best major quaistion your answer was ' + bestMajor);
      }

// Q6!!
function question6(){

    let correct=0;
    let rank=null ;
    for (let i = 0; i < 4; i++) {
        rank= prompt('what is Real madrid team ranked globally ?? \n'+'Just to know that is from 1-10 \n'+' and you have just four trials');
      if (rank < 6 ) {
        alert('Too low rank, they are not that bad !!  let us try again!! ');
         
      }
      
      else if (rank > 6 ) {
        alert('Too high rank, they are not that good hahaha !! \n'+ 'let us try again!! ');
        
      }
      else if (rank == 6) {
        alert('You are right!!');
        sum++;
        correct++;
        break;
      }
      else if (correct==4){
        alert ( 'you have finished your attempts and the true answer is 6');
      }
    }
}

// Q7!!


function question7(){
    
    let sponsarray = ['jeep', 'kia', 'ford', 'mitsubeshi', 'toyota','audi'];
    let spons = ''
    for (let y = 0; y < 6; y++){ 
           spons = prompt('What is the car sponsor of Juventus club ? ');
          for (let i = 0; i < sponsarray.length ; i++) {
    
        if (spons == sponsarray[i]) {
           alert( 'correct');
          sum++;
          y=6;
          break;
        }
        
    }
    if (y==5){
        alert ('no more trials \n'+'the right answers are = '+ sponsarray)
      }else if(y<6){
         alert('this is wrong');
    }
    
    }
}
    
  
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  {
     alert("Thanks For Your Time M.r/Miss:  "+userName);
     alert('Your score is ' + sum);}
  