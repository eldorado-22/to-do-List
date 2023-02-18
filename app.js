const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const list = document.querySelector('.list')


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addNew()
    }
})


btn.addEventListener("click", () => {
    addNew()

})

function addNew() {
    if (input.value !== "") {
        const newList = `<li class="list-group-item mx-2 d-flex align-items-center justify-content-between">
${input.value}
<button class="btn btn-danger">Delete</button>
<span>
<input type="checkbox" class="checkbox mx-1">
</span>
</li>`
        list.innerHTML += newList
        input.value = ""
    }
}


list.addEventListener("click", (e) => {
    if (e.target.value.contains("checkbox")) {
        e.target.value.parentNode.remove()
    }
    if (e.target.classList.contains('checkbox')) {
        e.target.parentNode.toggle("line")
    }
})



// const firstInput = document.querySelector('.first-input')
// const secondInput = document.querySelector('.second-input')
// const btn = document.querySelector('.add-btn')
// const ul = document.querySelector('.ul')
//
//
// function view (){
//     const tasks = JSON.parse(localStorage.getItem('task'))
//     ul.innerHTML = ''
//     tasks.map((el, idx) => {
//         ul.innerHTML += `<li class="line-group-item d-flex align-items-center justify-content-between my-2">
// <div class="line">${el.name[0].toUpperCase()}${el.username[0].toUpperCase()}</div> Name:${el.name} Username:${el.username}
// <button class="del-btn btn btn-danger">delete</button>
// </li>`
//     })
//     btnDelete()
//     firstInput.value = ''
//     secondInput.value = ''
// }
// view()
//
//
// btn.addEventListener('click', () => {
//     if (firstInput.value !== '' && secondInput.value !== ''){
//         let tasks = JSON.parse(localStorage.getItem('task'))
//         const newTask = {
//             id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//             name: firstInput.value[0].toUpperCase() + firstInput.value.slice(1),
//             username: secondInput.value[0].toUpperCase() + secondInput.value.slice(1)
//         }
//         tasks = [...tasks, newTask]
//         localStorage.setItem('task', JSON.stringify(tasks))
//         view()
//         firstInput.style.border = '2px solid green'
//         secondInput.style.border = '2px solid green'
//     }else if (firstInput.value === '' && secondInput.value === ''){
//         firstInput.style.border = '3px solid red'
//         secondInput.style.border = '3px solid red'
//     }
// })
// function btnDelete(){
//     let tasks = JSON.parse(localStorage.getItem('task'))
//     const buttons = document.querySelectorAll('.del-btn')
//     buttons.forEach((btn, index) => {
//         btn.addEventListener('click', () => {
//             tasks = tasks.filter((el, idx) => {
//                 return index !== idx
//             })
//             localStorage.setItem('task', JSON.stringify(tasks))
//             view()
//         })
//     })
// }
//
//
