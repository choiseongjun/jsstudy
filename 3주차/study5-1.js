window.addEventListener("load", function () {
    var notices = [
        {id:5, title:"안녕", regDate:"2019-05-29", writerId:"imdud", hit:0},
        {id:6, title:"친구", regDate:"2019-05-18", writerId:"sunny", hit:17}
    ];
    var section = document.querySelector("#ex7");
    var noticeList = document.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody")
    var cloneButton = document.querySelector(".clone-button");
    var templateButton = document.querySelector(".template-button");
    cloneButton.onclick = function () {
        var trNode = noticeList.querySelector("tbody tr"); // tr 중에서 첫번째 하나만 가져온다.
        var cloneNode = trNode.cloneNode(true); // false면 껍데기만 복제
        var tds = cloneNode.querySelectorAll("td");
        tds[0].innerText = notices[0].id;
        tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
        tds[2].innerText = notices[0].regDate;
        tds[3].innerText = notices[0].writerId;
        tds[4].innerText = notices[0].hit;
        tbodyNode.appendChild(cloneNode);
    };
    // html에 복제할 표본이 없을 때 화면에 보이지 않는 template을 만들어놓고 가져와 쓴다.
    var cnt = 0;
    templateButton.onclick = function () {
        cnt++;
        if(cnt === 1) {
            for (var i = 0; i < notices.length; i++) {
                var template = section.querySelector("template");
                var cloneNode = document.importNode(template.content, true);
                var tds = cloneNode.querySelectorAll("td");
                tds[0].innerText = notices[i].id;
                // tds[1].innerHTML = '<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
                aNode = tds[1].children[0];
                aNode.href = notices[i].id;
                aNode.textContent = notices[i].title;
                tds[2].innerText = notices[i].regDate;
                tds[3].innerText = notices[i].writerId;
                tds[4].innerText = notices[i].hit;
                tbodyNode.append(cloneNode);
            }
        }else{
            alert("불러올 데이터가 없습니다.");
        }

    };

});