const todoList = [{name:'make dinner', duedate : '12-20-2024'
}, {name : 'wash dishes', duedate: '12-09-24'}];

rendertodolist();

function rendertodolist()
{     
  let todolisthtml = '';
  for(let i = 0; i <  todoList.length ; i++)
  {
    const todoname = todoList[i].name;
    const tododuedate = todoList[i].duedate;
    const html = `<p>
    <div>${todoname}</div>
    <div>${tododuedate}</div>
    <button class= "js-delete" onclick ="
    todoList.splice(${i},1);
    rendertodolist();
    ">Delete</button>
    </p>`;
    todolisthtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML= todolisthtml;
}
function addtodo()
{
  const inputname = document.querySelector('.js-name-input');
  const inputduedate = document.querySelector('.js-duedate');
  todoList.push({
    name: inputname.value,
    duedate: inputduedate.value
  });
  inputname.value='';
  inputduedate.value='';
  rendertodolist();
}