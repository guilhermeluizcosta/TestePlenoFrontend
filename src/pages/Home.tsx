import { useNavigate } from "react-router-dom";
import "../pages/Home.css"; 


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <header className="header">
      <div className="capys-logo-home">
        <img src="src/assets/logo_capys.png" alt="Capys Logo"/>
      </div>
      <button
        className="exit-button"
        onClick={() => navigate("/login")}
      >
        Sair
      </button>
      </header>
      <div className="welcome-container">
        <div className="welcome-message">Olá, Teste Capys</div>
        <div className="developer-info">Desenvolvedor Front-End</div>
      </div>
      
      <main className="main-content">
        <h2 className="development-message">Que pena! Estamos em desenvolvimento :(</h2>
        <p className="development-details">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </div>
  );
};

export default Home;
