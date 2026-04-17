export interface Service {
  n: string;
  p: number;
}

export interface Package {
  code: string;
  name: string;
  tier: string;
  services: Service[];
  price: number;
}

export interface Group {
  id: number;
  category: string;
  packages: Package[];
}