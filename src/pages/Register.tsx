import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle, XCircle } from "lucide-react";
import "./register.css";
import logo from "../assets/logo_capys.png";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    bio: "",
    contato: "",
    cargo: "Desenvolvedor Front-End"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
      toast.custom((t) => (
        <div className="toast error">
          <XCircle className="toast-icon" />
          <span>Preencha todos os campos obrigatórios!</span>
          <button onClick={() => toast.dismiss(t)} className="toast-close">×</button>
        </div>
      ));
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      toast.custom((t) => (
        <div className="toast error">
          <XCircle className="toast-icon" />
          <span>As senhas não coincidem!</span>
          <button onClick={() => toast.dismiss(t)} className="toast-close">×</button>
        </div>
      ));
      return;
    }

    toast.custom((t) => (
      <div className="toast success">
        <CheckCircle className="toast-icon" />
        <span>Conta criada com sucesso!</span>
        <button onClick={() => toast.dismiss(t)} className="toast-close">×</button>
      </div>
    ));
  };

  const handleExit = () => {
    window.history.back(); 
  };

  return (
    <div className="register-container-register">
     <div className="form-header">
      <img src={logo} alt="Logo Capys" className="logo-image" />
      <button onClick={handleExit} className="exit-button-register">Voltar</button>
      </div>

      <div className="register-form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h1>Crie sua conta</h1>
          <p className="subtitle"><br></br>Rápido e grátis, vamos nessa</p>

          <div className="form-group-register">
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Digite aqui seu nome" value={formData.nome} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Digite aqui seu email" value={formData.email} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="Digite aqui sua senha" value={formData.senha} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input id="confirmarSenha" name="confirmarSenha" type="password" placeholder="Digite novamente sua senha" value={formData.confirmarSenha} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" placeholder="Fale sobre você" value={formData.bio} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="contato">Contato</label>
            <input id="contato" name="contato" type="text" placeholder="Opção de contato" value={formData.contato} onChange={handleInputChange} />
          </div>

          <div className="form-group-register">
            <label htmlFor="cargo">Selecionar Cargo</label>
            <select id="cargo" name="cargo" value={formData.cargo} onChange={handleInputChange}>
              <option value="Desenvolvedor Front-End">Desenvolvedor Front-End</option>
              <option value="Desenvolvedor Back-End">Desenvolvedor Back-End</option>
            </select>
          </div>

          <button type="submit" className="register-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
