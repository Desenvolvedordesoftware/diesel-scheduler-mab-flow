import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Clock, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  vehicle: z.string().min(2, { message: "Modelo do veículo é obrigatório" }),
  service: z.string({ required_error: "Selecione um serviço" }),
  date: z.date({ required_error: "Selecione uma data para o agendamento" }),
  time: z.string({ required_error: "Selecione um horário" }),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Schedule = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const services = [
    "Manutenção Preventiva",
    "Reparo de Motor",
    "Injeção Eletrônica",
    "Troca de Óleo e Filtros",
    "Diagnóstico Completo",
    "Revisão Geral",
    "Outros"
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      service: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form data submitted:", data);
      setIsSubmitting(false);
      setSubmitted(true);

      toast({
        title: "Agendamento realizado com sucesso!",
        description: `Seu agendamento foi confirmado para ${format(data.date, "dd 'de' MMMM", { locale: ptBR })} às ${data.time}.`,
      });
    }, 1500);
  };

  const disabledDays = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6 || date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow py-16 bg-diesel-dark">
          <div className="container-custom max-w-4xl">
            <div className="bg-diesel-blue p-8 rounded-lg border border-diesel-gray/20">
              <div className="text-center mb-6">
                <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Agendamento Confirmado!</h1>
                <p className="text-gray-400">Recebemos sua solicitação e entraremos em contato para confirmar os detalhes.</p>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white">
                  <a href="/">Voltar para a Página Inicial</a>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow py-16 bg-diesel-dark">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Agendar Serviço</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Preencha o formulário abaixo para agendar seu serviço. Nossa equipe entrará em contato para confirmar seu agendamento.
            </p>
          </div>

          <div className="bg-diesel-blue p-8 rounded-lg border border-diesel-gray/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} className="bg-diesel-dark border-diesel-gray/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} className="bg-diesel-dark border-diesel-gray/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} className="bg-diesel-dark border-diesel-gray/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Modelo do veículo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Ford F-250 2015" {...field} className="bg-diesel-dark border-diesel-gray/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Serviço</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-diesel-dark border-diesel-gray/30">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-diesel-dark border-diesel-gray/30">
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-white">Data</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "pl-3 text-left font-normal bg-diesel-dark border-diesel-gray/30",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                                ) : (
                                  <span>Selecione uma data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={disabledDays}
                              initialFocus
                              locale={ptBR}
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Horário</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-diesel-dark border-diesel-gray/30">
                              <SelectValue placeholder="Selecione um horário" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-diesel-dark border-diesel-gray/30">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Descrição do problema (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva o problema ou forneça detalhes adicionais..."
                          {...field}
                          className="bg-diesel-dark border-diesel-gray/30 min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-diesel-DEFAULT hover:bg-diesel-DEFAULT/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processando..." : "Agendar Serviço"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-diesel-DEFAULT mr-3" />
                <h3 className="text-xl font-semibold text-white">Horário de Funcionamento</h3>
              </div>
              <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-400">Sábado: 8h às 12h</p>
              <p className="text-gray-400">Domingo: Fechado</p>
            </div>

            <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-diesel-DEFAULT mr-3" />
                <h3 className="text-xl font-semibold text-white">Localização</h3>
              </div>
              <p className="text-gray-400">Av. das Torres, 103</p>
              <p className="text-gray-400">Bairro: Araguaia, </p>
              <p className="text-gray-400">Cidade: Marabá - Estado: PA</p>
              <p className="text-gray-400">CEP: 068504-130</p>
            </div>

            <div className="bg-diesel-blue p-6 rounded-lg border border-diesel-gray/20">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-diesel-DEFAULT mr-3" />
                <h3 className="text-xl font-semibold text-white">Contato</h3>
              </div>
              <p className="text-gray-400">Telefone: (94) 98405-0309</p>
              <p className="text-gray-400">WhatsApp: (94) 98405-0309</p>
              <p className="text-gray-400">Email: contato@mabdiesel.com.br</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
