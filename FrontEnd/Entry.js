window.onload = () => {
    
    // variables
    const signin = document.getElementById("signin");
    const signup = document.getElementById("signup");
    const text = document.getElementById("text");
    const signin_btn = document.getElementById("signin_btn");
    const signup_btn = document.getElementById("signup_btn");

    // functions

    // make the signup form disappear
    const signup_disappear = (e) => {
        // bring back the old attributes of signin
        signin.style.backgroundColor = 'rgba(0, 255, 72, 0.5)';
        signin_btn.style.backgroundColor = 'black';
        // remove the attributes of signup
        signup.style.backgroundColor = 'transparent';
        signup_btn.style.backgroundColor = 'transparent';
    }

    
    // calls
    signin.addEventListener("mouseover", signup_disappear);
    signup.addEventListener("mouseover", signin_disappear);
    text.addEventListener("click", reset);

}