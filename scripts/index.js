
function showContent(n){
    content1 = document.getElementById("women-1");
    content2 = document.getElementById("women-2");
    content3 = document.getElementById("women-3");
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    var display = "block";
    if(window.screen.width > 800){
      display = "grid"
    }
    if(n == 1){
        content1.style.display = display;
    }else if(n == 2){
        content2.style.display = display;
    }else{
        content3.style.display = display;
    }
}
