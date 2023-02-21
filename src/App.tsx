import React from 'react';
import NavigationBar from './components /NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Members from './components /Members';
import Home from './components /Home';
import Details from './components /Details';
import { Provider } from 'react-redux';
import { store } from './store';


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <header className="App-header">
          <NavigationBar />
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path={`/:id`}  element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
