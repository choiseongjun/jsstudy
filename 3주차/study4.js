//엘리먼트 6번쨰 선택방법
// window.addEventListener("load",function(){
//     var section = document.querySelector("#ex6");
   
//     var titleInput = section.querySelector('.title-input');
//     var menuListDiv = section.querySelector('.menu-list');
//     var addButton = section.querySelector('.add-button');
//     var delButton = section.querySelector('.del-button');

//     addButton.onclick = function(){
//         var title = titleInput.value;
//         var txtNode = document.createTextNode(title);
//         menuListDiv.appendChild(txtNode);
//     };

//     delButton.onclick = function(){
//         var txtNode = menuListDiv.childNodes[0];
//         menuListDiv.removeChild(txtNode);
//     };

// })

window.addEventListener("load",function(){
    
   

    
    //첫번쨰 방법
    var section = document.querySelector("#ex6");
   
    var titleInput = section.querySelector('.title-input');
    var menuListDivUl = section.querySelector('.menu-list');
    var addButton = section.querySelector('.add-button');
    var delButton = section.querySelector('.del-button');

    addButton.onclick = function(){
        
        
        //첫번쨰 방법
        // var title = titleInput.value;
        
        // var txtNode = document.createTextNode(title);
       
        // var aNode = document.createElement("a");
        // aNode.href="";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.appendChild(aNode);
        
        // menuListDivUl.appendChild(liNode);
        
        //2번째 방법
        //var title = titleInput.value;
        //menuListDivUl.innerHTML +='<li><a href="">'+title+'</a></li>';
        //3번째 방법
        var title = titleInput.value;

        var html = '<a href="">'+title+'</a>';
        var li = document.createElement('li');
        li.innerHTML = html;

        menuListDivUl.append(li);
    
    };

    delButton.onclick = function(){
        //var txtNode = menuListDiv.childNodes[0];
        //menuListDivUl.removeChild(txtNode);

        var liNode = menuListDivUl.childNodes[0];
       
        liNode.remove();
        
    };

})