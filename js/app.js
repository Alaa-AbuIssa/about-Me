'use strict';
 
     alert ("Hello there!");
         let sum =0 ;
         let userName =prompt ("Please Enter Your Name");
    alert ("Dear M.r/Miss "+userName + "\n"+" Hope this messege finds you well ");
  
  
        // Q 1
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

    // Q2 !
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


    // Q3 !
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

      // Q 4!
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


      // Q5!
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

// Q6!!
let correct=0;
let rank=null ;
for (let i = 0; i < 4; i++) {
   rank= prompt('what is Real madrid team ranked globally ??');
  if (rank < 6 ) {
    alert('Too low rank, they are not that bad !! Guess a lower rank, let us try again!! ');
     
  }
  
  if (rank > 6 ) {
    alert('Too high rank, they are not that good hahaha !! Guess a heighr rank, let us try again!! ');
    
  }
  if (rank == 6) {
    alert('You are right!!');
    sum++;
    correct++;
    break;
  }
  if(correct==4){
    alert ( 'you have finished your attempts and the true answer is 6');
  }
}

// Q7!!
// let sponsarray = ['Jeep', 'KIA', 'Ford', 'Mitsubeshi', 'Toyota','Audi'];
//   for (let y = 0; y < 6; y++) {
//     let spons = prompt('What is the official sponsor of Juventus club (Please choose one of those brands ' + sponsarray + ' )');
//     if (spons.toLocaleLowerCase() === sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() === sponsarray[1].toLocaleLowerCase()) {
//       alert('Jeep or Kia are both correct');
//       sum++;
//       break;
//     }
//     if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
//       alert('No it is not ' + spons);
//     }
//   }
//   if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
//     alert('The right answer was '+sponsarray[0]+ ' and '+sponsarray[1]);

//   }
  
  {
     alert("Thanks For Your Time M.r/Miss:  "+userName);
     alert('Your score is ' + sum);}
  
  
