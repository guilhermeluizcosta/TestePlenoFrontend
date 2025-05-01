import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ResponseLogin } from "../Mocks/login";
import { Eye, EyeOff } from "lucide-react";
import CapysLogo from '../components/CapysLogo';
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const response = ResponseLogin({ Email: email, Senha: senha });

    if (response.status === 200) {
      alert(response.data.mensagem);
      navigate("/home");
    } else {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <CapysLogo />
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="password-input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="form-input"
              required
            />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
                className="form-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-button"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">Entrar</button>
        </form>

        <div className="signup-section">
          <p className="signup-text">Ainda não possui uma conta?</p>
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
