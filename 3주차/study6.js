//ex8-노드 삽입과 바꾸기
window.addEventListener("load",function(){

    var section = document.querySelector("#ex8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = section.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0]

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        console.log('ff')
        if(nextNode == null){
            alert("더 이상 이동할 수 없습니다");
            return;
        }

        //tbodyNode.removeChild(nextNode);
        tbodyNode.insertBefore(nextNode,currentNode);//넣을값,기준
    }
    upButton.onclick = function(){
        var prevNode = currentNode.previousElementSibling;
        if(prevNode == null){
            alert("더 이상 이동할 수 없습니다");
            return;
        }
       //tbodyNode.removeChild(currentNode);
        tbodyNode.insertBefore(currentNode,prevNode);
    }
})
//ex9-다중 엘리먼트 선택방법과 일괄 삭제
window.addEventListener("load",function(){

    var section = document.querySelector("#ex9");

    var noticeList = section.querySelector(".notice-list");
    var tbody = section.querySelector("tbody");
    var allCheckbox =section.querySelector(".overall-checkbox")
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){

        var inputs = tbody.querySelectorAll("input[type=checkbox]");
        
        for(var i =0;i<inputs.length;i++)
            inputs[i].checked=allCheckbox.checked;
        
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        // if(inputs[0].checked)
        //     inputs[0].parentElement.parentElement.remove();

        for(var i=0;i<inputs.length;i++){
            inputs[i].parentElement.parentElement.remove()
        }

    }

    swapButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length!=2){
            alert("엘리먼트는 2개를 선택해야만 합니다");
            return;
        }
        var trs = [];
        for(var i=0;i<inputs.length;i++)
            trs.push(inputs[i].parentElement.parentElement);

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);//클론된 것을 낀다
        trs[0].replaceWith(trs[1])
    }

})
//ex10-클릭한 컬럼 기준으로 로우 정렬
window.addEventListener("load",function(){

    var notices = [
        {id:1,title:"ㅎㅎㅎㅎ",regDate:"2019-01-26",writer:"seongjun",hit:0},
        {id:2,title:"자스자스자슨",regDate:"2019-01-26",writer:"seongjun",hit:55},
        {id:3,title:"ㅎㅋㅋㅋ",regDate:"2019-01-26",writer:"seongjun",hit:0},
        {id:4,title:"돔돔",regDate:"2019-01-26",writer:"seongjun",hit:55}
    ];

    var section = document.querySelector("#ex10");

    var noticeList = document.querySelector(".notice-list");
    var titleId = document.querySelector('.title');
    var tbodyNode = noticeList.querySelector("tbody")

    var bindData = function(){
        var template = document.querySelector("template");
        console.log("ff")
        for(var i =0;i<notices.length;i++){
            console.log(notices[i])
            var cloneNode= document.importNode(template.content)
            var tds =cloneNode.querySelectorAll("td");
            console.log(tds[0])
            tds[0].textContent = notices[i].id;

            // var aNode= tds[1].children[0];
            // aNode.href=notices[i].id;
            // aNode.textContent=notices[i].title;

            // tds[2].textContent = notices[i].regDate;
            // tds[3].textContent = notices[i].writerId;
            // tds[4].textContent = notices[i].hit;
            
            // tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();
    
    titleId.onclick = function(){
        
    }
})