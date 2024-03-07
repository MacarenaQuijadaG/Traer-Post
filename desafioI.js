
// FUNCION ASINCRONICA
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            // REVELA EL ESTADO DE ERROR
            throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }

        const datos = await response.json();
        displayPosts(datos);
        
    } catch (error) {
        alert(error.message);
    }
};
//LEE LA ACCION DEL BOTON Y LO CAPTURA
document.getElementById('getPost').addEventListener('click', getPost);