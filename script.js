function addTask() {
    let input = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (input.value === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    
    // Adiciona evento para remover a tarefa ao clicar nela
    li.onclick = function() {
        this.remove();
    };

    taskList.appendChild(li);
    input.value = ""; // Limpa o campo de entrada
}
