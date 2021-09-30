function test(){
    var selectElem = document.getElementById("card-select")
    choice = selectElem.selectedIndex
    value = selectElem.options[choice].value
    console.log(value)

    var maRegExp = new RegExp("^abc$", "i");

    var form = document.getElementById("formulaire").value

    if (maRegExp.test(form)){
        console.log("ok")
        }
        else{
        console.log("pas ok");
        }
    
}

