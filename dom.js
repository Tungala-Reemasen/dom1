function updateDocument() {
    var color = document.getElementById("color").value;
    var backgroundColor = document.getElementById("backgroundColor").value;
    var font = document.getElementById("font").value;
    var fontSize = document.getElementById("fontSize").value;

    var documentContent = document.getElementById("documentContent");
    documentContent.style.color = color;
    documentContent.style.fontFamily = font;
    documentContent.style.fontSize = fontSize + "px";

    var documentBody = document.getElementById("documentBody");
    documentBody.style.backgroundColor = backgroundColor;
}
