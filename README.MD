# JavaScript Advent Calendar

The JavaScript Advent Calendar is an interactive web application that brings the festive spirit to your browser. Built with HTML, CSS, and JavaScript, it allows users to open a new "card" each day leading up to Christmas, revealing a surprise such as an image or a message. This project demonstrates dynamic content generation, event handling, and state management in web development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Milestones](#milestones)
- [Contributing](#contributing)

## Features

- **Dynamic Calendar Generation**: The calendar displays 24 cards, each corresponding to a day in December leading up to Christmas.
- **Interactive Cards**: Clicking on a card opens a modal displaying a random surprise (image or message).
- **Persistent State**: The application remembers which cards have been opened, even after the page is refreshed.
- **Responsive Design**: The layout adapts to various screen sizes for optimal viewing on different devices.
- **Reset Functionality**: Users can reset the calendar to start over, clearing the opened cards' history.

## Technologies Used

- **HTML5**: Structure and content of the application.
- **CSS3**: Styling, including responsive design and modals.
- **JavaScript (ES6+)**: Dynamic content generation, event handling, and local storage management.

## Installation

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EmilioGall/js-advent-calendar.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd js-advent-calendar
   ```

3. **Open `index.html` in your preferred web browser**.

## Usage

- **Opening Cards**: Click on any card to reveal the surprise behind it. Once opened, the card's appearance changes to indicate it has been opened.
- **Persistent State**: The application uses `localStorage` to remember which cards have been opened. Refreshing the page will not reset the opened cards.
- **Reset Calendar**: Click the "Reset Calendar" button to clear the opened cards' history and start over.

## Milestones

1. **Core Functionality**:
   - Create a visually appealing advent calendar with clickable cards.
   - Implement modal pop-ups to reveal surprises behind each card.
   
2. **State Management**:
   - Add `localStorage` to persist opened cards across page reloads.

3. **Responsiveness**:
   - Ensure the calendar layout adapts smoothly to different screen sizes.

4. **Reset Option**:
   - Add a reset button to clear the opened cards and restart the experience.

5. **Future Enhancements**:
   - Include customization options for surprises (e.g., user-uploaded images or messages).
   - Add festive animations and sound effects for enhanced engagement.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**

---

Happy holidays and happy coding!