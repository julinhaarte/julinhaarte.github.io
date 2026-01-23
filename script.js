(function(){
    emailjs.init('SM_xuvN0sBrOJni4v'); 
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailParams = {
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_d9pm57j', 'template_0o0sstm', emailParams)
        .then(function(response) {
            alert('Eba! E-mail enviado! :D');
        }, function(error) {
            alert('Vixi! Deu ruim no envio! :(');
        });
});