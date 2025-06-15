# 📝 React Todo App

A minimal, clean, and interactive **Todo App** built with React. It helps you organize your tasks efficiently with sorting, filtering, and auto-saving features — all powered by localStorage.

---

## 🌟 Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks anytime
- Filter: All / Active / Completed
- Sort: By Date or Alphabetically
- Tasks saved automatically (no database needed!)
- Responsive and styled using Tailwind CSS

---

## 🚀 Getting Started

1. **Install Dependencies**  
   Make sure your React project is set up and Tailwind CSS is configured.

2. **Add the Component**  
   Copy `Todo.jsx` into your `/src` folder.

3. **Use the Component**  
   In your `App.jsx`:

   ```jsx
   import Todo from "./Todo";

   function App() {
     return (
       <div className="min-h-screen bg-gray-100 py-10">
         <Todo />
       </div>
     );
   }

   export default App;
4. **Start the App**

```bash
npm start
# or
yarn start
```

# ✅ Quick Testing Guide (Human-Friendly)

Here’s how to make sure everything works smoothly — just follow along:

### 🖊️ Try adding a task
Type something into the input field and hit **"Add Task"**. Your task should appear below.

### ✅ Mark it complete
Click the checkbox to strike it out. Click again to unmark.

### 🗑️ Delete with ease
Hover over the task, click **"Delete"**, and it disappears.

### 🎯 Use filters
Switch between **"All"**, **"Active"**, and **"Completed"** to see different views.

### 🔤 Sort them
Want them **alphabetically arranged**? Or by **most recent**? Try the dropdown!

### 🔄 Reload the page
Yup — your tasks stay. They're saved in your browser.

### 👀 See the empty state
Delete all tasks and see the friendly message encouraging you to start fresh.
