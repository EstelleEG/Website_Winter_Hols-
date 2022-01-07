
// //OPTION 1 EventListener BURGER MENU ICON  with dropdown
// const dropdownBurger = document.querySelector(".nav-toggle");  // take class "nav-toggle" from HTML, which is the burger menu icon ans save it to the constant  named "dropdownBurger" => "dropdownBurger" (in JS) refers to burger menu icon ".nav-toggle" (in HTML)

//  const tabs = document.querySelector(".tabs");  // take class ".tabs" from HTML, which are all the tabs a ans save them to the constant  named "tabs" => "tabs" (in JS) refers to the div with class ".tabs" (in HTML)

//  dropdownBurger.addEventListener('click', function(){
//  //when user is clicking on the burger icon, start the function
//      tabs.classList.toggle("showtabs");
//  });
//  //when the function starts, it ll add the class ""showtabs" (in CSS, the display:block) to my div "tabs"(HTML) => so tabs will appear when the user clicks on burger icn







//OPTION 2 on-click burger menu icon with dropdown
function burgerMenu(){      
    // when sb clicks on HTML burger icon, this function ll be called
    var dropdown= document.getElementById("burgerMenuDropdown");
    //the function ll search for id "burgerMenuDropdown" in HTML and save all the content of the div (which contains the id "burgerMenuDropdown") in variable "dropdown". Element is the html tags
    if (dropdown.className === "tabs"){
        dropdown.className += " showtabs";
    }
    //if dropdown element (the div in HTML) has ONLY/EXACTLY  the className "tabs" (which has display:none; and is TRUE)
    //add className "showtabs" to dropdown element which is on display:block;

    else {
        dropdown.className = "tabs";
      }
    // Else let the className be ONLY "tabs" which is on display:none;
    }


    // line 24 => if its true, I execute line 25 
    //         => else I execute line 31
