import './App.less';
import Icon from './Icon/Icon';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContainer from './MainContainer/MainContainer';
import Partners from './Partners/Partners';
import BackCall from './BackCall/BackCall';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../Pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
export const App = () => {
  return (
    <div className="container">
      {' '}
      <Header />
      <MainContainer>
        <Suspense
          fallback={
            <div className="loading-container">
              <Icon
                id="textron-logo"
                width={150}
                height={150}
                className="loading-logo-icon"
              />
              Loading...
            </div>
          }
        >
          {' '}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </MainContainer>
      <Partners />
      <BackCall />
      <Footer />
    </div>
  );
};
