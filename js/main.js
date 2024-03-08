
let pop = document.querySelector(".pop")
let btnPop = document.querySelector(".pop i")


btnPop.addEventListener("click" ,()=> {
    pop.classList.add("active")
    
})

document.addEventListener("click",(e) => {
    
     if( e.target.tagName === "SECTION" ) {
        pop.classList.add("active")
    }
})

////
let toastMsg = document.querySelector(".toastMsg")
let toastMsgBtn = document.querySelector(".toastMsg i")



toastMsgBtn.addEventListener("click" ,()=> {
    toastMsg.classList.add("active")
    
})



let sideBtn = document.querySelectorAll(".sidebar .content_sidebars .sidebar_menue  ")
let items_sidebar = document.querySelectorAll(".sidebar .content_sidebars .items_sidebar ")
let iconPlus = document.querySelectorAll(".sidebar .content_sidebars .iconPlus i ")

sideBtn.forEach(e => {
   e.addEventListener("click",() => {
       let items = e.nextElementSibling
       let clickedBtn = items.classList.contains("active")

    for (let i = 0; i < items_sidebar.length; i++) {

        if (clickedBtn) break;
        // iconPlus.classList.replace("fa-minus","fa-plus")
        
        if (items_sidebar[i].classList.contains('active')) {
            
            items_sidebar[i].classList.remove('active');
            e.classList.remove('active');
            
            // iconPlus.classList.toggle("fa-minus")
        }
    }

   
        items.classList.toggle('active');
    e.classList.toggle('active');
   })
})


let sidebar_btn = document.querySelectorAll(".navigate_menue .sidebar_btn")
let sideBar_prod = document.querySelectorAll(".sideBar_prod ")
let closeBtn = document.querySelector(".sideBar_prod  .closeBtn")
let overlay = document.querySelector(".overlay")


for (let i = 0; i < sidebar_btn.length; i++) {

    function menueClose() {
        sideBar_prod[i].classList.remove("active")
        overlay.classList.remove("active")
    }
  
    sidebar_btn[i].addEventListener('click', function () {
        sideBar_prod[i].classList.add('active');
        overlay.classList.add('active');
      });

      closeBtn.addEventListener("click",menueClose)
      overlay.addEventListener("click",menueClose)
    
}