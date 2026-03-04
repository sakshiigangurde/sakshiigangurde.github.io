import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleNavClick = () => {
        setIsMenuOpen(false);
        // window.scrollTo is handled by ScrollToTop component
    };

    return (
        <nav
            id="main-nav"
            aria-label="Main navigation"
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
        >
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-full shadow-2xl shadow-black/60">
                <div className="px-5 lg:px-7">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo / Name */}
                        <Link
                            to="/"
                            id="nav-logo"
                            onClick={handleNavClick}
                            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
                            aria-label="Go to home"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                                <span className="text-[#0a0a0a] font-bold text-sm">S</span>
                            </div>
                            <span className="text-white font-semibold text-[15px] tracking-tight">Sakshi</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-5">
                            <Link
                                to="/about"
                                id="nav-about"
                                onClick={handleNavClick}
                                className={`text-[14px] font-medium transition-colors ${location.pathname === '/about' ? 'text-teal-400' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                About Me
                            </Link>
                            <a
                                id="nav-resume"
                                href="#"
                                className="px-5 py-2 bg-white/6 hover:bg-white/10 border border-white/10 rounded-full text-white text-[14px] font-medium transition-all hover:border-white/20"
                                onClick={e => e.preventDefault()}
                            >
                                My Resume
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            id="nav-mobile-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle mobile menu"
                            className="md:hidden w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/10">
                        <div className="px-5 py-4 space-y-1.5">
                            <Link
                                to="/"
                                id="nav-mobile-home"
                                onClick={handleNavClick}
                                className="block w-full px-4 py-2.5 rounded-xl text-left text-gray-300 hover:text-white hover:bg-white/5 transition-all text-[14px] font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                id="nav-mobile-about"
                                onClick={handleNavClick}
                                className="block w-full px-4 py-2.5 rounded-xl text-left text-gray-300 hover:text-white hover:bg-white/5 transition-all text-[14px] font-medium"
                            >
                                About Me
                            </Link>
                            <button
                                id="nav-mobile-resume"
                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] font-medium text-left hover:bg-white/10 transition-all"
                            >
                                My Resume
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
