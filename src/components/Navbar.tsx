import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Languages, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import AppointmentDialog from "./AppointmentDialog";
import DRLogo from "@/assets/DR_logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/services", label: t("services") },
    { path: "/doctors", label: t("doctors") },
    { path: "/contact", label: t("contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const langs: ("en" | "hi" | "bho")[] = ["en", "hi", "bho"];
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-52 h-full  overflow-hidden bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                src={DRLogo}
                alt="Adhunik Lakava Polio Hospital Logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient leading-tight">
                {language === "en" ? "Aadhunik Lakava" : "आधुनिक लकवा"}
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                {language === "en" ? "Polio Hospital" : "पोलियो अस्पताल"}
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-all duration-200 hover:text-primary hover:text-base relative ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/70"
                } ${language === "hi" ? "font-semibold" : "font-medium"}`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "हिं" : language === "hi" ? "भो" : "EN"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button 
              className="gradient-primary text-white hover:opacity-90 transition-opacity"
              onClick={() => setAppointmentOpen(true)}
            >
              {t("bookAppointment")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:text-base ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "hover:bg-muted"
                  } ${language === "hi" ? "font-semibold" : "font-medium"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full gap-2"
              >
                <Languages className="w-4 h-4" />
                {language === "en" ? "हिं" : language === "hi" ? "भो" : "EN"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full gap-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                )}
              </Button>
              <Button 
                className="gradient-primary text-white w-full"
                onClick={() => {
                  setAppointmentOpen(true);
                  setIsOpen(false);
                }}
              >
                {t("bookAppointment")}
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
    </nav>
  );
};

export default Navbar;
