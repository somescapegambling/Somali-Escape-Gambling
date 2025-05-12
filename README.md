# 🎲 Ludo Game Website

A modern, fully functional **Ludo Game** built from scratch using **HTML**, **CSS**, and **JavaScript**, enhanced with **Bootstrap** and custom styles. This project offers a classic Ludo game experience with dynamic, modular game logic, making it easy to understand, edit, and extend.

---

## 🏆 Features

- **Dynamic Game Logic**: Complete JavaScript implementation with dice rolling, piece movement, and knockout mechanics
- **Multiple Player Options**: Play with 2, 3, or 4 players
- **Customizable Gameplay**:
  - Choose unique player colors
  - Add personalized player names
  - Select different color combinations for 2 or 3 player modes
- **Interactive Board**: Functional dice rolling with realistic probabilities
- **Special Rules Implemented**:
  - Roll a 6 to leave home base
  - Extra turn when rolling a 6
  - Knockout opponent pieces when landing on them
  - Safe zones where pieces cannot be knocked out
- **Win Detection**: Automatic recognition when a player completes the game
- **Responsive Design**: Works on both desktop and mobile devices

---

## 📄 Pages

1. **`index.html`**
   - Configure the game settings:
     - Number of players (2-4)
     - Player colors and color combinations
     - Custom player names
   - Clean, intuitive interface for game setup

2. **`game.html`**
   - The main interface featuring:
     - Interactive Ludo board with all player positions
     - Dice rolling mechanics
     - Turn-based gameplay with visual indicators
     - Home paths for each color
     - Score tracking and win detection

---

## 🛠️ Tech Stack

- **Frontend:**
  - HTML5
  - CSS3
  - Bootstrap for responsive layout
- **Game Logic:**
  - Pure JavaScript
  - LocalStorage for game state management
- **Assets:**
  - Custom dice images
  - Player tokens with distinct colors

---

## 🚀 How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/khushisharma/ludo-game.git
   ```

2. **Navigate to Project**:
   ```bash
   cd ludo-game
   ```

3. **Open the Game**:
   - Launch `index.html` in your browser to configure game settings
   - The game will automatically proceed to `game.html` after configuration

No additional dependencies or installations required! The game runs entirely in the browser.

---

## 🎮 How to Play

1. **Setup**: Select the number of players and enter names
2. **Game Rules**:
   - Players take turns rolling the dice by clicking "ROLL"
   - Pieces can only leave the starting area when a 6 is rolled
   - After rolling a 6, you get an extra turn
   - Move pieces by clicking on them after rolling
   - Landing on an opponent's piece sends their piece back to start
   - First player to get all pieces to the home area wins

---

## 📁 Project Structure

```
ludo-game/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   ├── img/
│   │   ├── red.png, green.png, yellow.png, blue.png
│   │   ├── d-1.png to d-6.png (dice images)
│   │   └── back.png, main.png (background images)
│   └── js/
│       ├── myScript.js (game logic)
│       └── playerSet.js (player setup logic)
├── index.html (player selection page)
├── game.html (main game board)
└── README.md
```

---

## 🧠 Game Logic Highlights

- **Local Storage**: Game configuration persists between pages
- **Dice Algorithm**: Custom probability distribution for realistic dice rolls
- **Path Navigation**: Complex pathing algorithms for each colored piece
- **Collision Detection**: Piece interaction and knockout system
- **Turn Management**: Automatic handling of turns and extra rolls
- **Home Path Logic**: Special calculations for the final approach

---

## 🌟 Future Enhancements

- **Online Multiplayer Support**: Play with friends remotely
- **Enhanced Animations**: More visual feedback for moves and actions
- **Audio Effects**: Sound effects for dice rolls and piece movements
- **AI Opponents**: Play against computer-controlled players
- **Statistics Tracking**: Keep track of wins and game history
- **Themes**: Alternate board designs and color schemes

---

## 📷 Screenshots

### Game Setup Page (`index.html`)
*Set up the number of players, colors, and player names.*

### Gameplay Page (`game.html`)
*Play the Ludo game with a functional board and dice rolling.*

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 👩‍💻 Developer

Created by Khushi Sharma

---

## 🙌 Acknowledgments

Inspired by the classic board game Ludo and built to provide a fun and customizable gaming experience for web browsers.

Enjoy playing Ludo! 🎲
