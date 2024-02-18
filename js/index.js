
// Scroll ToP Function

let mybtn = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction()
{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybtn.style.display = "block";
    }
    else {
        mybtn.style.display = "none";
    }
}


function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//End of Scroll-to-Top


// Indicating active links


 var header = document.getElementById("navbar-lists");
    var links = header.getElementsByClassName("a-link");
    for (var i = 0; i < links.length; i++) 
	{
      links[i].addEventListener("click", function() 
	  {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) 
	  { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
      });
}

// End of Indicating active links


//Javascript function for Highighting Navlink when scrolling page

  let sections = document.querySelectorAll(".common-sec");
  let navLinks = document.querySelectorAll(".navbar a");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document.querySelector(".navbar a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  
//End of Javascript function for Highighting Navlink when scrolling page


//Function to change the name of navbar links at 360px screen width

var widths = [0, 400]

function ChangeName()
{
  if (window.innerWidth >= widths[0] && window.innerWidth <= widths[1])
  {
    document.getElementById("home").innerHTML = "गृह";
    document.getElementById("services").innerHTML = "सेवा";
    document.getElementById("price").innerHTML = "प्रकिया";
    document.getElementById("payment").innerHTML = "शुल्क";
    document.getElementById("contact").innerHTML = "सम्पर्क";
  }
  
  if (window.innerWidth > widths[1])
  {
    document.getElementById("home").innerHTML = "गृहपाना";
    document.getElementById("services").innerHTML = "सेवाहरु";
    document.getElementById("price").innerHTML = "सेवा प्रकिया/सम्पर्क";
    document.getElementById("payment").innerHTML = "सेवा शुल्क";
    document.getElementById("contact").innerHTML = "सम्पर्क";
  }

  

}

window.onresize = ChangeName;
ChangeName();
