// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load the div with the carousel images
    const carouselImages = document.querySelector('.carousel-images');
    //Load images in an array
    const images = document.querySelectorAll('.carousel-images img');
    let imageIndex = 0;
    //Calculate total images
    const totalImages = images.length;

    // Ajusta el ancho del contenedor de las imágenes al número de imágenes
    carouselImages.style.width = `${100 * totalImages}%`;

    
    function nextImage() {
        // Calcula el ancho de una imagen
        const imageWidth = carouselImages.clientWidth / totalImages;
        // Incrementa el índice de la imagen
        imageIndex++;
        // Si llegamos al final, vuelve al principio
        if (imageIndex >= totalImages) {
            imageIndex = 0;
        }
        // Calcula el desplazamiento horizontal
        const translateX = -imageWidth * imageIndex;
        // Aplica el desplazamiento a las imágenes
        carouselImages.style.transform = `translateX(${translateX}px)`;
    }
    // Llama a la función nextImage cada 3 segundos
    setInterval(nextImage, 3000);
});
