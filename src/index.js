import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store";
import MainPageComponent from "./pages/MainPage/MainPageComponent";
import CoursePageComponent from "./pages/CoursePage/CoursePageComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuhorizationPageComponent from "./pages/AuthorizationPage/AuthorizationPageComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPageComponent />}/>
                  <Route path="/auth" element={<AuhorizationPageComponent />}/>
                  <Route path="/course" element={<CoursePageComponent />}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
