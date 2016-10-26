function getTime() {

      var hours =  document.getElementById("time");

      var d = new Date().getDay();

      var t = new Date().getHours();

      if (day===0 15<= t && t < 22) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";

      }

      if (day===1 10<= t && t < 2130) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";
      }
        if (day===2 10<= t && t < 2130) {
          hours.innerHTML = "We are OPEN";
        }
        else{
          hours.innerHTML = "Sorry we are closed";
      }

      if (day===3 10<= t && t < 2130) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";
      }

      if (day===4 10<= t && t < 2130) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";
      }

      if (day===5 10<= t && t < 22) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";
      }

      if (day===6 10<= t && t < 22) {
        hours.innerHTML = "We are OPEN";
      }
      else{
        hours.innerHTML = "Sorry we are closed";
      }

}

getTime();
