function chargeBattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";
  battery.style.color ='red';
  setTimeout(function () {
    battery.innerHTML = "&#xf243;";
    battery.style.color ='red';
  }, 2000);
  setTimeout(function () {
    battery.innerHTML = "&#xf242;";
    battery.style.color ='#ff7600';
   
  }, 4000);
  setTimeout(function () {
    battery.innerHTML = "&#xf241;";
    battery.style.color ='#ffd400';
  }, 6000);
  setTimeout(function () {
    battery.innerHTML = "&#xf240;";
    battery.style.color ='#09c409';
  }, 8000);
}

chargeBattery();

setInterval(chargeBattery, 12000);
