var AmberJs = {
  theDay: new Date(2021, 5, 30),
  
  howLong: function(){
    const now = Date.now();
    const howLongMilliseconds = now - AmberJs.theDay;
    const howLongDays = howLongMilliseconds / (1000*60*60*24)

    return Math.floor(howLongDays);
  },

  docReady: function(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
    } 
    else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  },
  
  setDays: function(){
    var span = document.getElementById("DaysSpan");
    span.innerText = AmberJs.howLong();
  }
}