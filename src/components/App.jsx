import './App.less';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
export const App = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ height: '100vh', backgroundColor: '#D9D9D9' }}>
        hkbfbhfl danjsjkdan
      </main>
      <footer>footer</footer>
    </div>
  );
};
