var tempDiv = document.createElement('div');
tempDiv.className = "form-upload";
tempDiv.setAttribute("id", "formUpload");
document.querySelector('input[id*="inputTypeFile"]').insertAdjacentElement('afterend', tempDiv);
// Create element:
const formUploadText = document.createElement("div");
formUploadText.className = "form-upload-text";
formUploadText.setAttribute("id", "formUploadText");
formUploadText.innerHTML = "Sube o arrastra archivos";

// Append to another element:
document.querySelector('div[class*="form-upload"]').appendChild(formUploadText);
function uploadFiles() {
    var x = document.querySelector('input[id*="inputTypeFile"]');
    var txt = "";




    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Seleccione o arrastre archivos.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<div><strong>" + (i + 1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "<span>Nombre:</span> " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "<span>Tamaño:</span> " + file.size + " bytes </div>";
                }
            }
        }
    }
    else {
        if (x.value == "") {
            txt += "Seleccione o arrastre archivos.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }



    document.querySelector('div[class*="form-upload-text"]').innerHTML = txt;
}