let registBtn = document.getElementById("newRegister");
let secRegist = document.getElementById("secRegist");
let secLogin = document.getElementById("secLogin");
  registBtn.addEventListener('click',function(){
    // secRegist.style.display="block";
    // secLogin.style.display="none";
    
    if(secRegist.className==="regist"){
      secRegist.classList.remove("regist");
    secRegist.classList.add("show");
    secLogin.style.display="none";
    }else{
      secRegist.classList.add("regist");
      secRegist.classList.remove("show");
      secLogin.style.display="flex";
    }
    

});
