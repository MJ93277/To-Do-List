const pushEl = document.querySelector('.push');
const inputEl = document.querySelector('input');
const containerEl = document.querySelector('.container');
// let taskTitle;


pushEl.addEventListener('click', () => {
   
    if(inputEl.value === ''){
        alert("Empty task cannot be add");
    }else{
        
            const taskList = document.createElement('div');
            taskList.classList.add('task-list');
            // taskList.style.boxShadow = "0px -3px 1px rgba(255, 25, 0, 0.9) inset, 0px -3px 15px rgba(8, 8, 8, 0.3)";
            taskList.style.boxShadow = "0px -3px 1px rgba(255, 25, 0, 0.9) inset, 0px 3px 1px rgb(255, 25, 0) inset";
            containerEl.append(taskList)


            

            const taskTitle = document.createElement('span')
            taskTitle.classList.add('task-title');
            taskTitle.textContent = inputEl.value;
            taskList.append(taskTitle);


            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deletebtn');
            deleteBtn.innerHTML = `<i class="ri-delete-bin-line" id="delete"></i> `;
            taskList.append(deleteBtn);

        inputEl.value = '';

      


        }
    
});


    const taskTitle = document.querySelectorAll('.container div span');
    const taskList = document.querySelectorAll('.container .task-list')
    
        let divColor = "red";

containerEl.addEventListener('click', (event) => {

    if (event.target.classList.contains('task-title')) {

        const currentTask = event.target.closest('.task-list');
        
        // console.log(currentTask.style.boxShadow, "\n", divColor)
        console.log(divColor)
        if(divColor!== "green"){
            currentTask.style.boxShadow =  "0px -3px 1px rgb(48, 221, 0) inset, 0px 3px 1px rgb(48, 221, 0) inset";
            divColor = "green";
            console.log("true")
        }else{
            currentTask.style.boxShadow = "0px -3px 1px rgba(255, 25, 0, 0.9) inset, 0px 3px 1px rgb(255, 25, 0) inset";
            divColor = "red"
            console.log("false")
        }
    }

    const deleteBtn = event.target.closest(".deletebtn");
    if(deleteBtn){
       event.target.closest('div').style.display = "none";
    }
});

