
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "1,000+", label: "Clientes Satisfeitos" },
    { value: "5,000+", label: "Serviços Realizados" },
    { value: "100%", label: "Comprometimento" },
  ];

  const teamMembers = [
    {
      name: "Alexandre Silva",
      role: "Fundador e Especialista em Motores Diesel",
      bio: "Com mais de 15 anos de experiência, Alexandre lidera nossa equipe com conhecimento técnico e paixão pelo trabalho bem feito.",
      image: "/placeholder.svg"
    },
    {
      name: "Marcelo Santos",
      role: "Técnico Especialista",
      bio: "Especialista em diagnóstico e reparo de sistemas de injeção eletrônica para motores diesel de última geração.",
      image: "/placeholder.svg"
    },
    {
      name: "Bruno Oliveira",
      role: "Mecânico Sênior",
      bio: "Responsável pelos serviços de manutenção preventiva e reparos mecânicos, com expertise em diferentes marcas e modelos.",
      image: "/placeholder.svg"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-diesel-dark py-12 border-b border-diesel-gray/20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Nós</h1>
            <p className="text-gray-400 max-w-3xl">
              Conheça a MAB Diesel, nossa história, valores e a equipe de profissionais dedicados a oferecer o melhor serviço em motores diesel.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-diesel-blue">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
                <p className="text-gray-400 mb-4">
                  Fundada em 2013, a MAB Diesel nasceu da paixão por motores e do compromisso com a excelência técnica. Começamos como uma pequena oficina especializada em reparos de motores diesel e, com o passar dos anos, expandimos nossos serviços e instalações.
                </p>
                <p className="text-gray-400 mb-4">
                  Nossa jornada foi marcada pelo compromisso inabalável com a qualidade, confiabilidade e satisfação do cliente. Ao longo desses anos, construímos uma reputação sólida no mercado, tornando-nos referência em serviços para motores diesel.
                </p>
                <p className="text-gray-400 mb-4">
                  Hoje, contamos com uma equipe altamente qualificada, instalações modernas e equipamentos de última geração para oferecer o melhor serviço possível aos nossos clientes.
                </p>
              </div>
              
              <div className="bg-diesel-DEFAULT/5 p-8 rounded-lg border border-diesel-DEFAULT/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-diesel-dark rounded-lg border border-diesel-gray/20">
                      <p className="text-3xl font-bold text-diesel-DEFAULT">{stat.value}</p>
                      <p className="text-gray-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-diesel-dark border-t border-diesel-gray/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nossos Valores</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nossa missão é oferecer serviços de excelência para motores diesel, com compromisso, qualidade e transparência.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20 hover:border-diesel-DEFAULT/40 transition duration-300">
                <div className="mb-4 bg-diesel-DEFAULT/10 p-3 rounded-lg inline-block">
                  <Award className="h-8 w-8 text-diesel-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excelência</h3>
                <p className="text-gray-400">
                  Buscamos a excelência em cada serviço realizado, utilizando as melhores práticas, técnicas e equipamentos disponíveis no mercado.
                </p>
              </div>
              
              <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20 hover:border-diesel-DEFAULT/40 transition duration-300">
                <div className="mb-4 bg-diesel-DEFAULT/10 p-3 rounded-lg inline-block">
                  <Users className="h-8 w-8 text-diesel-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Confiança</h3>
                <p className="text-gray-400">
                  Construímos relações de confiança com nossos clientes, baseadas na transparência, honestidade e cumprimento dos prazos estabelecidos.
                </p>
              </div>
              
              <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20 hover:border-diesel-DEFAULT/40 transition duration-300">
                <div className="mb-4 bg-diesel-DEFAULT/10 p-3 rounded-lg inline-block">
                  <Clock className="h-8 w-8 text-diesel-DEFAULT" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Comprometimento</h3>
                <p className="text-gray-400">
                  Somos comprometidos com a satisfação do cliente, oferecendo soluções eficientes e duradouras para seus problemas.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-diesel-blue border-t border-diesel-gray/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nossa Equipe</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Conheça os profissionais por trás da MAB Diesel, especialistas dedicados a oferecer o melhor serviço para o seu motor diesel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-diesel-dark p-6 rounded-lg border border-diesel-gray/20">
                  <div className="mb-4 aspect-square rounded-lg overflow-hidden bg-diesel-gray/20">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-diesel-DEFAULT mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-diesel-dark border-t border-diesel-gray/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Por Que Escolher a MAB Diesel?</h2>
                <p className="text-gray-400 mb-6">
                  Somos especializados exclusivamente em motores diesel, o que nos permite oferecer um serviço altamente especializado e de qualidade superior.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-diesel-DEFAULT flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Equipe Especializada</h3>
                      <p className="text-gray-400">Profissionais altamente treinados e com anos de experiência em motores diesel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-diesel-DEFAULT flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Equipamentos Modernos</h3>
                      <p className="text-gray-400">Utilizamos ferramentas e equipamentos de diagnóstico de última geração.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-diesel-DEFAULT flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Peças de Qualidade</h3>
                      <p className="text-gray-400">Trabalhamos apenas com peças originais ou homologadas pelos fabricantes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-diesel-DEFAULT flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Garantia de Serviço</h3>
                      <p className="text-gray-400">Oferecemos garantia em todos os serviços realizados para sua tranquilidade.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-diesel-DEFAULT/5 rounded-lg border border-diesel-DEFAULT/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Depoimentos de Clientes</h3>
                
                <div className="space-y-6">
                  <div className="bg-diesel-blue p-4 rounded-lg border border-diesel-gray/20">
                    <p className="text-gray-300 italic mb-3">
                      "Serviço de alta qualidade e atendimento excelente. Resolveram o problema do meu caminhão rapidamente e a um preço justo."
                    </p>
                    <p className="text-white font-semibold">Carlos Rodrigues</p>
                    <p className="text-gray-400 text-sm">Transportadora ABC</p>
                  </div>
                  
                  <div className="bg-diesel-blue p-4 rounded-lg border border-diesel-gray/20">
                    <p className="text-gray-300 italic mb-3">
                      "Profissionais competentes e confiáveis. Recomendo a MAB Diesel para quem busca serviço de qualidade para motores diesel."
                    </p>
                    <p className="text-white font-semibold">João Silva</p>
                    <p className="text-gray-400 text-sm">Construção Civil Ltda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-diesel-DEFAULT/10 border-t border-diesel-gray/20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para Experimentar Nossos Serviços?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Agende agora uma visita à MAB Diesel e confie seu motor aos melhores profissionais do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                <Link to="/schedule">Agendar Serviço</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-diesel-DEFAULT text-diesel-DEFAULT hover:bg-diesel-DEFAULT/10">
                <Link to="/contact">Entrar em Contato</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
