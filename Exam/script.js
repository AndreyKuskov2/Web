count = 1

function change_square(button, button_id)
{
    if(button === "") 
    {
        if (count % 2 == 1)
            document.getElementById(button_id).innerHTML = "X";
        else
            document.getElementById(button_id).innerHTML = "0";
        count++;
    }
}

function square_1()
{     
    button = document.getElementById("button_1").innerHTML;
    change_square(button, "button_1")
    result();     
}

function square_2()
{     
    button = document.getElementById("button_2").innerHTML;
    change_square(button, "button_2")
    result();     
}

function square_3()
{     
    button = document.getElementById("button_3").innerHTML;
    change_square(button, "button_3")
    result();     
}

function square_4()
{     
    button = document.getElementById("button_4").innerHTML;
    change_square(button, "button_4")
    result();     
}

function square_5()
{     
    button = document.getElementById("button_5").innerHTML;
    change_square(button, "button_5")
    result();     
}

function square_6()
{     
    button = document.getElementById("button_6").innerHTML;
    change_square(button, "button_6")
    result();     
}

function square_7()
{     
    button = document.getElementById("button_7").innerHTML;
    change_square(button, "button_7")
    result();     
}

function square_8()
{     
    button = document.getElementById("button_8").innerHTML;
    change_square(button, "button_8")
    result();     
}

function square_9()
{     
    button = document.getElementById("button_9").innerHTML;
    change_square(button, "button_9")
    result();     
}

function result()
{
    btn1 = document.getElementById("button_1").innerHTML;
    btn2 = document.getElementById("button_2").innerHTML;
    btn3 = document.getElementById("button_3").innerHTML;
    btn4 = document.getElementById("button_4").innerHTML;
    btn5 = document.getElementById("button_5").innerHTML;
    btn6 = document.getElementById("button_6").innerHTML;
    btn7 = document.getElementById("button_7").innerHTML;
    btn8 = document.getElementById("button_8").innerHTML;
    btn9 = document.getElementById("button_9").innerHTML;
    field = [
        [btn1, btn2, btn3],
        [btn4, btn5, btn6],
        [btn7, btn8, btn9]
        ];
    if (field[0][0] === "X" && field[0][1] === "X" && field[0][2] === "X"){
        alert('Выиграл X!');
        location.reload();
    }
    else if (field[0][0] === "0" && field[0][1] === "0" && field[0][2] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[1][0] === "X" && field[1][1] === "X" && field[1][2] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[1][0] === "0" && field[1][1] === "0" && field[1][2] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[2][0] === "X" && field[2][1] === "X" && field[2][2] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[2][0] === "0" && field[2][1] === "0" && field[2][2] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[0][0] === "X" && field[1][0] === "X" && field[2][0] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[0][0] === "0" && field[1][0] === "0" && field[2][0] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[0][1] === "X" && field[1][1] === "X" && field[2][1] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[0][1] === "0" && field[1][1] === "0" && field[2][1] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[0][2] === "X" && field[1][2] === "X" && field[2][2] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[0][2] === "0" && field[1][2] === "0" && field[2][2] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[0][0] === "X" && field[1][1] === "X" && field[2][2] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[0][0] === "0" && field[1][1] === "0" && field[2][2] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (field[0][2] === "X" && field[1][1] === "X" && field[2][0] === "X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (field[0][2] === "0" && field[1][1] === "0" && field[2][0] === "0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (count == 10){
        alert('Ничья!');  
        location.reload(); 
    }
}