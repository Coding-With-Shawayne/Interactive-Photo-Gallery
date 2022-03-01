// Search Function 


// Declare variables
var input, filter, ahref, i;

input = document.getElementById('search');
filter = document.querySelectorAll('a');

input.addEventListener("keyup", searchFunction);

function searchFunction() {

for (i = 0; i < filter.length; i++) {
    ahref = filter[i].getAttribute("data-caption").toUpperCase();
        if (ahref.includes(input.value.toUpperCase())) {
            filter[i].style.display = "";
        } else {
            filter[i].style.display = "none";
        }
    }
}
