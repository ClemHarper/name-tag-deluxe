// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

// The following line of code
// document.title = 'Cookie is Wild!';
// put a name on the web tab

const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
    console.log('hello from the event listener');
});

// console.log('pants');
// prints pants
// on the webpage console

// console.log(document.title)
// prints Cookie is Wild!
// on the webpage console

// console.log(document.getElementById('heading'));
// prints <h1 id='heading'>Web App</h1>
// which is the code from the html.index file
// on the webpage console
// but to get this to work you have to add the id='heading' to the h1 tag in the html.index file

// console.log(document.getElementById('name'));
// prints <input id="name">
// once i add the id tag name to input in html file

// These two lines of code together
//     const nameInput = document.getElementById('name');
//     console.log(nameInput);
// prints <input id="name">

// These two lines of code together
//    const heading = document.getElementById('heading');
//    heading.textContent = 'OMG JS!';
//override the name of the heading on the html.index file
//from Web App to OMG JS
