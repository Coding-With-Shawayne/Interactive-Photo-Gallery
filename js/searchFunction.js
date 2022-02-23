// Search Function 


function myFunction() {
    // Declare variables
    var input, filter, div, div_item, ahref, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("photo");
    div_item = div.getElementsByTagName("div");

    for (i = 0; i < div_item.length; i++) {
        ahref = div_item[i].getElementsByTagName("a")[0];
        if (ahref) {
            txtValue = ahref.textContent || ahref.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div_item[i].style.display = "";
            } else {
                div_item[i].style.display = "none";
            }
        }
    }
}
