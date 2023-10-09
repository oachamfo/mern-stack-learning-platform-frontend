import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Index from "./pages/Index";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import { getQuestions } from "./utilities/questions-service";

function App() {
  //state to hold questions
  const [questions, setQuestions] = useState();

  useEffect(() => {
    //async function inside useEffect() is used to call an imported async function and to update the state
    const getQuestionsandUpdateState = async () => {
      const questions = await getQuestions();
      //set the questions state with the return value of the imported getQuestions() function
      setQuestions(questions);
    };
    //inside useEffect() invoke the async helper function defined in useEffect()
    getQuestionsandUpdateState();
  }, []);

  return (
    <div className="App">
      App Component
      <Routes>
        <Route path="/questions" element={<Index questions={questions} />} />
        <Route path="/questions/new" element={<New />} />
        <Route path="questions/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
