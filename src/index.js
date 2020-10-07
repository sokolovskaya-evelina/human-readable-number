module.exports = function toReadable (number) {
  let numbers = ['zero',
  'one', 
  'two', 
  'three', 
  'four', 
  'five', 
  'six', 
  'seven', 
  'eight', 
  'nine', 
  'ten',    
        'eleven', 
        'twelve', 
        'thirteen', 
        'fourteen', 
        'fifteen', 
        'sixteen', 
        'seventeen', 
        'eighteen', 
        'nineteen',
                    'twenty', 
                    'thirty', 
                    'forty', 
                    'fifty', 
                    'sixty', 
                    'seventy', 
                    'eighty', 
                    'ninety'];
    let result = [];
    if(number > 99)
        result.push(numbers[Math.floor(number / 100)] + ' hundred');
    if(number % 100 != 0){
        if(number % 100 < 21 )
            result.push(numbers[number % 100]);
        else{
            result.push(numbers[Math.floor((number % 100) / 10) + 18]);
            if(number % 10 != 0) result.push(numbers[number % 10]);
        }
    }
    return result.join(' ') || 'zero';
}

