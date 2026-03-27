import React from 'react';
import { MEMBERS } from '../constants';
import { cn } from '../lib/utils';

export function Members() {
  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 text-on-primary flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label text-xs uppercase tracking-[0.2em] opacity-70">Panel de Administración</span>
            <h2 className="font-headline text-4xl font-black mt-2 leading-none">Gestión de Socios</h2>
            <p className="mt-4 text-on-primary-container font-medium max-w-md">Control integral de la masa societaria, seguimiento de cuotas y registros históricos del club.</p>
          </div>
          <div className="flex gap-8 mt-8 relative z-10">
            <div>
              <div className="text-3xl font-headline font-bold">12,450</div>
              <div className="text-xs font-label uppercase tracking-widest opacity-60">Activos</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-secondary-fixed">94%</div>
              <div className="text-xs font-label uppercase tracking-widest opacity-60">Al día</div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[12rem]">badge</span>
          </div>
        </div>

        <div className="bg-secondary-container rounded-[2rem] p-8 flex flex-col justify-between border border-secondary/10">
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-on-secondary mb-4">
            <span className="material-symbols-outlined">person_add</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-secondary-container">Nuevo Socio</h3>
            <p className="text-on-secondary-container/80 text-sm mt-2">Registra un nuevo integrante a la familia del Club Deportivo Banfield.</p>
          </div>
          <button className="mt-6 w-full py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold hover:opacity-90 transition-all active:scale-[0.98]">
            Iniciar Registro
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-container-low p-4 rounded-3xl">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm font-body" 
            placeholder="Buscar por nombre o número..." 
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {['Todos', 'Pagado', 'Pendiente', 'Moroso'].map((filter, i) => (
            <button key={filter} className={cn(
              "px-5 py-2.5 rounded-full text-sm font-label font-semibold whitespace-nowrap transition-colors",
              i === 0 ? "bg-primary text-on-primary" : "bg-surface-container-lowest text-on-surface-variant border border-outline-variant/15 hover:bg-surface-container-high"
            )}>
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="hidden md:grid grid-cols-6 px-8 py-2 text-outline text-xs font-label uppercase tracking-widest">
          <div className="col-span-2">Socio</div>
          <div>Nro. Socio</div>
          <div>Categoría</div>
          <div>Estado Cuota</div>
          <div className="text-right">Acción</div>
        </div>

        {MEMBERS.map((member) => (
          <div key={member.id} className={cn(
            "bg-surface-container-lowest p-4 md:px-8 md:py-5 rounded-[1.5rem] grid grid-cols-1 md:grid-cols-6 items-center gap-4 transition-all hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] border-l-4",
            member.status === 'Paid' ? "border-secondary" : member.status === 'Pending' ? "border-amber-500" : "border-error"
          )}>
            <div className="col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-primary">{member.name}</h4>
                <p className="text-xs text-outline font-body">{member.email}</p>
              </div>
            </div>
            <div className="flex md:block items-center justify-between">
              <span className="md:hidden text-xs text-outline font-label uppercase tracking-widest">Nro. Socio</span>
              <span className="font-label font-bold text-primary">{member.memberNumber}</span>
            </div>
            <div className="flex md:block items-center justify-between">
              <span className="md:hidden text-xs text-outline font-label uppercase tracking-widest">Categoría</span>
              <span className="text-sm font-body bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant">{member.category}</span>
            </div>
            <div className="flex md:block items-center justify-between">
              <span className="md:hidden text-xs text-outline font-label uppercase tracking-widest">Estado</span>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  member.status === 'Paid' ? "bg-secondary" : member.status === 'Pending' ? "bg-amber-500" : "bg-error"
                )}></span>
                <span className={cn(
                  "text-sm font-bold",
                  member.status === 'Paid' ? "text-secondary" : member.status === 'Pending' ? "text-amber-600" : "text-error"
                )}>
                  {member.status === 'Paid' ? 'Pagado' : member.status === 'Pending' ? 'Pendiente' : 'Moroso'}
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              {member.status === 'Pending' && (
                <button className="bg-secondary text-on-secondary px-4 py-2 rounded-xl text-xs font-bold font-headline active:scale-95 transition-transform">
                  PAGAR
                </button>
              )}
              {member.status === 'Overdue' && (
                <button className="p-2 rounded-xl bg-error/10 text-error hover:bg-error hover:text-on-error transition-all active:scale-90">
                  <span className="material-symbols-outlined">mail</span>
                </button>
              )}
              <button className="p-2 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">{member.status === 'Paid' ? 'visibility' : 'edit'}</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className="flex items-center justify-center gap-2 pt-8 pb-12">
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary font-bold">1</button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors">2</button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors">3</button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
