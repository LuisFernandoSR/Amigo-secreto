//Array para guardar nombres
let amigos = []

    // Función para agregar un amigo a la lista
    function agregarAmigo() {
        let input = document.getElementById("amigo"); // Obtener el campo de entrada
        let nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

        // Validar que el campo no esté vacío
        if (nombre === "") {
            alert("Por favor, inserte un nombre."); // Mostrar mensaje de error
            return;
        }

        // Agregar el nombre al array de amigos
        amigos.push(nombre);
        
        // Actualizar la lista en la interfaz
        actualizarLista();
        
        // Limpiar el campo de entrada después de agregar el nombre
        input.value = "";
    }

    // Función para actualizar la lista de amigos en la interfaz
    function actualizarLista() {
        let lista = document.getElementById("listaAmigos"); // Obtener la lista en el HTML
        lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
        
        // Recorrer el array de amigos con un bucle for y agregar cada nombre a la lista
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li"); // Crear un nuevo elemento de lista
            li.textContent = amigos[i]; // Asignar el nombre al elemento
            lista.appendChild(li); // Agregar el elemento a la lista en el HTML
        }
    }

    // Función para seleccionar un amigo aleatorio de la lista
    function sortearAmigo() {
        let resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado

        // Validar que haya amigos en la lista
        if (amigos.length === 0) {
            resultado.innerHTML = "No hay amigos en la lista para sortear.";
            return;
        }

        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Obtener el nombre seleccionado
        let amigoSeleccionado = amigos[indiceAleatorio];
        
        // Mostrar el resultado en la interfaz
        resultado.innerHTML = "Amigo seleccionado: " + amigoSeleccionado;
    }