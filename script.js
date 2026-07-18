



const pushEl = document.querySelector('.push');
const inputEl = document.querySelector('input');
const containerEl = document.querySelector('.container');
// let taskTitle;


pushEl.addEventListener('click', addTask);

function addTask(){
   
    if(inputEl.value === ''){
        alert("Empty task cannot be add");
    }else{
        pushTask();
        inputEl.value = '';
        }
    
}

function pushTask(){
    const taskList = document.createElement('div');
    
    taskList.classList.add('task-list');
    containerEl.append(taskList);

    const taskTitle = document.createElement('span')
    taskTitle.classList.add('task-title');
    taskTitle.textContent = inputEl.value;
    taskList.append(taskTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deletebtn');
    deleteBtn.innerHTML = `<i class="ri-delete-bin-line" id="delete"></i> `;
    taskList.append(deleteBtn);
}



containerEl.addEventListener('click', handleTaskClick);

function handleTaskClick () {

    if (event.target.classList.contains('task-title')) {
        const currentTask = event.target.closest('.task-list');
        // console.log(currentTask.classList.toggle("completed"));
        if(currentTask.classList.toggle("completed")){
            redToGreen(currentTask);
        }else{
            greenToRed(currentTask);
           }   
    }

    const deleteBtn = event.target.closest(".deletebtn");
    if(deleteBtn){
       deleteTask(deleteBtn);
    }
};

function redToGreen(currentTask){
    currentTask.style.boxShadow =  "0px 6px 1px rgb(48, 221, 0) , 0px -3px 15px rgba(8, 8, 8, .3) ";

}

function greenToRed(currentTask){
    currentTask.style.boxShadow = " 0px 6px 1px rgba(255, 25, 0, 0.9) ,  0px -3px 15px rgba(8, 8, 8, 0.3)";

}

function deleteTask(deleteBtn){
    deleteBtn.closest('.task-list').remove();
}
