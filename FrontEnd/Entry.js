window.onload = () => {
    
    // variables
    const signin = document.getElementById("signin");
    const signup = document.getElementById("signup");
   
    const text = document.getElementById("text");
   
    const signin_btn = document.getElementById("signin_btn");
    const signup_btn = document.getElementById("signup_btn");
   
    const signup1_input = document.getElementsByClassName("signup_input");
    const signup2_input = document.getElementsByClassName("signup_input");
    const signup3_input = document.getElementsByClassName("signup_input");

    const signin1_input = document.getElementsByClassName("signin_input");
    const signin2_input = document.getElementsByClassName("signin_input");

    // functions

    // make the signup form disappear
    const signup_disappear = (e) => {
        // bring back the old attributes of signin
        signin.style.backgroundColor = 'rgba(0, 255, 72, 0.5)';
        //signin_btn.style.backgroundColor = 'black';
        //signin_btn.style.color = 'white';
        // remove the attributes of signup
        signup.style.backgroundColor = 'transparent';
        //signup_btn.style.backgroundColor = 'transparent';
        //signup_btn.style.color = 'transparent';
    }

    // make the signin form disappear
    const signin_disappear = (e) => {
        // bring back the old attributes of signup
        signup.style.backgroundColor = 'rgba(0, 255, 255, 0.5)';
        //signup_btn.style.backgroundColor = 'black';
        //signup_btn.style.color = 'white';
        // remove the attributes of signin
        signin.style.backgroundColor = 'transparent';
        //signin_btn.style.backgroundColor = 'transparent';
        //signin_btn.style.color = 'transparent';
    }

    // make both the signup form and signin form reapear 
    const reset = (e) => {
        // box background color reappear
        signin.style.backgroundColor = 'rgba(0, 255, 72, 0.5)';
        signup.style.backgroundColor = 'rgba(0, 255, 255, 0.5)';
        // button background color reappear
        signin_btn.style.backgroundColor = 'black';
        signup_btn.style.backgroundColor = 'black';
        // button text color reappear
        signin_btn.style.color = 'white';
        signup_btn.style.color = 'white';

    }

    // calls
    signin.addEventListener("mouseover", signup_disappear);
    signup.addEventListener("mouseover", signin_disappear);
    text.addEventListener("click", reset);

}