var meinbody = document.getElementById("mein-body");
var button = document.querySelector(".btn");
var deleteButton = document.querySelector(".delete")
button.addEventListener("click",()=>{
    //creatin a div
    const output = document.createElement("div");
    output.classList.add("output");
    meinbody.appendChild(output);
    //creating a textarea
    const textarea = document.createElement("textarea");
    textarea.setAttribute("id",("textarea"));
    output.appendChild(textarea);
    //creatin delete button
    const deletebutton = document.createElement("input");
    deletebutton.setAttribute("type", "button");
    deletebutton.classList.add("delete");
    deletebutton.setAttribute("value", "delete");
    output.appendChild(deletebutton)
    
    deletebutton.addEventListener("click", ()=>{
        meinbody.removeChild(output);
    })
})
