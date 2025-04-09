
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-diesel-blue pt-12 pb-6 border-t border-diesel-gray/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-diesel-DEFAULT">MAB</span>
              <span className="text-2xl font-bold ml-1 text-white">DIESEL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em manutenção e reparo de motores diesel, oferecendo serviços de qualidade e confiança.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mab_diesel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-diesel-DEFAULT transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-diesel-DEFAULT transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>contato@mabdiesel.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Rua Exemplo, 123 - Cidade, Estado</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-diesel-DEFAULT transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-diesel-DEFAULT transition">Nossos Serviços</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-diesel-DEFAULT transition">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-diesel-DEFAULT transition">Contato</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-diesel-DEFAULT transition">Agendar Serviço</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-diesel-gray/20 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MAB Diesel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
