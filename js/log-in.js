// step-01:Added click event Handler to the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('Submit Button Clicked')
    // step-02: get the email adress from the input feild 
    //Always remember to use .value to get the input feild text
    const emailFeild = document.getElementById('user-mail');
     const email = emailFeild.value ;
     console.log(email)
//    step-03: Get the password
//    3.a: set id on the html element 
//    3.b: get the element
//    3.c: get the value from the element
const passwordField = document.getElementById('password');
const password = passwordField.value;
console.log(password)

//DANGER :: DO NOT VARIFY EMAIL AND PASSWORD IN THE CLINT SIDE
//Step-04: verify the email and password
if( email === 'rebonya@gmail.com' && password === 'nayeem'){
 window.location.href = 'bank.html'
}
else {
    alert('Tui Password Vhule Gesos ,Tui Tejjo Ajke Theke');
}

})

