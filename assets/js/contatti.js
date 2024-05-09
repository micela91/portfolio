(function(){
  emailjs.init("omjwtrJhIfsLy4AGt");
})();

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_qlgg4g7', 'template_549rkp8', this)
  .then(function(response) {
    console.log('Messaggio inviato con successo!', response.status, response.text);
  }, function(error) {
    console.log('Errore nell\'invio del messaggio:', error);
  });
});



