export function getDataLocalStorage(clave) {
    const datosObtenidos = JSON.parse(localStorage.getItem(clave));
    return datosObtenidos;
}

export function setDataLocalStorage(key, value) {
    let datos = JSON.stringify(value);
    localStorage.setItem(key, datos);
}