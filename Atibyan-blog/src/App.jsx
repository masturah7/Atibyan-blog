import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/Sign-Up"
import SignIn from "./pages/Sign-In"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"



export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/sign-up" element={<SignUp />} />
        <Route  path="/sign-in" element={<SignIn />} />
        <Route  path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
