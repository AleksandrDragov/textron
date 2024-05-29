import './App.less';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContainer from './MainContainer/MainContainer';
export const App = () => {
  return (
    <div className="container">
      <Header />
      <MainContainer>
        <div>Textron</div>
      </MainContainer>
      <Footer />
    </div>
  );
};
