function leapOrNo(){
    let year = Number(document.getElementById("year").value);
    if (year % 4 == 0 && year % 100 == 0){
        if (year % 400 == 0){
          document.querySelector("p1").innerText="Leap";
        }
        else {
          document.querySelector("p1").innerText="No leap";
        }
      }
    else if (year % 4 == 0 && year % 100 != 0){
        document.querySelector("p1").innerText="Leap";
      }
    else {
        document.querySelector("p1").innerText="No leap";
      }
    }
