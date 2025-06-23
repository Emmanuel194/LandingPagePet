import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Clock, 
  Shield, 
  Star,
  CheckCircle2,
  Smartphone,
  Bot,
  ChevronRight,
  Award,
  Users
} from 'lucide-react';
import fotoPet from '../assets/fotopet.webp'


const PetShopLanding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const steps = [
    { icon: '🛁', title: 'Banho', desc: 'Pet chegou e começou o banho!' },
    { icon: '✂️', title: 'Tosa', desc: 'Agora é hora da tosa profissional' },
    { icon: '🪥', title: 'Escovação', desc: 'Escovando com todo carinho' },
    { icon: '💨', title: 'Secagem', desc: 'Secagem completa em andamento' },
    { icon: '✨', title: 'Finalização', desc: 'Seu pet está pronto!' }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      pet: 'Luna (Golden)',
      text: 'Incrível poder acompanhar cada etapa! Fiquei tranquila sabendo exatamente o que estava acontecendo.',
      rating: 5
    },
    {
      name: 'João Santos',
      pet: 'Max (Poodle)',
      text: 'O atendimento via WhatsApp é muito prático. Consegui agendar tudo sem sair de casa!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      pet: 'Bella (Shih Tzu)',
      text: 'Serviço excepcional! As fotos em cada etapa me deixaram super segura. Recomendo!',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppContact = () => {
    const phoneNumber = '5581996091147'; 
    const message = encodeURIComponent('Olá! Gostaria de agendar um serviço para meu pet 🐾');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tauá Pet Club
              </span>
            </div>
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Novidade: Steps na Esteira
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                    Acompanhe
                  </span>
                  <br />
                  cada momento do
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    seu pet
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Primeiro petshop com atualizações em tempo real via WhatsApp. 
                  Receba fotos e notificações de cada etapa do cuidado do seu pet!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Agende pelo WhatsApp</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                  Ver como funciona
                </button>
              </div>
            </div>

            {/* Steps Demo */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsApp - Tauá Pet Club</h3>
                    <p className="text-sm text-gray-500">Online agora</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 ${
                        index === currentStep 
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 transform scale-105 shadow-lg' 
                          : index < currentStep 
                            ? 'bg-green-50' 
                            : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                      {index <= currentStep && (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  Desde 2019 Cuidando com Amor
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Tauá Pet Club
                  </span>
                  <br />
                  <span className="text-gray-800">Sua família pet merece o melhor</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Há mais de 7 anos transformando a vida de pets e seus tutores em Caruaru. 
                  Somos pioneiros em tecnologia e cuidado personalizado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2500+</div>
                  <div className="text-gray-600 font-medium">Pets Atendidos</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-gray-600 font-medium">Profissionais</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
                  <div className="text-gray-600 font-medium">Avaliação Média</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proporcionar cuidado excepcional para cada pet, combinando experiência profissional 
                  com tecnologia inovadora. Acreditamos que transparência e carinho são fundamentais 
                  para a confiança entre tutor e prestador de serviço.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Foto do petshop - placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl h-80 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-gray-600">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Heart className="w-12 h-12 text-purple-500" />
                    </div>
                    <p className="font-medium"><img src={fotoPet} alt="Fachada do petshop" className="rounded-xl shadow-lg" /></p>
                    <p className="text-sm">Fachada, ambiente, equipe</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Aberto Agora</span>
                  </div>
                </div>
              </div>

              {/* Valores da empresa */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossos Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Amor pelos Animals</h4>
                      <p className="text-sm text-gray-600">Cada pet é tratado como família</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Transparência Total</h4>
                      <p className="text-sm text-gray-600">Você acompanha tudo em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Inovação Constante</h4>
                      <p className="text-sm text-gray-600">Sempre buscando novas tecnologias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">Conheça nossa</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Equipe Especializada
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais certificados e apaixonados por animais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Mariana Silva</h3>
              <p className="text-purple-600 font-semibold mb-4">Fundadora & Groomer Sênior</p>
              <p className="text-gray-600 leading-relaxed">
                10+ anos de experiência. Especialista em tosas criativas e cuidados com pets sensíveis.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Roberto Costa</h3>
              <p className="text-blue-600 font-semibold mb-4">Veterinário Parceiro</p>
              <p className="text-gray-600 leading-relaxed">
                Médico veterinário com 15 anos de experiência. Responsável pelos cuidados especiais.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Ana Beatriz</h3>
              <p className="text-green-600 font-semibold mb-4">Tech Lead & Atendimento</p>
              <p className="text-gray-600 leading-relaxed">
                Responsável pela inovação tecnológica e coordenação do sistema "Steps na Esteira".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Por que escolher nosso
              </span>
              <br />
              <span className="text-gray-800">Steps na Esteira?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolucionamos o cuidado pet com tecnologia e transparência total
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Atualizações em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed">
                Receba fotos e mensagens automáticas de cada etapa do processo. 
                Banho, tosa, escovação - você acompanha tudo!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Atendimento Inteligente</h3>
              <p className="text-gray-600 leading-relaxed">
                IA integrada para responder dúvidas, fazer agendamentos e 
                fornecer informações 24/7 via WhatsApp.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Total Transparência</h3>
              <p className="text-gray-600 leading-relaxed">
                Sem surpresas! Você sabe exatamente onde seu pet está e 
                o que está acontecendo a cada momento.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Economia de Tempo</h3>
              <p className="text-gray-600 leading-relaxed">
                Não precisa ligar ou ir até o petshop. Todas as informações 
                chegam diretamente no seu WhatsApp.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Qualidade Profissional</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe especializada com anos de experiência, agora com 
                a tecnologia mais avançada do mercado.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Suporte Dedicado</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe sempre disponível via WhatsApp para esclarecer dúvidas 
                e garantir a melhor experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 500 pets já passaram pela nossa esteira
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Tutor do {testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para experimentar?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Agende agora e seja um dos primeiros a experimentar o futuro do cuidado pet!
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-4 mx-auto"
            >
              <MessageCircle className="w-8 h-8" />
              <span>Agendar pelo WhatsApp</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Tauá Pet Club</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                O primeiro petshop com atualizações em tempo real via WhatsApp. 
                Cuidamos do seu pet com amor e transparência total.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Banho e Tosa</li>
                <li>Steps na Esteira</li>
                <li>Atendimento IA</li>
                <li>Cuidados Especiais</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: (81) 99609-1147</li>
                <li>Email: contato@petcarepro.com</li>
                <li>Endereço: R. Manoel Nunes Filho, 363</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 ET3 Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PetShopLanding;