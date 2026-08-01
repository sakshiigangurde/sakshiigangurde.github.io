import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Ambient animated background blobs matching the project's gradients */}
      <div 
        className="absolute w-[400px] h-[400px] bg-[#0ce6f2] rounded-full blur-[100px] opacity-30 top-[-100px] left-[-100px]" 
        style={{ animation: 'float 8s ease-in-out infinite alternate' }} 
      />
      <div 
        className="absolute w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[100px] opacity-30 bottom-[-200px] right-[-100px]" 
        style={{ animation: 'float 12s ease-in-out infinite alternate', animationDelay: '-4s' }} 
      />
      
      <div className="relative z-10 text-center px-8">
        <div 
          className="text-[clamp(6rem,15vw,12rem)] font-black leading-none mb-4 bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(135deg, #0ce6f2, #8b5cf6, #2dd4bf)', backgroundSize: '200% auto', animation: 'shine 5s linear infinite' }}
        >
          404
        </div>
        <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold mb-4 tracking-tight">
          Lost in the digital void?
        </h1>
        <p className="text-lg text-[#a3a3a3] max-w-[450px] mx-auto mb-10 leading-relaxed">
          Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-primary text-background font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(45,212,191,0.2)] border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.4)] hover:bg-transparent hover:text-primary hover:border-primary group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </div>
      <style>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(40px) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
