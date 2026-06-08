const screen = document.querySelector(".screen")
const theme = document.querySelector("#theme");

const toggle = document.querySelector(".theme-switch__checkbox");

toggle.addEventListener("change", function(){

    if(theme.getAttribute("href") == "light.css"){

        theme.setAttribute("href", "dark.css");

    }else{

        theme.setAttribute("href", "light.css");

    }

})
document.addEventListener("click",function(event){

    let operators = ["+","-","x","/","^"]

if(
    operators.includes(screen.textContent.at(-1)) &&
    operators.includes(event.target.textContent)
){return;}
    


    if(event.target.classList.contains("button") ){
    screen.textContent += event.target.textContent;
    }else{}

    if(event.target.classList.contains("backspace")){
    screen.textContent = screen.textContent.slice(0,-1)}

    if(event.target.textContent == "C"){
        screen.textContent = ""
    }
   if(event.target.textContent =="x^n"){
    a = screen.textContent.slice(0,-1)
    b = number(a)
    screen.textContent = b
   }
if (event.target.classList.contains("equal")){

    a = screen.textContent;

    a = a.replaceAll("x","*");
    a = a.replaceAll("^","**");
    a = a.replaceAll("Root","Math.sqrt")

    b = eval(a);

    screen.textContent = b;

}

if (event.target.classList.contains("raised")){
    screen.textContent += "^"

}

if (event.target.classList.contains("reciprocal")){
    a = screen.textContent
    screen.textContent = `1/(${a})`

}


if(event.target.classList.contains("zerozero")){
    screen.textContent += '00'}



if (event.target.classList.contains("ROOT")){
    screen.textContent += "Root("


}

})