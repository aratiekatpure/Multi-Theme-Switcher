import React, { ReactNode } from 'react';
import Header from './Header';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={`app-container theme-${currentTheme}`}>
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;