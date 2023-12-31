import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ToDoList from "./ToDoList";

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<SignUp/>} />
                    <Route path="/SignIn" element={<SignIn/>} />
                    <Route path="/ToDoList" element={<ToDoList/>} />
                </Routes>
            </div>
        </Router>
    );
}