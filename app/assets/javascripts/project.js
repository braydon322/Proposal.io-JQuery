var timesClicked = 0;

function loadProposal(proposals) {
  var html =[];
  proposals.forEach(function(individual){
    var proposal = {
      url: "/proposals/" + individual.id.toString(),
      budget:individual.budget,
      email: individual.email,
      id:individual.id,
      invoice_paid: individual.invoice_paid,
      proposal_accepted: individual.proposal_accepted,
      signer: individual.signer,
      terms: individual.terms,
      title: individual.title,
      user_id:individual.user_id,
    }

    var template = Handlebars.compile(document.getElementById("proposal-template").innerHTML);
    var result = template(proposal);
    html.push(result)
  });
  $('#fill-proposals').html(html)
}

function listenersReady(){
    $(".proposal_link").on("click", function () {
      $(this).remove()
      $.get("/proposals", function(data) {
        loadProposal(data);
        listenersReady();
      });
    });
}

$(document).ready(function() {
  listenersReady()
});
