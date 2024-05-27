import './App.less';
import Header from './Header/Header';
export const App = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ height: '100vh', backgroundColor: '#D9D9D9' }}>
        hello there!
      </main>
      <footer>footer</footer>
    </div>
  );
};
