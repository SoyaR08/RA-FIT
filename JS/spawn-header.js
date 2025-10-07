document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/header.html')
    .then(response => response.text())
    .catch(error => console.error('Error loading header:', error))
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
})