import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';
import { UserMenu } from './Auth';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Panel', path: '/', roles: ['jugador', 'tecnico', 'administrativo', 'socio', 'padre'] },
  { icon: 'groups', label: 'Plantilla', path: '/roster', roles: ['jugador', 'tecnico', 'administrativo'] },
  { icon: 'calendar_month', label: 'Calendario', path: '/calendar', roles: ['jugador', 'tecnico', 'administrativo', 'socio', 'padre'] },
  { icon: 'query_stats', label: 'Stats', path: '/stats', roles: ['jugador', 'tecnico'] },
  { icon: 'badge', label: 'Socios', path: '/members', roles: ['administrativo', 'socio'] },
  { icon: 'payments', label: 'Pagos', path: '/payments', roles: ['administrativo', 'socio', 'padre'] },
];

export function BottomNav() {
  const { role } = useAuth();
  
  const filteredItems = NAV_ITEMS.filter(item => !role || item.roles.includes(role));

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 shadow-[0_-10px_30px_rgba(0,30,64,0.04)] rounded-t-[2rem]">
      {filteredItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center px-3 py-2 transition-all duration-300 ease-out active:scale-90",
              isActive 
                ? "bg-secondary-fixed dark:bg-secondary text-primary dark:text-white rounded-2xl" 
                : "text-slate-400 dark:text-slate-500 hover:text-secondary"
            )
          }
        >
          <span 
            className="material-symbols-outlined" 
            style={{ fontVariationSettings: `'FILL' ${window.location.pathname === item.path ? 1 : 0}` }}
          >
            {item.icon}
          </span>
          <span className="font-label font-semibold text-[10px] uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

export function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,30,64,0.06)] flex items-center justify-between px-6 h-16">
      <div className="flex items-center gap-3">
        <img 
          alt="Escudo Club Deportivo Banfield" 
          className="w-10 h-10 object-contain" 
          src="https://storage.googleapis.com/static-content-ais-pre-aqfrjo7cawgyursxow3wts-567248456277.us-east1.run.app/4c2e46f8-bd6a-4bb9-913e-f132de12b5b6/f8845700-1110-405a-881c-813f3607f235.png"
        />
        <h1 className="font-headline font-bold text-lg tracking-tight text-primary dark:text-blue-400 hidden sm:block">
          Club Deportivo Banfield
        </h1>
        <h1 className="font-headline font-black text-xl text-primary dark:text-white tracking-tighter uppercase sm:hidden">
          C.D. BANFIELD
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-slate-500 hover:opacity-80 transition-opacity active:scale-95 duration-200 hidden md:block">
          search
        </button>
        <button className="material-symbols-outlined text-slate-500 hover:opacity-80 transition-opacity active:scale-95 duration-200 hidden md:block">
          notifications
        </button>
        <UserMenu />
      </div>
    </header>
  );
}
