var txtName = document.getElementById('name');
var txtEmail = document.getElementById('email');

var txtMobile = document.getElementById('mobile');
var txtAdress = document.getElementById('adress');
// var txtDay = document.getElementById('Birthday_Day');
// var txtMonth = document.getElementById('Birthday_Month');
// var txtYear = document.getElementById('Birthday_Year');
var txtDob = document.getElementById("date");

var checkJava = document.getElementById('java');
var checkPython = document.getElementById('python');
var checkAndroid = document.getElementById('android');
var checkMysql = document.getElementById('mysql');
var checkHTML = document.getElementById('html');
var checkCSS = document.getElementById('css');
var checkJavascript = document.getElementById('javascript');


var radioMale = document.getElementById('male');
var radioFemale = document.getElementById('female');

var buttonSubmit = document.getElementById('btnSubmit');
var buttonReset = document.getElementById('btnReset');

var right = document.getElementById('containerOut');


// reset function code
buttonReset.addEventListener('click', function(){
    txtName.value = "";
    txtEmail.value = "";
    txtMobile.value = "";
    txtAdress.value = "";
    // txtDay.value="";
    // txtMonth.value="";
    // txtYear.value="";
    txtDob.value="";
    radioMale.checked = false;
    radioFemale.checked = false;
    checkAndroid.checked=false;
    checkMysql.checked=false;
    checkPython.checked=false;
    checkJava.checked=false;
    checkHTML.checked = false;
    checkCSS.checked = false;
    checkJavascript.checked = false;
})

// submit function code
buttonSubmit.addEventListener('click', function(){
    const cont = document.createElement('p');
    const contVal = document.createTextNode(txtName.value);
    cont.appendChild(contVal);
    right.append(cont);
    cont.setAttribute('class','name');

    const cont2 = document.createElement('p');
    const contVal2 = document.createTextNode(txtEmail.value);
    cont2.appendChild(contVal2);
    right.append(cont2);
    cont2.setAttribute('class','email');

    const cont5 = document.createElement('p');
    const contVal5 = document.createTextNode(txtMobile.value);
    cont5.appendChild(contVal5);
    right.append(cont5);
    cont5.setAttribute('class','mobile');

    const cont6 = document.createElement('p');
    const contVal6 = document.createTextNode(txtAdress.value);
    cont6.appendChild(contVal6);
    right.append(cont6);
    cont6.setAttribute('class','adress');

    const cont7 = document.createElement('p');
    const contVal7 = document.createTextNode(txtDob.value);
    cont6.appendChild(contVal7);
    right.append(cont7);
    cont6.setAttribute('class','date');

    if(radioMale.checked == true){
        const cont3 = document.createElement('p');
        const contVal3 = document.createTextNode("Male");
        cont3.appendChild(contVal3);
        right.append(cont3);
        cont3.setAttribute('class','male');
    }
    if(radioFemale.checked == true){
        const cont3 = document.createElement('p');
        const contVal3 = document.createTextNode("Female");
        cont3.appendChild(contVal3);
        right.append(cont3);
        cont3.setAttribute('class','female');
    }

    if(checkHTML.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("HTML");
        cont4.appendChild(contVal4);
        right.append(cont4);
        cont4.setAttribute('class','html');
    }
    if(checkCSS.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("CSS");
        cont4.appendChild(contVal4);
        right.appendChild(cont4);
        cont4.setAttribute('class','css');
    }
    if(checkJavascript.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("Javascript");
        cont4.appendChild(contVal4);
        right.appendChild(cont4);
        cont4.setAttribute('class','javascript');
    }

    if(checkJava.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("Java");
        cont4.appendChild(contVal4);
        right.append(cont4);
        cont4.setAttribute('class','java');
    }

    if(checkPython.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("Python");
        cont4.appendChild(contVal4);
        right.append(cont4);
        cont4.setAttribute('class','python');
    }

    if(checkAndroid.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("Android");
        cont4.appendChild(contVal4);
        right.append(cont4);
        cont4.setAttribute('class','android');
    }

    if(checkMysql.checked == true){
        const cont4 = document.createElement('p');
        const contVal4 = document.createTextNode("MySql");
        cont4.appendChild(contVal4);
        right.append(cont4);
        cont4.setAttribute('class','mysql');
    }

    const contLine = document.createElement('hr');
    right.append(contLine);
})