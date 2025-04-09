
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  subject: z.string().min(2, { message: "Assunto é obrigatório" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", data);
      setIsSubmitting(false);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato o mais breve possível.",
      });
      
      form.reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-diesel-dark py-12 border-b border-diesel-gray/20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h1>
            <p className="text-gray-400 max-w-3xl">
              Estamos à disposição para atender suas necessidades. Preencha o formulário abaixo ou utilize um de nossos canais de contato.
            </p>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-diesel-blue">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-diesel-dark p-6 rounded-lg border border-diesel-gray/20 h-full">
                  <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-diesel-DEFAULT" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Endereço</h3>
                        <p className="text-gray-400">Rua Exemplo, 123</p>
                        <p className="text-gray-400">Bairro, Cidade - Estado</p>
                        <p className="text-gray-400">CEP: 00000-000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-diesel-DEFAULT" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Telefone</h3>
                        <p className="text-gray-400">(00) 0000-0000</p>
                        <p className="text-gray-400">WhatsApp: (00) 0000-0000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-diesel-DEFAULT" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">E-mail</h3>
                        <p className="text-gray-400">contato@mabdiesel.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-diesel-DEFAULT/10 p-3 rounded-lg mr-4">
                        <Clock className="h-6 w-6 text-diesel-DEFAULT" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Horário de Funcionamento</h3>
                        <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-400">Sábado: 8h às 12h</p>
                        <p className="text-gray-400">Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-white font-semibold mb-3">Redes Sociais</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/mab_diesel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-diesel-DEFAULT/10 p-3 rounded-lg hover:bg-diesel-DEFAULT/20 transition"
                      >
                        <svg className="h-5 w-5 text-diesel-DEFAULT" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-diesel-DEFAULT/10 p-3 rounded-lg hover:bg-diesel-DEFAULT/20 transition"
                      >
                        <svg className="h-5 w-5 text-diesel-DEFAULT" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-diesel-DEFAULT/10 p-3 rounded-lg hover:bg-diesel-DEFAULT/20 transition"
                      >
                        <svg className="h-5 w-5 text-diesel-DEFAULT" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-diesel-dark p-8 rounded-lg border border-diesel-gray/20">
                  <h2 className="text-2xl font-bold text-white mb-6">Envie-nos uma Mensagem</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Nome completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} className="bg-diesel-blue border-diesel-gray/30" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Email Field */}
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">E-mail</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="seu@email.com" {...field} className="bg-diesel-blue border-diesel-gray/30" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Phone Field */}
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Telefone</FormLabel>
                              <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} className="bg-diesel-blue border-diesel-gray/30" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Subject Field */}
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Assunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Assunto da mensagem" {...field} className="bg-diesel-blue border-diesel-gray/30" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Message Field */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Mensagem</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Digite sua mensagem..." 
                                {...field} 
                                className="bg-diesel-blue border-diesel-gray/30 min-h-[150px]" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensagem
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-diesel-dark border-t border-diesel-gray/20">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-6">Nossa Localização</h2>
            <div className="h-96 rounded-lg overflow-hidden">
              {/* Placeholder for a real map */}
              <div className="w-full h-full bg-diesel-gray/30 flex items-center justify-center">
                <p className="text-gray-400">Mapa de localização aqui</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
