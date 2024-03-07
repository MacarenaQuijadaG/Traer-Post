const displayPosts = (posts) => {
    const postListElement = document.getElementById('post-data');
    postListElement.innerHTML = ''; 
// PUNTO 2
    posts.forEach((post) => {
        const listItem = document.createElement('li');

        // TITLE EN NEGRITA
        const titleElement = document.createElement('strong');
        titleElement.textContent = post.title;
        listItem.appendChild(titleElement);
        //SALTO DE LINEA
        listItem.appendChild(document.createElement('br'));

        // BODY
        const bodyElement = document.createElement('span');
        bodyElement.textContent = post.body;
        listItem.appendChild(bodyElement);
        

        
        //SE JUNTAN AMBOS 
        postListElement.appendChild(listItem);
    });
};
// PUNTO 1 FUNCION ASINCRONICA
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    

    //PUNTO 3
    try {
        const response = await fetch(url);
        // REVELA EL ESTADO DE ERROR
        if (!response.ok) {
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