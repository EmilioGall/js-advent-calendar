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