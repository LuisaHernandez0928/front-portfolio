import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md mr-2" >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium mr-2">
        <NavLink to="/about" className={({ isActive}) => isActive ? 'text-blue-500' : "text-black hover:text-orange-400 cursor-pointer"}>About</NavLink>
        <NavLink to="/projects" className={({ isActive}) => isActive ? 'text-blue-500' :  "text-black hover:text-orange-400 cursor-pointer"}>Projects</NavLink>
        <NavLink to="/contact" className="text-orange-400 hover:text-green-900 cursor-pointer">Contact</NavLink>

      </nav>
    </header>
  )
}

export default Navbar
