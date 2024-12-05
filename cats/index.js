document.getElementById('mainBtn').addEventListener('click', () => {
    const loader = document.querySelector('.loader');
    const imagesContainer = document.querySelector('.images');
    imagesContainer.innerHTML = ''; 
    
    //show loader
    loader.style.display = 'block';

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка');
            }
            return response.json();
        })
        .then(data => {
            //hide loader
            loader.style.display = 'none';
            
            data.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = 'Картинка кота';
                img.style.width = '200px'; 
                img.style.height = '200px';
                img.style.margin = '5px'; 
                imagesContainer.appendChild(img);
            });
        })
        .catch(error => {
            loader.style.display = 'none'; 
            console.error('Ошибка при загрузке изображений:', error);
        });
});