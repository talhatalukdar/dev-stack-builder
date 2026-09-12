# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React website where users can explore different web development technologies and build their own development stack. Users can add technologies to their stack, remove them, or clear the entire stack. The technology data is loaded dynamically from a JSON file.

## 🌐 Live Demo

[Visit the Live Website](https://dev-stack-builder-flame.vercel.app/)

## 📦 GitHub Repository

[View the GitHub Repository](https://github.com/talhatalukdar/dev-stack-builder)

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite

## ✨ Key Features

### 1. 🧩 Build Your Own Stack

Users can explore different technologies and add them to their personal stack. The selected technologies are shown in a separate "Your Stack" section.

### 2. 🔔 Smart Stack Management

The website prevents duplicate technologies from being added. Users also get toast notifications when they add, remove, or clear technologies.

### 3. 📱 Responsive & User-Friendly Design

The website works smoothly on desktop, tablet, and mobile devices. It also includes a responsive navbar, loading state, error handling, and a clean modern UI.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand because we can keep the UI structure and JavaScript logic together.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that a component manages by itself and can change over time.

In this project, technology data is passed to components using props, while the selected stack is managed using state in `App.jsx`.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data inside a component.

I used it in `App.jsx` to manage the technology list, loading state, error state, and the user's selected stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

I used it in `App.jsx` to fetch the technology data from the JSON file when the website loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item was changed, added, or removed.

In this project, I used the technology `id` as the key when displaying the technology cards.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the `YourStack` component. If the user has not selected any technology, it shows an empty stack message. When technologies are added, it shows the selected items instead.

```jsx
{count === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Show selected technologies
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child through props. The parent can also pass a function as a prop, and the child can call that function to send an action or data back to the parent.

In this project, `App.jsx` passes technology data and functions to components like `TechnologyGrid` and `YourStack`. When a user clicks "Add to Stack", the child component calls the function received from `App.jsx`, and the parent updates the stack.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechCard.jsx
│   ├── TechnologyGrid.jsx
│   ├── YourStack.jsx
│   ├── Loader.jsx
│   ├── Footer.jsx
│   └── Logo.jsx
├── App.jsx
└── index.css

public/
└── data/
    └── technologies.json
```

## ⚙️ Run Locally

```bash
git clone https://github.com/talhatalukdar/dev-stack-builder.git
cd dev-stack-builder
npm install
npm run dev
```

---

Made with ❤️ using React and Tailwind CSS.
