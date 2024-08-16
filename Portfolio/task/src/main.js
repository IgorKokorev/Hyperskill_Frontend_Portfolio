function Project(id, imgSrc, imgAlt, title, description) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.title = title;
    this.description = description;
}

const projects = [
    new Project(
        'project-one', 
        'https://img1.wsimg.com/isteam/ip/59d93162-b615-4dc2-996a-9e4231a2eeb1/2024-01-16-217-Edit.jpg/:/rs=w:740,cg:true,m', 
        'My best project',
        'My best project', 
        'The project of my life'),
    new Project(
        'project-two',
        'https://img1.wsimg.com/isteam/ip/59d93162-b615-4dc2-996a-9e4231a2eeb1/2024-03-09%20Timur-1412-Edit-2-2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:740,cg:true',
        'Pretty boy pic',
        'My pretty boy',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )
]

const dialog = document.getElementById('dialog-project-details');
const dialogImg = dialog.querySelector('img');
const dialogHeader = document.getElementById('dialog-header');
const dialogText = document.getElementById('dialog-text');

const projectsButtons = document.getElementsByClassName('open-window');

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".hamburger");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

offScreenMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})



function showPopUpDialog(id) {
    console.log(id);
    const project = projects.find(project => project.id === id);
    dialogImg.src = project.imgSrc;
    dialogImg.alt = project.imgAlt;
    dialogHeader.textContent = project.title;
    dialogText.textContent = project.description;
    dialog.showModal();
}

document.getElementById('dialog-button').addEventListener('click', () => dialog.close());

for (button of projectsButtons) {
    button.addEventListener('click', (e) => {
        let id = e.target.id;
        showPopUpDialog(id.substring(0, id.length - 7));
    })
}
