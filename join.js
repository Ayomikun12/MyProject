
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = form.querySelector(".cPassword");
    userField = form.querySelector(".username-field"),
    userInput = userField.querySelector(".username"),

    
    
    
    
    
    
    openMenu.addEventListener('click',show);
    closeMenu.addEventListener('click',close);
    
    function show(){
        mainMenu.style.display = "flex";
        mainMenu.style.top = '0';
    }
    function close(){
        mainMenu.style.top = '-100%';
    }

// Email Validation
function checkEmail(){
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailpattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.parentElement.querySelector("input");
        if(pInput.type === "password") {
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return (pInput.type = "text")
        }
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        pInput.type = "password";
    })
})

function checkUser(){
    const userpattern = /^[^ ][^ ][A-z]{2,}$/;
    if(!userInput.value.match(userpattern)) {
        return userField.classList.add("invalid");
    }
    userField.classList.remove("invalid");
}

function createPass(){
    const passPattern = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passInput.value.match(passPattern)){
      return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}


function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === "") {
     return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();
    checkUser();

    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);
    userInput.addEventListener("keyup", checkUser);


    if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action")
    }
})