(function(){
    emailjs.init('julinhaarte-portfoliosit'); 
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailParams = {
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
        .then(function(response) {
            alert('Eba! E-mail enviado! :D');
        }, function(error) {
            alert('Vixi! Deu  ruim no envio! :(');
        });
});