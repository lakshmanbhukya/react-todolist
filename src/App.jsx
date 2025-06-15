import { useState, useEffect } from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
