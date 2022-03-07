//classes
const ui = new UI();
const crypto = new CryptoAPI();


//variables
//access to the form
const form = document.querySelector("#form");


//eventListeners
eventListeners();

function eventListeners() {
    //add eventListener to the form
    form.addEventListener("submit", getValue);
}


//functions
//read the values of the form
function getValue(e) {
    e.preventDefault();

    //read the values
    const currency = document.querySelector("#currency").value;
    const cryptocurrency = document.querySelector("#cryptocurrency").value;

    //validate the fields
    if (currency === "" || cryptocurrency === "") {
        ui.printMessages("All the fields should be fill", "alert alert-danger text-center");
    } else {
        crypto.queryAPI(currency, cryptocurrency)
            .then( data => {
                const resultData = (data.getResult[0]);
                ui.createTemplate(resultData , currency);
            })
    }
}
