import React from "react";

import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, reducer] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Rightbar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
