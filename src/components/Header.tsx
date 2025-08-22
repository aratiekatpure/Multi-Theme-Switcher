import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { ChevronDown, Palette } from "lucide-react";

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const themes = [
    { id: "theme1", name: "Minimalist Light", description: "Clean & Simple" },
    { id: "theme2", name: "Professional Dark", description: "Elegant & Bold" },
    { id: "theme3", name: "Vibrant Colors", description: "Fun & Playful" },
  ];

  const currentThemeInfo =
    themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <Palette className="logo-icon" />
            <span className="logo-text">ThemeForge</span>
          </Link>
        </div>

        <nav className="nav-section">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div
            className={`nav-links ${isMobileMenuOpen ? "nav-links-open" : ""}`}
          >
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "nav-active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "nav-active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "nav-active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="theme-switcher">
          <div className="dropdown">
            <button className="dropdown-button">
              <span className="dropdown-text">
                <span className="theme-name">{currentThemeInfo.name}</span>
                <span className="theme-desc">
                  {currentThemeInfo.description}
                </span>
              </span>
              <ChevronDown className="dropdown-icon" />
            </button>

            <div className="dropdown-menu">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id as never)}
                  className={`dropdown-item ${
                    currentTheme === theme.id ? "dropdown-active" : ""
                  }`}
                >
                  <div>
                    <div className="theme-option-name">{theme.name}</div>
                    <div className="theme-option-desc">{theme.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
