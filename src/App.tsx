import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Header from "./Components/Header";
import routes from "./Configs/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head title="Luan" description="Tetete" project="New" />
        <Header />
        <div className="App__Container">
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component {...route.head} />}
                />
              );
            })}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
