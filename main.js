//select poppup overlay, poppup box
var poppupoverlay = document.querySelector(".poppup-overlay")
var poppupbox = document.querySelector(".poppup-box")
var addbutton =document.getElementById("add-popup")

addbutton.addEventListener("click",function(){
    poppupoverlay.style.display = "block" 
    poppupbox.style.display = "block" 
})

//select cancel button
var cancelbtn = document.getElementById("cancel-btn")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    poppupoverlay.style.display = "none" 
    poppupbox.style.display = "none" 

})

//select container,addbutton,forminput

var container= document.querySelector(".container") 
var addbtn = document.getElementById("add-btn")
var title = document.getElementById("title-input")
var date = document.getElementById("date-input")
var venue = document.getElementById("venue-input")
var timing = document.getElementById("timing-input")
var description = document.getElementById("description-input")
var organizer = document.getElementById("organizer-input")
var deletebutton = document.querySelector(".btn")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","event-container")
    div.innerHTML=`<h3>${title.value}</h3>
    <h3>${date.value}</h3>
    <h3>${venue.value}</h3>
   <h3>${timing.value}</h3>
   <h3>${description.value}</h3>
   <h3>${organizer.value}</h3>
   <button class="btn">Delete</button>`;
  container.append(div);
  poppupoverlay.style.display = "none"; 
  poppupbox.style.display = "none";
})
//delete
 
container.addEventListener("click",function(event){
    if(event.target.classList.contains("btn")){
    event.target.parentElement.remove()
    }
});
   
