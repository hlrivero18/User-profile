//esUnEmail se encargar de retornar tru o false segun sea el caso
function esUnEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
}

export default esUnEmail