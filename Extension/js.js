let array = []
let count = 0

const inputText = document.getElementById("textBox")
const inputBtn = document.getElementById("inputButton")
const unordList = document.getElementById("sitesList")
const deleteBtn = document.getElementById("deleteButton")
const tabBtn = document.getElementById("tabButton")

let sitesFromStorage = JSON.parse(localStorage.getItem("array"))
if(sitesFromStorage)
{
    array = sitesFromStorage
    renderSites()
}
inputBtn.addEventListener("click", function () {
    array.push(inputText.value)
    inputText.value =""
    localStorage.setItem("array" , JSON.stringify(array))
    renderSites()
    console.log(localStorage.getItem("array"))

})

tabBtn.addEventListener("click",function(){
    
    browser.tabs.query({active:true , currentWindow: true},function(tabs){
        
        array.push(tabs[0].url)
        localStorage.setItem("array",JSON.stringify(array))
        renderSites()
    })
    
})

deleteBtn.addEventListener("dblclick" ,function(){
    localStorage.clear()
    array = []
    renderSites()

})

function renderSites(){

    let listItems =""
    for (let i= 0 ; i<array.length ; i++)
    {
        listItems += `<li>
        <a target='_blank' href= "${array[i]}">
        ${array[i]}
        </a>
        </li>`
    }  
    unordList.innerHTML = listItems
}

