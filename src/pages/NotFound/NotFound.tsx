import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Ícone/Ilustração */}
        <div className="mb-8">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        </div>

        {/* Mensagem */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
            Verifique o URL ou volte para a página inicial.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <Home className="w-5 h-5" />
              Página Inicial
            </a>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>

        {/* Link de contato */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Precisa de ajuda?{" "}
            <Link href="/contato">
              <a className="text-blue-600 hover:text-blue-700 font-medium">
                Entre em contato
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
