export interface Founder {
  id: string;
  name: string;
  title: string;
  initials: string;
  img: string;
  description: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}

export interface SocialLink {
  href: string;
  label: string;
  type: 'whatsapp' | 'instagram' | 'facebook';
}