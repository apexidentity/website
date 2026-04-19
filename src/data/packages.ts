import { Group } from '../types/packages';

export const DATA: Group[] = [
  {
    id: 1,
    category: 'CV & Profile',
    packages: [
      {
        code: 'A1', name: 'Launch', tier: 'A',
        services: [
          { n: 'CV ATS Optimization',  p: 150 },
          { n: 'LinkedIn Profile Setup', p: 750 },
        ],
        price: 750,   // orig 900  → −17%
      },
      {
        code: 'B1', name: 'Establish', tier: 'B',
        services: [
          { n: 'CV ATS Optimization',  p: 150 },
          { n: 'CV Europass Format',    p: 250 },
          { n: 'LinkedIn Full Profile', p: 750 },
          { n: 'Wuzzuf Profile',        p: 400 },
        ],
        price: 1250,  // orig 1,550 → −19%
      },
      {
        code: 'C1', name: 'Command', tier: 'C',
        services: [
          { n: 'CV ATS + Europass',          p: 400 },
          { n: 'LinkedIn + Wuzzuf Profiles', p: 1150 },
          { n: 'Bio & Keyword Bank',          p: 250 },
          { n: 'Profile Analysis Report',     p: 400 },
        ],
        price: 1800,  // orig 2,200 → −18%
      },
    ],
  },
  {
    id: 2,
    category: 'Career Strategy',
    packages: [
      {
        code: 'A2', name: 'Navigate', tier: 'A',
        services: [
          { n: 'CV ATS Optimization',  p: 150 },
          { n: 'LinkedIn Profile Setup', p: 750 },
          { n: 'Career Roadmap',         p: 750 },
          { n: 'Target Roles Strategy',  p: 750 },
        ],
        price: 1950,  // orig 2,400 → −19%
      },
      {
        code: 'B2', name: 'Advance', tier: 'B',
        services: [
          { n: 'CV ATS + Europass',          p: 400 },
          { n: 'LinkedIn + Wuzzuf Profiles', p: 1150 },
          { n: 'Career Roadmap',              p: 750 },
          { n: 'Target Roles Strategy',       p: 750 },
          { n: 'Skills Gap Analysis',         p: 500 },
        ],
        price: 2850,  // orig 3,550 → −20%
      },
      {
        code: 'C2', name: 'Lead', tier: 'C',
        services: [
          { n: 'CV ATS + Europass',          p: 400 },
          { n: 'LinkedIn + Wuzzuf + Bio',    p: 1400 },
          { n: 'Profile Analysis Report',    p: 400 },
          { n: 'Career Roadmap',             p: 750 },
          { n: 'Target Roles + Skills Gap',  p: 1250 },
          { n: 'Differentiation Strategy',   p: 750 },
        ],
        price: 3950,  // orig 4,950 → −20%
      },
    ],
  },
  {
    id: 3,
    category: 'Job Search',
    packages: [
      {
        code: 'A3', name: 'Apply', tier: 'A',
        services: [
          { n: 'CV ATS Optimization',       p: 150 },
          { n: 'LinkedIn Profile Setup',    p: 750 },
          { n: 'Job Application System',    p: 750 },
          { n: 'LinkedIn Outreach Templates', p: 750 },
        ],
        price: 1950,  // orig 2,400 → −19%
      },
      {
        code: 'B3', name: 'Hunt', tier: 'B',
        services: [
          { n: 'CV ATS + Europass',           p: 400 },
          { n: 'LinkedIn + Wuzzuf Profiles',  p: 1150 },
          { n: 'Job Application System',      p: 750 },
          { n: 'LinkedIn Outreach Templates', p: 750 },
          { n: 'Messaging Strategy',          p: 750 },
        ],
        price: 3050,  // orig 3,800 → −20%
      },
      {
        code: 'C3', name: 'Break In', tier: 'C',
        services: [
          { n: 'CV ATS + Europass',           p: 400 },
          { n: 'LinkedIn + Wuzzuf + Bio',     p: 1400 },
          { n: 'Job Application System',      p: 750 },
          { n: 'Outreach + Messaging Strategy', p: 1500 },
          { n: 'Hidden Opportunities',        p: 750 },
          { n: 'HR Contact Database',         p: 2000 },
        ],
        price: 5450,  // orig 6,800 → −20%
      },
    ],
  },
  {
    id: 4,
    category: 'Personal Branding',
    packages: [
      {
        code: 'A4', name: 'Spark', tier: 'A',
        services: [
          { n: 'CV ATS Optimization',  p: 150 },
          { n: 'LinkedIn Full Profile', p: 750 },
          { n: '5 LinkedIn Posts',      p: 750 },
          { n: 'Advanced Storytelling', p: 1000 },
        ],
        price: 2150,  // orig 2,650 → −19%
      },
      {
        code: 'B4', name: 'Rise', tier: 'B',
        services: [
          { n: 'CV ATS + Europass',          p: 400 },
          { n: 'LinkedIn + Wuzzuf Profiles', p: 1150 },
          { n: '15 LinkedIn Posts',          p: 2000 },
          { n: 'Advanced Storytelling',      p: 1000 },
          { n: 'Portfolio Presentation',     p: 2500 },
        ],
        price: 5650,  // orig 7,050 → −20%
      },
      {
        code: 'C4', name: 'Own', tier: 'C',
        services: [
          { n: 'CV ATS + Europass',          p: 400 },
          { n: 'LinkedIn + Wuzzuf + Bio',    p: 1400 },
          { n: 'Profile Analysis Report',    p: 400 },
          { n: '15 LinkedIn Posts',          p: 2000 },
          { n: 'Advanced Storytelling',      p: 1000 },
          { n: 'Portfolio Presentation',     p: 2500 },
          { n: 'Personal Website',           p: 5000 },
        ],
        price: 10150, // orig 12,700 → −20%
      },
    ],
  },
];

export const ADDONS: string[] = [
  'Interview Preparation',
  '15 LinkedIn Posts / Month',
  'LinkedIn Management',
];

export const fmt = (n: number) => n.toLocaleString() + ' EGP';