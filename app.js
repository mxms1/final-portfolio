//Variables
const lastName = document.getElementsByClassName('lastName')[0];
const header = document.getElementsByTagName('header')[0];
const ulNav = document.getElementsByClassName('ulNav')[0];
const main = document.getElementsByClassName('main')[0];


const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');
const aboutContainer = document.getElementById('aboutContainer');
const projectContainer = document.getElementById('projectContainer');
const contactsContainer = document.getElementById('contactsContainer');

ulNav.addEventListener('click', removeText);
ulNav.addEventListener('click', content);

//Functions



function removeText(){
  lastName.style.transform = "rotate(30deg)";
  lastName.style.scale = "200%";
  lastName.style.position = "absolute"
  lastName.style.opacity = "0.05";
  header.style.marginTop = "2vh";
  lastName.style.marginLeft = "-62vw";
  header.style.maxHeight = "30vw"
}


function content(e){
  console.log(e.target);
  let target = e.target;
  if(target == projects){

    projectContainer.classList.add('block');
    projectContainer.classList.remove('none');

    aboutContainer.classList.add('none');
    aboutContainer.classList.add('block');

    contactsContainer.classList.add('none');
    contactsContainer.classList.add('block');

  }else if(target == about){
    projectContainer.classList.add('none');
    projectContainer.classList.remove('block');

    aboutContainer.classList.add('block');
    aboutContainer.classList.remove('none');

    contactsContainer.classList.add('none');
    contactsContainer.classList.add('block');


  }else if(target == contacts){
    projectContainer.classList.add('none');
    projectContainer.classList.remove('block');

    aboutContainer.classList.add('none');
    aboutContainer.classList.remove('block');

    contactsContainer.classList.add('block');
    contactsContainer.classList.remove('none');


  }
}



const quarters = document.getElementsByClassName('quarter');
const image = document.getElementById('image');

for(let i = 0; i < quarters.length; i++){

if(i == 1 || i == 3){
  quarters[i].addEventListener('mouseover', ()=> image.style.transform = "rotate(2deg)");


}else{
  quarters[i].addEventListener('mouseover', ()=> image.style.transform = "rotate(-2deg)");

}
}

const computerh3 = document.getElementsByClassName('computerh3')[0];
const explanatoryText = document.getElementsByClassName('explanatoryText')[0];



const arr = ['Skills', 'Future', 'Qualifications', 'Life'];
const colors = ['#50BFE6','#FD5B78','#FF9933','#FFFF66'];
const explanation = ['Things I can do','Things I want to accomplish','My exam results','Get to know me a little better'];
var arrofQuarters = [...quarters];
for(let i = 0; i < arrofQuarters.length; i++){

arrofQuarters[i].addEventListener('mouseover', ()=>{
  computerh3.innerHTML= `${arr[i]}`;
  computerh3.style.backgroundColor = `${colors[i]}`;
  explanatoryText.innerHTML= `${explanation[i]}`;


});
}



main.addEventListener('click', aboutParts);


const quarter1 = document.getElementsByClassName('quarter')[0];
const quarter2 = document.getElementsByClassName('quarter')[1];
const quarter3 = document.getElementsByClassName('quarter')[2];
const quarter4 = document.getElementsByClassName('quarter')[3];


const skills = document.getElementById('skills');
const future = document.getElementById('future');
const life = document.getElementById('life');
const qualifications = document.getElementById('qualifications');

function aboutParts(e){
  console.log(e.target);
  let target = e.target;
  if(target == quarter1){

    future.classList.add('none');
    future.classList.remove('block');

    life.classList.add('none');
    life.classList.remove('block');

    skills.classList.add('block');
    skills.classList.remove('none');


    qualifications.classList.add('none');
    qualifications.classList.remove('block');

  }else if(target == quarter2){

    skills.classList.add('none');
    skills.classList.remove('block');

    life.classList.add('none');
    life.classList.remove('block');

    future.classList.add('block');
    future.classList.remove('none');


    qualifications.classList.add('none');
    qualifications.classList.remove('block');


  }else if(target == quarter3){

    skills.classList.add('none');
    skills.classList.remove('block');

    life.classList.add('none');
    life.classList.remove('block');

    future.classList.add('none');
    future.classList.remove('block');


    qualifications.classList.add('block');
    qualifications.classList.remove('none');

  }else if(target == quarter4){

    skills.classList.add('none');
    skills.classList.remove('block');

    life.classList.add('block');
    life.classList.remove('none');

    future.classList.add('none');
    future.classList.remove('block');


    qualifications.classList.add('none');
    qualifications.classList.remove('block');


  }

}
