document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');

    for (i = 0; i < 15; i++) {
        const image = document.createElement('img');
        image.src = `https://source.unsplash.com/random/300x300?sig=${i + 1}`;
        imageContainer.appendChild(image);
    }
});
