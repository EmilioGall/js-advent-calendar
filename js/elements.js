console.log('///// Elements /////');

// Define constant of Days with attributes
const daysArray = [

   {
      dayValue: 1,
      gift: {},
      status: 'close',

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
      status: 'half-open',

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
      status: 'open',

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

// Serialize the days array
const serializeDaysArray = JSON.stringify(daysArray);

// Store the serialized days array in local storage
// localStorage.setItem('daysArray', serializeDaysArray);

// Get the serialized dazs array from local storage
const serializedDaysArray = localStorage.getItem('daysArray');

// Deserialize the array
const storedDaysArray = JSON.parse(serializedDaysArray);

// Define constant of Cards Container Dom Element
const cardsContainerElem = document.querySelector(".cards-container");

console.log("cardsContainerElem", typeof cardsContainerElem, cardsContainerElem);

