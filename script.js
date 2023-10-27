const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    var userTask = document.getElementById("userTask");
    var userTask_Value = userTask.value.trim();

    if(userTask_Value === ''){
        alert("You Must Write Something!!!");
        return;
    }
    
        var list_Item = document.createElement("li");
        list_Item.className = "item_todo";
        list_Item.innerHTML = `
        <br><br><br><br>
        
        <button class="done-btn" onclick="taskDone(this)"></button>
        <span>${userTask_Value}</span>
        <button class="delbtn" onclick="delTask(this)">X   </button>
       `; 
        userTask_List.appendChild(list_Item);
        var list_item = button.parentElement;
       

        userTask.value = "";
   
}


function delTask(button){
    var userTask_List = document.getElementById("userTask_List");
    var list_Item = button.parentElement;
    userTask_List.removeChild(list_Item);
}

function taskDone(button){
    var list_Item = button.parentElement;
    list_Item.classList.toggle("task-done");
}

