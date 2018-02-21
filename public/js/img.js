
/* imagen */
function comenzar() {
    container = document.getElementById('containermsm');
    let archivos = document.getElementById('archivos');
    let enviarimg = document.getElementById('enviarimg');
    let title = document.getElementById('title');
  
    archivos.addEventListener('change', procesar, false)
  }
  function procesar(e) {
    let archivos = e.target.files;
    /* container.innerHTML = ""; */
    let mi_archivo = archivos[0];
    if (!mi_archivo.type.match(/image/)) {
      alert('selecciona una imagen por favor');
    } else {
      
      container.innerHTML += "Nombre de archivo:" + mi_archivo.name + "<br>";
      container.innerHTML += "tamaño del archivo:" + Math.round(mi_archivo.size / 1024) + "kb <br>";
      let lector = new FileReader();
      lector.readAsDataURL(mi_archivo);
      lector.addEventListener('load', mostrar_en_web, false);
  
    }
  
  }
  function mostrar_en_web(e) {
    let resultado = e.target.result;
    enviarimg.addEventListener('click', function () {
      container.innerHTML += "<img src='" + resultado + "' width = 100%>";
    });
    archivos.value = ' ';
  }
  window.addEventListener('load', comenzar, false);
  /* Fin de imagen */
  