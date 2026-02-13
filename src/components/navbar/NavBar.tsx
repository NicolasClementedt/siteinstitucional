import { Link, useLocation } from "react-router";
import { Church, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation(); //marca qual página o usuário está
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); //controle do menu retrátil, começa fechado

  {
    /* Lista de Rotas */
  }
  const links = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/galeria", label: "Galeria" },
    // { to: "/recursos", label: "Recursos" },
    { to: "/contato", label: "Contato" },
  ];

  //função que verifica se o usuário está na página corresponde ao link que o mouse está sobre
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/"; //completa o url após a / baseado no pathname do endpoint
    }
    return location.pathname.startsWith(path); //marca baseado no endpoint pai
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Church className="w-8 h-8 text-sky-600" />
            <span className="text-xl font-semibold text-gray-900">
              Igreja Seguidores de Cristo
            </span>
          </Link>

          {/* Tela Grande */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(
              (
                link, //puxa o array de links e exibe
              ) => (
                <Link
                  key={link.to} //id do link
                  to={link.to} //endpoint do id
                  className={`transition-colors ${
                    isActive(link.to) //funcao ternaria para marcar o ativado
                      ? "text-sky-600 font-medium"
                      : "text-gray-400 hover:text-gray-950" //estilizacao do link não ativo
                  }`}
                >
                  {link.label}{" "}
                  {/* chama o texto dos links pela etiqueta definida no array*/}
                </Link>
              ),
            )}
          </div>

          {/* Menu Retrátil */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 transition-colors ${
                  isActive(link.to)
                    ? "text-sky-600 font-medium bg-blue-50"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
