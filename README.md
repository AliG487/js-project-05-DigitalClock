# Digital Clock

![Status](https://img.shields.io/badge/status-completed-brightgreen)
![Level](https://img.shields.io/badge/level-beginner-yellow)

## 📋 Description

A real-time clock that displays the current time and updates every second. Users see hours, minutes, and seconds constantly ticking away.

**Live Demo:** [View Live](https://alig487.github.io/js-project-05-DigitalClock/)

## ✨ Features

- ✅ Digital Clock displaying hours, minutes and seconds
- ✅ Date display
- ✅ Button to toggle between 24 and 12 hour formats
- ✅ Responsive design

## 🎯 Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling
- **Vanilla JavaScript** - DOM manipulation and logic

## 📸 Screenshots

![Screenshot 1](images/Screenshot-1.png)
![Screenshot 2](images/Screenshot-2.png)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/AliG487/js-project-05-DigitalClock

# Navigate to project folder
cd js-project-05-DigitalClock

# Open in browser
# Method 1: Direct open
open index.html

# Method 2: Using Python server
python -m http.server 8000
# Visit http://localhost:8000

# Method 3: VS Code Live Server
# Right-click index.html → Open with Live Server
```

## 📖 How to Use

1. Open the application in your browser
2. See the beautiful digital clock
3. Use the button in the bottom left to switch between 12 and 24 hours format

## 🎓 Key Concepts Learned

- **DOM Manipulation** - How to select HTML elements and modify their content
- **Date Object** - How to use `Date()` object and its methods
- **setInterval** - How touse `setInterval()`
- **Conditional Switching** - Conditionally toggling data

## 🔄 Challenges Faced

### Challenge: Toggling between 12 and 24 hour format

```javascript
function setTime() {
  let myTime = new Date()

  if (toggle) {
    clockDisplay.innerText = myTime.toLocaleTimeString("en-US", {
      hour12: false,
    })
    dateDisplay.innerText = myTime.toDateString()
  } else {
    clockDisplay.innerText = myTime.toLocaleTimeString("en-US", {
      hour12: true,
    })
    dateDisplay.innerText = myTime.toDateString()
  }
}
```

## 📚 Files Explained

- `index.html` - HTML structure with input field and greeting display
- `style.css` - Styling with gradient background
- `script.js` - JavaScript logic for greeting functionality

## ✅ Features Breakdown

| Feature            | Implementation                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Clock              | `new Date()` and `toLocaleTimeString()`                                                      |
| Date               | `toDateString()` method                                                                      |
| Toggle Time Format | `toLocalTimeSting('en-US',{hour12: true,})` and `toLocalTimeSting('en-US',{hour12: false,})` |

## 🔮 Future Improvements

1. **Add multiple time zones** - Allow user to select multiple time-zones simultaneously

## 🎯 Learning Outcomes

This project helped me understand:

- ✅ How to manipulate date and time
- ✅ How use timing functions
- ✅ How to format strings
- ✅ How to update DOM in loops

## 📝 License

MIT License - Feel free to use this project!

## 👨‍💻 Author

**Gohar Ali**

- GitHub: [@AliG487](https://github.com/AliG487)
- Email: engr.ali487@gmail.com

---

Made with ❤️ by Gohar Ali
