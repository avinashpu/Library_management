import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BooksPage from './pages/AddBook';
import MembersPage from './pages/MembersPage';
import TransactionsPage from './pages/TransactionsPage';
import SettingsPage from './pages/SettingsPage';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
