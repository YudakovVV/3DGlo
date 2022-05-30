const forms = ({
    textSelector,
    phoneSelector,
    emailSelector,
    placeholderSelector
}) => {
    const textInput = document.querySelector(textSelector)
    const phoneInput = document.querySelector(phoneSelector)
    const emailInput = document.querySelector(emailSelector)
    

    const validText = function (e) {
        this.value = e.target.value.replace(/[^А-Яа-яёЁ]/gi, '')
    }

    textInput.addEventListener('input', validText)
    phoneInput.addEventListener('input', (e) => {
        phoneInput.value = e.target.value.replace(/[^0-9-()+]/gi, '')
    })
    emailInput.addEventListener('input', (e) => {
        emailInput.value = e.target.value.replace(/[^a-zA-Z.@~*!'_-]/gi, '')
    })

    if (typeof placeholderSelector === 'string') {
        const placeholderInput = document.querySelector(placeholderSelector)
        placeholderInput.addEventListener('input', validText)
    }
}

export default forms