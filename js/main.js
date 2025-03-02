
// 1st button
document.getElementById("complete-btn-1").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-1")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-1").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString();

    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentTime}</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0";
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    }
})
// 2nd button
document.getElementById("complete-btn-2").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-2")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-2").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString(); 
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentTime}</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0";
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    }
})
// 3rd button
document.getElementById("complete-btn-3").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-3")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-3").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString(); 
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentTime} </p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0";
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    }
})
// 4th button
document.getElementById("complete-btn-4").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-4")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-4").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString(); 
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentTime} </p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0";
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    }
})
// 5th button
document.getElementById("complete-btn-5").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-5")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-5").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString(); 
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentDate} </p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0";
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    }
})
// 6th button
document.getElementById("complete-btn-6").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-6")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-6").innerText;
    let date = new Date();
    let currentTime = date.toLocaleTimeString(); 
    // const assignedNumber = document.getElementById("assigned-number").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at ${currentTime} </p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
    const assignedNumber = document.getElementById("assigned-number").innerText;
    assigned = parseInt(assignedNumber)
    if(assigned === 0){
    alert("congrats you have completed all the task")
    } 

})

// clear history section
document.getElementById("clear-history-btn").addEventListener("click",function(){
    const activity = document.getElementById("activity-box");
    activity.innerText = ''
})

// current date section
let date = new Date();
let currentDate = date.toDateString();
document.getElementById("current-date").innerText = currentDate

// dynamically color change

document.getElementById("color-image").addEventListener("click",function(){
    
    const color = ['violet','orange','green','Chartreuse',"Coral","Khaki","Maroon","Pink"];
    const randomColor = parseInt(Math.random()*color.length)
    document.body.style.backgroundColor = color [randomColor]
})

// 6th card double alert 
