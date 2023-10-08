const optionBtns = document.querySelectorAll(".option-button");
const advOptionBtns = document.querySelectorAll(".adv-option-button");
const fontName = document.getElementById("fontName");
const fontSizeRef = document.getElementById("fontSize");
const scriptButtons = document.querySelectorAll(".script");
const formatButtons = document.querySelectorAll(".format");
const alignButtons = document.querySelectorAll(".align");
const writingArea = document.getElementById("text-input");

const fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];

const initializer = () =>{
    highlighter(alignButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value)=>{
        let option = document.createElement("option");
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option);
    });

    for(let i=1; i<=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option)
    };
};

const modifyText = (command, defaultUi, value)=>{
    document.execCommand(command, defaultUi, value);
}

optionBtns.forEach(button => {
    button.addEventListener("click", ()=>{
        modifyText(button.id, false, null);
    })
})

advOptionBtns.forEach(button=>{
    button.addEventListener("click", ()=>{
        modifyText(button.id, false, button.value);
    })
})

const highlighter = (className, needsRemoval) =>{
    className.forEach(button => {
        button.addEventListener("click", ()=>{
            if(needsRemoval){
                let alreadyActive = false;

                if(button.classList.contains("active")){
                    alreadyActive=true;
                }
                highlighterRemover(className);

                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) =>{
    className.forEach(button => {
        button.classList.remove("active");
    });
};

window.onload = initializer();