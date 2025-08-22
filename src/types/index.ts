export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ThemeContextType {
  currentTheme: 'theme1' | 'theme2' | 'theme3';
  setTheme: (theme: 'theme1' | 'theme2' | 'theme3') => void;
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}