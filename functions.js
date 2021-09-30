function test(){
    var selectElem = document.getElementById("card-select")
    choice = selectElem.selectedIndex
    value = selectElem.options[choice].value

    switch(value){
        case 'visa':
            var maRegExp = new RegExp("^visa$", "i");
        break;
        case 'mastercard':
            var maRegExp = new RegExp("^mastercard$", "i");
        break;
        case 'amex':
            var maRegExp = new RegExp("^amex$", "i");
        break;
        case 'dinnerclub':
            var maRegExp = new RegExp("^dinnerclub$", "i");
        break;
        case 'discover':
            var maRegExp = new RegExp("^discover$", "i");
        break;
    }

    var form = document.getElementById("formulaire").value

    if (maRegExp.test(form)){
        console.log("ok")
        }
        else{
        console.log("pas ok");
        }
    
}

