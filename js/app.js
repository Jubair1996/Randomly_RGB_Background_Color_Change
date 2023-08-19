document.getElementById("color-btn").addEventListener("click",function(){
    const root = document.getElementById("root");
    const bgColor =generateRGBColor();
    root.style.backgroundColor = bgColor; 
})