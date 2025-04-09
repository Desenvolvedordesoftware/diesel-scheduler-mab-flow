
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Clock, Tool, Wrench, MapPin } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      title: "Manutenção Preventiva",
      description: "Prevenimos falhas e garantimos o desempenho do seu motor diesel com manutenção regular.",
      icon: <Settings className="h-10 w-10 text-diesel-DEFAULT" />,
    },
    {
      title: "Reparo de Motores",
      description: "Diagnóstico preciso e reparos profissionais para todos os tipos de motores diesel.",
      icon: <Wrench className="h-10 w-10 text-diesel-DEFAULT" />,
    },
    {
      title: "Injeção Eletrônica",
      description: "Serviços especializados em sistemas de injeção eletrônica para motores diesel.",
      icon: <Tool className="h-10 w-10 text-diesel-DEFAULT" />,
    },
  ];

  const benefits = [
    "Atendimento rápido e eficiente",
    "Equipe altamente qualificada",
    "Peças originais e de qualidade",
    "Garantia nos serviços realizados",
    "Preços justos e transparentes",
    "Diagnóstico preciso e detalhado",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-32">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Serviços especializados em <span className="text-diesel-DEFAULT">motores diesel</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Manutenção, reparos e peças para motores diesel, realizados por profissionais qualificados e com anos de experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                <Link to="/schedule">Agendar Serviço</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-diesel-DEFAULT text-diesel-DEFAULT hover:bg-diesel-DEFAULT/10">
                <Link to="/services">Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-diesel-blue">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Oferecemos uma variedade de serviços especializados para manter seu motor diesel funcionando com máxima eficiência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-diesel-dark p-6 rounded-lg border border-diesel-gray/20 hover:border-diesel-DEFAULT/40 transition duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link to="/services" className="text-diesel-DEFAULT hover:underline inline-flex items-center">
                    Saiba mais
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                <Link to="/services">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-diesel-dark">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Por que escolher a MAB Diesel?</h2>
                <p className="text-gray-400 mb-8">
                  Com anos de experiência no mercado, oferecemos serviços de alta qualidade para motores diesel, garantindo o melhor desempenho e a maior vida útil para o seu equipamento.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-diesel-DEFAULT flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button asChild className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                    <Link to="/about">Conheça Nossa Equipe</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-diesel-gray/10 p-6 rounded-lg border border-diesel-gray/20">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-diesel-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-400">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-diesel-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Nossa Localização</h3>
                      <p className="text-gray-400">Rua Exemplo, 123</p>
                      <p className="text-gray-400">Cidade, Estado - CEP</p>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="mt-2 border-diesel-DEFAULT text-diesel-DEFAULT hover:bg-diesel-DEFAULT/10">
                    <Link to="/contact">Entre em Contato</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-diesel-DEFAULT/10">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para agendar seu serviço?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Agende agora mesmo uma visita e garanta o melhor desempenho para o seu motor diesel.
            </p>
            <Button asChild size="lg" className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
              <Link to="/schedule">Agendar Serviço</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
