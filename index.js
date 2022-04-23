var count=0;

// when increase button is clicked, increase count by 1
document.querySelectorAll("button")[0].onclick=function(){

    count=count+1;
    document.querySelector("h1").innerText=count;   
     
}

// when decrease button is clicked, decrease count by 1
document.querySelectorAll("button")[1].onclick=function(){

    if(count>0)
    {

        count=count-1;
        document.querySelector("h1").innerText=count; 

    } 
    else
    {
        // if user trying to set count<0 then <p> make message visible for 1 second.
        x=document.querySelector("p");
        x.style.display = "block";
        setTimeout(function(){
            x.style.display = "none";
        }, 1000);

    }
}

// when reset button is clicked, set count to 0
document.querySelectorAll("button")[2].onclick=function(){

    count=0;
    document.querySelector("h1").innerText=count;    

}
