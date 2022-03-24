
//Select and submit a number rating
// See the "Thank you" card state after submitting a rating

const submit = document.querySelector("#button");
const radioButtons = document.querySelectorAll(`input[name="rate"]`);
const output = document.querySelector("#output");
const thankRate = document.querySelector("#thankRate");
const thank = document.querySelector("#thank");
const rating = document.querySelector("#rating");

const radioLabels = Array.from(document.querySelectorAll(".rating__label"));

submit.addEventListener("click", () => {
    let selectedRate;
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            selectedRate = radioButton.value;
            rating.style.display = "none";
            // thank.style.display = "block";
            thank.classList.add("active");
            break;
        } else {
            rating.classList.toggle("animation");
            output.innerHTML = "Please select a rating to submit!";
            setTimeout(() => {
                output.innerHTML = "";
            }, 3000);
        }
    }
    thankRate.innerHTML = `${selectedRate}`;
})

function selectRating(){
    radioLabels.forEach(radioLabel => radioLabel.classList.remove("active"));
    this.classList.add("active");
}

radioLabels .forEach(radioLabel => {
    radioLabel.addEventListener("click", selectRating);
})
