import './App.less';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContainer from './MainContainer/MainContainer';
import Hero from './Hero/Hero';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
export const App = () => {
  return (
    <div className="container">
      <Header />
      {/* <Hero /> */}
      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </MainContainer>
      <Footer />
    </div>
  );
};
