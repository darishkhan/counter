
var count=0;

document.querySelectorAll("button")[0].onclick=function(){
    count=count+1;
    document.querySelector("h1").innerText=count;   
     
}

document.querySelectorAll("button")[1].onclick=function(){
    if(count>0)
    {
        count=count-1;
        document.querySelector("h1").innerText=count; 
    } 
    else
    {
        alert("Negative counts not allowed");
    }
}

document.querySelectorAll("button")[2].onclick=function(){
    count=0;
    document.querySelector("h1").innerText=count;    
}
