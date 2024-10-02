    const heartIcon = document.getElementById('heart-icon');
    const bookMark = document.getElementById("book-mark");

    heartIcon.addEventListener('click', function() {
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular', 'fa-heart');
            heartIcon.classList.add('fa-solid', 'fa-heart');
            heartIcon.style.color = '#ff0000'; // Cambiar color a rojo
        } else {
            heartIcon.classList.remove('fa-solid', 'fa-heart');
            heartIcon.classList.add('fa-regular', 'fa-heart');
            heartIcon.style.color = ''; // Volver al color original
        }
    });

    bookMark.addEventListener('click', function(){
            bookMark.classList.remove('fa-regular', 'fa-bookmark');
            bookMark.classList.add('fa-solid', 'fa-bookmark');
            bookMark.style.color='#663399';        
    })

