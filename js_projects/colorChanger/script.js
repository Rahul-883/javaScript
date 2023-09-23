const buttons = document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelector("body")


buttons.forEach(function(button)){
    console.log(button);
    button.addEventListener('click',function(e)){
        console.log(e);
        console.log(e.target);
        if(removeEventListener,target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(removeEventListener,target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(removeEventListener,target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(removeEventListener,target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(removeEventListener,target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    }
}