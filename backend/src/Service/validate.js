class Validate{
    static validateText(str){
        if(typeof(str) == 'string'){
            return str.length > 3
        }else{
            return false
        }
    }

    static validateNumber(num){
        return typeof(num) == 'number'
    }

    static isValid(name, descripiton, price, color, weight, height){
        return this.validateText(name) && this.validateText(descripiton) && this.validateText(color) && this.validateText(weight) && this.validateText(height) && this.validateNumber(price)
    }
}

export default Validate