import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from "./contexts/AuthContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Navbar from "./assets/components/navbar/Navbar"
import ListaTemas from "./assets/components/tema/listatemas/ListaTemas"
import FormTema from "./assets/components/tema/formtema/FormTema"
import DeletarTema from "./assets/components/tema/deletartema/DeletarTema"
import AtualizarPerfil from "./pages/Perfil/AtualizarPerfil"
import Perfil from "./pages/Perfil/Perfil"
import FormPostagem from "./assets/components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./assets/components/postagem/deletarpostagem/DeletarPostagem"
import Footer from "./assets/components/footer/Footer"
import ListaPostagens from "./assets/components/postagem/listapostagens/ListaPostagens"

function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/temas" element={<ListaTemas />} />
							<Route path="/cadastrartema" element={<FormTema />} />
							<Route path="/editartema/:id" element={<FormTema />} />
							<Route path="/deletartema/:id" element={<DeletarTema />} />
							<Route path="/postagens" element={<ListaPostagens />} />
							<Route path="/cadastrarpostagem" element={<FormPostagem />} />
							<Route path="/editarpostagem/:id" element={<FormPostagem />} />
							<Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
							<Route path="/perfil" element={<Perfil />} />
							<Route path="/atualizarusuario" element={<AtualizarPerfil />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	)
}

export default App