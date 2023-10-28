import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import EmployersList from "./components/employers-list/employers-list";
const App = (props) => {
  const [database, setDatabase] = React.useState([
    { name: "John C.", like: 500, increase: false, id: 1 },
    { name: "Carl W.", like: 500, increase: false, id: 2 },
    { name: "Tamirlan", like: 500, increase: true, id: 3 },
  ]);
  const [maxid, setMaxid] = React.useState(4);
  const deleteItem = (id) => {
    // const index = database.findIndex((elem) => elem.id === id);
    // const before = database.slice(0, index);
    // const after = database.slice(index + 1);
    // const newArray = [...before, ...after];
    // setDatabase(newArray);
    setDatabase(database.filter((item) => item.id !== id));
  };
  const addItem = (name, salary) => {
    setMaxid(maxid + 1);
    const newItem = {
      name,
      salary,
      increase: false,
      id: maxid,
    };
    const newArr = [...database, newItem];
    setDatabase(newArr);
  };
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <EmployersList
                  database={database}
                  deleteItem={deleteItem}
                  addItem={addItem}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
