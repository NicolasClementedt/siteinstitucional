import { History, Users2, X } from "lucide-react";
import { useState } from "react";

type Ministerio = {
  id: string;
  titulo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  icon: typeof Users2;
};

const ministeriosData: Ministerio[] = [
  {
    id: "boas-vindas",
    titulo: "Boas-Vindas",
    descricaoCurta: "Lorem ipsum dolor sit amet",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">O ministério de Boas-Vindas é responsável por receber e acolher todos que chegam à igreja, criando um ambiente caloroso e acolhedor.</p>
      
      <h4 class="text-xl font-semibold mb-3">O que fazemos</h4>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Recepção no estacionamento</li>
        <li>Orientação aos visitantes</li>
        <li>Distribuição de materiais</li>
        <li>Atendimento às necessidades dos membros</li>
      </ul>
      
      <h4 class="text-xl font-semibold mb-3">Como participar</h4>
      <p>Entre em contato conosco através do email: boasvindas@igreja.com</p>
    `,
    icon: Users2,
  },
  {
    id: "louvor",
    titulo: "Louvor",
    descricaoCurta: "Lorem ipsum dolor sit amet",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">O ministério de Louvor conduz a congregação em adoração através da música.</p>
      
      <h4 class="text-xl font-semibold mb-3">Requisitos</h4>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Experiência com instrumento ou vocal</li>
        <li>Disponibilidade para ensaios semanais</li>
        <li>Comprometimento com a equipe</li>
      </ul>
    `,
    icon: Users2,
  },
  {
    id: "sonosplastia",
    titulo: "Sonosplastia",
    descricaoCurta: "Lorem ipsum dolor sit, amet cons",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Sobre o Ministério</h4>
      <p class="mb-4">Responsável pela qualidade sonora de todos os eventos da igreja.</p>
    `,
    icon: Users2,
  },
  {
    id: "kids",
    titulo: "Kids",
    descricaoCurta: "Lorem ipsum dolor sit amet consec",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Infantil</h4>
      <p class="mb-4">Cuidando e ensinando as crianças sobre o amor de Deus.</p>
    `,
    icon: Users2,
  },
  {
    id: "bunkers",
    titulo: "Bunkers",
    descricaoCurta: "Lorem, ipsum dolor sit amet consectetur adipis",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Jovens</h4>
      <p class="mb-4">Conectando jovens com propósito e fé.</p>
    `,
    icon: Users2,
  },
  {
    id: "mulheres",
    titulo: "Mulheres",
    descricaoCurta: "Lorem ipsum, dolor sit amet consecte.",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Feminino</h4>
      <p class="mb-4">Fortalecendo e capacitando mulheres em sua jornada de fé.</p>
    `,
    icon: Users2,
  },
  {
    id: "homens",
    titulo: "Homens",
    descricaoCurta: "Lorem ipsum dolor sit amet, consectetur ",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério Masculino</h4>
      <p class="mb-4">Desenvolvendo homens de caráter e liderança cristã.</p>
    `,
    icon: Users2,
  },
  {
    id: "intercessao",
    titulo: "Intercessão",
    descricaoCurta: "Lorem ipsum dolor sit amet consectetur adipisicing el",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Oração</h4>
      <p class="mb-4">Intercedendo pela igreja e comunidade em oração.</p>
    `,
    icon: Users2,
  },
  {
    id: "iluminacao",
    titulo: "Iluminação",
    descricaoCurta: "Lorem ipsum dolor sit amet consectetur adip",
    descricaoCompleta: `
      <h4 class="text-xl font-semibold mb-3">Ministério de Iluminação</h4>
      <p class="mb-4">Criando ambientes visuais que facilitam a adoração.</p>
    `,
    icon: Users2,
  },
];

export default function Sobre() {
  const [ministerioSelecionado, setMinisterioSelecionado] =
    useState<Ministerio | null>(null);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative h-100 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Biblia simbolizando a história"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Nossa História</h1>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-slate-300 p-3 rounded-lg">
              <History className="w-8 h-8 text-slate-800" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Como Começamos
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                A Igreja Seguidores de Cristo nasceu de cultos simples feitos no
                lar, com o tempo o que começou pequeno foi crescendo até
                precisar de um local maior e depois um local maior ainda. Mais
                de uma década depois, mantendo a essência daqueles cultos
                íntimos, temos uma igreja que tem por missão o amor e o serviço,
                fundamentada na palavra de Deus, buscamos ser seguidores de
                Jesus Cristo.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Nossa jornada tem sido marcada por momentos de crescimento,
                desafios superados pela fé, e inúmeras vidas transformadas pelo
                poder do Evangelho. Ao longo dos anos, nos expandimos para
                incluir diversos ministérios, sempre mantendo nosso foco em
                servir a Deus e à comunidade.
              </p>
              <p className="text-gray-600 text-lg">
                Hoje, continuamos firmes em nossa missão de ser uma igreja que
                reflete o amor de Cristo, acolhendo a todos com graça e verdade,
                e capacitando cada membro a viver seu propósito em Deus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pastores
          </h2>
          <div className="flex flex-row items-stretch gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users2 className="w-16 h-16 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Alan Duarte
              </h3>
              <p className="text-gray-600 mb-2">Pastor Fundador</p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                qui, tenetur ea dolorum inventore officia. Impedit debitis a
                beatae earum perferendis incidunt autem, eum aliquid nihil
                tempore, saepe, facilis quasi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users2 className="w-16 h-16  text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Elenice Duarte
              </h3>
              <p className="text-gray-600 mb-2">Pastora Fundadora</p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                velit id temporibus eius! Eligendi quam, quia dolor ea enim
                maiores quisquam, asperiores alias provident voluptatum id
                perspiciatis. Officia, corporis reiciendis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        {/* Ministérios */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ministérios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ministeriosData.map((ministerio) => (
                <div
                  key={ministerio.id}
                  onClick={() => setMinisterioSelecionado(ministerio)}
                  className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
                >
                  <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Users2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {ministerio.titulo}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {ministerio.descricaoCurta}
                  </p>
                  <span className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                    Saiba mais →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal - adicionar depois da seção */}
        {/* Modal */}
        {ministerioSelecionado && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setMinisterioSelecionado(null)}
          >
            <div
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-200 w-14 h-14 rounded-full flex items-center justify-center">
                    <Users2 className="w-7 h-7 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {ministerioSelecionado.titulo}
                  </h2>
                </div>
                <button
                  onClick={() => setMinisterioSelecionado(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: ministerioSelecionado.descricaoCompleta,
                  }}
                />
              </div>

              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <button
                  onClick={() => setMinisterioSelecionado(null)}
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Linha do Tempo */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Marcos Históricos
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 text-black rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1995 - Fundação
                  </h3>
                  <p className="text-gray-600">
                    Primeira reunião com 15 pessoas em uma casa. Nasce a visão
                    de uma igreja acolhedora.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 text-black rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2000 - Primeiro Templo
                  </h3>
                  <p className="text-gray-600">
                    Inauguração do primeiro templo próprio, com capacidade para
                    200 pessoas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 text-black rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="w-1 h-full bg-slate-200 mt-2" />
                </div>
                <div className="pb-8 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2010 - Expansão dos Ministérios
                  </h3>
                  <p className="text-gray-600">
                    Criação de diversos ministérios: jovens, crianças, música,
                    ação social e evangelismo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 text-left">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 text-black rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2020 - Crescimento Contínuo
                  </h3>
                  <p className="text-gray-600">
                    Alcançamos 500 membros ativos e iniciamos transmissões
                    online, expandindo nosso alcance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
