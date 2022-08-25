const usercheck = /^[A-Za-z. ]{3,30}$/;

const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const emailRegex =
/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const mobileno = /^[789][0-9]{9}$/;




function submitfunction() {
    var user = document.getElementById('name1').value;
    if (usercheck.test(user)) {
        document.getElementById('usererror').innerHTML = " ";
    }
    else {
        document.getElementById('usererror').innerHTML = "** Username is Invalid";
        
     }
     // alert(user)




    var password = document.getElementById('password').value;
        if (passw.test(password)) {
        document.getElementById('passworderror').innerHTML = " ";
    }
    else {
        document.getElementById('passworderror').innerHTML = "** Password is Invalid";
    }
    //    alert(password)



    var confirm = document.getElementById('Confirm').value;
    if (password === confirm) {
    document.getElementById('confirmerror').innerHTML = " ";
}
else {
    document.getElementById('confirmerror').innerHTML = "**  confirm Password is Invalid";
}
    // alert(confirm)



    var email = document.getElementById('email').value;
    console.log("eamil: ", email)
    if (emailRegex.test(email)) {
        console.log("email valid")
        document.getElementById('emailerror').innerHTML = " ";
    }
    else {
        console.log('invalid email')
        document.getElementById('emailerror').innerHTML = "** Email is Invalid";

    }
    // alert(email)




    var mobile = document.getElementById('mobile').value;
    console.log(mobile)
    if (mobileno.test(mobile)) {
        document.getElementById('mobileerror').innerHTML = " ";
    }
    else {
        document.getElementById('mobileerror').innerHTML = "** Mobile number is Invalid";
    }
    // alert(mobile)

}


     