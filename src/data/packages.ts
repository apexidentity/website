import { Group } from '../types/packages';

export const DATA: Group[] = [
  {
    id: 1,
    category: 'CV & Profile',
    packages: [
      {
        code: 'A1', name: 'Essentials', tier: 'A',
        services: [{ n: 'CV ATS Optimization', p: 150 }, { n: 'LinkedIn Profile Setup', p: 750 }],
        price: 750,
      },
      {
        code: 'B1', name: 'Professional', tier: 'B',
        services: [{ n: 'CV ATS Optimization', p: 150 }, { n: 'CV Europass Format', p: 250 }, { n: 'LinkedIn Profile', p: 750 }, { n: 'Wuzzuf Profile', p: 400 }],
        price: 1300,
      },
      {
        code: 'C1', name: 'Elite', tier: 'C',
        services: [{ n: 'CV ATS + Europass', p: 400 }, { n: 'LinkedIn & Wuzzuf Profiles', p: 1150 }, { n: 'Bio & Keywords', p: 250 }, { n: 'Profile Analysis Report', p: 400 }],
        price: 1900,
      },
    ],
  },
  {
    id: 2,
    category: 'Career Strategy',
    packages: [
      {
        code: 'A2', name: 'Direction', tier: 'A',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }],
        price: 1200,
      },
      {
        code: 'B2', name: 'Accelerate', tier: 'B',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }, { n: 'Skills Gap Analysis', p: 500 }, { n: 'Differentiation Strategy', p: 750 }],
        price: 2300,
      },
      {
        code: 'C2', name: 'Dominate', tier: 'C',
        services: [{ n: 'Career Roadmap', p: 750 }, { n: 'Target Roles Strategy', p: 750 }, { n: 'Skills Gap Analysis', p: 500 }, { n: 'Differentiation Strategy', p: 750 }, { n: 'Market Positioning', p: 750 }, { n: 'Weakness & Recovery Plan', p: 500 }],
        price: 3500,
      },
    ],
  },
  {
    id: 3,
    category: 'Job Search',
    packages: [
      {
        code: 'A3', name: 'Outreach', tier: 'A',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }],
        price: 1200,
      },
      {
        code: 'B3', name: 'Visibility', tier: 'B',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }, { n: 'Messaging Strategy', p: 750 }, { n: 'Hidden Opportunities', p: 750 }],
        price: 2500,
      },
      {
        code: 'C3', name: 'Insider', tier: 'C',
        services: [{ n: 'Job Application System', p: 750 }, { n: 'LinkedIn Outreach Templates', p: 750 }, { n: 'Messaging Strategy', p: 750 }, { n: 'Hidden Opportunities', p: 750 }, { n: 'HR Contact Database', p: 2000 }],
        price: 4300,
      },
    ],
  },
  {
    id: 4,
    category: 'Personal Branding',
    packages: [
      {
        code: 'A4', name: 'Presence', tier: 'A',
        services: [{ n: '5 LinkedIn Posts', p: 750 }, { n: 'Advanced Storytelling', p: 1000 }],
        price: 1400,
      },
      {
        code: 'B4', name: 'Authority', tier: 'B',
        services: [{ n: '15 LinkedIn Posts', p: 2000 }, { n: 'Advanced Storytelling', p: 1000 }, { n: 'Portfolio Presentation', p: 2500 }],
        price: 4600,
      },
      {
        code: 'C4', name: 'Legacy', tier: 'C',
        services: [{ n: '15 LinkedIn Posts', p: 2000 }, { n: 'Advanced Storytelling', p: 1000 }, { n: 'Portfolio Presentation', p: 2500 }, { n: 'Personal Website', p: 5000 }],
        price: 7300,
      },
    ],
  },
];

export const ADDONS: string[] = [
  'Interview Preparation',
  'Salary Negotiation',
  '15 LinkedIn Posts / Month',
  'LinkedIn Management',
];

export const fmt = (n: number) => n.toLocaleString() + ' EGP';