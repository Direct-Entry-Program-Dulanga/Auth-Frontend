import $ from 'jquery';

function canActivate(){
    if (!localStorage.getItem('token')){
        window.location.replace('http://localhost:1234/sign-in.html');
    }else{
        $(".overlay").remove();
    }
}

canActivate();