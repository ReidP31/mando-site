let myImage = document.querySelector('img');

myImage.onmouseover = function() {
   let mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/art-of-mandalorian-final-cover_2.jpg') {
    myImage.setAttribute('src','images/the_mandelorian_-_publicity_still_-_h_2019_-928x523.jpg')
   } else {
    myImage.setAttribute('src','images/art-of-mandalorian-final-cover_2.jpg');
   }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
 let myName = prompt('Please enter your name.');
 if (!myName) {
  myHeading.textContent = 'The Mandalorian';
 } else {
 localStorage.setItem('name', myName);
 myHeading.textContent = 'The Mandalorian is cool, ' + myName + '. This is the Way.';
 }
}

myButton.onclick = function() {
 setUserName();
}