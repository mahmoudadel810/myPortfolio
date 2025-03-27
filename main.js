var informations = document.getElementsByClassName("main-info")[0];
var infoElements = informations.getElementsByTagName("*");
console.log(infoElements);


var cards = document.getElementsByClassName("card");

console.log(cards);
 
 

console.log(scrollY);

//TODO - Move animations
window.onscroll = function ()
{
    if (window.scrollY > 1)
    {
        infoElements[0].style.animation = "comeLeft 1.5s forwards";
        infoElements[1].style.animation = "comeLeft 1.5s 0.7s forwards";
        infoElements[2].style.animation = "comeLeft 1.5s 0.4s forwards";
        infoElements[3].style.animation = "comeLeft 1.5s 0.8s forwards";
    } else
    {
        infoElements.forEach(el => el.style.animation = "none"); // Reset animation

    }

    if (window.scrollY > 250)
    {
        cards[0].style.animation = "fadeInDown 1.5s forwards";
        cards[1].style.animation = "fadeInDown 1.5s 0.2s forwards";
        cards[2].style.animation = "fadeInDown 1.5s 0.4s forwards";
        cards[3].style.animation = "fadeInDown 1.5s 0.8s forwards";
    } else
    {
        cards.forEach(el => el.style.animation = "none"); // Reset animation

    }

    // Add reveal animation for project cards
    if (window.scrollY > 600)
    {
        projectCards.forEach((card, index) =>
        {
            card.style.animation = `fadeInUp 1s ${index * 0.2}s forwards`;
        });
    }

    updateActiveNavLink();
};

const projectCards = document.querySelectorAll('.project-card');
const navLinks = document.querySelectorAll('.navBar a');                  

// Update active nav link based on scroll position
function updateActiveNavLink()
{
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section =>
    {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            navLinks.forEach(link =>
            {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId)
                {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add loading animation
window.addEventListener('load', () =>
{
    document.body.classList.add('loaded');
});



