import { History, Users2 } from "lucide-react";

export default function Sobre() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative h-100 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5NDgzNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Comunidade em oração"
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
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8  text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Boas-Vindas
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dicta numquam suscipit temporibus natus, impedit
                  nulla odit repellat minima eius velit molestiae unde dolor
                  quibusdam magnam inventore nihil! Neque, culpa!.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8  text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Louvor
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, ab. Quidem earum consequuntur dolore atque expedita!
                  Culpa eius veritatis explicabo molestias, cum enim
                  consequuntur possimus nulla necessitatibus dolor voluptate
                  nisi?
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8  text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sonosplastia
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  deleniti placeat accusantium doloribus maiores illum mollitia
                  reiciendis laborum quis id facilis, incidunt ullam
                  repellendus, asperiores natus pariatur quidem consectetur
                  repellat!
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kids
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  vel animi, optio alias ratione dolorem nostrum illum atque
                  autem vitae, veniam nemo provident, nihil praesentium error
                  ipsam minus beatae officia!
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bunkers
                </h3>
                <p className="text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  accusantium obcaecati nihil dolorum suscipit quaerat? Officia
                  sed alias eum aliquam. Harum at molestiae veniam illo fugiat
                  voluptatibus facere impedit cumque!
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Mulheres
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur quam veniam amet ducimus quibusdam vitae
                  accusantium, tempore odit dolore accusamus! Et, inventore.
                  Nostrum esse doloremque eligendi. Repudiandae facilis et eum.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Homens
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi magnam eveniet nemo optio repellendus vero iure
                  quisquam tenetur necessitatibus dolorem explicabo esse,
                  mollitia distinctio id? Quaerat aut facere quidem incidunt!
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Intercessão
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  vel animi, optio alias ratione dolorem nostrum illum atque
                  autem vitae, veniam nemo provident, nihil praesentium error
                  ipsam minus beatae officia!
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Iluminação
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  vel animi, optio alias ratione dolorem nostrum illum atque
                  autem vitae, veniam nemo provident, nihil praesentium error
                  ipsam minus beatae officia!
                </p>
              </div>
            </div>
          </div>
        </section>

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
