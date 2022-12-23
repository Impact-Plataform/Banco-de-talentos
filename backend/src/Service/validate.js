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
}