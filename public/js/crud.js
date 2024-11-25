async function getUsers() {
    try {
        let response = await fetch('http://localhost:8000/api/users')
        if (!response.ok) {
            console.log("no se ha podido procesar la peticion");
        } else {
            return await response.json()
        }
    } catch (e) {
        throw new Error(`error en recuperar los usuarios: ${e}`)
    }
}

console.log(getUsers());