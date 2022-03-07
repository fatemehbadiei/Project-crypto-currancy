class UI {
    //print all the messages
    printMessages(messages, classNames) {
        //create a div tag
        const div = document.createElement("div");
        //add classnames to the div
        div.className = classNames;
        //append the messages to the div
        div.appendChild(document.createTextNode(messages));
        //access to the div tag with class message
        const message = document.querySelector(".messages");
        //append div tag to the div with message class
        message.appendChild(div);

        //remove message after 3 seconds
        this.removeMessage();
    }

    //remove message after 3 seconds
    removeMessage() {
        setTimeout(() => {
            document.querySelector(".messages div").remove();
        }, 3000)
    }

    //show result
    createTemplate(resultData, currency) {

        //check that there are any template or not
        const preventResult = document.querySelector("#result div");
        if (preventResult){
            preventResult.remove();
        }

        let currencyName;
        switch (currency) {
            case "USD" :
                currencyName = "Dollar"
                break;
            case "GBP" :
                currencyName = "Pound"
                break;
            case "EUR" :
                currencyName = "Euro"
                break;
        }
        // if (currency === "USD"){
        //     currencyName = "dollar"
        // }
        // if (currency === "GBP"){
        //     currencyName = "pound"
        // }
        // if (currency === "EUR"){
        //     currencyName = "euro"
        // }

        let HTMLTemplate = `
            <div class="card bg-info text-light">
                    <div class="card-body">
                        <h5 class="card-title">Cryptocurrency</h5>
                        <img src="${resultData.logo_url}" style="width: 50px" alt="img">
                        <p class="card-text">Price of ${resultData.name} in ${currencyName} is : ${resultData.price}</p>
                        <p class="card-text">Price of last hour : ${resultData["1h"].price_change}</p>
                        <p class="card-text">Price of last day : ${resultData["1d"].price_change}</p>
                        <p class="card-text">Price of last week : ${resultData["7d"].price_change}</p>
                        <p class="card-text">Price of last month : ${resultData["30d"].price_change}</p>
                    </div>
            </div>
        `
        //showing spinner for 2 seconds
        this.showSpinner();
        //showing the result after 2 seconds
        this.showResult(HTMLTemplate);
    }

    //showing the spinner
    showSpinner() {
        const spinnerGif = document.createElement("img");
        spinnerGif.src = "./img/spinner.gif";
        //append spinner gif to html
        document.querySelector(".spinner").appendChild(spinnerGif);
    }
    //showing the result after 2 seconds
    showResult(HTMLTemplate){
        //remove spinner after 2 seconds
        setTimeout(()=> {
          document.querySelector(".spinner img").remove();

          //access to the result div
            const resultDiv = document.querySelector("#result");
          //show the result
            resultDiv.innerHTML = HTMLTemplate;
        },2000)
    }

}
