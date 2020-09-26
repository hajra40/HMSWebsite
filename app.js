// variables

var parent = document.querySelector(".parent"),
  valid = document.querySelector('.succcess'),
  invalid = document.querySelector('.err'),
  btn = document.querySelector(".submit"),
  btn2 = document.querySelector(".Change .submit"),
  eX = document.querySelector(".err .iX"),
  sX = document.querySelector(".succcess .vX"),
  section = document.querySelector(".sec-a"),
  section2 = document.querySelector(".sec-b"),
  section3 = document.querySelector(".sec-c"),
  section7 = document.querySelector(".sec-g"),
  section8 = document.querySelector(".sec-h"),
  section9 = document.querySelector(".sec-i"),
  nameE = document.querySelector("#name"),
  emailL = document.querySelector("#email"),
  phoneE = document.querySelector("#phone"),
  msgG = document.querySelector("#msg"),
  name = document.querySelector("#N"),
  email = document.querySelector("#E"),
  phone = document.querySelector("#P"),
  msg = document.querySelector("#M");


  // function to call the button when clicked
  btn.addEventListener("click", appear);
  btn2.addEventListener("click", reappear);
  
  function appear() {
    if(nameE.value === '' || emailL.value === ''|| phoneE.value === '' ||msgG.value === '')
    {
      valid.style.display = 'none';
      invalid.style.display = "block";
      parent.style.display = "block";
      section.style.filter = "blur(5px)";
      section2.style.filter = "blur(5px)";
      section3.style.filter = "blur(5px)";
      section7.style.filter = "blur(5px)";
      section8.style.filter = "blur(5px)";
      section9.style.filter = "blur(5px)";
    }
    else {
      invalid.style.display = "none";
      valid.style.display = "block";
      parent.style.display = "block";
      section.style.filter = "blur(5px)";
      section2.style.filter = "blur(5px)";
      section3.style.filter = "blur(5px)";
      section7.style.filter = "blur(5px)";
      section8.style.filter = "blur(5px)";
      section9.style.filter = "blur(5px)";
      nameE.value = '';
      emailL.value = '';
      phoneE.value = '';
      msgG.value = '';
      
    }
  }

  function reappear() {
    if(name.value === '' || email.value === ''|| phone.value === '' ||msg.value === '')
    {
      valid.style.display = 'none';
      invalid.style.display = "block";
      parent.style.display = "block";
      parent.style.display = "block";
      section.style.filter = "blur(5px)";
      section2.style.filter = "blur(5px)";
      section3.style.filter = "blur(5px)";
      section7.style.filter = "blur(5px)";
      section8.style.filter = "blur(5px)";
      section9.style.filter = "blur(5px)";
    }
    else {
      invalid.style.display = "none";
      valid.style.display = "block";
      parent.style.display = "block";
      section.style.filter = "blur(5px)";
      section2.style.filter = "blur(5px)";
      section3.style.filter = "blur(5px)";
      section7.style.filter = "blur(5px)";
      section8.style.filter = "blur(5px)";
      section9.style.filter = "blur(5px)";
      name.value = '';
      email.value = '';
      phone.value = '';
      msg.value = '';
      
    }
  }

  // function for cross
    eX.addEventListener("click", edisappear);
    sX.addEventListener("click", vdisappear);
    

    function vdisappear() {
      valid.style.display = 'none';
      parent.style.display = "none";
      section.style.filter = "blur(0px)";
      section2.style.filter = "blur(0px)";
      section3.style.filter = "blur(0px)";
      section7.style.filter = "blur(0px)";
      section8.style.filter = "blur(0px)";
      section9.style.filter = "blur(0px)";
    }

    function edisappear() {
      invalid.style.display = 'none';
      parent.style.display = "none";
      section.style.filter = "blur(0px)";
      section2.style.filter = "blur(0px)";
      section3.style.filter = "blur(0px)";
      section7.style.filter = "blur(0px)";
      section8.style.filter = "blur(0px)";
      section9.style.filter = "blur(0px)";
    }

    // parent
    parent.addEventListener("click", disappearParent);

    function disappearParent(e) {
      if(e.target.className == "parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
        section2.style.filter = "blur(0px)";
        section3.style.filter = "blur(0px)";
        section7.style.filter = "blur(0px)";
        section8.style.filter = "blur(0px)";
        section9.style.filter = "blur(0px)";
      }
    }
