import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Index from "./pages/Index";
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
      <Index questions={questions} />
      <Routes>
        <Route path="/questions" element={<Index />} />
        <Route path="/orders/new" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
