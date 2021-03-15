
let old;

function Cipher(){
    const word = document.getElementById("word").value;

    const endword = document.getElementById("endword");


    let le = word.split("");
    let l = le.length;

    console.log(l)






    let newStr = "";

    
    for(let i = 0; i < l; i++) {
        i = Math.floor(Math.random()*l);
        newStr += word[i];
    }

    
    if(newStr.length > l){
        newStr =  newStr.slice(0,newStr.length - l);
    }else if(newStr.length < l){
        newStr = newStr + word[1];
    }
    

    if(newStr == old){
        Cipher();
    }
  


    endword.innerHTML = newStr;



    old = newStr;
};
