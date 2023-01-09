//Currently for chon cho

const container = document.querySelector(".seat-container");
const Count = document.getElementsByClassName("seatsCount");
const SelectedCount = document.getElementsByClassName("selectedSeatsCount")

// Seat click event
container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("sold")
    ) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

// Initial count and total set
function updateSelectedCount(){
    const totalSeats = document.getElementsByClassName("seat");
    const chosenSeats = document.getElementsByClassName("selected");
    const soldSeats = document.getElementsByClassName("sold");

    const btnDatVe = document.getElementById("submitBTN");
    if(chosenSeats.length == 0){
        btnDatVe.classList.add("isDisabled");
    }
    else{
        btnDatVe.classList.remove("isDisabled");
    }

    const chosenSeatsCount = chosenSeats.length;
    const totalSeatsCount = totalSeats.length - soldSeats.length - chosenSeats.length;

    Count[0].innerText = totalSeatsCount;
    SelectedCount[0].innerText = chosenSeatsCount;
};

updateSelectedCount();