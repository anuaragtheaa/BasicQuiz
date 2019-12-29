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

    probdispaly();
}

function openprob(m){
    window.localStorage.setItem('set',JSON.stringify(m));
    window.localStorage.setItem('num',JSON.stringify(0));
    window.open('problem.html','_self');
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

var ans = [['c','b','d','a','c','a','c','c','b','a'],['c','a','c','a','c','a','a','b','a','a'],['b','b','a','b','d','b','a','c','c','d'],
           ['c','a','b','a','a','d','a','a','a','a'],['c','b','d','d','c','a','c','c','a','b']];

var prob = [[["1. What is the HTML tag under which one can write the JavaScript code?","&lt;javascript&gt;",'&lt;scripted&gt;','&lt;script&gt;','&lt;js&gt;'],
             ["2. Choose the correct JavaScript syntax to change the content of the following HTML code. <br> &lt;p id='geek'&gt;GeeksforGeeks&lt;/p&gt;", 
              'document.getElement(“geek”).innerHTML=”I am a Geek”;','document.getElementById(“geek”).innerHTML=”I am a Geek”;',
              'document.getId(“geek”)=”I am a Geek”;','document.getElementById(“geek”).innerHTML=I am a Geek;'],    
             ['3. Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
              'alertbox(“GeeksforGeeks”);','msg(“GeeksforGeeks”);','msgbox(“GeeksforGeeks”);','alert(“GeeksforGeeks”);'],
             ['4. What is the correct syntax for referring to an external script called “geek.js”?',
              '&lt;script src=”geek.js”&gt;','&lt;script href=”geek.js”&gt;','&lt;script ref=”geek.js”&gt;','&lt;script name=”geek.js”&gt;'],
             ['5. Predict the output of the following JavaScript code.<br>&lt;script type="text/javascript"&gt; <br>a = 8 + "8";<br>document.write(a);<br>&lt;/script&gt;', 
              '16','Complilation Error','88','Run Time Error'],
             ['6. Predict the output of the following JavaScript code.<br>&lt;script type="text/javascript"&gt;<br>var a="GeeksforGeeks";<br>var x=a.lastIndexOf("G");<br>document.write(x);<br>&lt;/script&gt;',
               '8','0','9','Error'],
             ['7. Which of the following is not a reserved word in JavaScript?',
              'interface','throws','program','short'],
             ['8. Predict the output of the following JavaScript code.<br>&lt;script type="text/javascript" language="javascript"&gt;<br>var a = "GeeksforGeeks";<br>var result = a.substring(4, 5);<br>document.write(result);<br>&lt;/script&gt;',
              'sf','ks','s','k'],
             ['9. Predict the output of the following JavaScript code.<br>&lt;script type="text/javascript" language="javascript"&gt;<br>var x=5,y=6;<br>var res=eval("x*y");<br>document.write(res);<br>&lt;/script&gt;',
              '"30"','30','5*6','"5*6"'],
             ['10. What is the right way to check that a variable does not hold a not a number value ?',
              'isNaN(variable)','variable.isNaN','isnan(variable)','variable.isnan']],
            [['1. How can you created rounded corners using CSS3?','border[round]: 30px;','corner-effect: round;','border-radius: 30px;','alpha-effect: round-corner;'],
             ['2. How do you add shadow to elements in CSS3?','box-shadow: 10px 10px 5px grey;','shadow-right: 10px shadow-bottom: 10px;','shadow-color: grey;','alpha-effect[shadow]: 10px 10px 5px grey;'],
             ['3. How to you modify a border image using CSS3?','border: url(image.png);','border-variable: image url(image.png);','border-image: url(border.png) 30 30 round;','None'],
             ['4. How to resize a background image using CSS3?','background-size: 80px 60px;','bg-dimensions: 80px 60px;','background-proportion: 80px 60px;','alpha-effect: bg-resize 80px 60px;'],
             ['5. How to add text shadow using CSS3?','font: shadowed 5px 5px 5px grey;','font-shadow: 5px 5px 5px grey;','text-shadow: 5px 5px 5px grey;','shadow: text 5px 5px 5px grey;'],
             ['6. How to force a word wrap using CSS3?','word-wrap: break-word;','text-wrap: break-word;','text-wrap: force;','text-width: set;'],
             ['7. Which of these are valid CSS3 transformation statements.','matrix()','modify()','skip()','simulate()'],
             ['8. How to rotate objects using CSS3?','object-rotation: 30deg;','transform: rotate(30deg);','rotate-object: 30deg;','transform: rotate-30deg-clockwise;'],
             ['9. How to re-size/scale objects using CSS3?','transform: scale(2,4);','scale-object: 2,4;','scale: (2,4);','None'],
             ['10. How to create transition effects using CSS3?','transition: width 2s;','transition-duration: 2s; transition-effect: width;','alpha-effect: transition (width,2s);','None']],
            [['1. What is the difference between XML and HTML?','HTML is used for exchanging data, XML is not.','XML is used for exchanging data, HTML is not','HTML can have user defined tags, XML cannot','None'],
             ['2. Opening Tag of HTML Tag is called as ________.','Closed Tag','Starting Tag','Forward Tag','Enging Tag'],
             ['3. HTML stands for ________.','Hyper Text Markup Language','Hyper Text Makeup Language','None of these','Hyper Tech Markup Language'],
             ['4. HTML program is saved using _________ extension.','.htl','.html','.hml','.htlm'],
             ['5. Who was the primary author of HTML?','Brendan Eich','Sabeer Bhatiya','Google Inc.','Tim Berners-Lee'],
             ['6. Which of the following attributes comes in handy when borders have to be put between groups of columns instead of every column?','Col','Colgroup','Rowspan','Row'],
             ['7. Which of the following is valid colour code ?','#000000;','#0000000;','#00000000;','#000000000;'],
             ['8. Caption Tag in HTML ?','Is used to display the Title for table at the top','Is used to display the Title for table at the bottom','Both','None'],
             ['9. Which of the following is used increase the row height?','Cellspacing','Cellpadding','Row span','Col span'],
             ['10. Which of the following is used increase the col width?','Cellspacing','Cellpadding','Row span','Col span']],
            [['1. What is the extension of C file?','.s','.cpp','.c','.b'],	
             ['2. Example for calling a function in C? What is the output of below c program?<br> main()<br> { printf(“hello world”); fun(); }<br> fun() { printf(“my function”); }',
              'It prints hello world, and my function','It prints hello world','It prints my function','Error'],	
             ['3. In c, from which function program execution starts?','fun()','main()','Both fun() and main()','None are correct'],	
             ['4. What is a variable?','Variable is a placeholder to hold a value.','Variable is a method','Variable is an object.','None are correct'],	
             ['5. Who invented C language?','Dennis Ritchie','James Gosling','BjarneStrouStrup','Bill Gates'],	
             ['6. Where all c language can be used? <br>1. To build applications <br>2. To build libraries and frameworks <br>3. To build operating systems <br>4. To build compilers',
              '1','1 & 2','1,2 & 3','All are true'],	
             ['7. What is the difference between printf and scanf functions in c?','printf is used to display the output and scanf is used to read the data from input devices.',	
              'printf is used to take value from input devices, and scanf is used to display output','None','Both'],	
             ['8. What is the termination character for char array or strings in c?','\0','null','NULL','0'],	
             ['9. What is an array in c?','It is a homogeneous data structure which can hold data of same type','It is a homogeneous data structure which can hold data of different type',	
              'It is a heterogeneous data structure which can hold data of same type','None'],	
             ['10. What is a structure in c?','It is a user defined data type which can hold the data of heterogeneous type',
              'It is a homogeneous data structure which can hold data of different type','It is a heterogeneous data structure which can hold data of same type','None']],
            [['1. A view is nothing but a ________ table or a stored query','Dymanic','Real','Virtual','Static'],	
             ['2. User() fucntion returns the current users user name and ___________','password','host name','both a and b above','database name associated with the user'], 
             ['3. Which of the following ways below are the correct way to get the current date?','SELECT CURTIME();','SELECT CURDATE();','SELECT CURRENT_TIME();','All of above'],	
             ['4. On executing DELETE command, if you get an error "foreign key constraint"- what does it imply?','Foreign key not defined','Table is empty','Connectivity issue','Data is present in the other table'], 
             ['5. USE keyword is used to select a ___________','Table','Column','Database','All of above'], 
             ['6. What is a candidate key?','Used to uniquely identify a row','Alias for primary key','Used to identify a column','Alias for foreign key'],	
             ['7. How much storage space does DATETIME require?','4 bytes','2 bytes','8 bytes','1 bytes'],	
             ['8. –i-am-a-dummy flag is used Makes the MySQL engine refuse UPDATE and which other command?','WHERE','INSERT','DELETE','TRUNCATE'],	
             ['9. How can we get the number of records or rows in a table?','Using COUNT','Using NUM','Using NUMBER','Both a and c above'], 
             ['10. Which of the following file extension is a valid MyISAM file extension?','.ism','.myd','.my','.mys']]];

function probdispaly(){
    var s = JSON.parse(window.localStorage.getItem('set'));
    console.log(typeof(s));
    var p = document.getElementById('problem');
    var ptag = p.getElementsByTagName('span');
    var k=0;
    console.log(ptag);
    for(var i=0;i<10;i++){
        for(var j=0;j<5;j++){
            ptag[k++].innerHTML = prob[s][i][j];
        }
    }
}

/*
function next(){
    var p1 = document.getElementById('p1').getElementsByTagName('input');
    var p2 = document.getElementById('p2').getElementsByTagName('input');
    var p3 = document.getElementById('p3').getElementsByTagName('input');
    
    var n = JSON.parse(window.localStorage.getItem('num'));
    var uans = JSON.parse(window.localStorage.getItem('uans'));

    uans[n] = select(p1);
    uans[n+1] = select(p2);
    uans[n+2] = select(p3);

    window.localStorage.setItem('uans',JSON.stringify(uans));
    window.localStorage.setItem('num',JSON.stringify(n+3))
    window.open('problem.html','_self')
}

function previous(){
    var p1 = document.getElementById('p1').getElementsByTagName('input');
    var p2 = document.getElementById('p2').getElementsByTagName('input');
    var p3 = document.getElementById('p3').getElementsByTagName('input');

    var uans = JSON.parse(window.localStorage.getItem('uans'));
    var n = JSON.parse(window.localStorage.getItem('num'));

    uans[n] = select(p1);
    uans[n+1] = select(p2);
    uans[n+2] = select(p3);

    if(n!=0){
        window.localStorage.setItem('uans',JSON.stringify(uans));
        window.localStorage.setItem('num',JSON.stringify(n+3))
        window.open('problem.html','_self')
    }
}
*/

function sub(){
    var uans = JSON.parse(window.localStorage.getItem('uans'));
    var s = JSON.parse(window.localStorage.getItem('set'));
    for(var i=0;i<10;i++){
        var z = 'p'+i;
        var m = document.getElementById(z).getElementsByTagName('input');
        uans[i] = select(m);
    }
    if(window.confirm('Are you sure!! You want to Submit.')){
        window.localStorage.setItem('uans',JSON.stringify(uans));
        window.localStorage.setItem('ans',JSON.stringify(ans[s]));
        window.open('result.html','_self');
    }
}

function select(ob){
    
    for(var i=0;i<4;i++){
        if(ob[i].checked){
            return i;
        }
    }
    return 4;
}

