class PhoneMask{
    constructor(props) {
        this.props = props;
        let phoneInput = this.props.el;
        let country = this.props.country || 'ru';
        let noMask = this.props.noMask || false;

        let firstNumber = '+7';
        let numberArr = ['7', '8', '9'];
        let cofPlusMinus = 0;

        this.state = {
            firstNumber: firstNumber,
            numberArr: numberArr,
            numberArrRus: numberArr,
            country: country,
            cof: cofPlusMinus,
            noMask: noMask,
            value: phoneInput.value || '',
        };

        phoneInput.value = this.getInputNumbersValue(phoneInput);
        this.onPhoneInput(phoneInput);

        this.onPhoneKeyDown = this.onPhoneKeyDown.bind(this);
        this.onPhoneInput = this.onPhoneInput.bind(this);
        this.onPhonePaste = this.onPhonePaste.bind(this);
        this.getInputNumbersValue = this.getInputNumbersValue.bind(this);

        phoneInput.addEventListener('keydown', this.onPhoneKeyDown);
        phoneInput.addEventListener('input', this.onPhoneInput, false);
        phoneInput.addEventListener('paste', this.onPhonePaste, false);
        
        if(props.onChange){
            phoneInput.addEventListener('focusout', () => props.onChange(this.state.value, this.getInputNumbersValue(this.state)), false);
        }
    }

    getInputNumbersValue(input) {
        // Return stripped input value вЂ” just numbers
        return input.value.replace(/\D/g, '');
    }

    onPhonePaste(e) {
        let input = e.target,
            inputNumbersValue = this.getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol вЂ” remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                this.state.value = inputNumbersValue;
                return;
            }
        }
    }

    onPhoneInput(e) {
        let input = (e === this.props.el) ? e : e.target,
            inputNumbersValue = this.getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            this.state.value = "";
            return input.value = "";
        }

        if (input.value.length !== selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
                this.state.value = inputNumbersValue;
            }
            return;
        }

        if(this.state.country !== 'kg') {
            if (this.state.numberArrRus.includes(inputNumbersValue[0]) || inputNumbersValue[1] === "9") {
                this.state.country = 'ru';
            }
            if (inputNumbersValue[0] === "7" && inputNumbersValue[1] === "7") {
                this.state.country = 'kz';
            }
            if ((inputNumbersValue[0] === "3" && inputNumbersValue[1] === "8") || inputNumbersValue[0] === "0") {
                this.state.country = 'ua';
            }
            if ((inputNumbersValue[0] === "3" && inputNumbersValue[1] === "7") || inputNumbersValue[0] === "5") {
                this.state.country = 'be';
            }
        }

        if(this.state.country === 'ru'){
            this.state.firstNumber = '+7';
            this.state.numberArr = ['7', '8', '9'];
            this.state.cof = 0;
        }else if(this.state.country === 'ua'){
            this.state.firstNumber = '+38';
            this.state.numberArr = ['3','0'];
            this.state.cof = 1;
        }else if(this.state.country === 'kz'){
            this.state.firstNumber = '+7';
            this.state.numberArr = ['7'];
            this.state.cof = 0;
        }else if(this.state.country === 'be'){
            this.state.firstNumber = '+37';
            this.state.numberArr = ['3','5'];
            this.state.cof = 1;
        }else if(this.state.country === 'kg'){
            this.state.firstNumber = '+996';
            this.state.numberArr = ['9','6'];
            this.state.cof = 2;
        }

        if (this.state.numberArr.indexOf(inputNumbersValue[0]) > -1
            && inputNumbersValue.length > ( 1 + this.state.cof)
            && this.state.noMask === false
        ) {

            if(this.state.country === 'ru') {
                if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            }
            if(this.state.country === 'kz') {
                if (inputNumbersValue[0] === "7" && inputNumbersValue.length === 1) inputNumbersValue = "7" + inputNumbersValue;
            }
            if(this.state.country === 'ua') {
                if (inputNumbersValue[0] === "0") inputNumbersValue = "38" + inputNumbersValue;
            }
            if(this.state.country === 'be') {
                if (inputNumbersValue[0] === "5") inputNumbersValue = "37" + inputNumbersValue;
            }
            let firstSymbols = this.state.firstNumber;

            if (inputNumbersValue[0] === "8" && this.state.country === 'ru'){
                firstSymbols = this.state.firstNumber;
            }

            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > (1 + this.state.cof)) {
                formattedInputValue += '(' + inputNumbersValue.substring((1 + this.state.cof), (4 + this.state.cof));
            }
            if (inputNumbersValue.length >= (5 + this.state.cof)) {
                formattedInputValue += ') ' + inputNumbersValue.substring((4 + this.state.cof), (7 + this.state.cof));
            }
            if(this.state.cof < 2) {
                if (inputNumbersValue.length >= (8 + this.state.cof)) {
                    formattedInputValue += '-' + inputNumbersValue.substring((7 + this.state.cof), (9 + this.state.cof));
                }
                if (inputNumbersValue.length >= (10 + this.state.cof)) {
                    formattedInputValue += '-' + inputNumbersValue.substring((9 + this.state.cof), (11 + this.state.cof));
                }
            }else{
                if (inputNumbersValue.length >= (8 + this.state.cof)) {
                    formattedInputValue += '-' + inputNumbersValue.substring((7 + this.state.cof), (10 + this.state.cof));
                }
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
        this.state.value = formattedInputValue;
    }

    onPhoneKeyDown(e) {
        // Clear input after remove last symbol
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode === 8 && inputValue.length === 1) {
            e.target.value = "";
            this.state.value = "";
        }
    }
}

export default PhoneMask;