import esUnEmail from "./regexEmail"

export default function validation(form) {
    const {name, lastName, email, message} = form
    let error = {}

    if(name.length <= 0){ error = {...error, name: 'Debes colocar un nombre'}}

    if(lastName.length <= 0){error = {...error, lastName: 'Debes colocar un apellido'}}

    if(!esUnEmail(email)){error = {...error, email: 'Tu email no es valido'}}

    if(email.length <= 0){ error = {...error, email: 'Debes escribir un email'}}

    if(message.length <= 0){ error = {...error, message: 'Tu mensaje no puede estar vacio'}}

    if(message.length > 300){ error = {...error, message: 'Tu mensaje no puede exceder de 200 caracteres'}}

    return error

}