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
 * Description: Function that prints days from a given array on a DOM element [cardsContainer].
 * @param {array} days - The array of days to be printed.
 * @param {object} cardsContainer - The DOM element where the days will be printed.
 */
function printCalendarDays(days, cardsContainer) {

   // Clear any previous list elements from the cardsContainer
   cardsContainer.innerHTML = '';

   // Iterate over each day in the array and print it on the cardsContainer
   days.forEach((day) => {

      // Create a new div element for each day and add it to the cardsContainer
      cardsContainer.innerHTML += `
         <div class="card ${day.status} day-${day.dayValue}">
            ${day.dayValue}
         </div>
      `

   });

};

// Define a function to add event listeners to cards
function addCardEventListeners() {

   // Select all elements with class "card" from the DOM
   const cardsElem = document.querySelectorAll(".card");

   // Iterate over each card element and add an event listener to it
   cardsElem.forEach(card => {

      // Add an event listener to the card that will be triggered when it's clicked
      card.addEventListener('click', (event) => {

         console.log('event.target.innerText =', typeof event.target.innerText, event.target.innerText);

         const cardClasses = Object.values(event.target.classList);

         console.log('cardClasses =', typeof cardClasses, cardClasses);

         // Process the click based on the card's status
         if (cardClasses.includes('open')) {

            // If the card is open, change its status to "half-open"
            storedDaysArray[event.target.innerText - 1].status = 'half-open';

         } else if (cardClasses.includes('half-open') || cardClasses.includes('close')) {

            // If the card is half-open or close, change its status to "open"
            storedDaysArray[event.target.innerText - 1].status = 'open';

         };

         // Serialize the updated days array
         const serializeDaysArray = JSON.stringify(storedDaysArray);

         // Store the serialized days array in local storage
         localStorage.setItem('daysArray', serializeDaysArray);

         // Print the updated [daysArray] on the [cardsContainer]
         printCalendarDays(storedDaysArray, cardsContainerElem);

         // Re-add the event listeners
         addCardEventListeners();

      });

   });

};

// Function to initialize the cards state
function initializeCardsState() {

   // Iterate over each day in the storedDaysArray and change its status to "half-open" if it's currently "open"
   storedDaysArray.forEach(day => {

      if (day.status === 'open') {

         // Change open cards to half-open
         day.status = 'half-open';

      };

   });

   // Serialize the updated days array
   const serializeDaysArray = JSON.stringify(storedDaysArray);

   // Store the serialized days array in local storage
   localStorage.setItem('daysArray', serializeDaysArray);;

};