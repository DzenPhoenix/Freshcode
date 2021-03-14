import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dbUsers= [
                {
                    name: "User_1",
                    age: 20,
                    id:1,
                    isChecked:false,
                },
                {
                    name: "User_2",
                    age: 21,
                    id:2,
                    isChecked:false,
                },
                {
                    name: "User_3",
                    age: 22,
                    id:3,
                    isChecked:false,
                },
                {
                    name: "User_4",
                    age: 23,
                    id:4,
                    isChecked:false,
                },
                {
                    name: "User_5",
                    age: 24,
                    id:5,
                    isChecked:false,
                },
            ];

ReactDOM.render(
  <React.StrictMode>
    <App dbUsers={dbUsers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
