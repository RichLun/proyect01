/* Programa para elegir de forma al delegado de codenotch */
var candidates = [ //objeto json dentro de un array
    {
        name : 'Europa',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Richard',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Javier',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Ronald',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Ariel',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Ruben',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Arya',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'David',
        value : (Math.random() * 10) + 0 
    },
    {
        name: 'Wen',
        value : (Math.random() * 10) + 0 
    }
]

function winner(candidates){
    var max_value = 0; 
    var winner = "";
    for(var i = 0; i < candidates.length; i++){
        if(candidates[i].value > max_value){
            max_value = candidates[i].value;
            winner = candidates[i].name;
        }
    }
    return winner;
}

function show(candidates){
    var winner_candidate = winner(candidates);
    for(var i = 0; i < candidates.length;i++){
        var votes = candidates[i].value.toFixed(2);
        if(winner_candidate == candidates[i].name){

            document.write("<strong>"+winner_candidate+" "+votes+"</strong><br>")
        }else{
            document.write(candidates[i].name+" "+votes+"<br>");
        }
        
    }
}

show(candidates);
