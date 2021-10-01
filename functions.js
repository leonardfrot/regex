function test(){
    var selectElem = document.getElementById("card-select")
    choice = selectElem.selectedIndex
    value = selectElem.options[choice].value

    switch(value){
        case 'visa':
            var maRegExp = new RegExp("^4[1-9]{12}([1-9]{3})*$", "i");
        break;
        case 'mastercard':
            var maRegExp = new RegExp("^5[1-5][1-9]{14}$", "i");
        break;
        case 'amex':
            var maRegExp = new RegExp("^3(4|7)[1-9]{13}$", "i");
        break;
        case 'dinnerclub':
            var maRegExp = new RegExp("^3(?:0[0-5]|[68][0-9])[0-9]{11}", "i");
        break;
        case 'discover':
            var maRegExp = new RegExp("^6001[1-9]{12}$", "i");
        break;
    }

    var form = document.getElementById("formulaire").value

    if (maRegExp.test(form)){
        console.log("ok")
        }
        else{
        console.log("pas ok")
        console.log(maRegExp.exec())
        }
    
}
//|  ^6001[1-9]{12}$

