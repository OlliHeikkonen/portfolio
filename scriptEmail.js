const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e  => {
  e.preventDefault();

  sendJSON();

});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange  = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  const nimi = document.querySelector('#nimi').value;
  console.log("nimikentän sisältö:" + nimi);

  const email = document.querySelector('#email').value;
  console.log("email-kentän sisältö: " + email);

const msg = document.querySelector('#msg').value;
console.log("viestikentän sisältö: " + msg);

  var data  = JSON.stringify({
    "EmailMsg": msg,
    "EmailTo": "olli.heikkonen",
    "EmailName": nimi
  });
  xhr.send(data);
}