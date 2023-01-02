{
    const calculateResult = (inputCurrency, outputCurrency, inputAmount) => {

        const pln_eur = 0.213;
        const pln_usd = 0.226;
        const eur_usd = 1.061;

        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN")
                    result = (inputAmount * 1);
                else if (outputCurrency === "EUR")
                    result = (inputAmount * pln_eur);
                else if (outputCurrency === "USD")
                    result = (inputAmount * pln_usd);
                break;

            case "EUR":
                if (outputCurrency === "PLN")
                    result = (inputAmount / pln_eur);
                else if (outputCurrency === "EUR")
                    result = (inputAmount * 1);
                else if (outputCurrency === "USD")
                    result = (inputAmount * eur_usd);
                break;

            case "USD":
                if (outputCurrency === "PLN")
                    result = (inputAmount / pln_usd);
                else if (outputCurrency === "EUR")
                    result = (inputAmount / eur_usd);
                else if (outputCurrency === "USD")
                    result = (inputAmount * 1);
                break;
        }
    }
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputAmountElement = document.querySelector(".js-inputAmount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");

        const inputAmount = inputAmountElement.value;
        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        let result = calculateResult(inputAmountElement, inputCurrencyElement, outputCurrencyElement);

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}
