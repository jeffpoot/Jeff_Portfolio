function openImage(image) {
    const viewer = document.getElementById("image-viewer");
    const viewerImage = document.getElementById("viewer-image");

    viewerImage.src = image.src;
    viewer.style.display = "flex";
}

function closeImage() {
    const viewer = document.getElementById("image-viewer");

    viewer.style.display = "none";
}