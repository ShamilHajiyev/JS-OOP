let username = document.querySelector('#username');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let btn = document.querySelector('#submit');

btn.addEventListener('click', function () {
    if (!checkUserName()) {
        alert('Username is not valid');
    }
    else if (!checkPassword()) {
        alert('Password is not valid');
    }
    else if (!CheckMail()) {
        alert('Mail is not valid');
    }
    else{
        alert('Submitted!');
        username.value = '';
        password.value = '';
        email.value = '';
    }
})

function Capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkUserName(){
    if(username.value != '' && username.value === Capitalize(username.value)){
        return true;
    }
    else{
        return false;
    }
}

function checkPassword(){
    if(password.value != '' && password.value.length >= 6){
        return true;
    }
    else{
        return false;
    }
}

function CheckMail() {
    let pattern = /[a-z]+[0-9]*@[a-z]+.[a-z]+/gm;
    return email.value.match(pattern);
}