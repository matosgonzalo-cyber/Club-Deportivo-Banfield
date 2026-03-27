export interface Player {
  id: string;
  number: string;
  name: string;
  position: string;
  status: 'Fit' | 'Injured';
  image: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  experience?: string;
  image: string;
  verified?: boolean;
}

export interface NewsItem {
  id: string;
  category: string;
  time: string;
  title: string;
  description: string;
  image: string;
}

export interface Fixture {
  id: string;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  opponentLogo: string;
  competition: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  memberNumber: string;
  category: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  image: string;
}

export interface Transaction {
  id: string;
  concept: string;
  category: string;
  amount: number;
  date: string;
  status: 'Confirmed' | 'Pending';
}
