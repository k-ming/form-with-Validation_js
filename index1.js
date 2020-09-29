
const inputId = document.getElementById('Username');
const inputPw = document.getElementById('Password');
const confirmPw = document.getElementById('confirmPassword');
const submitBtn = document.querySelector('button');




function setError(input, message){
    const blank= input.parentElement;
    blank.className = 'blank error';
    const contents = blank.parentElement;
    const errorMessage = contents.querySelector('li:last-child');
    errorMessage.innerText = message;
}

function setSuccess(input){
    const blank = input.parentElement;
    blank.className ="blank success";
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ""){
            setError(input, `${getEachName(input)} is required`);
        }else{
            setSuccess(input);
        }
    });
}

function checkPassword(password, confirmPw ){
    if(password.value !== confirmPw.value){
        setError(confirmPw, "password do not match");
    }else{
        setSuccess(confirmPw);
    }
}

function checkLength(input, min , max){
    if (input.value.length <= min){
        setError(
            input, `${getEachName(input)} must be more than ${min} characters`
        );
    }else if(input.value.length >=max){
        setError(
            input, `${getEachName(input)} must be less than ${max} charactpers`
        );

    }else{
        setSuccess(input);
    }
}



function getEachName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}//Each field name 


submitBtn.addEventListener("click",function(e){
e.preventDefault();

checkRequired([inputId, inputPw, confirmPw]);
checkLength(inputId, 3, 15);
checkLength(inputPw, 6, 13);
if(confirmPw.value !== ""){
   checkPassword(inputPw, confirmPw);
}
});
