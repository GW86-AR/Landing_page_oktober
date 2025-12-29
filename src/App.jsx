import React, { useState } from 'react';
import {
    Rocket,
    Code2,
    Beaker,
    CheckCircle2,
    Terminal,
    Smartphone,
    Menu,
    X,
    ChevronRight,
    Github,
    Twitter,
    Cpu,
    Lightbulb,
    Focus,
    UserCheck,
    Download,
    Bell,
    ArrowRight,
    Zap // Usaremos Zap (Rayo) para simplicidad/velocidad en lugar de Feather
} from 'lucide-react';

// Nuevo Logo Geométrico - Estilo Ingeniería
const Logo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f97316" /> {/* Orange-500 */}
                <stop offset="100%" stopColor="#dc2626" /> {/* Red-600 */}
            </linearGradient>
        </defs>
        {/* Base Hexagonal Sutil */}
        <path d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z" fill="url(#logoGradient)" fillOpacity="0.1" stroke="url(#logoGradient)" strokeWidth="1" strokeOpacity="0.3" />

        {/* La 'O' Estructural - Gruesa y Precisa */}
        <path d="M20 8L31 14.35V25.65L20 32L9 25.65V14.35L20 8Z" stroke="url(#logoGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Punto de Foco Central */}
        <circle cx="20" cy="20" r="3" fill="#f97316" />
    </svg>
);

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('todos');

    // Datos simulados de tus aplicaciones
    const projects = [
        {
            id: 1,
            title: "Nebula Stream",
            description: "Streaming de audio sin distracciones. Solo tú y la música de creadores independientes.",
            status: "lanzado",
            tags: ["Música", "Lifestyle"],
            icon: <Rocket className="w-8 h-8 text-orange-500" />
        },
        {
            id: 2,
            title: "FinTrack AI",
            description: "Tus finanzas claras. Sin gráficos complicados, solo los datos que necesitas para decidir.",
            status: "beta",
            tags: ["Finanzas", "Productividad"],
            icon: <Beaker className="w-8 h-8 text-purple-500" />
        },
        {
            id: 3,
            title: "EcoHarvest",
            description: "Gestión de cultivos simple. Del huerto a la mesa con trazabilidad honesta.",
            status: "desarrollo",
            tags: ["Sustentabilidad", "Gestión"],
            icon: <Code2 className="w-8 h-8 text-blue-500" />
        },
        {
            id: 4,
            title: "Oktober OS",
            description: "Launcher Android que elimina el ruido visual para que recuperes tu atención.",
            status: "concepto",
            tags: ["Personalización", "Minimalismo"],
            icon: <Terminal className="w-8 h-8 text-slate-400" />
        },
        {
            id: 5,
            title: "HealthSync",
            description: "Tus datos de salud unificados. Una sola verdad para todos tus dispositivos.",
            status: "desarrollo",
            tags: ["Salud", "Bienestar"],
            icon: <Smartphone className="w-8 h-8 text-green-500" />
        },
        {
            id: 6,
            title: "CryptoVault",
            description: "Seguridad fría. Billetera digital minimalista sin funciones innecesarias.",
            status: "concepto",
            tags: ["Seguridad", "Cripto"],
            icon: <Cpu className="w-8 h-8 text-red-500" />
        }
    ];

    // Filtrado de proyectos
    const filteredProjects = activeTab === 'todos'
        ? projects
        : projects.filter(p => p.status === activeTab);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'lanzado':
                return <span className="flex items-center gap-1.5 text-xs font-bold text-green-400"><CheckCircle2 size={12} /> Disponible</span>;
            case 'beta':
                return <span className="flex items-center gap-1.5 text-xs font-bold text-purple-400"><Beaker size={12} /> Beta Abierta</span>;
            case 'desarrollo':
                return <span className="flex items-center gap-1.5 text-xs font-bold text-blue-400"><Code2 size={12} /> En Construcción</span>;
            case 'concepto':
                return <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400"><Lightbulb size={12} /> Idea</span>;
            default: return null;
        }
    };

    const getActionButton = (status) => {
        switch (status) {
            case 'lanzado':
                return (
                    <button className="w-full mt-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20">
                        <Download size={16} /> Obtener App
                    </button>
                );
            case 'beta':
                return (
                    <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <UserCheck size={16} /> Unirse a Beta
                    </button>
                );
            default:
                return (
                    <button className="w-full mt-4 py-2 bg-transparent hover:bg-slate-900 text-slate-400 border border-slate-800 border-dashed hover:border-slate-600 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2">
                        <Bell size={16} /> Notificarme
                    </button>
                );
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30">

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            {/* Nuevo Logo SVG */}
                            <div className="filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
                                <Logo className="w-9 h-9" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">Oktober Lab</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="hover:text-orange-400 transition-colors text-sm font-medium tracking-wide">Inicio</a>
                            <a href="#apps" className="hover:text-orange-400 transition-colors text-sm font-medium tracking-wide">Catálogo</a>
                            <a href="#philosophy" className="hover:text-orange-400 transition-colors text-sm font-medium tracking-wide">Filosofía</a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
                        <a href="#home" className="block hover:text-orange-400 font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                        <a href="#apps" className="block hover:text-orange-400 font-medium" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
                        <a href="#philosophy" className="block hover:text-orange-400 font-medium" onClick={() => setIsMenuOpen(false)}>Filosofía</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-orange-900/10 to-transparent transform rotate-45 translate-x-1/3 -translate-y-1/4 -z-10 border-l border-white/5" />
                <div className="absolute top-20 left-10 w-24 h-24 border border-orange-500/20 rounded-full opacity-50 -z-10" />

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm text-xs font-semibold uppercase tracking-widest text-orange-400 mb-8 animate-fade-in-up">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
                        Software de Autor
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                        Funcionalidad esencial. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600">
                            Diseño honesto.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Soy un profesional aplicando experiencia del mundo real al desarrollo de software.
                        <strong className="text-slate-200"> Oktober Lab</strong> crea herramientas que respetan tu tiempo.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#apps" className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 hover:shadow-orange-500/20">
                            Ver Aplicaciones <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Apps Showcase (Previously Dashboard) */}
            <section id="apps" className="py-20 bg-slate-900/30 relative border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Catálogo de Apps</h2>
                            <p className="text-slate-400">Herramientas digitales creadas para solucionar problemas reales.</p>
                        </div>

                        {/* Simple Filter */}
                        <div className="flex bg-slate-950 p-1.5 rounded-lg border border-slate-800 overflow-x-auto max-w-full">
                            {['todos', 'lanzado', 'beta', 'desarrollo', 'concepto'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize whitespace-nowrap ${activeTab === tab
                                            ? 'bg-slate-800 text-white shadow-md border border-slate-700'
                                            : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900'
                                        }`}
                                >
                                    {tab === 'todos' ? 'Ver Todo' : tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid de Productos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/5 relative flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-500/30">
                                        {project.icon}
                                    </div>
                                    <div className="bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
                                        {getStatusBadge(project.status)}
                                    </div>
                                </div>

                                <div className="flex-grow relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 pt-4 border-t border-slate-800/50">
                                    {getActionButton(project.status)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 bg-slate-900/20 rounded-xl border border-slate-800 border-dashed">
                            <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                            <p className="text-slate-400 font-light">No hay aplicaciones en esta categoría.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Features / Philosophy */}
            <section id="philosophy" className="py-24 px-4 bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-1">
                            <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center mb-6">
                                <Zap className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Simplicidad Radical</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Si no aporta valor real, se elimina. Creo software que respeta tu tiempo y tu inteligencia, evitando lo superfluo.
                            </p>
                        </div>
                        <div className="p-1">
                            <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center mb-6">
                                <UserCheck className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Perspectiva Experta</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Vengo de otro mundo profesional. Eso me permite ver soluciones prácticas donde un programador tradicional solo ve código.
                            </p>
                        </div>
                        <div className="p-1">
                            <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center mb-6">
                                <Focus className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Utilidad Primero</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Cada app en este laboratorio nace de una necesidad real. Herramientas construidas con propósito y dedicación personal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <Logo className="w-6 h-6" />
                            <span className="font-bold text-lg text-white tracking-tight">Oktober Lab</span>
                        </div>
                        <p className="text-slate-500 text-xs max-w-xs text-center md:text-left">
                            Desarrollo independiente. Calidad artesanal, escala digital.
                        </p>
                    </div>

                    <div className="flex gap-8 text-slate-500 text-sm font-medium">
                        <a href="#" className="hover:text-orange-500 transition-colors">Contacto</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">GitHub</a>
                    </div>

                    <div className="text-slate-600 text-xs">
                        © {new Date().getFullYear()} Oktober Lab.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
