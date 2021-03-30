'use strict';
 
    alert ("Hello there!");
        let sum =0 ;
        let userName =prompt ("Please Enter Your Name");
   alert ("Dear M.r/Miss "+userName + "\n"+" Hope this messege finds you well ");
  
  
  
         let myTall=prompt("am 150 cm ? "+"\n"+"What do you think?");
        // myTall=myTall.toLowerCase();


    if (myTall==='no'||myTall==='n'){
        alert("amaizing!! go on to the next Q");
        // console.log("amaizing!! go on to the next Q");
        sum++;  
    }
    else if(myTall === 'yes'|| myTall==='y'){
        alert("ops! keep on never give up");
        // console.log("ops! keep on never give up");
    }else {
        alert("please chose between just yes/y or no/n")
    }


    let myFavoriteFood=prompt(" maglobeh is my favorite food"+"\n"+"What do you think?");
        myFavoriteFood=myFavoriteFood.toLowerCase();

    if(myFavoriteFood==="yes"||myFavoriteFood==="y"){
        alert("amaizing!! go on to the next Q");
        // console.log("amaizing!! go on to the next Q");
        sum++;
    }
    else if (myFavoriteFood ==='no'|| myFavoriteFood === 'n'){
        alert("ops! keep on never give up");
        // console.log("ops! keep on never give up");
    }else {
        alert("please chose between just yes/y or no/n")
    }


    
   let BestActor=prompt("jason statham is the best actor "+"\n"+"What do you think?");
   BestActor=BestActor.toLowerCase();

   if(BestActor==="yes"||BestActor==="y")
   {
    alert("ops! keep on never give up");
    // console.log("amaizing!! go on to the next Q");
   }else if(BestActor==='no'|| BestActor === 'n'){
    alert("amaizing!! go on to the next Q");
        // console.log("ops! keep on never give up");
        sum++;
   }else {
        alert("please chose between just yes/y or no/n")
    }



   let myBestCity=prompt("Roma is the best city "+"\n"+"What do you think?");
   myBestCity=myBestCity.toLowerCase();
   
   if(myBestCity==="yes"||myBestCity==="y"){
    alert("amaizing!! go on to the next Q");
    // console.log("amaizing!! go on to the next Q");
    sum++;
   }else if(myBestCity === 'no'|| myBestCity === 'n'){
    alert("ops! keep on never give up");
        // console.log("ops! keep on never give up");
   }else {
    alert("please chose between just yes/y or no/n")
}



   let bestMajor=prompt("Civil Engineering is the best major "+"\n"+"What do you think?");
   bestMajor=bestMajor.toLowerCase();
   if(bestMajor==="yes"||bestMajor==="y"){
    alert("ops! keep on never give up");
    // console.log("amaizing!! go on to the next Q");
   }else if(bestMajor === 'no'|| bestMajor === 'n'){
    alert("amaizing!! go on to the next Q");
        // console.log("ops! keep on never give up");
        sum++;

   }else {
    alert("please chose between just yes/y or no/n")
}

let correctAnswer=0;
for (let i = 0; i < 4; i++) {
  let rank = prompt('what is Real madrid team ranked globally ??');
  if (rank === 6) {
    alert('You are right, let us check the ranks for some football clubs togather !!');
    sum++;
    
    correctAnswer++;
    break;
  }

  else if (rank < 6 ) {
    alert('Too low rank, they are not that bad !! Guess a lower rank, let us try again!! ');

  }
  else if (rank > 6 ) {
    alert('Too high rank, they are not that good hahaha !! Guess a heighr rank, let us try again!! ');
  }
  else{
    alert ( 'you have finished your attempts and the true answer is 6');
  }
}

  let sponsarray = ['Jeep', 'KIA', 'Ford', 'Mitsubeshi', 'Toyota','Audi'];
  for (let y = 0; y < 6; y++) {
    let spons = prompt('What is the official sponsor of Juventus club (Please choose one of those brands ' + sponsarray + ' )');
    if (spons.toLocaleLowerCase() === sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() === sponsarray[1].toLocaleLowerCase()) {
      alert('Jeep or Kia are both correct');
      sum++;
      break;
    }
    if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
      alert('No it is not ' + spons);
    }
  }
  if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
    alert('The right answer was '+sponsarray[0]+ ' and '+sponsarray[1]);

  }

   alert("Thanks For Your Time M.r/Miss:  "+userName);
   alert('Your score is ' + sum);