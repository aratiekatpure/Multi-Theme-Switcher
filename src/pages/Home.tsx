import React from "react";
import { useApi } from "../hooks/useApi";
import { Product } from "../types";
// import Link from "next/link";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const Home: React.FC = () => {
  const {
    data: products,
    loading,
    error,
  } = useApi<Product[]>("https://fakestoreapi.com/products?limit=8");

  const stats = [
    { icon: TrendingUp, label: "Sales Growth", value: "150%", color: "blue" },
    { icon: Users, label: "Happy Customers", value: "10K+", color: "green" },
    { icon: Award, label: "Awards Won", value: "25", color: "purple" },
    { icon: Zap, label: "Products Sold", value: "50K+", color: "orange" },
  ];

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="error-message">Error loading products: {error}</div>;

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Experience the Power of
            <span className="hero-highlight"> Dynamic Themes</span>
          </h1>
          <p className="hero-description">
            Discover how different visual themes can completely transform the
            user experience. Switch between our three unique designs and see the
            magic unfold.
          </p>
          <div className="hero-actions">
            <button
              className="hero-button-primary"
              onClick={() =>
                document
                  .querySelector(".products-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Products
            </button>
            <Link to="/about" className="hero-button-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-visual"></div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <stat.icon className="stat-icon" />
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">
            Discover our curated selection of premium products, sourced from the
            best vendors worldwide.
          </p>
        </div>

        <div className="products-grid">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
