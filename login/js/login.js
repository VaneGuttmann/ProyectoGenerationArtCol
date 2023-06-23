//  Declara una constante llamada loginForm y la inicializa con el elemento HTML que tiene el id "loginForm". Esto se hace utilizando el método querySelector() que busca y devuelve el primer elemento que coincida con el selector especificado.
const loginForm = document.querySelector('#loginForm')
// Agrega un event listener al formulario de inicio de sesión (loginForm). El evento que se está escuchando es el evento submit, que se dispara cuando el formulario se envía. La función de callback se ejecutará cuando se dispare el evento.
loginForm.addEventListener('submit', (e)=>{
    // Dentro de la función de callback del evento, se llama al método preventDefault() del objeto de evento e. Esto evita que el formulario se envíe y evita que la página se recargue.
    e.preventDefault()
    // Declara una constante llamada email y la inicializa con el valor del campo de entrada de texto que tiene el id "email". Esto se hace accediendo a la propiedad value del elemento HTML.
    const email = document.querySelector('#email').value
    // Declara una constante llamada password y la inicializa con el valor del campo de entrada de texto que tiene el id "password". Esto se hace accediendo a la propiedad value del elemento HTML.
    const password = document.querySelector('#password').value
    /**Declara una constante llamada Users y la inicializa con el valor recuperado del almacenamiento local (localStorage) utilizando el método getItem(). 
     * 
     * La clave utilizada para obtener el valor es "users". El valor recuperado se analiza como JSON utilizando JSON.parse().
     * 
     *  Si no hay ningún valor o si ocurre un error al analizar el JSON, se asigna un arreglo vacío ([]) como valor predeterminado.*/
    const Users = JSON.parse(localStorage.getItem('users')) || []
    /**Declara una constante llamada validUser y la inicializa con el resultado de la función find() aplicada al arreglo Users. 
     * 
     * La función find() busca en el arreglo Users un objeto de usuario que cumpla con la condición especificada en la función de callback. 
     * 
     * La condición verifica si el correo electrónico (email) y la contraseña (password) del usuario coinciden con los valores proporcionados. */
    const validUser = Users.find(user => user.email === email && user.password === password)
    /**Comienza un bloque condicional (if) que verifica si validUser es falsy (un valor que se evalúa como falso). 
     * 
     * Si validUser es falsy, es decir, no se encontró ningún usuario válido que coincida con el correo electrónico y la contraseña proporcionados, se ejecuta el código dentro del bloque. */
    if(!validUser){
         /**Dentro del bloque condicional, se muestra una ventana emergente de alerta con el mensaje "Usuario y/o contraseña incorrectos!". 
          * 
          * El return antes de alert() asegura que la función de callback del evento se detenga en este punto y no continúe ejecutando más código */
        return alert('Usuario y/o contraseña incorrectos!')
    }
    /**Esta línea muestra un mensaje emergente en el navegador que dice "Bienvenido" seguido del nombre del usuario que se encuentra en la variable validUser.name.
     * 
     *  La función alert() es una función incorporada en JavaScript que muestra una ventana de diálogo con el mensaje especificado. */
    alert(`Bienvenido ${validUser.name}`)
    /** Esta línea almacena el objeto validUser en el almacenamiento local del navegador. Utiliza el método setItem() de localStorage para guardar un valor en el almacenamiento local.
     * 
     *  En este caso, el valor se guarda con la clave 'login_success'. Antes de almacenarlo, se convierte en una cadena JSON utilizando JSON.stringify() para que pueda ser guardado correctamente. */
    localStorage.setItem('login_success', JSON.stringify(validUser))
    /**Esta línea redirige al usuario a la página "index.html". Cambia la propiedad href de window.location para apuntar a la URL especificada, en este caso, "index.html". 
     * 
     * Esto provoca que el navegador cargue la página "index.html" y la muestre al usuario. */
   // window.location.href = 'index.html'   
    window.location.href = '../CosmeticS/index.html' 
     

})