 var randomnumber1=Math.floor(Math.random()*3)+1;
 var randomimage1= + randomnumber1 +".png";
 document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

 var randomnumber2=Math.floor(Math.random()*3)+1;
 var randomimage2= randomnumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

 if (randomnumber1 > randomnumber2)
 {
   document.querySelector("h1").innerHTML="🎊Wooo..hoo..🎉Player 1 wins";
 }
 else if (randomnumber2 > randomnumber1) {
   document.querySelector("h1").innerHTML="🎊Wooo..hoo..🎉Player 2 wins";
 }
 else
 {
   document.querySelector("h1").innerHTML="..Ohhh Drawww🎭..";
 }
