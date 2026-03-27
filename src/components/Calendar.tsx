import React from 'react';
import { FIXTURES } from '../constants';

export function Calendar() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label text-sm font-semibold text-secondary uppercase tracking-widest mb-2 block">Temporada 2024/25</span>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Calendario y Eventos</h1>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-low p-1 rounded-full">
          <button className="px-6 py-2 rounded-full bg-white shadow-sm font-label text-sm font-bold text-primary">Mensual</button>
          <button className="px-6 py-2 rounded-full font-label text-sm font-medium text-outline">Lista</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 flex flex-col gap-8">
          {/* Featured Next Match */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-8 bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0px_20px_40px_rgba(0,30,64,0.15)]">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img 
                className="w-full h-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHcBVOGU9w8VWhtZpho_wrWSStF9ovnWIBXTN8kM45wty8lJo0oANHAw0JwzaDbQXOhUPbn1unrTCLUezXYagqOD94E1EcML1mHzBg_6MXcf4vpNabzThF03_oBSNafvS2yV6yso3-8RfKS0vgSnLMfjxDHmQLa3rybF_2UkiWqwV9M3zXORdLkIzUX79xMhK6BMKkxuWj_mVg9BlS2msL4vWUgYVP94Rig6fjko2iRR7myu1G-rXOc7OWP-33BKhIC1CtsfwBobI" 
                alt="Stadium"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-secondary text-white px-3 py-1 rounded-lg font-label text-[10px] font-bold tracking-widest uppercase">Próximo Partido</span>
                <span className="text-on-primary-container font-label text-xs">Premier League • Jornada 24</span>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 text-center md:text-left">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-4">
                    <img 
                      className="w-full h-full object-contain" 
                      src="https://storage.googleapis.com/static-content-ais-pre-aqfrjo7cawgyursxow3wts-567248456277.us-east1.run.app/4c2e46f8-bd6a-4bb9-913e-f132de12b5b6/f8845700-1110-405a-881c-813f3607f235.png" 
                      alt="Club Deportivo Banfield"
                    />
                  </div>
                  <span className="font-headline text-lg font-bold">Club Deportivo Banfield</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-headline text-4xl font-black text-on-primary-container mb-1">VS</span>
                  <div className="px-4 py-1 rounded bg-secondary-container/20 text-secondary-fixed font-label text-sm font-bold italic">LOCAL</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-4">
                    <img 
                      className="w-full h-full object-contain" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8ulp4WVDyngGHXFR13ZSiV13VGhXrvwn_buGk06QYgQ8pPUyAtg3IZVOfyVBmW0HXHrkaYDWpEJrWdR53Awh0WjEjexAbSXAVzZCi69FL0X2sgTldG_1f7iNih-5P_qL8OiCo5vpxZ90y99HS0RipWNGt4vyo7jCa9O8GKJpri83zzWvtZTH9BfOGojDuuk2xSGHJJFZ9yWBmB9Z4HwN5ODcH2ltQgyYrcRMIIUcWyXbMFRPYV4Qvkygk-bAuIzF0dxGONra-d0" 
                      alt="Rival"
                    />
                  </div>
                  <span className="font-headline text-lg font-bold">Rival</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed">calendar_month</span>
                  <span className="font-label text-sm">Sábado, 24 Oct</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed">schedule</span>
                  <span className="font-label text-sm">20:45 CET</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed">location_on</span>
                  <span className="font-label text-sm">Estadio Elite, Londres</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Strip */}
          <div className="bg-surface-container-low rounded-[2.5rem] p-6">
            <div className="flex items-center justify-between mb-6 px-2">
              <h3 className="font-headline text-xl font-bold text-primary">Octubre 2024</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white hover:bg-slate-100 transition-colors"><span className="material-symbols-outlined text-primary">chevron_left</span></button>
                <button className="p-2 rounded-full bg-white hover:bg-slate-100 transition-colors"><span className="material-symbols-outlined text-primary">chevron_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4">
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                <div key={day} className="text-center font-label text-[10px] font-bold text-outline uppercase tracking-tighter">{day}</div>
              ))}
              {[19, 20].map(d => (
                <div key={d} className="aspect-square flex flex-col items-center justify-center rounded-xl bg-white/50 text-outline-variant font-label text-sm">{d}</div>
              ))}
              <div className="aspect-square flex flex-col items-center justify-center rounded-xl bg-white shadow-sm border-l-4 border-secondary text-primary font-bold font-label text-sm">21</div>
              {[22, 23].map(d => (
                <div key={d} className="aspect-square flex flex-col items-center justify-center rounded-xl bg-white/50 text-outline-variant font-label text-sm">{d}</div>
              ))}
              <div className="aspect-square flex flex-col items-center justify-center rounded-xl bg-primary text-white font-black font-label text-sm relative">
                24
                <div className="absolute -bottom-1 w-1 h-1 bg-secondary rounded-full"></div>
              </div>
              <div className="aspect-square flex flex-col items-center justify-center rounded-xl bg-white/50 text-outline-variant font-label text-sm">25</div>
            </div>
          </div>
        </section>

        {/* Training Sessions */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-[0px_10px_30px_rgba(0,30,64,0.02)] border-l-4 border-secondary">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-xl font-bold text-primary">Resumen Diario</h3>
              <span className="material-symbols-outlined text-secondary">fitness_center</span>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-surface-container-high">
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-secondary"></div>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest">Activo Ahora</span>
                  <span className="font-label text-[10px] text-outline">09:00 - 11:30</span>
                </div>
                <h4 className="font-body font-bold text-primary text-lg leading-tight mb-2">Entrenamiento Táctico: Bloque Defensivo</h4>
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="font-label text-xs">Campo A</span>
                </div>
              </div>
              <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-surface-container-high">
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-outline-variant"></div>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-label text-[10px] font-bold text-outline uppercase tracking-widest">A Continuación</span>
                  <span className="font-label text-[10px] text-outline">14:00 - 15:30</span>
                </div>
                <h4 className="font-body font-bold text-primary text-lg leading-tight mb-2">Recuperación e Hidroterapia</h4>
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="font-label text-xs">Centro de Alto Rendimiento</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-4 rounded-full bg-primary-container text-on-primary font-label font-bold text-sm transition-all hover:bg-primary active:scale-95 duration-200">
              Ver Plan de Entrenamiento
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-secondary to-tertiary-container rounded-[2rem] p-6 text-on-tertiary">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label text-[10px] font-bold uppercase tracking-widest opacity-80">Estado del Campo</span>
              <span className="material-symbols-outlined">cloud</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-3xl font-black">94%</span>
              <span className="font-label text-xs opacity-80">Condiciones Óptimas</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Fixtures List */}
      <section className="mt-16">
        <h3 className="font-headline text-2xl font-bold text-primary mb-8">Partidos de Noviembre</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {FIXTURES.map((fixture) => (
            <div key={fixture.id} className="bg-white rounded-full p-6 flex items-center justify-between shadow-[0px_4px_20px_rgba(0,30,64,0.03)] group hover:shadow-[0px_10px_30px_rgba(0,30,64,0.08)] transition-all">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-surface p-1 border-2 border-white shadow-sm">
                    <img className="w-full h-full object-contain" src="https://storage.googleapis.com/static-content-ais-pre-aqfrjo7cawgyursxow3wts-567248456277.us-east1.run.app/4c2e46f8-bd6a-4bb9-913e-f132de12b5b6/f8845700-1110-405a-881c-813f3607f235.png" alt="Club Deportivo Banfield" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface p-1 border-2 border-white shadow-sm">
                    <img className="w-full h-full object-contain" src={fixture.opponentLogo} alt={fixture.opponent} />
                  </div>
                </div>
                <div>
                  <div className="font-body font-bold text-primary">{fixture.opponent}</div>
                  <div className="font-label text-[10px] text-outline">{fixture.date} • {fixture.isHome ? 'casa' : 'fuera'}</div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">confirmation_number</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
