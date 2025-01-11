console.log('///// Main /////');

// Initialize the cards state when the page is loaded
initializeCardsState();

// Print on [cardsContainerElem] days in [daysArray] from Local Storage
printCalendarDays(storedDaysArray, cardsContainerElem);

// Call the function to add the event listeners
addCardEventListeners();