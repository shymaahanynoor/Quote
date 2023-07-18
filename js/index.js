
var arrayQuote=["Be yourself;everyone else is already taken.",`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`, `
"So many books, so little time."`,`"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
`"You only live once, but if you do it right, once is enough."
`,`"In three words I can sum up everything I've learned about life: it goes on."
`,`"Do not take life too seriously. You will not get out alive."
`,`"A friend is someone who knows all about you and still loves you."
`,`"To live is the rarest thing in the world. Most people exist, that is all."`,
`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.
"`,`"It is better to be hated for what you are than to be loved for what you are not."
"`];

 var arrayOuther=[" Oscar Wilde"," Albert Einstein"," Frank Zappa","Dr. Seuss","Mae West"," Robert Frost",`
 Elbert Hubbard`,"Elbert Hubbard","Oscar Wilde","Ralph Waldo Emerson","Andre Gide"];



function newQuote(){

     var quotePart= arrayQuote[Math.floor(Math.random()* (this.arrayOuther.length))];
   
   
     return document.getElementById("quote").innerHTML=quotePart; 
   
}

function newouther(){
        

    var outherPart=arrayOuther[Math.floor(Math.random()* (this.arrayOuther.length))];
    return document.getElementById("outher").innerHTML=outherPart;  
  
}