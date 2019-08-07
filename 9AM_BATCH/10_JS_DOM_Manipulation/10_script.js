let val = document;
console.log(val);

// head section
val = document.head;
console.log(val);

// Title of the page
val = document.title;
console.log(val);

// body section
val = document.body;
console.log(val);

// access the HTML Elements with Tag Name
let navTag = document.querySelector('nav');
console.log(navTag);

// access the HTML Elements with Id
navTag = document.querySelector('#main-nav');
console.log(navTag);

// access the HTML Elements with class Name
navTag = document.querySelector('.navbar');
console.log(navTag);

// Change the Content of tags
let anchorTag = document.querySelector('#main-nav a');
console.log(anchorTag);
anchorTag.innerText = 'DOM Manipulation in JavaScript';

// Change the Styles
navTag.style.backgroundColor = 'limegreen';

// change the H1 tag
let h1Tag = document.querySelector('h1');
h1Tag.innerText = 'Good Evening';
h1Tag.style.backgroundColor = 'purple';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';

// change the html content
let h2Tag = document.querySelector('h2');
let spanTags = `<span style="color: orangered">The</span>
                <span style="color: lightblue">Great</span>
                <span style="color: limegreen">India</span>`;
h2Tag.innerHTML = spanTags;

// Change the attributes
let imgTag = document.querySelector('#laptop-image');
imgTag.setAttribute('src','../img/image5.jpeg');