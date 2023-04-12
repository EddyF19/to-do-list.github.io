// Shorthand to document.querySelector
const $ = document.querySelector.bind(document);

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');



// Event Listener para el Add Button

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');
        

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "")
    {
        alert('Please Enter a Task')
    }
    else
    {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = 'line-through'
    })

    deleteButton.addEventListener('click', function(){
        deleteButton.parentElement.remove();
    })

    // Poder modificar el texto con Doble Click
    li.addEventListener('dblclick', function(){
        texto = prompt("Digite el nuevo nombre para la tarea");
        while(texto === '')
        {
            alert("Este campo no puede quedar vacio")
            texto = prompt("Digite el nuevo nombre para la tarea");
        }
        li.textContent = texto;
    })
});