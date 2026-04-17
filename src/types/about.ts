export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export interface AboutData {
  stats: Stat[];
  pillars: string[];
}