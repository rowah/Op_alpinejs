console.log("What is the capital of Peru?");

setTimeout(() => {
  console.log("Lima!");
}, 3000);

setTimeout(() => {
  console.log("Ready for next question?");
}, 6000);

const closeModal = document.getElementById("modal-close-btn");
const choiceBtns = document.getElementById("modal-choice-btns");
/*
Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

setTimeout(() => {
  console.log("Modal Opened!");
}, 1500);

const loader = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="160px" height="20px" viewBox="0 0 128 16" xml:space="preserve"><path fill="#ff94ff" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"/><g><path fill="#ff00ff" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"/><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite"/></g></svg>`;

/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById("modal");
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/
const modalCloseBtn = document.getElementById("modal-close-btn");

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

/*Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?) */
const declineButton = document.getElementById("decline-btn");

// 2. Set up an eventListener that is triggered
//    when a user's cursor hovers over the decline
//    button. (Google the event to listen out for!)
declineButton.addEventListener("mouseover", () => {
  // declineButton.innerText = `Accept`;
  console.log("hovered");
  // choiceBtns.style.flexDirection = "row-reverse";
  choiceBtns.classList.toggle("reverse");
});

// 3. For now, just log out "hovered" when that
//    happens.
// */
/*



Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/

const formModal = document.getElementById("concent-form");
formModal.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();

  /*   
Challenge: 
1. Inside the body of this event listener, 
   create a const and set it equals to a new 
   instance of FormData which takes in our HTML 
   form element as a parameter.
2. Log out the const (you should just get 
   a FormData object).
*/

  const formData = new FormData(formModal);
  console.log(formData.keys);

  /*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/
  const modalText = document.getElementById("modal-text");
  modalText.innerHTML = `<div class="modal-inner-loading">
  ${loader}
  <p id="uploadText">
      Uploading your data to the dark web...
  </p>
</div>`;

  /*   
Challenge: 
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!
*/

  setTimeout(() => {
    document.getElementById("uploadText").innerText = `Making the sale...`;
  }, 1500);

  /*   
Challenge: 
1. Make it so that 1.5 seconds after seeing the 
   "Making the sale..." message, the modal is 
   cleared of its content and the following 
   string of HTML is displayed instead.
   
   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
*/

  /*   
Challenge: 
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/

  const fullName = formData.get("fullName");
  console.log(name);
  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.png">
    </div>
    `;

    /* Challenge: 
1. Make the button that closes the modal disabled.
2. Make that button become usable when the final 
   modal message has been displayed to the user.
*/

    closeModal.disabled = false;
  }, 3000);
});

/* Challenge: 
1. Make the button that closes the modal disabled.
2. Make that button become usable when the final 
   modal message has been displayed to the user.
*/
