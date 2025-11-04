import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title = "Aadhunik Lakava Polio Hospital Basahi Kochas | Dr. Bishesh Kumar | Best Polio Treatment",
  description = "Aadhunik Lakava Polio Hospital Basahi Kochas - Expert polio treatment, physiotherapy, and rehabilitation by Dr. Bishesh Kumar in Gita Nagar Basahi, Buxar, Bihar.",
  keywords = "Aadhunik Lakava Polio Hospital Basahi Kochas, Dr. Bishesh Kumar, polio treatment hospital Buxar, polio hospital Basahi Kochas, physiotherapy in Buxar",
  canonical = "https://adhunik-lakva-polio-hospital-gitana.vercel.app/",
  ogImage = "https://adhunik-lakva-polio-hospital-gitana.vercel.app/DR_logo.jpg",
  ogType = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
