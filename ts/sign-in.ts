import $ from 'jquery';

const BASE_API = 'http://localhost:8080/sms';
const AUTH_SERVICE_API = BASE_API + '/authenticate';

/* Event listeners */

$("#btn-login").on('click', (eventData)=> {
    eventData.preventDefault();

    const username = $("#txt-username").val() as string;
    const password = $("#txt-password").val() as string;

    fetch(AUTH_SERVICE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({username: username, password: password}).toString()
    }).then((response) => {

        /*  1. 200 : User
            2. 401 : Invalid login credentails
            3. 500 or something else: Internal Server Error */

            if (response.status === 401){
                alert("Invalid login credentails");
                $("#txt-username").trigger('select');
            }else if (response.status !== 200){
                throw new Error("Failed to connect to the server");
            }else{
                response.json().then((user)=> {
                    localStorage.setItem('token', JSON.stringify(user));
                    window.location.replace('http://localhost:1234/dashboard.html');
                });
            }

    }).catch((err)=> {
        alert(err.message);
        console.log(err);
    })
});