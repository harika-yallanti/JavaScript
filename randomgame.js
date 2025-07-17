let n=prompt("enter a max value");
let random=Math.ceil(Math.random()*n);
let  guess=prompt("guess the number")
while(true){
    if(guess>random)
    {
        guess=prompt("your guess is big!! try again");
    }

    else if(guess==random)
    {
        console.log("congrats!");
        break;
    }
    else if(guess<random)
    {
        guess=prompt("your guess is small!! try again");
    }
    if(guess=="quit")
    {
       console.log("your quit");
       break;
   }

}