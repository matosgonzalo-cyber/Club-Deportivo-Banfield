import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, PieChart, Pie } from 'recharts';
import { cn } from '../lib/utils';

const WIN_PROB_DATA = [
  { name: '1', val: 85 },
  { name: '2', val: 90 },
  { name: '3', val: 75 },
  { name: '4', val: 95 },
  { name: '5', val: 40 },
  { name: '6', val: 80 },
];

const POSSESSION_DATA = [
  { name: 'Possession', value: 62 },
  { name: 'Remaining', value: 38 },
];

const TOP_SCORERS = [
  { name: 'Marcus Thompson', goals: 18, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOgkYGoN_9WAbrqBwuGIV22LQNBiE9E2wDFZMO9y_8snAalnYOhbR-vgqJfa5aK2Y44mDhm7EH6K0JzqWHrcs0gjAH35G1V8l5YBX99FB9EBwvA__Dc7f785zGlfwIQclFWAVten-8Hg2oe-HHKXYcnWzTYeAFRMJ6oMajEKZvJB2-Ib88tU4-TJuhBrqSOb8-3br0KpjF_MGDtSmaKHSK72Ng7g_BeWD7Qpt1BS865n_8bG6R33Xi6kRwsOYhqJ3M0gJjUEmDX2c', width: '85%' },
  { name: 'Elena Rodriguez', goals: 14, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaGcVEa1U8bJ6gDuSEaN_HCpNSq9EGRaAoAP4D6CdWaF11k-HS_kutECIzBPT1lhWx9macFY7ToLVNE4VtwsJseywfuR2iBgyvp4U8wfn39KAvEu44I_SDo0zrCvSPZU9EWQ6V3Ov17sJUP8ojs3o3wHTjmusLgG7w7WJlDBtOwunJ9AcsMBQSwK2EXtW47s_toMbbi5WQCmgapJOI-orh8nqN2A6IUgyt9Pt6PO2MVUmCGHVTnKgIKnmDj0zFQxceZXvIYiGuFWc', width: '65%' },
  { name: 'James Wilson', goals: 9, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw-RHnv9fFx8SdwapRQ0RMOgZMWJxQuzWnYQt9OmDgWbz_O5BwIbR-daxB0B9uTOlcYyOWJYdLzYOz2rFY3kqCJGQbCL8jzm6aHdDxf5SwyxhcxdcWH_RVu9FDkM4eKGSNo2MHdFgiPBMGmKa5rqEUKYEDdj7qJV0f7W_oMUu3jQ-O7ZFT-5Xoakgp6onxRCG-YJmLAKN5q8DMOj4tlsx6Kuy0bGRbNhYVXVuCHTp9wsYvC8SkEjYeFqngN5ZlEAJxLp47xBj5h3k', width: '45%' },
];

export function Stats() {
  return (
    <div className="space-y-8">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label text-sm font-semibold uppercase tracking-widest text-secondary mb-2 block">Rendimiento Temporada 2023/24</span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary leading-tight">Panel de Estadísticas <br/>del Equipo</h2>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:opacity-90 active:scale-95">
              <span className="material-symbols-outlined">download</span> Exportar Reporte
            </button>
            <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:opacity-90 active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span> Análisis en Vivo
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        <div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0px_20px_40px_rgba(0,30,64,0.06)] relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <h3 className="font-label text-xs font-bold text-outline uppercase tracking-tighter mb-1">Probabilidad de Victoria</h3>
            <p className="text-5xl font-black font-headline text-primary">78.4%</p>
          </div>
          <div className="mt-8 h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WIN_PROB_DATA}>
                <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                  {WIN_PROB_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#1b6d244d' : '#1b6d24'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <span className="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-slate-50 opacity-10">leaderboard</span>
        </div>

        <div className="md:col-span-2 lg:col-span-2 bg-primary text-on-primary p-8 rounded-[2.5rem] shadow-[0px_20px_40px_rgba(0,30,64,0.06)] flex flex-col justify-between">
          <div>
            <h3 className="font-label text-xs font-bold text-primary-fixed-dim uppercase tracking-tighter mb-1">Goles Totales</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-6xl font-black font-headline">52</p>
              <span className="text-secondary-fixed text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-sm">arrow_upward</span> 12%
              </span>
            </div>
          </div>
          <div className="font-label text-sm text-on-primary-container">Promedio 2.4 por partido</div>
        </div>

        <div className="md:col-span-4 lg:col-span-2 bg-surface-container-low p-8 rounded-[2.5rem] flex flex-col justify-center gap-4">
          <h3 className="font-label text-xs font-bold text-outline uppercase tracking-tighter">Últimos 5 Partidos</h3>
          <div className="flex justify-between items-center gap-2">
            {['V', 'V', 'D', 'V', 'E'].map((res, i) => (
              <div key={i} className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center font-black text-white shadow-lg",
                res === 'V' ? "bg-secondary shadow-secondary/20" : res === 'D' ? "bg-error shadow-error/20" : "bg-outline"
              )}>
                {res}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-[0px_20px_40px_rgba(0,30,64,0.06)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black font-headline text-primary">Goleadores</h3>
              <button className="text-sm font-bold text-secondary flex items-center gap-1 hover:underline">
                Ver Plantilla Completa <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
            <div className="space-y-6">
              {TOP_SCORERS.map((player) => (
                <div key={player.name} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 border-2 border-transparent group-hover:border-secondary shadow-md transition-all">
                    <img className="w-full h-full object-cover" src={player.image} alt={player.name} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                      <h4 className="font-bold text-lg text-primary">{player.name}</h4>
                      <span className="font-black text-2xl text-primary">{player.goals}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-secondary transition-all group-hover:brightness-110" style={{ width: player.width }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container rounded-[2.5rem] overflow-hidden relative shadow-[0px_30px_60px_rgba(0,30,64,0.15)]">
            <div className="p-8 pb-4">
              <h3 className="text-2xl font-black font-headline text-on-primary">Mapa de Calor de Ataque</h3>
              <p className="text-on-primary-container font-label text-sm uppercase tracking-wide">Participación en Campo Rival</p>
            </div>
            <div className="relative aspect-[16/9] mx-8 mb-8 rounded-xl bg-tertiary overflow-hidden border border-white/10">
              <div className="absolute inset-0 border-2 border-white/20 m-4"></div>
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"></div>
              <div className="absolute inset-y-1/4 left-0 w-24 border-2 border-white/20"></div>
              <div className="absolute inset-y-1/4 right-0 w-24 border-2 border-white/20"></div>
              <div className="absolute top-1/4 right-8 w-32 h-32 bg-secondary/60 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-1/3 right-20 w-40 h-40 bg-secondary/80 rounded-full blur-[48px] opacity-70"></div>
              <div className="absolute top-1/2 right-12 w-24 h-24 bg-secondary/40 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container rounded-[2.5rem] p-8">
            <h3 className="text-xl font-black font-headline text-primary mb-6">Posesión</h3>
            <div className="flex flex-col items-center justify-center p-6 space-y-4">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={POSSESSION_DATA}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#1b6d24" />
                      <Cell fill="#e2e8f0" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black font-headline text-primary">62%</span>
                  <span className="text-xs font-bold text-outline uppercase tracking-tight">Promedio</span>
                </div>
              </div>
              <div className="grid grid-cols-2 w-full gap-4 pt-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase mb-1">Precisión Pases</p>
                  <p className="text-xl font-bold text-primary">88%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase mb-1">Pases Clave</p>
                  <p className="text-xl font-bold text-primary">12.4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-[0px_20px_40px_rgba(0,30,64,0.06)]">
            <h3 className="text-xl font-black font-headline text-primary mb-6">Líderes en Asistencias</h3>
            <div className="space-y-4">
              {[
                { name: 'S. Adebayo', val: 12, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC39cwZiCw3_WOBXL2Re9Ai3H-KAeTrw20iqRTbr4lfpLDzatswAagFp7Ov_4Di487TYA7Pd0MzJ6xUnIgUt4mkotZQUuRRrl-Gc1g-7RVzbT5rjwQy7WL7bbG1Xc7yN7if7zHXI5JOPXMM1uEZKOPmqic83AC6YqC3TCSaXYM3qKu1Hle1vKlpaH-YNVQUhQVsX1oaJbwDpJ8GEpWokTmWyh9kZ_pc3-gxbJnNd7cMKaKre2VpEdP_hdvZnhmQXSCoNnWjPcyY6FQ' },
                { name: 'S. Chen', val: 9, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrgtELNSgcdw8kHPOGllvhv4N8HbDBVxwdTGNchgbW_XZC3l8l_SaV_9XkFl1ElqhrLijBw_-Lffjc05UYDnpmbiqLqoXDEnaC-Jtxm91wywTV-nG1CUVKza4aKEmiEh8uhEYUeT2oRHHLt8PIjXJRGIUUEqlgoCuMhu28gDkePfkaMj7n_df8jbl_4QPh5UsFzkiVJDlbll8nMRxswJzarAHgj-t8uZw8mCRVtJqQmRNeiu9NsyOukn9Mu_V5Jq9Clg3eXWvHasM' },
                { name: 'L. Silva', val: 8, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUWYZFked7SK6tTpXezvRZpWxqdNnBWXsRluMBz_DBhYBOSPX3uwFVug8Rurph-ng6VqqIb31IZc019Ai1H5sQEDYZ6C2_BsmmehkO_DZ2BbOk0Y6NLTKcyXb5jyBTvjMImsX5-uCn3v-qCctUxlHGBP1xSmcGcXhaLrPSSfYFNO2QWVJWb3Y7sorx6SZug-pWgVohwgu3k3RWaNe_0DEkN36bB4KCRIeTqf5fr9YMk5Yv_4NqsjemM3Uk1RXoFEgGvphKO4Kh0SI' }
              ].map(p => (
                <div key={p.name} className="flex items-center justify-between p-4 bg-surface rounded-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden">
                      <img className="w-full h-full object-cover" src={p.img} alt={p.name} />
                    </div>
                    <span className="font-bold text-primary">{p.name}</span>
                  </div>
                  <span className="font-black text-secondary">{p.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
