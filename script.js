const inputBox =  document.getElementById('task')
const taskList =  document.querySelector('.task-list')
const addButton =  document.querySelector('#btn')


function taskAdd(){
    if(inputBox.value === ''){
        alert("Please Add A Task First")
    }else{
        let li = document.createElement('li')
        li.innerHTML= inputBox.value
        taskList.appendChild(li)

        let cross = document.createElement('span')
        cross.innerHTML = '✖'
        li.appendChild(cross)
    }
    inputBox.value = ''
    savingData()
}
addButton.addEventListener('click', taskAdd)

taskList.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        savingData();
    }else if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove()
        savingData();
    }
},false)


function savingData(){
    localStorage.setItem('data', taskList.innerHTML)
}
function showData(){
    taskList.innerHTML = localStorage.getItem('data')
}
showData()