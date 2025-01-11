console.log('///// Main /////');

// Print on [cardsContainerElem] days in [daysArray]
printCalendarDays(daysArray, cardsContainerElem);

// Define constant of Cards Dom Element
const cardsElem = document.querySelectorAll(".card");

console.log("cardsElem", typeof cardsElem, cardsElem);

cardsElem.forEach(card => {

   card.addEventListener('click', (event) => {

      console.log('event.target.classList =', typeof event.target.classList, event.target.classList);

      const cardClasses = Object.values(event.target.classList);

      console.log('cardClasses =', typeof cardClasses, cardClasses);

      if (cardClasses.includes('open')) {

         event.target.classList.remove("open");

         event.target.classList.add("half-open");
         
      } else if (cardClasses.includes('half-open')) {

         event.target.classList.remove("half-open");

         event.target.classList.add("open");
         
      } else if (cardClasses.includes('close')) {

         event.target.classList.remove("close");

         event.target.classList.add("open");

      };

   });

});
