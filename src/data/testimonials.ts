import { Testimonial, EmptyMessage } from "../types/testimonials";

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Nour El-Din Hassan', role: 'Software Engineer', company: 'Hired at Cairo Tech', initials: 'NH', reviewUrl: '/soon' },
  { id: 2, name: 'Sara Mahmoud', role: 'Marketing Manager', company: 'Promoted internally', initials: 'SM', reviewUrl: '/soon' },
  { id: 3, name: 'Kareem Farouk', role: 'Product Manager', company: 'Career Pivot Success', initials: 'KF', reviewUrl: '/soon' },
  { id: 4, name: 'Laila Atef', role: 'UX Designer', company: 'Remote at European firm', initials: 'LA', reviewUrl: '/soon' },
  { id: 5, name: 'Omar Saleh', role: 'Financial Analyst', company: 'First role after graduation', initials: 'OS', reviewUrl: '/soon' },
  { id: 6, name: 'Rania Gamal', role: 'HR Director', company: 'Leadership transition', initials: 'RG', reviewUrl: '/soon' },
  { id: 7, name: 'Ahmed Tarek', role: 'Data Scientist', company: 'Joined a London startup', initials: 'AT', reviewUrl: '/soon' },
  { id: 8, name: 'Dina Mostafa', role: 'Operations Lead', company: 'Regional promotion', initials: 'DM', reviewUrl: '/soon' },
  { id: 9, name: 'Youssef Adel', role: 'Civil Engineer', company: 'GCC opportunity secured', initials: 'YA', reviewUrl: '/soon' },
  { id: 10, name: 'Mona Khaled', role: 'Content Strategist', company: 'Freelance to full-time', initials: 'MK', reviewUrl: '/soon' },
  { id: 11, name: 'Bassem Nader', role: 'Sales Director', company: 'Executive level secured', initials: 'BN', reviewUrl: '/soon' },
  { id: 12, name: 'Hana Samir', role: 'Graphic Designer', company: 'Portfolio relaunched', initials: 'HS', reviewUrl: '/soon' },
];

export const EMPTY_MESSAGES: EmptyMessage[] = [
  { line1: 'No one has reviewed this yet.', line2: 'Be the first — your words carry weight.' },
  { line1: "This story hasn't been told yet.", line2: 'Be the first to review and make it real.' },
  { line1: 'No review here yet.', line2: 'The first voice is always the loudest.' },
  { line1: 'Still waiting for the first review.', line2: 'Step up — be the one who starts it.' },
];