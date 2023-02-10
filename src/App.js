import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import { styles } from "./components/style";
import Stats from "./components/stats";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router> */}
      <div className="w-full overflow-hidden font-myfont bg-myblack ">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <Header />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden font-myfont bg-myblack ">
        <div>
          <div className={`${styles.container}`}>
            <Home />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden font-myfont bg-mydark ">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <About />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden font-myfont bg-myblack">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <Skills />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden font-myfont bg-mydark ">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
