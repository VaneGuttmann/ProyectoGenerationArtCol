const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');




// Selecciona el elemento del documento HTML con el id signupForm y lo almacena en la variable signupForm. Esto asume que hay un elemento en el documento con ese id.
const signupForm = document.querySelector('#signupForm')

// Agrega un evento de escucha al formulario signupForm cuando se envía (submit). Cuando se envía el formulario, se ejecutará la función proporcionada como segundo argumento. e es el objeto de evento que se pasa a la función.
signupForm.addEventListener('submit', (e)=>{
    // Detiene el comportamiento predeterminado del evento de envío del formulario. En este caso, evita que la página se recargue después de enviar el formulario.
    e.preventDefault()

    validarForm();
    // // Selecciona el elemento del documento HTML con el id name y obtiene el valor ingresado en ese campo de entrada. El valor se almacena en la variable name.
    // const name = document.querySelector('#name').value
    // // Selecciona el elemento del documento HTML con el id email y obtiene el valor ingresado en ese campo de entrada. El valor se almacena en la variable email.
    // const email = document.querySelector('#email').value
    // // Selecciona el elemento del documento HTML con el id password y obtiene el valor ingresado en ese campo de entrada. El valor se almacena en la variable password.
    // const password = document.querySelector('#password').value

    // // Esta línea declara una constante llamada Users.
    // // Utiliza el método getItem() del objeto localStorage para obtener el valor almacenado en la clave 'users'.
    // // Si no hay ningún valor almacenado o si la conversión a objeto falla, se asigna un arreglo vacío [] a Users.
    // const Users = JSON.parse(localStorage.getItem('users')) || []
    // // Esta línea declara una constante llamada isUserRegistered.
    // // Utiliza el método find() del arreglo Users para buscar un elemento que cumpla con la condición especificada.
    // // La condición de búsqueda es user.email === email, lo que significa que busca un objeto en Users cuya propiedad email sea igual al valor de la variable email.
    // const isUserRegistered = Users.find(user => user.email === email)

    // // Esta línea verifica si isUserRegistered es un valor verdadero (es decir, si se encontró un usuario registrado con el correo electrónico especificado).
    // // Si isUserRegistered es verdadero, se ejecuta el código dentro del bloque if.
    // // Dentro del bloque if, se llama a la función alert() para mostrar una ventana emergente en el navegador con el mensaje "El usuario ya está registrado!".
    // if(isUserRegistered){
    //     // Después de mostrar la alerta, la función se detiene y no se ejecuta ningún código adicional después del bloque if.
    //     return alert('El usuario ya esta registado!')
    // }

    // //  Esta línea agrega un nuevo objeto al array Users. El objeto tiene tres propiedades: name, email y password. Los valores de estas propiedades se obtienen de variables llamadas name, email y password, respectivamente. El objeto representa un usuario y se añade al final del array Users.
    // Users.push({name: name, email: email, password: password})
    // // Aquí se utiliza el objeto localStorage para almacenar datos en el navegador web. La función setItem se utiliza para guardar un valor en el almacenamiento local. En este caso, el valor que se guarda es el array Users, pero primero se convierte a una cadena JSON utilizando JSON.stringify() para que pueda ser almacenado. Se utiliza la clave 'users' para identificar y recuperar este valor en el futuro.
    // localStorage.setItem('users', JSON.stringify(Users))
    // // Se muestra una ventana emergente en el navegador con el mensaje "Registro Exitoso!". Esta línea proporciona una notificación al usuario de que el registro se ha realizado con éxito.
    // alert('Registro Exitoso!')
    // // Esta línea redirige al usuario a la página login.html. La propiedad location.href del objeto window se establece en la URL 'login.html', lo que provoca que el navegador navegue a esa página.
    // window.location.href = 'login.html';

    

});

function validarForm() {
    const nameInput1 = nameInput.value.trim();
    const emailInput1 = emailInput.value.trim();
    const passwordInput1  = passwordInput.value.trim();
    const password2Input2 = password2Input.value.trim();

    if (nameInput1 === '') {
        errorForm(nameInput, 'El campo es obligatorio');
    } else {
        exictoForm(nameInput)
    }

    if (emailInput1 === '') {
        errorForm(emailInput, 'El campo es obligatorio');
    } else if (!email(emailInput1)) {
        errorForm(emailInput, 'El campo no es valido');
    } else {
        exictoForm(emailInput);
    }

    if (passwordInput1 === '') {
        errorForm(passwordInput, 'El campo es obligatorio');
    } else {
        exictoForm(passwordInput)
    }

    if (password2Input2 === '') {
        errorForm(password2Input, 'El campo es obligatorio');
    } else if (passwordInput1 !== password2Input2) {
        errorForm(password2Input, 'Contraseñas no coinciden');
    } else {
        exictoForm(password2Input)
    }

}

function errorForm(input, message) {
    const form = input.parentElement;
    const span = form.querySelector("span");
    form.className = 'form-control error';
    span.textContent = message;
}

function exictoForm(input) {
    const form = input.parentElement;
    form.className = 'form-control exito';
}

function email(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}