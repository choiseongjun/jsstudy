window.addEventListener("load",function(){

    var section = document.querySelector("#ex7");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    imgs[0].onclick = function(e){
        // console.log(e.target.nodeName);
        currentImg.src = e.target.src;
    }
    imgs[1].onclick = function(e){
        currentImg.src = e.target.src;
    }
    imgs[2].onclick = function(e){
        currentImg.src = e.target.src;
    }
})

window.addEventListener("load",function(){

    var section = document.querySelector("#ex8");

    var imgs = section.querySelectorAll(".img");

    var imgList = section.querySelector(".img-list")

    var currentImg = section.querySelector(".current-img");
    imgList.onclick = function(e){
        if(e.target.nodeName!=="IMG")
            return;
        
        currentImg.src = e.target.src;
    }
    // for(var i=0;i<imgs.length;i++){
    //     imgs[i].onclick = function(e){
    //         currentImg.src = e.target.src;
    //     }
    // }
})
window.addEventListener("load",function(){

    var section = document.querySelector("#ex9");

    var imgs = section.querySelectorAll(".img");

    var imgList = section.querySelector(".img-list")
    var addButton = section.querySelector(".add-button")
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log("imgList.onclick")
        if(e.target.nodeName!=="IMG")
            return;
        
        currentImg.src = e.target.src;
    }
    addButton.onclick = function(e){
        e.stopPropagation();//이벤트가 전파되는걸 막는역할
        
        console.log("addButton.onclick")

        var img = document.createElement("img");
        img.src="images/img1.jpeg";
        currentImg.insertAdjacentElement("afterend",img)
    }
})
window.addEventListener("load",function(){

    var section = document.querySelector("#ex10");

    var tbody =section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){
        var target = e.target;
        if(target.nodeName != "INPUT")
            return;
        
        if(target.classList.contains("sel-button")){
            var tr =target.parentElement
            for(;tr.nodeName != "TBODY";tr=tr.parentElement){//TR을 만날떄까지 반복
                //console.log(tr.nodeName)
                tr.style.background="yellow";
            } 
        }else if(target.classList.contains("edit-button")){

        }else if(target.classList.contains("del-button")){
            // e.stopPropagation()
            var tr =target.parentElement
            for(;tr.nodeName != "TBODY";tr=tr.parentElement){//TR을 만날떄까지 반복
                // console.log(tr.nodeName)
                if(tr.nodeName === "TR")
                    tr.remove()
            } 
        }
    }
})