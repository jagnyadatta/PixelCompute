const fromCurrency = document.getElementById("fromCurr");
const toCurrency = document.getElementById("toCurr");
const convertButton = document.getElementById("convert");

window.addEventListener("DOMContentLoaded", async()=>{
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,currencies,flag");
    const countries = await response.json();
    // console.log(countries[0]);
    const countryOptions = countries.map((country)=>{
        const name = country.name.common;
        const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : null;
        if(currencyCode){
            return `<option value="${currencyCode}">
                        ${name} - (${currencyCode})
                    </option>`
        }
    })
    .join("");
    // console.log(countryOptions);
    fromCurrency.innerHTML = countryOptions;
    toCurrency.innerHTML = countryOptions;

    convertButton.addEventListener("click", async()=>{
        const inputVal = document.getElementById("amount").value;
        const resultMsg = document.querySelector(".result");
        const errorMsg = document.querySelector(".error");
        const fromCurrVal = document.getElementById('fromCurr').value;
        const toCurrVal = document.getElementById('toCurr').value;

        // console.log(fromCurrVal);
        // console.log(toCurrVal);
        try{
            const result = await fetch(`https://v6.exchangerate-api.com/v6/47851e9fb73e5e10c6d133f2/pair/${fromCurrVal}/${toCurrVal}`);
            const values = await result.json();
            const convValue = values["conversion_rate"];
            if(convValue){
                resultMsg.innerText = `${inputVal} ${fromCurrVal} = ${inputVal * convValue} ${toCurrVal}`;
                resultMsg.style.display = "block";
            }
        }catch(error){
            errorMsg.style.display = "block";
        }
    });
});
