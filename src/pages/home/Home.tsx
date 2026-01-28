import { Link } from "react-router";
import { Calendar, Heart, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* Seção Inicial/Banner */}

        <section className="relative h-[600px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem da Home"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Igreja Seguidores de Cristo
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Uma comunidade de fé, amor e serviço
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sobre"
                className="bg-sky-600 hover:bg-sky-950 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Conheça a Igreja
              </Link>
              <Link
                to="/contato"
                className="bg-slate-400 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </section>

        {/* Programação Semanal*/}
        <section className="py-16 px-4 bg-slate-400 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Participe dos Nossos Cultos
            </h2>
            {/* Grid das caixas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {" "}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Domingo</h3>
                <p className="text-blue-100 mb-1">Culto de Celebração</p>
                <p className="text-2xl font-bold">09:30</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Terça-feira</h3>
                <p className="text-blue-100 mb-1">Oração e Intercessão</p>
                <p className="text-2xl font-bold">20:00</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quarta-feira</h3>
                <p className="text-blue-100 mb-1">Imersão</p>
                <p className="text-2xl font-bold">20:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Amor</h3>
                <p className="text-gray-600">
                  Vivemos o amor de Cristo em todas as nossas ações e
                  relacionamentos
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Palavra</h3>
                <p className="text-gray-600">
                  Fundamentados na Bíblia, a Palavra de Deus é nossa base e guia
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Comunidade e Serviço
                </h3>
                <p className="text-gray-600">
                  Unidos como família, apoiando uns aos outros em amor e verdade
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adoração</h3>
                <p className="text-gray-600">
                  Celebramos a Deus com alegria em nossas reuniões e cultos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Quem Somos
                </h2>
                <p className="text-gray-600 text-lg mb-4">
                  A Igreja Seguidores de Cristo nasceu de cultos simples feitos
                  no lar, com o tempo o que começou pequeno foi crescendo até
                  precisar de um local maior e depois um local maior ainda. Mais
                  de uma década depois, mantendo a essência daqueles cultos
                  íntimos, temos uma igreja que tem por missão o amor e o
                  serviço, fundamentada na palavra de Deus, buscamos ser
                  seguidores de Jesus Cristo.
                </p>

                <Link
                  to="/sobre"
                  className="inline-block bg-sky-600 hover:bg-sky-950 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1713552108094-2de99ab121a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHdvcnNoaXB8ZW58MXx8fHwxNzY5NDc5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Interior da igreja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Convite */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Venha Nos Visitar
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Venha conhecer nossa comunidade, estamos te esperando!.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-sky-600 hover:bg-sky-950 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
