/* ==========================
   Smooth Scrolling
========================== */

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ==========================
   Typing Effect
========================== */

const heading = document.querySelector(".hero-left h2");

const text = "Web Developer • Chemistry Graduate";

let index = 0;

heading.textContent = "";

function typeText(){

    if(index < text.length){

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typeText,70);

    }

}

window.addEventListener("load",typeText);


/* ==========================
   Scroll Reveal
========================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hero-left,.card,.about-card,.skills-card,.contact-card,.project-box")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   Floating Cards
========================== */

const cards = document.querySelectorAll(".about-card,.skills-card,.contact-card,.card");

cards.forEach((card,index)=>{

    card.animate(

        [
            {transform:"translateY(0px)"},
            {transform:"translateY(-10px)"},
            {transform:"translateY(0px)"}
        ],

        {

            duration:3500 + index*300,

            iterations:Infinity

        }

    );

});


/* ==========================
   Ripple Button Effect
========================== */

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=circle.style.height=diameter+"px";

        circle.style.left=e.offsetX-diameter/2+"px";

        circle.style.top=e.offsetY-diameter/2+"px";

        circle.classList.add("ripple");

        const ripple=this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});
