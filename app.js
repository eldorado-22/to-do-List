const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const list = document.querySelector(".list")



const classes = {
    li: "list-group-item d-flex justify-content-between align-items-center",
    delBtn: "del-btn btn btn-danger"
}

function view() {
    const webs = JSON.parse(localStorage.getItem("task")) || []
    let allList = ""
    webs.map(el =>
        allList += `<li class="${classes.li}"><span>
<input type="checkbox" class="mx-1">${el.title}
</span><button class="${classes.delBtn}">delete</button>
<li>`)
    list.innerHTML = allList
    deleteTask()
    lines()
}

view()

btn.addEventListener("click", () => {
    let webs = JSON.parse(localStorage.getItem("task")) || []
    const newTask = {
        id: webs.length ? webs[webs.length - 1].id + 1 : 1, title: input.value,
        isDone: false
    }
    webs = [...webs, newTask]
    localStorage.setItem("task", JSON.stringify(webs))
    view()
})

function lines() {
    list.addEventListener("click", (e) => {
        if (e.target.value.contains("checkbox")) {
            e.target.value.parentNode.remove()
        }
        if (e.target.classList.contains('checkbox')) {
            // if(!e.target.parentNode.classList.contains("line")){
            //     e.target.parentNode.classList.add("line")
            // }else{
            //     e.target. parentNode.classList.remove("line")
            // }
            e.target.parentNode.toggle("line")
        }
    })

}

function deleteTask() {
    const buttons = document.querySelectorAll(".del-btn")
    let webs = JSON.parse(localStorage.getItem("task")) || []
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            webs = webs.filter((el, idx) => {
                return index !== idx
            })
            localStorage.setItem("task", JSON.stringify(webs))
            view()
        })
    })

}