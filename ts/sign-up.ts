import $ from 'jquery';

const BASE_API = 'http://localhost:8080/sms';
const USER_SERVICE_API = BASE_API + '/users';

/* Event listeners */

$("#btn-signup").on('click', (eventData)=> {
    eventData.preventDefault();

    const fullName = $("#txt-full-name").val() as string;
    const username = $("#txt-username").val() as string;
    const password = $("#txt-password").val() as string;
    const confirmPassword = $("#txt-confirm-password").val() as string;

    if (!/^[A-Za-z ]+$/.test(fullName)){
        alert("Invalid full name");
        $("#txt-full-name").trigger('select');
        return;
    }else if(username.trim().length < 3){
        alert("Invalid username");
        $("#txt-username").trigger('select');
        return;
    }else if(password.trim().length === 0){
        alert("Invalid password");
        $("#txt-password").trigger('select');
        return;
    }else if (confirmPassword.trim().length === 0){
        alert("Invalid Password");
        $("#txt-confirm-password").trigger('select');
        return;
    }else if(password !== confirmPassword){
        alert("Password mismatch");
        $("#txt-password").trigger('select');
        return;
    }

    createNewAccount({username: username, password: password, fullName: fullName});
});

/* API Calls */

function createNewAccount(user: {username: string, password: string, fullName: string}){

    fetch(USER_SERVICE_API, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((response)=> {

            if (response.status !== 201) throw new Error("Network failure, try again");

            alert("Your account has been created successfully");
            window.location.replace('http://localhost:1234/sign-in.html');
    }).catch((err)=> {
        alert(err.message);
        console.log(err);
    })

}