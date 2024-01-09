
$body = document.querySelector("body")
$body.style.backgroundColor = "#eee";

let $ContentBox = document.createElement("div")
$ContentBox.className = "ContentBox"
$body.appendChild($ContentBox)

let $BoxWrap = document.createElement("div")
$BoxWrap.className = "BoxWrap"
$ContentBox.appendChild($BoxWrap)

let $Title = document.createElement("h1")
$Title.innerText = "todolist"
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
    const $items = document.querySelectorAll(".ListBox li span");
    $items.forEach(($item) => {
        const text = $item.firstChild.textContent;
        items.push(text);
    });
    localStorage.setItem("todoList", JSON.stringify(items));
}

function loadFromLocalStorage() {
    const todoList = localStorage.getItem("todoList");
    if (todoList) {
        const parsedList = JSON.parse(todoList);
        parsedList.forEach((el) => {
            const $list = document.createElement("li");
            const $listWrap = document.createElement("div");
            const $text = document.createElement("span");
            const $RemoveBtn = document.createElement("button");
            const $EditBtn = document.createElement("button");

            $ListBoxs.appendChild($list);
            $list.appendChild($listWrap);

            $listWrap.appendChild($text);
            $listWrap.className = "listwrap";
            $text.innerText = el;

            $listWrap.appendChild($EditBtn);
            $EditBtn.innerText = "수정";

            $listWrap.appendChild($RemoveBtn);
            $RemoveBtn.innerText = "삭제";

            $RemoveBtn.addEventListener("click", () => {
                if (confirm("정말로 삭제하시겠습니까?")) {
                    $list.remove();
                    saveToLocalStorage();
                }
            });

            $EditBtn.addEventListener("click", () => {
               
            });
        });
    }
}


// 기존코드
const $AddListBtn = document.querySelector(".AddListBtn")
const $ListBoxs = document.querySelector(".ListBox")
const $ListRemove = document.querySelector(".RemoveBtn")
const $ListEdit = document.querySelector(".EditBtn")

$AddListBtn.addEventListener("click",()=>{
    let $list = document.createElement("li")
    let $listWrap = document.createElement('div')
    let $text = document.createElement('span')
    let $RemoveBtn = document.createElement("button")
    let $EditBtn = document.createElement("button");
    
    if(!$AddText.value){
        alert("내용을 입력해주세요.");
    }else{
        $ListBoxs.appendChild($list);
        $list.appendChild($listWrap)

        $listWrap.appendChild($text)
        $listWrap.className = "listwrap"
        $text.innerText = $AddText.value;
        $AddText.value =""
        $listWrap.appendChild($EditBtn);
        $EditBtn.innerText = "수정";
        
        $listWrap.appendChild($RemoveBtn)
        $RemoveBtn.innerText = "삭제"

        $RemoveBtn.addEventListener("click", () => {
            if(confirm("정말로 삭제하시겠습니까?")){
                $list.remove();
            }
        }); 
        saveToLocalStorage()

        $EditBtn.addEventListener("click", ()=>{
            let $EditInput = document.createElement("input")
            const EditValue = $EditInput.value
            EditValue = $text.innerText
  
            if(EditValue){
                
                $EditBtn.remove();
                $RemoveBtn.remove();


                let $ChkBtn = document.createElement("button")
                $listWrap.appendChild($ChkBtn)
                $ChkBtn.innerText = "변경"

                let $CancelBtn = document.createElement("button")
                $listWrap.appendChild($CancelBtn)
                $CancelBtn.innerText = "취소"
            } 
       })
    }    
})

window.addEventListener("load", () => {
    loadFromLocalStorage();
});

