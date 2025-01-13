console.log('///// Elements /////');

// Define a constant array named `daysArray` that represents days in a month, where each day has attributes such as day value, a gift object, and a status.
const daysArray = [

   // Each object in the array represents a day
   {
      dayValue: 1, // The numerical value of the day (1-25)
      gift: {}, // Placeholder for any gift associated with the day
      status: 'close', // Status indicating whether the day is "open", "half-open" or "closed"

   },
   {
      dayValue: 2,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 3,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 4,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 5,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 6,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 7,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 8,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 9,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 10,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 11,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 12,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 13,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 14,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 15,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 16,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 17,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 18,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 19,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 20,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 21,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 22,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 23,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 24,
      gift: {},
      status: 'close',

   },
   {
      dayValue: 25,
      gift: {},
      status: 'close',

   }

];

// Serialize the `daysArray` into a JSON string format for storage
const serializeDaysArray = JSON.stringify(daysArray);

// Store the serialized array in local storage under the key 'daysArray'
// localStorage.setItem('daysArray', serializeDaysArray);

// Retrieve the serialized days array from local storage
const serializedDaysArray = localStorage.getItem('daysArray');

// Deserialize the retrieved string back into a JavaScript array
const storedDaysArray = JSON.parse(serializedDaysArray);

// Define constant of Cards Container Dom Element
const cardsContainerElem = document.querySelector(".cards-container");

console.log("cardsContainerElem", typeof cardsContainerElem, cardsContainerElem);

// Define constant of Reset Button Dom Element
const resetBtnElem = document.querySelector(".reset-btn");

console.log("resetBtnElem", typeof resetBtnElem, resetBtnElem);