
import { Wrench, Settings, WrenchIcon, Filter, Search, BarChart } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção regular para prevenir problemas e estender a vida útil do seu motor diesel. Inclui verificação de sistemas, troca de fluidos e inspeção geral.",
      features: [
        "Verificação de todos os sistemas",
        "Troca de óleo e filtros",
        "Inspeção de componentes",
        "Ajustes e calibrações",
        "Relatório detalhado"
      ]
    },
    {
      icon: <Wrench className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Reparo de Motores",
      description: "Serviços completos de diagnóstico e reparo para motores diesel com problemas. Nossa equipe identifica e soluciona falhas com eficiência e precisão.",
      features: [
        "Diagnóstico computadorizado",
        "Desmontagem e inspeção",
        "Substituição de peças danificadas",
        "Recondicionamento de componentes",
        "Testes de desempenho"
      ]
    },
    {
      icon: <WrenchIcon className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Injeção Eletrônica",
      description: "Especialistas em sistemas de injeção eletrônica para motores diesel. Oferecemos diagnóstico, reparo e otimização para máximo desempenho e economia.",
      features: [
        "Limpeza de injetores",
        "Calibração de bombas injetoras",
        "Reparo de sistemas common rail",
        "Programação de módulos",
        "Otimização de consumo"
      ]
    },
    {
      icon: <Filter className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Troca de Óleo e Filtros",
      description: "Serviço essencial para manter seu motor diesel funcionando corretamente. Utilizamos apenas produtos de alta qualidade e recomendados pelos fabricantes.",
      features: [
        "Óleo de motor premium",
        "Filtros de alta qualidade",
        "Verificação de níveis",
        "Descarte ecologicamente correto",
        "Registro de manutenção"
      ]
    },
    {
      icon: <Search className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Diagnóstico Completo",
      description: "Análise detalhada do estado atual do seu motor diesel, identificando problemas existentes e potenciais falhas futuras antes que elas ocorram.",
      features: [
        "Escaneamento computadorizado",
        "Testes de pressão e performance",
        "Análise de emissões",
        "Verificação de componentes elétricos",
        "Relatório detalhado"
      ]
    },
    {
      icon: <BarChart className="h-10 w-10 text-diesel-DEFAULT" />,
      title: "Otimização de Desempenho",
      description: "Ajustes e modificações para melhorar o desempenho, potência e economia do seu motor diesel, sempre respeitando os limites de segurança.",
      features: [
        "Reprogramação eletrônica",
        "Ajustes de combustível",
        "Otimização de turbo",
        "Melhorias no sistema de admissão",
        "Testes de potência"
      ]
    }
  ];

  // Gallery images from MAB Diesel
  const galleryImages = [
    {
      url: "./../public/logo.png",
      alt: "Equipe MAB Diesel trabalhando em motor"
    },
    {
      url: "./../public/logo.png",
      alt: "Peças de motor diesel"
    },
    {
      url: "./../public/logo.png",
      alt: "Serviço de injeção eletrônica"
    },
    {
      url: "./../public/logo.png",
      alt: "Motor diesel em manutenção"
    },
    {
      url: "./../public/logo.png",
      alt: "Oficina MAB Diesel"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-diesel-dark py-12 border-b border-diesel-gray/20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
            <p className="text-gray-400 max-w-3xl">
              Oferecemos uma ampla gama de serviços especializados para manutenção e reparo de motores diesel. Nossa equipe altamente qualificada utiliza equipamentos modernos e peças de qualidade para garantir o melhor resultado.
            </p>
          </div>
        </section>
        
        {/* Gallery Carousel */}
        <section className="py-12 bg-diesel-blue border-b border-diesel-gray/20">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Galeria de Trabalhos</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-diesel-gray/30 bg-diesel-dark overflow-hidden">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-4">
                <CarouselPrevious className="relative bg-diesel-DEFAULT/80 hover:bg-diesel-DEFAULT border-diesel-gray/30 text-white -left-0" />
                <CarouselNext className="relative bg-diesel-DEFAULT/80 hover:bg-diesel-DEFAULT border-diesel-gray/30 text-white -right-0" />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16 bg-diesel-blue">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-diesel-dark p-8 rounded-lg border border-diesel-gray/20">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-white ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <h3 className="text-lg font-semibold text-white mb-3">O que inclui:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-diesel-DEFAULT mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Pronto para agendar seu serviço?</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para atender suas necessidades e garantir o melhor desempenho do seu motor diesel.
              </p>
              <Button asChild className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                <Link to="/schedule">Agendar Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
