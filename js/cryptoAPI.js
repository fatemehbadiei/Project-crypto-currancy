class CryptoAPI{
    constructor() {
        this.apiKey = "69d7d9e0cc32765893b34b47ce3c4e9cba78f316";
    }
    //query api
    async queryAPI(currency , cryptocurrency){
        //build url
        let url =`https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`

        //fetch url
        const response = await fetch(url);
        //return json
        const getResult = await response.json();
        //return object
        return{
            getResult
        }
    }
}
