const enterBtn = document.getElementById("enter")
const input = document.getElementById("inp");
const ul = document.querySelector("ul")
const item = document.getElementsByTagName("li");

const inputLength = () => {
    return input.value.length;
}

const listLength =()=>{
    return item.length;
}

function createListElement(){
    const  li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function doneItems(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", doneItems);

    const deletListItem =() =>{
        li.classList.add("delete")
    }

    const delButton = document.createElement("button")
    delButton.appendChild(document.createTextNode("X"));
    li.appendChild(delButton);
    delButton.addEventListener("click", deletListItem);

}

function addlogafterclick(){
    if(inputLength() > 0 ){
        createListElement();
    }
}

enterBtn.addEventListener("click", addlogafterclick);
