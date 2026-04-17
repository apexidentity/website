import { Orb, Stat } from '../types/hero';
import { 
  LinkedInIcon, 
  CheckCircleIcon, 
  LightningIcon, 
  PlayIcon, 
  StarIcon, 
  SearchIcon 
} from './icons'; 

export const orbs: Orb[] = [
  {
    id: 1,
    top: '12%', left: '5%',
    delay: '0s', dur: '7s',
    label: 'LinkedIn Optimized',
    sub: 'Profile that converts',
    icon: LinkedInIcon,
  },
  {
    id: 2,
    top: '8%', right: '6%',
    delay: '1.2s', dur: '9s',
    label: 'ATS-Proof CV',
    sub: '98% pass-through rate',
    icon: CheckCircleIcon,
  },
  {
    id: 3,
    top: '44%', left: '3%',
    delay: '0.6s', dur: '8s',
    label: 'Fast Turnaround',
    sub: '48-hour delivery',
    icon: LightningIcon,
  },
  {
    id: 4,
    top: '42%', right: '4%',
    delay: '2s', dur: '10s',
    label: 'Personal Branding',
    sub: 'Own your narrative',
    icon: PlayIcon,
  },
  {
    id: 5,
    bottom: '22%', left: '7%',
    delay: '1.8s', dur: '11s',
    label: '500+ Clients Placed',
    sub: 'Proven track record',
    icon: StarIcon,
  },
  {
    id: 6,
    bottom: '18%', right: '6%',
    delay: '3s', dur: '8.5s',
    label: 'Recruiter Visibility',
    sub: '3× more interviews',
    icon: SearchIcon,
  },
];

export const stats: Stat[] = [
  { value: '50+', label: 'Careers Elevated' },
  { value: '98%',  label: 'ATS Pass Rate' },
  { value: '3×',   label: 'More Interviews' },
  { value: '72h',  label: 'Avg. Delivery' },
];