import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from 'recharts';
import { TRANSACTIONS } from '../constants';
import { cn } from '../lib/utils';

const CASH_FLOW_DATA = [
  { name: 'Ene', val: 40 },
  { name: 'Feb', val: 65 },
  { name: 'Mar', val: 55 },
  { name: 'Abr', val: 85 },
  { name: 'May', val: 95 },
  { name: 'Jun', val: 70 },
  { name: 'Jul', val: 60 },
  { name: 'Ago', val: 45 },
];

export function Payments() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h2 className="font-headline font-bold text-3xl text-primary tracking-tight">Gestión de Pagos</h2>
        <p className="text-on-surface-variant font-body">Panel administrativo de finanzas y tesorería</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <span className="font-label text-xs uppercase tracking-[0.2em] opacity-80">Saldo Operativo Mensual</span>
            <div className="font-headline font-black text-5xl mt-2">$4.280.500</div>
            <div className="flex items-center gap-2 mt-4 text-secondary-fixed">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span className="font-label text-sm font-bold">+12.4% vs mes anterior</span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[12rem]">payments</span>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between border-l-4 border-secondary">
          <div className="bg-secondary/10 p-3 rounded-xl w-fit">
            <span className="material-symbols-outlined text-secondary">group_add</span>
          </div>
          <div>
            <div className="font-headline font-bold text-2xl text-primary">1.420</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Cuotas Cobradas</div>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col justify-between">
          <div className="bg-error/10 p-3 rounded-xl w-fit">
            <span className="material-symbols-outlined text-error">pending_actions</span>
          </div>
          <div>
            <div className="font-headline font-bold text-2xl text-error">156</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Pagos Pendientes</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-low rounded-[2.5rem] p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline font-bold text-xl text-primary">Flujo de Caja Anual</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white rounded-full text-xs font-bold shadow-sm">Ingresos</button>
              <button className="px-4 py-2 text-xs font-bold text-on-surface-variant">Egresos</button>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CASH_FLOW_DATA}>
                <Bar dataKey="val" radius={[8, 8, 0, 0]}>
                  {CASH_FLOW_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#1b6d24' : '#001e401a'} />
                  ))}
                </Bar>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#737780' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-[0_20px_40px_rgba(0,30,64,0.04)]">
          <h3 className="font-headline font-bold text-xl text-primary mb-6">Transacciones Pendientes</h3>
          <div className="space-y-6">
            {[
              { name: 'Julián Álvarez', label: 'Socio #14.290', amount: 3500, due: 'Hoy', icon: 'person' },
              { name: 'Matías Zaracho', label: 'Escuelita', amount: 4200, due: 'Ayer', icon: 'sports_soccer' },
              { name: 'Abono Platea', label: 'Fila 12, Butaca 4', amount: 12000, due: '2 Días', icon: 'stadium' }
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm text-primary">{item.name}</div>
                    <div className="font-label text-[10px] text-on-surface-variant uppercase">{item.label}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-headline font-bold text-sm text-error">${item.amount.toLocaleString()}</div>
                  <div className="font-label text-[8px] text-on-surface-variant uppercase tracking-widest">{item.due}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-outline-variant text-on-surface-variant font-label text-xs font-bold hover:bg-surface-container transition-colors uppercase tracking-widest">
            Ver todos los pendientes
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-headline font-bold text-xl text-primary mb-6">Ingresos Recientes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                <th className="px-6 pb-2">Concepto</th>
                <th className="px-6 pb-2">Categoría</th>
                <th className="px-6 pb-2 text-right">Monto</th>
                <th className="px-6 pb-2 text-right">Fecha</th>
                <th className="px-6 pb-2 text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.map((t) => (
                <tr key={t.id} className="bg-surface-container-low group hover:bg-white transition-colors">
                  <td className="px-6 py-4 rounded-l-2xl font-body font-bold text-primary">{t.concept}</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{t.category}</td>
                  <td className="px-6 py-4 text-right font-headline font-bold text-secondary">${t.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-sm text-on-surface-variant">{t.date}</td>
                  <td className="px-6 py-4 rounded-r-2xl text-center">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      {t.status === 'Confirmed' ? 'Confirmado' : 'Pendiente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
