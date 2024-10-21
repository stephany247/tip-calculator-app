# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop design](./design/Screenshot%202024-10-21%20at%2014-22-52%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![Active state design](./design/Screenshot%202024-10-21%20at%2014-31-23%20Frontend%20Mentor%20Tip%20calculator%20app.png)
![Mobile design](./design/Screenshot%202024-10-21%20at%2014-33-30%20Frontend%20Mentor%20Tip%20calculator%20app.png)



### Links

- Solution URL: [Solution URL here](https://github.com/stephany247/tip-calculator-app)
- Live Site URL: [Live site URL here](https://stephany247.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/) -  CSS framework
- [jQuery](https://jquery.com/) - JavaScript library


### What I learned

During this project, I gained valuable insights and improved my skills in several areas:

- Utilizing Bootstrap for Rapid Development: Incorporating Bootstrap into my project enabled me to design and implement responsive components quickly. I appreciated its grid system and pre-designed classes.

```html

<form class="container row">
      <section class="col-lg-6 col-md-6 col-12">
        <fieldset class="bill row mb-3">
          <label for="bill">
            <p>Bill</p>
          <span class="error-message" id="error-message-bill"></span>
          </label>
          <div class="input-group">
            <span class="input-group-text">
              <img src="images/icon-dollar.svg" alt="dollar icon">
            </span>
            <input type="number" class="form-control text-end" id="bill" placeholder="0">
          </div>
        </fieldset>

```

- Working with jQuery for DOM Manipulation: I became more comfortable using jQuery to handle events and manipulate the DOM, making my project more dynamic.

```js

const peopleErrorMessageDisplay = document.querySelector('#error-message-people');
const resetButton = document.querySelector(".reset");

let selectedTipPercentage = 0;

// Event listeners
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
customTipInput.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetValues);
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleTipSelection(e.target);
  });
});

```

- Enhancing User Experience with Input Validation: Implementing real-time input validation taught me the importance of providing immediate feedback to users, improving the overall experience.

```js

billInput.addEventListener('input', validateBill);
peopleInput.addEventListener('input', validatePeople);
billInput.addEventListener('input', () => {
  resetButton.disabled = billInput.value.trim() === ''; // Toggle button state
});
resetButton.addEventListener('click', () => {
  billInput.value = ''; // Reset input field
  resetButton.disabled = true; // Disable reset button
});

```

- Effective Use of Resources: I learned to leverage various resources like documentation, community forums, and tools like ChatGPT to troubleshoot and enhance my understanding of concepts.


### Continued development

In future projects, I aim to:

- Deepen my understanding of JavaScript and its integration with frameworks like React.
- Explore more advanced CSS techniques for creating responsive, interactive designs.
- Further improve my skills in jQuery for handling dynamic content efficiently.
- Expand my knowledge of Bootstrap components to create more flexible and customizable layouts.
- Gain more experience with JavaScript libraries and frameworks to enhance user interfaces.

### Useful resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/) - This was a great resource for understanding how to use Bootstrap components effectively, especially for creating responsive layouts quickly.
- [jQuery Documentation](https://jquery.com/) - This helped me understand how to manipulate DOM elements and handle events with jQuery, which made dynamic content handling easier.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This site is my go-to for detailed explanations on HTML, CSS, and JavaScript concepts. It's comprehensive and well-structured.
- [W3Schools - Flexbox Tutorial](https://www.w3schools.com/css/css3_flexbox.asp) - This tutorial helped me understand how to use Flexbox for creating flexible layouts.
- [ChatGPT](https://chatgpt.com/) - I used ChatGPT to get quick help with coding issues and to clarify tricky concepts throughout the project.


## Author

- Website - [Onyinye Stephanie Oguocha](https://www.your-site.com)
- Frontend Mentor - [stephany247](https://www.frontendmentor.io/profile/stephany247)
- Twitter - [@stephanyoguocha](https://x.com/stephanyoguocha)

## Acknowledgments

I would like to give a big thanks to the Frontend Mentor community and the resources on Stack Overflow for helping me troubleshoot and improve my project. A special thanks to:

- ChatGPT for providing quick help and clarifications on coding concepts.
- jQuery for simplifying DOM manipulation and event handling.
- Bootstrap for offering an excellent framework to create responsive designs efficiently.
- W3Schools for their comprehensive tutorials and documentation, which helped me understand various web development concepts.
