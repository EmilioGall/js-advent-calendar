console.log('///// Main /////');

// Initialize the cards state when the page is loaded
initializeCardsState();

// Print on [cardsContainerElem] days in [daysArray] from Local Storage
printCalendarDays(storedDaysArray, cardsContainerElem);

// Call the function to add the event listeners
addCardEventListeners();


// Add an event listener to the resetBtnElem that will be triggered when it's clicked
resetBtnElem.addEventListener('click', () => {

// Store the serialized array in local storage under the key 'daysArray'
localStorage.setItem('daysArray', serializeDaysArray);

});