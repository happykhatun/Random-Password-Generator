function Generate(){
    let password = document.getElementById("password").value;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%^&*()@_-=+";
    let randomPassword = "";
    for (let i = 0; i < password; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        let randomChar = charset[randomIndex];
        randomPassword += randomChar;
        
    }
    document.getElementById("showPassword").innerText = randomPassword;
}