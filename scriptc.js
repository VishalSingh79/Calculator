let displayText=document.querySelector(".display");
let btnval=document.getElementsByClassName("button");
let whole=document.querySelector(".wrapper");
//console.log(btnval);
let ch;
let string="";
let arr=Array.from(btnval);
arr.forEach(button=>{
button.addEventListener('click', function(event){
    button.classList.add("active");
     setTimeout(()=>{
         button.classList.remove("active");
    },300);
     try{
   if(event.target.innerHTML=="=")
   {

    string=eval(displayText.value);
    
      displayText.value=string;
   }
   else if(event.target.innerHTML=="AC"){
    string="";
    displayText.value=string;
   }
   else if(event.target.innerHTML=="DEL"){
    string=string.substring(0,string.length-1);
    displayText.value=string;
   }
   else if(event.target.innerHTML=="."&&ch==".")
   { 
    
    string=string.substring(0,string.length);
    displayText.value=string;
   }
   else{
    ch=event.target.innerHTML;
    console.log(ch); 
    string=string+ event.target.innerHTML;
    displayText.value=string;
   }
    }
    catch(e){
        displayText.value="";
    }
});
})