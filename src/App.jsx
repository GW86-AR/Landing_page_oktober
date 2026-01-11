import React, { useState } from 'react';
import {
    Flame,
    FileText,
    Activity,
    Building2,
    Hammer,
    Pill,
    Droplets,
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
    Mail,
    Zap
} from 'lucide-react';

// Logo Component
const Logo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
        </defs>
        <path d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z" fill="url(#logoGradient)" fillOpacity="0.1" stroke="url(#logoGradient)" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M20 8L31 14.35V25.65L20 32L9 25.65V14.35L20 8Z" stroke="url(#logoGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="#f97316" />
    </svg>
);

const PrismLogo = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="prismGradient" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#3a86ff" />
                <stop offset="100%" stopColor="#833ab4" />
            </linearGradient>
            <filter id="prismGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        <rect x="5" y="5" width="40" height="40" rx="10" fill="url(#prismGradient)" fillOpacity="0.2" stroke="url(#prismGradient)" strokeWidth="4" />
        <rect x="55" y="5" width="40" height="40" rx="4" fill="url(#prismGradient)" filter="url(#prismGlow)" />
        <rect x="5" y="55" width="40" height="40" rx="10" fill="url(#prismGradient)" fillOpacity="0.2" stroke="url(#prismGradient)" strokeWidth="4" />
        <rect x="55" y="55" width="40" height="40" rx="10" fill="url(#prismGradient)" fillOpacity="0.2" stroke="url(#prismGradient)" strokeWidth="4" />
    </svg>
);



const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('todos');
    const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
    const [notifyProject, setNotifyProject] = useState(null);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const openNotifyModal = (project) => {
        setNotifyProject(project);
        setIsNotifyModalOpen(true);
        setIsSubmitted(false);
        setEmail('');
    };

    const handleNotifySubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de integración con un backend o servicio de mailing
        console.log(`Email registrado para ${notifyProject.title}: ${email}`);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsNotifyModalOpen(false);
        }, 2000);
    };

    const projects = [
        {
            id: 0,
            title: "PRISM Workspace",
            description: "Tu centro de mando productivo. Organiza tu flujo de trabajo en contextos visuales y accede a todo con un solo clic. La solución definitiva para profesionales.",
            status: "lanzado",
            tags: ["Productividad", "Premium"],
            icon: <PrismLogo className="w-8 h-8" />,
            link: "Prism/prism-workspace.html"
        },

        {
            id: 1,
            title: "IGNITION Breathwork",
            description: "Técnicas de respiración guiadas con retroalimentación háptica. Transforma tu estado mental en minutos.",
            status: "lanzado",
            tags: ["Salud", "Bienestar"],
            icon: <Flame className="w-8 h-8 text-orange-500" />,
            link: "https://gw86-ar.github.io/IGNITION_Breathwork/"
        },

        {
            id: 2,
            title: "EETT Visual",
            description: "Una nueva forma de redactar y copilar documentos legales. Automatización inteligente para profesionales.",
            status: "desarrollo",
            tags: ["Legal", "Productividad"],
            icon: <FileText className="w-8 h-8 text-blue-500" />
        },
        {
            id: 3,
            title: "Padel Tracker",
            description: "Estadísticas y análisis de tus partidos de pádel. Mejora tu juego con datos precisos.",
            status: "desarrollo",
            tags: ["Deporte", "Analytics"],
            icon: <Activity className="w-8 h-8 text-green-500" />
        },
        {
            id: 4,
            title: "Motor Arq OGUC",
            description: "Decisiones arquitectónicas basadas en la normativa OGUC. Consulta inteligente para profesionales.",
            status: "desarrollo",
            tags: ["Arquitectura", "Legal"],
            icon: <Building2 className="w-8 h-8 text-purple-500" />
        },
        {
            id: 5,
            title: "APP DfMA Mass Timber",
            description: "Optimización de diseño para fabricación y montaje en construcción con madera masiva.",
            status: "desarrollo",
            tags: ["Construcción", "Ingeniería"],
            icon: <Hammer className="w-8 h-8 text-amber-600" />
        },
        {
            id: 6,
            title: "App Medicamento",
            description: "Gestión inteligente de medicamentos y recordatorios. Tu salud bajo control.",
            status: "desarrollo",
            tags: ["Salud", "Utilidad"],
            icon: <Pill className="w-8 h-8 text-red-500" />
        },
        {
            id: 7,
            title: "Sistema de Riego",
            description: "Planificación y automatización de sistemas de riego. Eficiencia hídrica para tu cultivo.",
            status: "desarrollo",
            tags: ["Agricultura", "IoT"],
            icon: <Droplets className="w-8 h-8 text-cyan-500" />
        }
    ];

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

    const getActionButton = (project) => {
        const { status, link } = project;

        if (link) {
            return (
                <a href={link} className="w-full mt-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 active:scale-95 text-center">
                    <Zap size={16} /> Ver Proyecto
                </a>
            );
        }

        switch (status) {
            case 'lanzado':
                return (
                    <button className="w-full mt-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-900/30 hover:shadow-orange-500/40 active:scale-95">
                        <Download size={16} /> Obtener App
                    </button>
                );
            case 'beta':
                return (
                    <button className="w-full mt-4 py-3 bg-transparent hover:bg-slate-800 text-purple-400 border-2 border-purple-500/50 hover:border-purple-500 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
                        <UserCheck size={16} /> Unirse a Beta
                    </button>
                );
            default:
                return (
                    <button
                        onClick={() => openNotifyModal(project)}
                        className="w-full mt-4 py-3 bg-transparent hover:bg-slate-900/50 text-slate-400 hover:text-slate-300 border border-slate-800 border-dashed hover:border-slate-600 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                        <Bell size={16} /> Notificarme
                    </button>
                );
        }
    };


    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed w-full z-50 glass-effect border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="filter drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                                <Logo className="w-9 h-9" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">Oktober Lab</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="hover:text-orange-400 transition-colors duration-300 text-sm font-medium tracking-wide">Inicio</a>
                            <a href="#apps" className="hover:text-orange-400 transition-colors duration-300 text-sm font-medium tracking-wide">Catálogo</a>
                            <a href="#philosophy" className="hover:text-orange-400 transition-colors duration-300 text-sm font-medium tracking-wide">Filosofía</a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white transition-colors">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 p-4 space-y-4">
                        <a href="#home" className="block hover:text-orange-400 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                        <a href="#apps" className="block hover:text-orange-400 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Catálogo</a>
                        <a href="#philosophy" className="block hover:text-orange-400 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Filosofía</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[150px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px]" />

                <div className="max-w-5xl mx-auto text-center animate-fade-in-up relative z-10 py-20 md:py-32">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400 mb-12 border border-orange-500/20">
                        <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_12px_rgba(249,115,22,0.8)]"></span>
                        Software de Autor
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
                        Funcionalidad esencial. <br />
                        <span className="gradient-text">
                            Diseño honesto.
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                        Soy un profesional aplicando experiencia del mundo real al desarrollo de software.
                        <strong className="text-slate-100 font-semibold"> Oktober Lab</strong> crea herramientas que respetan tu tiempo.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <a href="#apps" className="group px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-orange-900/40 hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
                            Ver Aplicaciones
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Apps Catalog */}
            <section id="apps" className="py-20 md:py-32 bg-gradient-to-b from-slate-900/20 to-slate-950 relative border-t border-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight">Catálogo de Apps</h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Herramientas digitales creadas para solucionar problemas reales con un enfoque minimalista y funcional.
                        </p>
                    </div>

                    {/* Centered Filter Buttons */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex glass-effect p-1.5 rounded-2xl border border-slate-800/50 overflow-x-auto">
                            {['todos', 'lanzado', 'beta', 'desarrollo', 'concepto'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 uppercase tracking-wider whitespace-nowrap ${activeTab === tab
                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50 scale-105'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                        }`}
                                >
                                    {tab === 'todos' ? 'Ver Todo' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* App Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group glass-effect rounded-2xl p-8 border border-slate-800/50 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 relative flex flex-col"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Top accent line that reveals on hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl group-hover:bg-slate-800/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        {project.icon}
                                    </div>
                                    <div className="glass-effect px-3 py-1.5 rounded-full border border-slate-800/50">
                                        {getStatusBadge(project.status)}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800/50 uppercase tracking-wider hover:border-orange-500/30 hover:text-orange-400 transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-900/50">
                                    {getActionButton(project)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-32 glass-effect rounded-3xl border border-slate-900 border-dashed">
                            <div className="w-20 h-20 bg-slate-900/50 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                                <Code2 className="w-10 h-10 text-slate-700" />
                            </div>
                            <p className="text-slate-500 font-medium text-lg">Bajo construcción. Vuelve pronto.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Philosophy */}
            <section id="philosophy" className="py-20 md:py-40 px-4 bg-slate-950 relative">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-orange-600/5 via-transparent to-transparent opacity-50" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight">Nuestra Filosofía</h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Tres principios que guían cada línea de código y cada decisión de diseño.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="group text-center">
                            <div className="w-16 h-16 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                <Zap className="text-orange-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-5 tracking-tight">Simplicidad Radical</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-base">
                                Si no aporta valor real, se elimina. Creo software que respeta tu tiempo y tu inteligencia, evitando lo superfluo y centrándose en lo esencial.
                            </p>
                        </div>

                        <div className="group text-center">
                            <div className="w-16 h-16 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                <UserCheck className="text-orange-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-5 tracking-tight">Perspectiva Experta</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-base">
                                Vengo de otro mundo profesional. Eso me permite ver soluciones prácticas donde un programador tradicional solo ve código, aplicando lógica del mundo real.
                            </p>
                        </div>

                        <div className="group text-center">
                            <div className="w-16 h-16 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                <Focus className="text-orange-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-5 tracking-tight">Utilidad Primero</h3>
                            <p className="text-slate-500 leading-relaxed font-light text-base">
                                Cada app en este laboratorio nace de una necesidad real. Herramientas construidas con propósito, dedicación personal y un estándar de calidad artesanal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 border-t-2 border-slate-900 pt-16 md:pt-32 pb-8 md:pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                        {/* Brand Column */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <div className="flex items-center gap-3">
                                <Logo className="w-10 h-10" />
                                <span className="font-black text-2xl text-white tracking-tight">Oktober Lab</span>
                            </div>
                            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed font-light">
                                Desarrollo independiente con estándares profesionales. <br />
                                <span className="text-orange-500 font-medium">Calidad artesanal, escala digital.</span>
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navegación</h4>
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <a href="#home" className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium">Inicio</a>
                                <a href="#apps" className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium">Catálogo de Apps</a>
                                <a href="#philosophy" className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium">Filosofía</a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Conecta</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 border border-slate-800 transition-all duration-300 hover:scale-110 active:scale-95">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 border border-slate-800 transition-all duration-300 hover:scale-110 active:scale-95">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/50 border border-slate-800 transition-all duration-300 hover:scale-110 active:scale-95">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-12 border-t border-slate-900 text-center">
                        <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
                            © {new Date().getFullYear()} Oktober Lab. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Notification Modal */}
            {isNotifyModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsNotifyModalOpen(false)} />
                    <div className="relative glass-effect border border-slate-800 p-8 rounded-3xl max-w-md w-full animate-fade-in-up">
                        <button
                            onClick={() => setIsNotifyModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Bell className="text-orange-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">¡Mantente informado!</h3>
                            <p className="text-slate-400 text-sm font-light">
                                ¿Te interesa <span className="text-orange-400 font-semibold">{notifyProject?.title}</span>? Déjanos tu correo y te avisaremos apenas esté listo.
                            </p>
                        </div>

                        {!isSubmitted ? (
                            <form onSubmit={handleNotifySubmit} className="space-y-4">
                                <input
                                    type="email"
                                    required
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-900/20 active:scale-95"
                                >
                                    Suscribirme
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-6 animate-fade-in">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                                </div>
                                <p className="text-green-400 font-bold">¡Registrado con éxito!</p>
                            </div>
                        )}

                        <p className="mt-6 text-[10px] text-slate-500 text-center uppercase tracking-widest font-bold">
                            Promesa Oktober Lab: Cero Spam.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

