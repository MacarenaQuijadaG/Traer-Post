// FUNCION ASINCRONICA
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }

        const datos = await response.json();

        datos.slice(0, 20).forEach((dato, index) => {
            console.log(`Dato ${index + 1}:`, dato); 
        });

        
         console.log("Informacion a procesar: ", datos);

    } catch (error) {
        alert(error.message);
    }
};
//LEE LA ACCION DEL BOTON Y LO CAPTURA
document.getElementById('getPost').addEventListener('click', getPost);