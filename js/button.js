
// 1st button
document.getElementById("complete-btn-1").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-1")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-1").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})
// 2nd button
document.getElementById("complete-btn-2").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-2")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-2").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})
// 3rd button
document.getElementById("complete-btn-3").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-3")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-3").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})
// 4th button
document.getElementById("complete-btn-4").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-4")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-4").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})
// 5th button
document.getElementById("complete-btn-5").addEventListener("click",function(){
    alert("Board Update Successfully")
    const getBtn =document.getElementById("complete-btn-5")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-5").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})
// 6th button
document.getElementById("complete-btn-6").addEventListener("click",function(){
    alert("Board Update Successfully")
    alert("Congrats You Have Completed All The Current Task ")
    const getBtn =document.getElementById("complete-btn-6")
    const convertedNumber =  convertStringToNumber("assigned-number")
    const convertTaskNumber = convertStringToNumber("task-number");
    const activityBox = document.getElementById("activity-box")
    const cardHeading = document.getElementById("card-heading-6").innerText;
    
    if(getBtn){
        const subtract = convertedNumber - 1;
        document.getElementById("assigned-number").innerText = subtract
        const sum =convertTaskNumber + 1;
        document.getElementById("task-number").innerText = sum 
    }
    const newPara = document.createElement("p");
    newPara.innerHTML =`
    <p class=" bg-green-50 rounded-lg p-2 "> You have Complete The Task ${cardHeading} at 12:48:15 PM</p>
    `
    activityBox.appendChild(newPara);
    getBtn.setAttribute("disabled",true)
    getBtn.style.backgroundColor = "#C0C0C0"
})

// clear history section
document.getElementById("clear-history-btn").addEventListener("click",function(){
    const activity = document.getElementById("activity-box");
    activity.remove()
})
