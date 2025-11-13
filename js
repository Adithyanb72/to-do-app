let box = []
document.getElementById("addbtn").addEventListener("click", addtask)
document.getElementById("viewall").addEventListener("click", viewtasks)
document.getElementById("markall").addEventListener("click", showmark)

function addtask() {
  let taskinput = document.getElementById("data")
  let taskvalue = taskinput.value
  if (taskvalue === "") {
    window.alert("Please enter a task")
    return
  }
  box.push(taskvalue)
  displaytasks()
  taskinput.value =""
}
function displaytasks() {
  let removediv = document.getElementById("remove")
  removediv.innerHTML = ""
  box.map((task, index) => {
    let div = document.createElement("div")
    div.textContent = task
    let btn = document.createElement("button")
    btn.textContent = "Remove"
    btn.onclick = function () {
      removetask(index)
    }
    div.appendChild(btn)
    removediv.appendChild(div)
  })
}
function removetask(index) {
  box.splice(index, 1)
  displaytasks()
}
function viewtasks() {
  let viewdiv = document.getElementById("viewdata")
  if (box.length == 0) {
    viewdiv.textContent = "No tasks found"
  } else {
    viewdiv.textContent = box.join(", ")
  }
}
function showmark() {
  let markdiv = document.getElementById("mark")
  markdiv.innerHTML = ""
  let mainbutton = document.createElement("button")
  mainbutton.textContent = "mark"
  mainbutton.onclick = showmark
  markdiv.appendChild(mainbutton)
  box.map((task, index) => {
    let div = document.createElement("div")
    let span = document.createElement("span")
    span.textContent = task
    let btn = document.createElement("button")
    btn.textContent = "Mark Done"
    btn.onclick = function () {
      span.style.color = "green"
      btn.disabled = true 
    }
    div.appendChild(span)
    div.appendChild(btn)
    markdiv.appendChild(div)
  })
}
