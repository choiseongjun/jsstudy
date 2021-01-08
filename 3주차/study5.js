window.addEventListener("load",function(){

    var notices = [
        {id:5,title:"ㅎㅎㅎㅎ",regDate:"2019-01-26",writer:"seongjun",hit:0},
        {id:6,title:"자스자스자슨",regDate:"2019-01-26",writer:"seongjun",hit:55}
    ];

    var section = document.querySelector("#ex7");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = section.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function(){
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");//5개
        


        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writer;
        tds[4].textContent = notices[0].hit;
        
        tbodyNode.appendChild(cloneNode)
    };
    templateButton.onclick = function(){

    }
})