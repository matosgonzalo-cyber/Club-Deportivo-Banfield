import React from 'react';
import { FIXTURES, NEWS } from '../constants';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { user, role } = useAuth();

  const quickActions = [
    { label: 'Ver Plantilla', icon: 'groups', roles: ['jugador', 'tecnico', 'administrativo'] },
    { label: 'Calendario Completo', icon: 'calendar_month', roles: ['jugador', 'tecnico', 'administrativo', 'socio', 'padre'] },
    { label: 'Análisis Avanzado', icon: 'query_stats', roles: ['tecnico', 'administrativo'] },
    { label: 'Gestión de Pagos', icon: 'payments', roles: ['administrativo', 'socio', 'padre'] },
    { label: 'Panel de Socios', icon: 'badge', roles: ['administrativo', 'socio'] },
  ].filter(action => !role || action.roles.includes(role));

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="px-2">
        <h2 className="text-3xl font-headline font-black text-primary dark:text-white">
          ¡Hola, {user?.displayName?.split(' ')[0]}!
        </h2>
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mt-1">
          Panel de Control • <span className="text-primary font-bold">{role}</span>
        </p>
      </section>

      {/* Hero Section: Next Match */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 relative overflow-hidden rounded-[2rem] bg-primary text-on-primary p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,30,64,0.06)]">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img 
              className="object-cover w-full h-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7DQGgbvkG2jmANo0sHMVnimQUJAxQOr1ic9mYvUa3YJlhXon8cCl8NQblP0Qg0H3RzJ1R0dq-x2eRR5zg-aBw0ye9IJ4AwvOdojPzu8De5wXJB0z2ROBv2poHZjA91zaZUPXumwOE6cfiISL2HKgBlkr6oReKSAhXuMcNNiOvaaE1uX2CASGIYwVveElpLCEHlpQbIlsXSWUMZQvh5JLUI8emyDQeKbDh_n0xKdFFLi6jodMaiLmJTyE1PMPBGDREA3iFnhbQGd4" 
              alt="Stadium"
            />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-secondary text-on-secondary font-label text-xs font-bold uppercase tracking-widest mb-6">Próximo Partido</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-2 leading-tight">Club Deportivo Banfield vs. <br/>Thunder City</h2>
              <p className="font-body text-primary-fixed-dim text-lg">Sábado, 14 Oct • 19:30 • Grand Arena</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-secondary to-on-secondary-fixed-variant px-8 py-4 rounded-xl font-headline font-bold text-on-primary shadow-lg hover:brightness-110 transition-all active:scale-95">Estrategia de Partido</button>
              <button className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl font-headline font-bold text-white border border-white/20 hover:bg-white/20 transition-all">Entradas y Acceso</button>
            </div>
          </div>
        </div>

        {/* Season Summary */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0px_20px_40px_rgba(0,30,64,0.04)] flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-6">Resumen de la Temporada</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label text-outline uppercase tracking-wider text-xs">Posición en la Liga</span>
                <span className="font-headline text-3xl font-black text-secondary">2º</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[85%]"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-label text-outline text-[10px] uppercase">Jugados</p>
                  <p className="font-headline text-xl font-bold text-primary">12</p>
                </div>
                <div>
                  <p className="font-label text-outline text-[10px] uppercase">Victorias</p>
                  <p className="font-headline text-xl font-bold text-primary">9</p>
                </div>
                <div>
                  <p className="font-label text-outline text-[10px] uppercase">Puntos</p>
                  <p className="font-headline text-xl font-bold text-primary">28</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-container-high">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <p className="text-sm font-body font-medium text-on-surface-variant">Probabilidad de victoria +14% este mes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions & News */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-headline text-xl font-bold text-primary px-2">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 gap-3">
            {quickActions.map((action) => (
              <button key={action.label} className="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors group text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary bg-white p-2 rounded-xl">
                    {action.icon}
                  </span>
                  <span className="font-body font-bold text-primary">{action.label}</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-headline text-xl font-bold text-primary">Noticias Recientes</h3>
            <button className="text-secondary font-label text-sm font-bold hover:underline">Ver todo</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {NEWS.map((item) => (
              <div key={item.id} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,30,64,0.02)]">
                <div className="h-40 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={item.image} alt={item.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold font-label text-secondary uppercase bg-secondary-container px-2 py-0.5 rounded">{item.category}</span>
                    <span className="text-[10px] font-medium font-label text-outline uppercase">{item.time}</span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-primary leading-snug">{item.title}</h4>
                  <p className="mt-2 text-sm text-on-surface-variant font-body line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Momentum Tracker */}
      <section className="bg-primary-container rounded-[2rem] p-8 md:p-10 text-on-primary">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white">Seguimiento de Momento</h3>
            <p className="text-primary-fixed-dim font-body">Tendencia de rendimiento en los últimos 5 partidos</p>
          </div>
          <div className="flex gap-2">
            {['V', 'V', 'E', 'V', 'D'].map((res, i) => (
              <div key={i} className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-headline font-bold",
                res === 'V' ? "bg-secondary" : res === 'E' ? "bg-outline opacity-50 text-white" : "bg-error"
              )}>
                {res}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-32 w-full flex items-end gap-2 px-2">
          <div className="flex-1 bg-secondary rounded-t-lg h-[60%] opacity-40"></div>
          <div className="flex-1 bg-secondary rounded-t-lg h-[85%] opacity-60"></div>
          <div className="flex-1 bg-secondary rounded-t-lg h-[70%] opacity-80"></div>
          <div className="flex-1 bg-secondary rounded-t-lg h-[95%]"></div>
          <div className="flex-1 bg-error rounded-t-lg h-[30%]"></div>
        </div>
      </section>
    </div>
  );
}
