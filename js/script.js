const burger = document.getElementById('menuBar');
const menu = document.querySelector('.burguer_list');
let menuClick = 0;

burger.addEventListener('click', () => {
  menu.classList.toggle('moveIn');
  menuClick += 1;
  if (menuClick % 2 !== 0) {
    burger.src = 'img/Close.png';
  } else {
    burger.src = 'img/Menu.png';
    menuClick = 0;
  }
});

menu.addEventListener('click', () => {
  menu.classList.remove('moveIn');
  burger.src = 'img/Menu.png';
  menuClick = 0;
});

// ↓POPUP WINDOWS↓

// ↓ This is the basic Project Data Object.
class ProjectBox {
  constructor(name, tech, img, desc, liveTxt, liveSrc, liveImg, srcTxt, src, srcImg) {
    this.name = name;
    this.techs = tech;
    this.image = img;
    this.description = desc;
    this.liveTxt = liveTxt;
    this.liveSrc = liveSrc;
    this.liveImg = liveImg;
    this.sourceTxt = srcTxt;
    this.source = src;
    this.sourceImg = srcImg;
  }
}

// ↓ This holds the data of the first project.
const projectOne = new ProjectBox('Multi Post Stories', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');
// ↓ This holds the data of the project 2.
const projectTwo = new ProjectBox('Multi Post Stories2', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');
// ↓ This holds the data of the project 3.
const projectThree = new ProjectBox('Multi Post Stories3', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');
// ↓ This holds the data of the project 4.
const projectFour = new ProjectBox('Multi Post Stories4', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');
// ↓ This holds the data of the project 5.
const projectFive = new ProjectBox('Multi Post Stories5', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');
// ↓ This holds the data of the project 6.
const projectSix = new ProjectBox('Multi Post Stories6', ['html', 'Bootstrap', 'Ruby on rails'], 'img/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', '#', 'img/LiveIco.png', 'See Source', 'https://github.com', 'img/SrcIco.png');

//  ↓This array holds all the projects
const projectList = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix ]

// ↓Function to create the boxes

function project(project) {
  const blurDiv = document.createElement('div');
  blurDiv.classList.add('popBlur');

  const divBox = document.createElement('div');
  divBox.classList.add('popWindow');
  blurDiv.appendChild(divBox);
  // TITLE
  const projectName = document.createElement('h3');
  projectName.innerHTML = project.name;
  divBox.appendChild(projectName);
  // LIST
  const techList = document.createElement('ul');
  techList.classList.add('languages');
  divBox.appendChild(techList);
  project.techs.forEach((lang) => {
    const li = document.createElement('li');
    li.innerHTML = lang;
    li.classList.add('featLang');
    techList.appendChild(li);
  });
  // DIV (Image & Info)
  const divPrj = document.createElement('div');
  divPrj.classList.add('divInfo');
  divBox.appendChild(divPrj);
  // IMAGE
  const divImg = document.createElement('div');
  divPrj.appendChild(divImg);
  const image = document.createElement('img');
  image.src = project.image;
  image.style.width = '100%';
  divPrj.appendChild(image);
  // DIV (Descriptio & Buttons)
  const divInfo = document.createElement('div');
  divInfo.classList.add('info');
  divPrj.appendChild(divInfo);
  // DESCRIPTION
  const divDesc = document.createElement('div');
  divDesc.innerHTML = project.description;
  divInfo.appendChild(divDesc);
  // LIVE PREVIEW
  const btnPreview = document.createElement('a');
  btnPreview.href = project.liveSrc;
  btnPreview.classList.add('popBtn');
  btnPreview.classList.add('orangeBtn');
  btnPreview.innerHTML = project.liveTxt;
  const liveIco = document.createElement('img');
  liveIco.src = project.liveImg;
  btnPreview.appendChild(liveIco);
  divInfo.appendChild(btnPreview);
  // SOURCE
  const btnSrc = document.createElement('a');
  btnSrc.href = project.source;
  btnSrc.classList.add('popBtn');
  btnSrc.classList.add('orangeBtn');
  btnSrc.innerHTML = project.sourceTxt;
  const srcIco = document.createElement('img');
  srcIco.src = project.sourceImg;
  btnSrc.appendChild(srcIco);
  divInfo.appendChild(btnSrc);

  // CLOSE ICO
  const close = document.createElement('img');
  close.src = 'img/Close.png';
  close.classList.add('closeIco');
  divBox.appendChild(close);

  // CLOSE POPUP WINDOW
  close.addEventListener('click', () => {
    blurDiv.classList.remove('show');
  });

  // Insert in the page
  document.body.appendChild(blurDiv);
}

// ↓ Ejecution

// projectList.forEach((project) => {
//   project(project)
// });

project(projectOne);

// ↓ Show Popup Window

const blurDiv = document.querySelectorAll('.popBlur')
// seeFeat
const seeProject = document.querySelector('.seeFeat');
seeProject.addEventListener('click', () => {
  blurDiv[0].classList.add('show');
});
const seeWork = document.querySelectorAll('.seeWork');

for (let i=0; i < seeWork.length; i++){
  console.log('count');

}

// seeWork.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     blurDiv.classList.add('show');
//   });
// });
