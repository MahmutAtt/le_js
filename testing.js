let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

//window.localStorage.clear();
if(window.localStorage.getItem("color")){   
     //localstorgede reng varsa
     // add color to div
   exp.style.backgroundColor = localStorage.getItem("color");
    //[2] remove active class from all lis
    lis.forEach((li)=>{
      li.classList.remove("active");
   

   });
   

   }
   //[3] add active class to current color
   document.querySelector(`[data-color=${localStorage.getItem("color")}]`).classList.add("active")




lis.forEach((li) =>{
   li.addEventListener("click",(e)=>{
      //console.log(e.currentTarget.dataset.color);
      lis.forEach((li)=>{
         li.classList.remove("active");
   

      });
      e.currentTarget.classList.add("active");
      window.localStorage.setItem("color", e.currentTarget.dataset.color);
      exp.style.backgroundColor = e.currentTarget.dataset.color;
   });
});
