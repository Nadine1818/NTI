
//Task4
function validate (){
    let name = prompt("Enter your name");
    let regexName = /^[a-z_-]{3,15}$/ ;
    while(!regexName.test(name) || name==null)
    {
        name = prompt("invalid name. enter again");
    }

    let phone = prompt("Enter your mobile number");
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    while(!regexPhone.test(phone) || phone==null){
        phone = prompt("invalid phone. enter again");
    }

    let email = prompt ("Enter your email");
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    while(!regexEmail.test(email) || email==null)
    {
        email = prompt("invalid email. enter again");
    }

    alert(`Welcome ${name} phone: ${phone} email:${email}`);
}

validate();
