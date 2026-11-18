var input = document.getElementById("taskInput");
var botao = document.getElementById("addTaskBtn");
var lista = document.getElementById("taskList");


botao.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
    if (input.value == ""){
        alert("Digite uma tarefa")
        }else{
            var li = document.createElement("li");
            var botaoDel = document.createElement("button");
            li.innerHTML = input.value;
            botaoDel.innerHTML = "X";
            li.appendChild(botaoDel);
            lista.appendChild(li);

            botaoDel.addEventListener("click", function(){
                lista.removeChild(li);
        });

        input.value = "";
        
    }   
}



