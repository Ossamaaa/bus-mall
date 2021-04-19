'use strict';


let containerElement = document.getElementById('sec')

let leftImageElement = document.getElementById('leftimge');
let middleImageElement = document.getElementById('middleimge');
let rightImageElement = document.getElementById('rightimge');


function genrateRandomIndex() {
    return Math.floor(Math.random() * BusMull.allimages.length);

}

let maxtry = 25;
let count = 0;
BusMull.allimages = [];

let leftimgeindex;
let middleimgeindex;
let rightimgeindex;

function BusMull(names, filePath) {
    this.names = names;
    this.filePath = filePath;
    this.timesImagShown = 0;
    this.votes = 0;
    this.shown =0;


    BusMull.allimages.push(this);

}




new BusMull('bag', `/img/bag.jpg`);
new BusMull('banana', `/img/banana.jpg`);
new BusMull('bathroom', `/img/bathroom.jpg`);
new BusMull('boots', `/img/boots.jpg`);
new BusMull('breakfast', `/img/breakfast.jpg`);
new BusMull('bubblegum', `/img/bubblegum.jpg`);
new BusMull('chair', `/img/chair.jpg`);
new BusMull('cthulhu', `/img/cthulhu.jpg`);
new BusMull('dog-duck', `/img/dog-duck.jpg`);
new BusMull('dragon', `/img/dragon.jpg`);
new BusMull('pen', `/img/pen.jpg`);
new BusMull('pet-sweep', `/img/pet-sweep.jpg`);
new BusMull('scissors', `/img/scissors.jpg`);
new BusMull('shark', `/img/shark.jpg`);
new BusMull('sweep', `/img/sweep.png`);
new BusMull('tauntaun', `/img/tauntaun.jpg`);
new BusMull('unicorn', `/img/unicorn.jpg`);
new BusMull('usb', `/img/usb.gif`);
new BusMull('water-can', `/img/water-can.jpg`);
new BusMull('fruit-glass', `/img/fruit-glass.jpg`);


// console.log(BusMull);

function renderThreeImage() {

    leftimgeindex = genrateRandomIndex();
    middleimgeindex = genrateRandomIndex();
    rightimgeindex = genrateRandomIndex();



    while ((leftimgeindex === rightimgeindex) || (leftimgeindex === middleimgeindex) || (rightimgeindex === middleimgeindex)) {

        leftimgeindex = genrateRandomIndex();
        middleimgeindex = genrateRandomIndex();
        rightimgeindex = genrateRandomIndex();

    }
    // console.log(renderThreeImage);
    console.log(BusMull.allimages);


    leftImageElement.src = BusMull.allimages[leftimgeindex].filePath;
    middleImageElement.src = BusMull.allimages[middleimgeindex].filePath;
    rightImageElement.src = BusMull.allimages[rightimgeindex].filePath;


}

renderThreeImage();


// leftImageElement.addEventListener('click', handleClicking);
// middleImageElement.addEventListener('click', handleClicking);
// rightImageElement.addEventListener('click', handleClicking);

containerElement.addEventListener('click' , handleClicking);


function handleClicking(event) {


    count++;

    if (count <= maxtry) {
        BusMull.allimages[leftimgeindex].shown++;
        BusMull.allimages[middleimgeindex].shown++;
        BusMull.allimages[rightimgeindex].shown++;

        if (event.target.id === 'leftimge') {

            BusMull.allimages[leftimgeindex].votes += 1;

        } else if (event.target.id === 'middleimge') {

            BusMull.allimages[middleimgeindex].votes += 1;

        } else if (event.target.id === 'rightimge') {
            BusMull.allimages[rightimgeindex].votes += 1;


        }


        
        renderThreeImage();

    }else{
        // renderList();
        alert('Click Submit');
        counts--;
        containerElement.removeEventListener('click', handleClicking);
    
    }


}

let button = document.getElementById('btn');
button.addEventListener('click' , showing);

function showing(){
    renderList();
        button.removeEventListener('click',showing);

}



function renderList() {
    let ul = document.getElementById('unlist');

    for (let i = 0; i < BusMull.allimages.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.textContent = `${BusMull.allimages[i].names} it has ${BusMull.allimages[i].votes} votes , and the times was ${BusMull.allimages[i].shown}.`


    }          

}


