"use client";

import { useState, useEffect } from "react";
import { HiXMark, HiCog, HiCheckCircle } from "react-icons/hi2";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_PREFERENCES_KEY = "cookie-preferences";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Initialize analytics/marketing scripts based on consent
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log("Analytics enabled");
    }
    if (prefs.marketing) {
      // Initialize marketing scripts
      console.log("Marketing enabled");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto bg-[#fafaf5] border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(46,46,46,1)]">
          {showSettings ? (
            // Settings Panel
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Cookie Preferences
                  </h2>
                  <p className="text-foreground/70 text-sm md:text-base">
                    Manage your cookie preferences. You can enable or disable
                    different types of cookies below.
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-foreground/10 transition-colors ml-4"
                >
                  <HiXMark className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-white border-2 border-foreground p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Necessary Cookies
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Essential for the website to function properly. These
                        cookies enable core functionality and cannot be
                        disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="bg-primary border-2 border-foreground px-3 py-1 text-sm font-bold">
                        Always Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-white border-2 border-foreground p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Analytics Cookies
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Help us understand how visitors interact with our
                        website by collecting and reporting information
                        anonymously.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`ml-4 relative w-14 h-8 border-2 border-foreground transition-colors ${
                        preferences.analytics ? "bg-secondary" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 bg-white border-2 border-foreground transition-transform ${
                          preferences.analytics
                            ? "right-1 translate-x-0"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white border-2 border-foreground p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Marketing Cookies
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Used to track visitors across websites to display
                        relevant advertisements and measure campaign
                        effectiveness.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`ml-4 relative w-14 h-8 border-2 border-foreground transition-colors ${
                        preferences.marketing ? "bg-secondary" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 bg-white border-2 border-foreground transition-transform ${
                          preferences.marketing
                            ? "right-1 translate-x-0"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Preference Cookies */}
                <div className="bg-white border-2 border-foreground p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        Preference Cookies
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Enable the website to remember choices you make (such as
                        language or region) to provide enhanced features.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("preferences")}
                      className={`ml-4 relative w-14 h-8 border-2 border-foreground transition-colors ${
                        preferences.preferences ? "bg-secondary" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 bg-white border-2 border-foreground transition-transform ${
                          preferences.preferences
                            ? "right-1 translate-x-0"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveCustomPreferences}
                  className="flex-1 bg-secondary text-white font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <HiCheckCircle className="inline w-5 h-5 mr-2" />
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-primary text-foreground font-bold px-6 py-3 border-2 border-foreground hover:bg-secondary hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Accept All
                </button>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="/privacy-policy"
                  className="text-sm text-foreground/70 hover:text-foreground underline"
                >
                  Privacy Policy
                </a>
                {" · "}
                <a
                  href="/cookie-policy"
                  className="text-sm text-foreground/70 hover:text-foreground underline"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          ) : (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    🍪 We Value Your Privacy
                  </h2>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                    We use cookies and similar technologies to enhance your
                    browsing experience, analyze site traffic, and personalize
                    content. By clicking "Accept All", you consent to our use of
                    cookies in accordance with our{" "}
                    <a
                      href="/privacy-policy"
                      className="font-bold underline hover:text-secondary"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/cookie-policy"
                      className="font-bold underline hover:text-secondary"
                    >
                      Cookie Policy
                    </a>
                    . You can manage your preferences or withdraw consent at any
                    time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-secondary text-white font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Accept All
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 bg-white text-foreground font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground/10 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-primary text-foreground font-bold px-6 py-3 border-2 border-foreground hover:bg-secondary hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:shadow-[6px_6px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <HiCog className="inline w-5 h-5 mr-2" />
                  Customize
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
