$(document).ready(function() {
  attachListeners()
});

function attachListeners(){
  $(".proposal_link").on('click', function() {
    alert("Yo you clicked it")
  });
