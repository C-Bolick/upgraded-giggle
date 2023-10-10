const sections = document.querySelectorAll(".section");
const sectBnts = document.querySelectorAll(".controls");
const sectBnt = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");


function Transition () {
    // Button click active class
    for (let i=0; i < sectBnt.length; i++) {
        sectBnt[i].addEventListener('click', function() {
            let currentBnt = document.querySelectorAll('.active-bnt');
            currentBnt[0].className = currentBnt[0].className.replace('active-bnt', ' ');
            this.className += ' active-bnt';
        })

    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            sectBnts.forEach((bnt) => {
                bnt.classList.remove('active')
            })

            e.target.classList.add('active')
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

Transition();