/* date */
window.addEventListener('load', function () {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  
  
    let date = document.getElementById('date');
    let container = document.getElementById('containermsm');
    let btndate = document.getElementById('btndate');
    btndate.addEventListener('click', function (event2) {
      event2.preventDefault();
      let pdiv = document.createElement('div');
      pdiv.setAttribute('id', 'pdiv');
      container.appendChild(pdiv);
  
      let pdate = document.createElement('p');
      pdate.textContent = date.value;
      let map = document.createElement('div');
      map.setAttribute('id', 'map');
      pdiv.appendChild(map);
    
      pdiv.insertBefore(pdate, pdiv.firstElementChild);
  
  
    });
  
  
  });
  /* Fin de date */