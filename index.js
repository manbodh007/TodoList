var add_btn = document.getElementById('add');
add_btn.addEventListener('click',addTask);

var count_task =0;
function addTask(){
   
    var todo_list = document.getElementById('todo-list');
// fetch the input task
    var task = document.querySelector('input').value;
//create list item under ul
    var list = document.createElement('li');
//set the attribute for all list item
    list.setAttribute('id',"item"+count_task);
    count_task++;
    todo_list.appendChild(list);
//create the checkbox
    var input = document.createElement('input');
    input.setAttribute('type','checkbox');
    list.appendChild(input);
// remaining task
    var span = document.createElement('span');
    span.innerText = task;
// create delete button
    var delete_btn = document.createElement('button');
    delete_btn.innerText = "Delete";
    delete_btn.setAttribute("class","delete-btn");
// append checkbox task and delete button in the list 
    list.appendChild(input);
    list.appendChild(span);
    list.appendChild(delete_btn);  
//print update task number
    printRemainingTask();
//fetch all the delete button
    var delete_btn = document.getElementsByClassName('delete-btn');
// remove all the task when delete button is pressed
    for(let i=0;i<=delete_btn.length;i++){
         delete_btn[i].addEventListener('click',function(){
         let id = "item"+i;
         let item = document.getElementById(id);
         item.remove();
         count_task--;
         printRemainingTask();
      })
   }
  
}
function printRemainingTask(){
    var remaining_task = document.getElementById('todo-task');
    remaining_task.innerText = count_task+" tasks left";
}