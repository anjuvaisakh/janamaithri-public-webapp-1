function toggleSidebar(){
    if(window.innerWidth > 768){
  
        document.getElementById("sidebar").style.width = "250px";
    } else {
        if(document.getElementById("sidebar").style.width == "250px"){
            document.getElementById("sidebar").style.width = "";
        }else{
            document.getElementById("sidebar").style.width = "250px";
        }
    }
}