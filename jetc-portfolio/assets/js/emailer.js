function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "username",
        Password: "password",
        To: 'jerwin.cuchapin@gmail.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}