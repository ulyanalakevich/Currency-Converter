{
    const calculateResult = (inputCurrencyElement, outputCurrencyElement, inputAmountElement) => {
        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        const inputAmount = inputAmountElement.value
        const pln_eur = 0.213;
        const pln_usd = 0.226;
        const eur_usd = 1.061;

        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN")
                    return (inputAmount * 1);
                else if (outputCurrency === "EUR")
                    return (inputAmount * pln_eur);
                else if (outputCurrency === "USD")
                    return (inputAmount * pln_usd);


            case "EUR":
                if (outputCurrency === "PLN")
                    return (inputAmount / pln_eur);
                else if (outputCurrency === "EUR")
                    return (inputAmount * 1);
                else if (outputCurrency === "USD")
                    return (inputAmount * eur_usd);

            case "USD":
                if (outputCurrency === "PLN")
                    return (inputAmount / pln_usd);
                else if (outputCurrency === "EUR")
                    return (inputAmount / eur_usd);
                else if (outputCurrency === "USD")
                    return (inputAmount * 1);

        }
    }
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputAmountElement = document.querySelector(".js-inputAmount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");


        let result = calculateResult(inputCurrencyElement, outputCurrencyElement, inputAmountElement);

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}
