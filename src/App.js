import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('data')) {
      setdata(JSON.parse(localStorage.getItem('data')));
      console.log(data);
    }

    //eslint-disable-next-line
  }, []);

  const addNewData = (record) => {
    const newRecords = [...data, record];
    localStorage.setItem('data', JSON.stringify(newRecords));
    setdata(newRecords);
  }
  return (
    <Router>
      <div className="App">
        {/* main */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="add" element={<Form addNewData={addNewData} />} />
            <Route path="view" element={<Table data={data} />} />
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
