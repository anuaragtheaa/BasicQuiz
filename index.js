function onpageload(){
    setInterval(function(){
        var t =  document.getElementById('time');
        var d = new Date();
        t.innerHTML = d;
    },1000);    

    var logstatus = JSON.parse(window.localStorage.getItem('status'));
    if(logstatus!=null){
        if(logstatus[0]){
            var u = JSON.parse(window.localStorage.getItem(logstatus[1]));
            document.getElementById('usersignup').innerHTML=u[2];
            document.getElementById('usersignup').setAttribute('data-toggle','');
            document.getElementById('userlogin').innerHTML='Sign Out';
            document.getElementById('userlogin').setAttribute('data-toggle','');
            document.getElementById('userlogin').setAttribute('onclick','signout()');    
        }
    }
}
function signup(){
    var name = document.getElementById('name').value;
    var num = document.getElementById('num').value;
    var email = document.getElementById('email').value;
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;

    var tname = true,tnum = true,temail = true,tuname = true,tpass = true;
    
    /*var pname = /^[a-z]+$/i;
    if(!(name.match(pname))){
        tname = false;
        alert('Name can be only Alpha');
    }*/
    if(name==""){
        tname = false;
        alert('Name can be only Alpha');
    }

    if(num.length!=10){
        tnum = false;
        alert('Phone No. must be of Ten digit');
    }

    var pemail = /@gmail.com/i;
    if(!(email.match(pemail))){
        temail = false;
        alert('Email must be like abcd@gmail.com');
    }

    if(uname==""){
        tuname = false;
        alert('User Name can not be Blank');
    }

    var pass1 = /[a-z]/g,pass2 = /[A-Z]/g,pass3 = /[0-9]/g;
    if(!(pass.match(pass1)&&pass.match(pass2)&&pass.match(pass3)&&pass.length>8)){
        tpass = false;
        alert('Password must be upper & lower latter,digit and >8');
    }

    if(tname&&tnum&&temail&&tuname&&tpass){
        var olduser = false;
        var detail = [uname,pass,name,num,email];
        console.log(window.localStorage.getItem(uname));
        if(!(window.localStorage.getItem(uname)==null)){
            olduser = true;
        }
        
        if(olduser){
            alert('Already an Account with this mobile No. or User name!! You can Login');
        }
        else{
            var logstatus = [true,uname];
            window.localStorage.setItem('status',JSON.stringify(logstatus));
            window.localStorage.setItem(uname,JSON.stringify(detail));
            window.open('index.html','_self');
        }
    }
}
function signout(){
    var logstatus = JSON.parse(window.localStorage.getItem('status'));
    document.getElementById('usersignup').innerHTML='Sign up';
    document.getElementById('usersignup').setAttribute('data-toggle','#sign');
    document.getElementById('userlogin').removeAttribute('onclick');
    document.getElementById('userlogin').innerHTML='Login';
    document.getElementById('userlogin').setAttribute('data-toggle','#login');
    logstatus[0]=false;
    window.localStorage.setItem('status',JSON.stringify(logstatus));
}
function login(){
    var name = document.getElementById('luname').value;
    var pass = document.getElementById('lpass').value;
    var u = JSON.parse(window.localStorage.getItem(name));
    if(u==null){
        alert("No Such Account found from give user id");
    }
    else if(pass!=u[1]){
        alert('InCorrect Password');
    }
    else{
        var logstatus = [true,u[0]];
        window.localStorage.setItem('status',JSON.stringify(logstatus));
        window.open('index.html','_self');
    }
}

function openprob(m){
    var uans = [];
    window.localStorage.setItem('uans',JSON.stringify(uans));
    window.localStorage.setItem('set',JSON.stringify(m));
    window.open('problem.html','_self');
}