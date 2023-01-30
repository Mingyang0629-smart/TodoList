const input = document.getElementById("Todo-Input")
const button = document.getElementById("Todo-Button")
const form = document.getElementById("Todo")
const container = document.getElementById("List")
input.spellcheck = true
setInterval(() => {
    if (Notification.permission == "granted") {
        new Notification("Reminder to look at your todo list", {
            icon: "COol (1).png",

            body: "Listen if you are angry about these notfications, remeber you made these"
        })
    } 
}, 1000000);

button.addEventListener("click", () => {

    if (!input.value) return alert("Please add something to the task")
   
    const task = document.createElement("p")
    
    task.innerText = input.value
   
    task.classList.add("Containers")
   
    container.append(task)
    input.value = ""
    task.addEventListener("click", () => {
        if (!task.classList.contains("done")) {
            task.classList.add("done")
        }
        else {
            task.classList.remove("done")
        }

    })

    task.addEventListener("dblclick" ,() => {
        task.style.fontSize = "0";
        task.style.margin = "0";
        setTimeout(() => {
            task.remove() 
        }, 1000);
        
        
    })
    
})