
import { Menu, X, Calendar, Phone, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-diesel-dark py-4 border-b border-diesel-gray/20 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-diesel-DEFAULT">MAB</span>
            <span className="text-2xl font-bold ml-1 text-white">DIESEL</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-diesel-DEFAULT transition duration-200">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-diesel-DEFAULT transition duration-200">
              Serviços
            </Link>
            <Link to="/about" className="text-white hover:text-diesel-DEFAULT transition duration-200">
              Sobre
            </Link>
            <Link to="/contact" className="text-white hover:text-diesel-DEFAULT transition duration-200">
              Contato
            </Link>
            <Button asChild className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
              <Link to="/schedule">Agendar Serviço</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-white hover:text-diesel-DEFAULT px-2 py-2 rounded-md hover:bg-diesel-gray/10 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-diesel-DEFAULT px-2 py-2 rounded-md hover:bg-diesel-gray/10 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-diesel-DEFAULT px-2 py-2 rounded-md hover:bg-diesel-gray/10 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-diesel-DEFAULT px-2 py-2 rounded-md hover:bg-diesel-gray/10 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Button 
                asChild 
                className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/schedule">Agendar Serviço</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
