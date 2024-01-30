const textarea = document.getElementById("textArea");

textarea.addEventListener("input", saveText);

function saveText() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}


