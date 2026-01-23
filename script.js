(function(){
    emailjs.init('julinhaarte-portfoliosit'); 
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailParams = {
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('julinhaarte-portfoliosit', 'template_0o0sstm', emailParams)
        .then(function(response) {
            alert('Eba! E-mail enviado! :D');
        }, function(error) {
            alert('Vixi! Deu ruim no envio! :(');
        });
});