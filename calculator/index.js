
var newLine = true;
function numberBtnPressed(button)
    {   
        if(newLine){
            document.getElementById("InputBox").value = button;
            newLine = false;
        }
        else{
            var currentNum = document.getElementById("InputBox").value
            document.getElementById("InputBox").value = currentNum + button;
        }
    }