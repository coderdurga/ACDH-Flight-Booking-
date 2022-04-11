function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    
    const datalistDrop = document.querySelector('#datalistOptions'); 

    fetch('https://restcountries.com/v2/all').then(res => {
        return res.json();
    }).then (data => {
        let output = "";
        data.forEach(country => {
            output += `<option value=${country.name}>`;
            
        datalistDrop.innerHTML = output;    
        })
    }). catch(err => {
        console.log(err);
    })

});



