var clickBtn = document.getElementsByClassName('searchButton');

function search_open(){
    window.open('static/searchPop.html', 'window_name', 'width=330, height=200, location=no, status=no, scrollbars=yes');
}

// 메뉴바 list만들기
let menuHtmlList = document.createElement("ul");
menuHtmlList.className = 'menuHtmlList';
menuHtmlList.setAttribute("z-index",1);

var menuList = {"menuIcon" : ["직군 전체", "개발", "경영,비즈니스", "마케팅,광고",
                            "디자인", "영업", "고객서비스,리테일",
                            "미디어", "엔지니어링,설계", "게임 제작",
                            "HR","금융", "물류,무역", "제조,생산",
                            "의료,제약,바이오"]};

function menuOpen() {
    var x = document.getElementsByClassName("OverLayerJobCategory");
    console.log(x[0].style.display);

    // 처음 드롭 메뉴를 클릭하는 경우.
    if(x[0].style.display=== ""){
        x[0].style.display = "block";
        let MMN = document.getElementsByClassName('Explor_Container');
        for(m in menuList["menuIcon"]){
            let newTag = document.createElement('li');
            newTag.innerHTML = menuList["menuIcon"][m];
            menuHtmlList.appendChild(newTag);
            console.log(menuList["menuIcon"][m]);
        }
        MMN[0].appendChild(menuHtmlList);
    }
    else if(x[0].style.display ==="block"){ // 메뉴가 열려있는 경우 숨기기
        x[0].style.display = "none";
    }
    else if(x[0].style.display ==="none"){ // 메뉴가 숨겨져 있는 경우 열기
        x[0].style.display = "block";
    }
    
}


