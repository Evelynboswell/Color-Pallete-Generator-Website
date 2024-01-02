const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    //let imgLink = URL.createObjectURL(inputFile.files[0]);
    //imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.innerHTML = `
        <p style="color: black; font-weight: bold; line-height: 13;">Image Successfully Uploaded</p>
        <p style="color: #fff; line-height: 3;">Click again to upload another image</p>
    `;
    main();
}
