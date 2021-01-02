window.addEventListener("load",function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");


    btnAdd.onclick = function(){
        
        console.log('onCLick')
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    }
})
//엘리먼트 2번쨰 선택방법
window.addEventListener("load",function(){
    var section2 = document.getElementById("ex2");
   //첫번쨰 방법
    var inputs = section2.getElementsByTagName("input")
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    //2번쨰 방법
    // var txtX = section2.getElementsByClassName("txt-x");
    // var txtY = section2.getElementsByClassName("txt-y");
    // var btnAdd = section2.getElementsByClassName("btn-add");
    // var txtSum = section2.getElementsByClassName("txt-sum");
    btnAdd.onclick = function(){
        
        console.log('onCLick')
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    }
})
//엘리먼트 3번쨰 선택방법
window.addEventListener("load",function(){
    var section3 = document.getElementById("ex3");
    var txtX = section3.querySelector(".txt-x");
    //var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function(){
        
        console.log('onClick')
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    }
})
//엘리먼트 4번쨰 선택방법
window.addEventListener("load",function(){
    var section4 = document.querySelector("#ex4");
    // var inputs = section4.querySelectorAll("input");//1번쨰 방법
    var box = section4.querySelector(".box")//2번쨰 방법

    //1번쨰 방법.. 이 방법은 빈공백도 자식노드로 찾아버린다
    // var input1 = box.childNodes[0];//자식 노드 첫번쨰를 찾는데 엔터를 치면 빈공백도 찾는다(주석도 자식이다)
    // var input2 = box.childNodes[1];
    //2번쨰 방법
    var input1 = box.children[0];//자식 노드 첫번쨰를 찾는데 엔터를 치면 빈공백도 찾는다(주석도 자식이다)
    var input2 = box.children[1];

    input1.value = "helo";
    input2.value ="okay";
})
//엘리먼트 5번쨰 선택방법
window.addEventListener("load",function(){
    var section = document.querySelector("#ex5");
    // var inputs = section4.querySelectorAll("input");//1번쨰 방법
    var srcInput = section.querySelector(".src-input")//2번쨰 방법
    var imgSelect = section.querySelector(".img-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function(){
        //img.src="images/"+srcInput.value+".jpeg";
        img.src="images/"+imgSelect.value+".jpeg";
    }

})