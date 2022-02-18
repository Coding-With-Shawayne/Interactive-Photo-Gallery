// Search Function 

function myFunction() {
    // Declare variables
    var input, filter, gallery, photos, a, i, txtValue;

    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    gallery = document.getElementById("gallery");
    photos = gallery.getElementsByTagName('photo');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < photos.length; i++) {
        a = photos[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            photos[i].style.display = "";
        } else {
            photos[i].style.display = "none";
    }
  }
}