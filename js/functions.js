console.log('///// Functions /////');

/**
 * Description: function calls the given function [functionToCall] only after time param [delay].
 * @param {function} functionToCall
 * @param {number} delay
 * @returns {function} 
 */
function debounce(functionToCall, delay) {

   // Define variable for timeout
   let timeout;

   return function (...args) { // capture arguments passed to the debounced function

      // Clear the previous timer
      clearTimeout(timeout);

      // Capture context of function
      const context = this;

      // Set a new timeout to call the function
      timeout = setTimeout(() => {

         // Execute the function with the correct context and arguments
         functionToCall.apply(context, args);

      }, delay);

   };

};

/**
 * Description: function prints on DOM element [cardsContainer] days from a given array.
 * @param {array} days
 * @param {obj} cardsContainer
 */
function printCalendarDays(days, cardsContainer) {

   // Clear previous list elements
   cardsContainer.innerHTML = '';

   days.forEach((day) => {

      cardsContainer.innerHTML += `
         <div class="card ${day.status} day-${day.dayValue}">
            ${day.dayValue}
         </div>
      `

   });

};

// Define a function to add event listeners to cards
function addCardEventListeners() {

   // Define constant of Cards Dom Element
   const cardsElem = document.querySelectorAll(".card");

   cardsElem.forEach(card => {

      card.addEventListener('click', (event) => {

         console.log('event.target.innerText =', typeof event.target.innerText, event.target.innerText);

         const cardClasses = Object.values(event.target.classList);

         console.log('cardClasses =', typeof cardClasses, cardClasses);

         // Here, we process the click based on card's status
         if (cardClasses.includes('open')) {

            storedDaysArray[event.target.innerText - 1].status = 'half-open';

         } else if (cardClasses.includes('half-open') || cardClasses.includes('close')) {

            storedDaysArray[event.target.innerText - 1].status = 'open';
         }

         // Serialize the days array
         const serializeDaysArray = JSON.stringify(storedDaysArray);

         // Store the serialized days array in local storage
         localStorage.setItem('daysArray', serializeDaysArray);

         // Print on [cardsContainerElem] days in [daysArray] from Local Storage
         printCalendarDays(storedDaysArray, cardsContainerElem);

         // Re-add the event listeners
         addCardEventListeners();

      });

   });

};

// Function to initialize the cards state
function initializeCardsState() {

   storedDaysArray.forEach(day => {

      if (day.status === 'open') {

         day.status = 'half-open'; // Change open cards to half-open

      };

   });

   // Serialize the updated days array and store it again in local storage
   const serializeDaysArray = JSON.stringify(storedDaysArray);

   localStorage.setItem('daysArray', serializeDaysArray);

};