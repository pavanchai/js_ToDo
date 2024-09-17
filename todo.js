const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list =document.querySelector("#list")
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
const TODOS_STORAGE_KEY =`${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()
todos.forEach(renderTodo)


form.addEventListener("submit",e =>{
e.preventDefault()

const todoName= todoInput.value
if(todoName === "") return
todos.push(todoName)
renderTodo(todoName)
saveTodo()
todoInput.value=""

})

function renderTodo(todoName){
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector("[data-list-item-text]")
    textElement.innerText = todoName
    list.appendChild(templateClone)

}
// load todos
function loadTodos(){
    const todoString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todoString) || []
}

// save todos
function saveTodo(){
    localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}