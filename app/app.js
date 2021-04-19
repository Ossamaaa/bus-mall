'use strict';


let containerElement = document.getElementById('sec')

let leftImageElement = document.getElementById('leftimge');
let middleImageElement = document.getElementById('middleimge');
let rightImageElement = document.getElementById('rightimge');









let maxtry = 6;
let count = 0;
BusMull.allimages = [];

let leftimgeindex;
let middleimgeindex;
let rightimgeindex;
let ofNames = [];
let ofArry = [];

function BusMull(names, filePath) {
    this.names = names;
    this.filePath = filePath;
    this.timesImagShown = 0;
    this.votes = 0;
    this.shown = 0;
    this.ofRandom = [];

    BusMull.allimages.push(this);
    ofNames.push(this.names);

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

    function genrateRandomIndex() {
        let random = Math.floor(Math.random() * BusMull.allimages.length);
          while (ofArry.includes(random)){
              random = Math.floor(Math.random() * BusMull.allimages.length);
              
              
          };
          return random;
      }
  








function renderThreeImage() {

    leftimgeindex = genrateRandomIndex();
    middleimgeindex = genrateRandomIndex();
    rightimgeindex = genrateRandomIndex();







    while ((leftimgeindex === rightimgeindex) || (leftimgeindex === middleimgeindex) || (rightimgeindex === middleimgeindex )) {

        leftimgeindex = genrateRandomIndex();
        middleimgeindex = genrateRandomIndex();
        rightimgeindex = genrateRandomIndex();

    }
    // console.log(renderThreeImage);
    // console.log(BusMull.allimages);


    leftImageElement.src = BusMull.allimages[leftimgeindex].filePath;
    middleImageElement.src = BusMull.allimages[middleimgeindex].filePath;
    rightImageElement.src = BusMull.allimages[rightimgeindex].filePath;



ofArry= [];
ofArry.push(leftimgeindex,middleimgeindex,rightimgeindex);

}


renderThreeImage();




containerElement.addEventListener('click', handleClicking);


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

    } else {

        containerElement.removeEventListener('click', handleClicking);

    }


}

let button = document.getElementById('btn');
button.addEventListener('click', showing);

function showing() {
    renderList();
    button.removeEventListener('click', showing);

}

let ofVotes = [];
let ofShown = [];
function renderList() {
    let ul = document.getElementById('unlist');

    for (let i = 0; i < BusMull.allimages.length; i++) {
        ofVotes.push(BusMull.allimages[i].votes);
        ofShown.push(BusMull.allimages[i].shown);
        let li = document.createElement('li');
        ul.appendChild(li);

        li.textContent = `${BusMull.allimages[i].names} it has ${BusMull.allimages[i].votes} votes , and the times was ${BusMull.allimages[i].shown}.`


    }

}
let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ofNames,
        datasets: [{
            label: 'Number of Votes',
            data: ofVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderWidth: 1
        }, {
            label: '# Of Shown',
            data: ofShown,
            backgroundColor: [
                'rgb(128,128,128)'

            ],
            borderWidth: 1

        }]
    }

})
