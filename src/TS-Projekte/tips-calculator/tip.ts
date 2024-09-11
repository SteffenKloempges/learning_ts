const calcBtn = document.querySelector('#calcBtn') as HTMLInputElement;

calcBtn.addEventListener('click', () => {
    const invoiceAmount = document.querySelector('#invoiceAmount') as HTMLInputElement;
    const numberOfPerson = document.querySelector('#numberOfPerson') as HTMLInputElement;
    const selectService = document.querySelector('#selectService') as HTMLSelectElement;
    const output = document.querySelector('#output') as HTMLElement;

    if (invoiceAmount.value && numberOfPerson.value && selectService.value) {
        const total: number = Number(invoiceAmount.value) * Number(selectService.value);
        const onlyTip: number = total - Number(invoiceAmount.value);
        const perPerson: number = total / Number(numberOfPerson.value);

        output.innerHTML = `
                <p>Total: ${total.toFixed(2)}</p>
                <p>Tip: ${onlyTip.toFixed(2)}</p>
                <p>Per Person: ${perPerson.toFixed(2)}</p>
        `

    } else {
        output.innerHTML = "<p>Please select everything to start a calculation!</p>"
    }
})