
$body = document.querySelector("body")
$body.style.backgroundColor = "#eee";

let $ContentBox = document.createElement("div")
$ContentBox.className = "ContentBox"
$body.appendChild($ContentBox)

let $BoxWrap = document.createElement("div")
$BoxWrap.className = "BoxWrap"
$ContentBox.appendChild($BoxWrap)

let $Title = document.createElement("h1")
$Title.innerText = "TodoList"
$BoxWrap.appendChild($Title)

let $AddText = document.createElement("input")
$AddText.className="TitleInput"
$AddText.placeholder = "오늘의 할일은?"
$BoxWrap.appendChild($AddText)

let $ClickBtn = document.createElement("button")
$ClickBtn.className = "AddListBtn"
$ClickBtn.innerText = "ADD"
$BoxWrap.appendChild($ClickBtn)

let $ListBox = document.createElement("ul")
$ListBox.className = "ListBox"
$BoxWrap.appendChild($ListBox)


function saveToLocalStorage() {
    const items = [];
    const $items = document.querySelectorAll(".ListBox li");
    $items.forEach(($item) => {
        const text = $item.firstChild.textContent;
        items.push(text);
    });
    localStorage.setItem("todoList", JSON.stringify(items));
}

function loadFromLocalStorage() {
    const storedItems = localStorage.getItem("todoList");
    if (storedItems) {
        const items = JSON.parse(storedItems);
        items.forEach((el) => {
            const $list = document.createElement("li");
            $list.innerText = el;

            const $RemoveBtn = document.createElement("button");
            $RemoveBtn.innerText = "삭제";

            $list.appendChild($RemoveBtn);
            $ListBoxs.appendChild($list);

            $RemoveBtn.addEventListener("click", () => {
                if (confirm("정말로 삭제하시겠습니까?")) {
                    $list.remove();
                    saveToLocalStorage();
                }
            });
        });
    }
}
// 기존코드
const $AddListBtn = document.querySelector(".AddListBtn")
const $ListBoxs = document.querySelector(".ListBox")
const $ListRemove = document.querySelector(".RemoveBtn")

$AddListBtn.addEventListener("click",()=>{
    let $list = document.createElement("li")
    let $RemoveBtn = document.createElement("button")
    
    if(!$AddText.value){
        alert("내용을 입력해주세요.");
    }else{
        $list.innerText = $AddText.value;
        $ListBoxs.appendChild($list);
        $AddText.value ="";

        $list.appendChild($RemoveBtn)
        $RemoveBtn.innerText = "삭제"

        $RemoveBtn.addEventListener("click", () => {
            if(confirm("정말로 삭제하시겠습니까?")){
                $list.remove();
            }
        });
        saveToLocalStorage()
    }    
})

window.addEventListener("load", () => {
    loadFromLocalStorage();
});

//youtube.com/watch?v=3PHXvlpOkf4