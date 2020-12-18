var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  
  xhr.onload = function() {
  
      var status = xhr.status;
      
      if (status == 200) {
          callback(null, xhr.response);
      } else {
          callback(status);
      }
  };
  
  xhr.send();
};
getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=390035001947393035313138&amount=10', function(err, data){
  let taulukko = `<table width="20%" align="center" style="border=1px solid black"><tr><td><b>Ilmankosteus</b></td><td><b>Lämpötila</b></td></tr>`;
  const historia = data.map(function(mittaus){
   
      taulukko = taulukko + `<tr><td>${mittaus.Hum}</td><td>${mittaus.Temp}</td></tr>`; 
  
  });
  taulukko = taulukko + `</table>`;
  document.querySelector('.laatikko').innerHTML = taulukko;
});