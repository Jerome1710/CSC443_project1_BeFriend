window.onload = () => {
    // variables
    const edit = document.getElementById("profile-edit");
    const profile = document.getElementById("profile");
    const home = document.getElementById("home");
    const create = document.getElementById("create");
    const messages = document.getElementById("messages");
    const back = document.getElementById("back-button");

    // functions
    // go to edit profile page
    const go_to_edit = (e) => {
        location.replace("file:///C:/Users/User/Desktop/GitHub/Web/CSC443_project1_BeFriend/FrontEnd/Edit%20Profile.html");
    }
    // go to profile page
    const go_to_profile = (e) => {
        location.replace("file:///C:/Users/User/Desktop/GitHub/Web/CSC443_project1_BeFriend/FrontEnd/Profile.html");
    }
    // go to home page
    const go_to_home = (e) => {
        window.location.replace("file:///C:/Users/User/Desktop/GitHub/Web/CSC443_project1_BeFriend/FrontEnd/Home.html");
    }
    // go to create page
    const go_to_create = (e) => {
        location.replace("file:///C:/Users/User/Desktop/GitHub/Web/CSC443_project1_BeFriend/FrontEnd/Create.html");
    }
    // go to messages page
    const go_to_messages = (e) => {
        location.replace("file:///C:/Users/User/Desktop/GitHub/Web/CSC443_project1_BeFriend/FrontEnd/messages.html");
    }
    // go back to profile page
    const back_to_profile = (e) => {
        window.location.href("Profile.html");
    }

    // calls
    edit.addEventListener("click", go_to_edit);
    profile.addEventListener("click", go_to_profile);
    home.addEventListener("click", go_to_home);
    create.addEventListener("click", go_to_create);
    messages.addEventListener("click", go_to_messages);
    back.addEventListener("click", back_to_profile);
}