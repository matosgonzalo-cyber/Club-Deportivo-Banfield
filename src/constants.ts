import { Player, Staff, NewsItem, Fixture, Member, Transaction } from './types';

export const PLAYERS: Player[] = [
  {
    id: '1',
    number: '10',
    name: 'Jesús Dátolo',
    position: 'Mediocampista',
    status: 'Fit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYKnPjDK0ruzaZv17zfzBl37m0SsWEnFW65XZGkq0xhOiFTPm3TOjlAoWmVKINmOM2A8e-MfjejAcRD4kvHl0Xr2ZzOKzLu960Hqj8B9UOgRO5dLL94DqaJbNe79AzCrWu5AxxnR53HkM1UYuWhYk4WwR74jn0pG3Br70XVFxMuJXnRtKt5vbd3zandFSn5378y3EpReUHFzN4ZyZVjwsMRQ-YdOUV0bxPZTfLUppBIVmIh0iS5G4dAdvXjL1EJMfIe8zBX6FRmK4'
  },
  {
    id: '2',
    number: '09',
    name: 'Juan Bisanz',
    position: 'Delantero',
    status: 'Fit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8yrGE5D-PrkDFcxzLSyNfkSKF14ZUEOGDEBZ2OOtq7MiMnGZqamMNQfwImDrWDrqr58pWqN3QocuzitMKxuy9enFaD_nHRMO4wmUNl1cD7f3gMEJl7_9d4k-Udc4fT1e_3ZeyZxHpPgYTOAhqgVl7i_q3BIkbq8GyugbofxBvblhIX0PjUDbt_kEKBVmV3fI5G3UjGfl2Jce7tQdl7-nIFEHJa6leuSOUmT-BhUywRk6cX_kFjIcHS8Fc4JsKT6kf_G66aP5u1mA'
  },
  {
    id: '3',
    number: '21',
    name: 'Emanuel Coronel',
    position: 'Defensor',
    status: 'Injured',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClnqtoc9w9YU39H9IT95OypbjFl1xNO7tqP1oXHhFyOLAkpoEdZD1vlVJw5swEDj7e52Jv2lANUxA4QGqUzIyLirYsOQd1mlBqYdZr5rQLT1-RPT_KochwUjlLzWVXcWmfUi8qr1vhH0R5UWoeGhMyDwkUJJkC1gAeyPXW00xFd4oKGtdmYmfjcyCz3cbh8idaj2TGcApB7aWmyUtol8N_HguZ1D_RLecbHwCHU-9yd7wMdjcwryg4XN_TqOD0ZHIrNHmWDQGawGI'
  }
];

export const STAFF: Staff[] = [
  {
    id: 's1',
    name: 'Gustavo Munúa',
    role: 'Director Técnico',
    experience: '12 años de exp.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCre3zIIKEUbBA1P_tTmXaGFl11WxcZ0460Evd_j25Vn9RNNN7CTYYVQXtrSGthyxXuWuTJfFE7ztGWBnOy9PfsaF68H2vcERk_FsB695p0xF6CTlMXc79_DXpNrmR0ppqLSOY_v5oJwmGBITw5XxjI-UP5LqcT83BSAh5p1HLU3hDnUQlcrWuz9h-HEFINKBHPhfsP2nc0FIZ2-2IK9FDD3iWHRV1yvDNuBffsuYumTpXqnf_81SqO6rQ0MTLXOkT5-qqW_5QJ-vs',
    verified: true
  },
  {
    id: 's2',
    name: 'N. Russo',
    role: 'Asistente',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUYdndC3CFkwvlaj_74_OuVT8rYwNV9a5OCoslq5VJm-1JWMOL87Jjx5OHcL-OM7EHU9Y0YSYU5AQlwf4TUNcQCOI3PSLTrqrqFFyOv7GnQXrneG34_Aq9fjR48-ZSEmc7Vbt51Xi3e92xkha61lZCj40TXaiGNwmjit3bFrhn4aEQWv2Rc-jFFeZa2otUoFdVWUjTnV4PHUr0BBviSFk7ENnj0KsYsI3Kbq0BtSQ8swvjooYltXy65WSzVIte8u3JH12DSfeuQAo'
  },
  {
    id: 's3',
    name: 'S. Urtubey',
    role: 'P. Físico',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAUMEoglFj-ixSa-66B6pp8weQuV0IZkl4hni4zX--zugHCU11GbHA_jqfDC1yGupZ0Ti4mY4a5xmA75stJXlmrDSrIMLtXjSMVVBliAz-5WUCFkx_-qrytxo6CFExlsXrBiVLboU53UQwDIYy4EmQmaZBu1L2UqK_id7rr7nqqNytsGmnTuYo18TpBrUQ_EGKSrXWB5OPxZCtAZ3-Hi5rLJvg3nXwbOG8sSFnVxpicIld-rtt77PLi_YiZLQYuHK7Wbf3Tr8IJ5c'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    category: 'Entrenamiento',
    time: 'Hace 2 Horas',
    title: 'Nuevo Protocolo: Enfoque en Transición de Alta Presión',
    description: 'El cuerpo técnico introdujo un nuevo ejercicio táctico hoy destinado a mejorar la recuperación rápida tras pérdidas...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzsIfXYE1EgxkeRdDwS4aAiMWQJKm-pt9Jf45WOff9g0GVUiO4nonvgWrI4KQgPIH534MTpSFW83A8lebldlCsAU2F-34jwkKDyTd6bdCB6yz27Tgg_ioxcYPVXNPR2NEc5m8uxNg-evj4TpJ4o3-Ju8Sa18QfkAQc3U161sFGNQbiTkksiH9J5Gy_GpkZzCLmd0ttPEnGTT_RIuPj65ZzNJzRd_59BtlT01bgyHM_0jhEHGex8qHMqjDshaeI7O81OnjWKkpsWEs'
  },
  {
    id: 'n2',
    category: 'Club',
    time: 'Hace 5 Horas',
    title: 'Aprobados los Planes de Expansión del Grand Arena',
    description: 'El consejo local ha firmado oficialmente la fase de desarrollo de la nueva Tribuna Norte, aumentando la capacidad en 5.000.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGXmgQ9_hIfi-n6OlvcheH2Lxi2Qx5A1qdV2Mxzw69jTGxHkj6G_89Xxvbcemx7OXF81qmiFCe1OmHSX1ArV9XY4oRWLPgmWwtFMiOAetkLD0T-fmTnZN6GqD3y2y8SWPIQSTt0QztCVfulyTgfvv7LYP6nwLEM8rj6brgUmbvhHbFBXOArTDNhW-z6-jHzyIbuvVgUOcq6cuPCHSOwQmXgbt_jYfzXdEoQiJIyjDMD8vk0PotmTxQAYCBcFPW4G-n82uEYW5Mvtw'
  }
];

export const FIXTURES: Fixture[] = [
  {
    id: 'f1',
    opponent: 'Manchester Lions',
    date: '03 Nov',
    time: '15:00',
    venue: 'Etihad Stadium',
    isHome: false,
    competition: 'Premier League',
    opponentLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzdEOf2satIyRZHIpM10jf9iEjJZu2SaZkw45vs49ZVJluta368x8nq4HmxryWl0CPdLojPbMFqrdyBmo-_gWE-8Rh-WT6W91Gu4O3v93stPK5VOH0uBXeILP6xtBMEtSVduECnHcH8WR-GRyJ-iPoM1WhxXAp7z46eV4EpmNE7xvY6Kn5crQQHhuCDdXvIaqloWGh2Woiro_Sr3iVUBp1c3iHfIa4nY6Nm4VeRw8zEBPOuOg_eIYQuxBZ46hrhNnqyFqRQ11_R-o'
  },
  {
    id: 'f2',
    opponent: 'North London FC',
    date: '12 Nov',
    time: '20:45',
    venue: 'Grand Arena',
    isHome: true,
    competition: 'Premier League',
    opponentLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-uxQGzYKDs1ZuFaDbAp4jAdd8uvBd3FmGh5Gneb-1rdUBm7tPSABQPg-SiKL_bSDXkxDYoN534wJtIEHhTajXLZqfvmjr7Kt6ufZaOLUNf1hCVuZ7HQbEoHiDMzK_AKAW0zL6r-Fsxs_no0dQ6Z98WiCj5PkRWRlT2Ad8v94HTgEh9PIW5uTru7fcf_ttZe1cI2Hqzteqhxi-5Fy05TvcDbNJIfaSBm7cUCRk3dc9-dQgbltgdEUaFJcOKpO7zchPnvUO172iT24'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Mariano Acosta',
    email: 'm.acosta@email.com',
    memberNumber: '#45.892',
    category: 'Activo',
    status: 'Paid',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX-arZnu7ccrh-cpqHatTbYQLfKkJzSlpr5HATXeGBN8ZtVY-I6RvdFjXj24U4Ce21-4xHDzOujZXlRwXX-oVwpu84mtRCTeekH0LIAU9x_bJmkQgbEjlV-U06riorkv1lGSgPmKEg6EdV_-aXtjNZvn2NGDw0Dl78EodYFXA8Baxd3FS6kKf2mJ3_rJ8EEaasn48Dw-ghMZd5m24LhE76fi3AUl2iVHc2RtYnDqzl3i05SG58Uxy-YkWgj92ToSgzVsA63Sk6lVA'
  },
  {
    id: 'm2',
    name: 'Luciana Fernández',
    email: 'l.fer@email.com',
    memberNumber: '#48.120',
    category: 'Cadete',
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE6mXAm4V5fMQZ_LqxJdPmsCI58cnvwMtglvxpx-a48QJzeMWcOx2jdVXXxb0vBfvUEQqspCWvbYEMiQIAl1dTzpSPpb668XnNHmM2taxHMd3h61FUwBFNLpbiFP6R-MARRm8gwl_XGmlTvinb2MtvtKBpJsdddxekdSfrRE21Es0e2weYk_1JrunWavUSq9DVdnrtZnVFMp5G1VZUnpuUASoPcy83HJ2GpYW-C1xTk1dFTbtmRYgiLrjVE59-yuxiOXXcFxEyT4g'
  },
  {
    id: 'm3',
    name: 'Roberto Gómez',
    email: 'r.gomez@email.com',
    memberNumber: '#32.045',
    category: 'Vitalicio',
    status: 'Overdue',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD4XKuVgDpJkAY5iweTaW8CWEhx7o7EeuAJA_OmZKaUW1L_Rpi6E-MQc1_Pf4Y0ZPh9L2XqnBkjbmNUqjyGK3snCU1tj4DbqHNPFQdzq9wcA5Ay3EvlJpaPa24TJeEHGO_oz5NHzxlaF-eqZyt8YDSLeba5dprCYyjecaZlnmROVRy4gi-u6iJ4wEIrp_NuOtqegph-st5tmTq14jYzNsspg1qdQhheywnq5ARjxI5UdZsu3_1rx5dJQsO7M0U1P9MXS5dFVSWU5s'
  }
];

export const TRANSACTIONS: Transaction[] = [
  {
    id: 't1',
    concept: 'Renovación Cuota Anual',
    category: 'Socio Pleno',
    amount: 24000,
    date: '12 Mayo, 14:20',
    status: 'Confirmed'
  },
  {
    id: 't2',
    concept: 'Venta de Indumentaria',
    category: 'Tienda Oficial',
    amount: 15500,
    date: '12 Mayo, 12:45',
    status: 'Confirmed'
  },
  {
    id: 't3',
    concept: 'Inscripción Torneo Senior',
    category: 'Deportes',
    amount: 8000,
    date: '12 Mayo, 09:15',
    status: 'Confirmed'
  }
];
