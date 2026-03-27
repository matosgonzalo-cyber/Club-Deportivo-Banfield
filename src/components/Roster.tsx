import React from 'react';
import { PLAYERS, STAFF } from '../constants';
import { cn } from '../lib/utils';

export function Roster() {
  const [activeTab, setActiveTab] = React.useState<'players' | 'staff'>('players');

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-headline font-black text-3xl text-primary tracking-tight mb-6">Plantel Profesional</h1>
        <div className="flex bg-surface-container-low p-1.5 rounded-full mb-8">
          <button 
            onClick={() => setActiveTab('players')}
            className={cn(
              "flex-1 py-3 px-4 rounded-full text-sm font-bold font-label transition-all",
              activeTab === 'players' ? "bg-white text-primary shadow-sm" : "text-outline hover:text-primary"
            )}
          >
            Jugadores
          </button>
          <button 
            onClick={() => setActiveTab('staff')}
            className={cn(
              "flex-1 py-3 px-4 rounded-full text-sm font-bold font-label transition-all",
              activeTab === 'staff' ? "bg-white text-primary shadow-sm" : "text-outline hover:text-primary"
            )}
          >
            Cuerpo Técnico
          </button>
        </div>
      </section>

      {activeTab === 'players' ? (
        <div className="grid gap-4">
          {PLAYERS.map((player) => (
            <div key={player.id} className={cn(
              "relative overflow-hidden rounded-full bg-surface-container-lowest flex items-center p-3 group border-l-4",
              player.status === 'Fit' ? "border-secondary-fixed" : "border-error/50"
            )}>
              <div className={cn(
                "w-16 h-16 rounded-full overflow-hidden bg-surface-container-high flex-shrink-0",
                player.status === 'Injured' && "grayscale"
              )}>
                <img className="w-full h-full object-cover" src={player.image} alt={player.name} />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center gap-2">
                  <span className={cn("font-headline font-black text-xl", player.status === 'Injured' ? "text-primary/40" : "text-primary")}>
                    {player.number}
                  </span>
                  <h3 className={cn("font-bold text-lg leading-tight", player.status === 'Injured' ? "text-on-surface/60" : "text-on-surface")}>
                    {player.name}
                  </h3>
                </div>
                <p className="font-label text-xs uppercase font-semibold text-outline tracking-wider">{player.position}</p>
              </div>
              <div className="mr-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                  player.status === 'Fit' ? "bg-secondary-container text-on-secondary-container" : "bg-error-container text-on-error-container"
                )}>
                  {player.status === 'Fit' ? 'En forma' : 'Lesionado'}
                </span>
              </div>
              <button className="text-outline-variant hover:text-primary transition-colors pr-2">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <h2 className="font-headline font-bold text-xl text-primary mb-4 flex items-center gap-2">
            Cuerpo Técnico
            <span className="w-8 h-[2px] bg-secondary flex-grow opacity-30"></span>
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Head Coach */}
            <div className="bg-primary-container text-white p-5 rounded-full flex items-center relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>
              <div className="w-14 h-14 rounded-full border-2 border-secondary overflow-hidden">
                <img className="w-full h-full object-cover" src={STAFF[0].image} alt={STAFF[0].name} />
              </div>
              <div className="ml-4">
                <p className="font-label text-[10px] uppercase font-bold text-secondary-fixed tracking-widest">{STAFF[0].role}</p>
                <h4 className="font-headline font-extrabold text-lg">{STAFF[0].name}</h4>
                <p className="font-body text-xs text-white/70">{STAFF[0].experience}</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-secondary-fixed">verified</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {STAFF.slice(1).map((member) => (
                <div key={member.id} className="bg-surface-container-high p-4 rounded-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                    <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                  </div>
                  <h5 className="font-bold text-sm text-primary leading-tight">{member.name}</h5>
                  <p className="text-[9px] font-black uppercase text-outline">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-secondary text-on-secondary rounded-xl shadow-[0_20px_40px_rgba(27,109,36,0.3)] flex items-center justify-center active:scale-90 transition-all duration-200 z-50">
        <span className="material-symbols-outlined text-3xl font-bold">add</span>
      </button>
    </div>
  );
}
