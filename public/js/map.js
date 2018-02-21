



  function buscar() {
    if (navigator.geolocation) {//
      let latitud, longitud;

      let funcionExito = (posicion) => {
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;

        let map = new google.maps.Map(document.getElementById('map'));
        map.setZoom(15);
        map.setCenter({
          lat: latitud,
          lng: longitud
        });

        let person = 'assets/icons/person.png';

        /* Trazar ruta */
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        let calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
          directionsService.route({
            origin: inputGoing.value,
            destination: inputDestiny.value,
            travelMode: 'DRIVING'

          }, (response, status) => {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('No encontramos una ruta');
            }
          });
        };
        directionsDisplay.setMap(map);
        let trazarRuta = () => {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('trazar-ruta').addEventListener('click', trazarRuta);
        /* Fin de trazar ruta */

        let miUbicacion = new google.maps.Marker({
          position: {
            lat: latitud,
            lng: longitud
          },
          map: map,
          icon: person,
          title: 'Hola, hola ...!!!Aquí estoy',
          animation: google.maps.Animation.DROP
        });
      };

      let funcionError = (error) => {
        alert('Tenemos un problema con encontrar su ubicación');
      };

      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);//

    }

  }


  document.getElementById('btndate').addEventListener('click', buscar);
