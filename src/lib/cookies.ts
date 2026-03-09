// Utility functions for managing cookie consent

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = "cookie-consent";
const COOKIE_PREFERENCES_KEY = "cookie-preferences";

/**
 * Check if user has given cookie consent
 */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
}

/**
 * Get saved cookie preferences
 */
export function getPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

/**
 * Check if a specific cookie type is allowed
 */
export function isCookieAllowed(type: keyof CookiePreferences): boolean {
  if (type === "necessary") return true; // Always allowed
  const prefs = getPreferences();
  return prefs ? prefs[type] : false;
}

/**
 * Initialize analytics if consent given
 */
export function initializeAnalytics() {
  if (!isCookieAllowed("analytics")) return;

  // Example: Google Analytics initialization
  // window.gtag('config', 'GA_MEASUREMENT_ID');
  console.log("Analytics initialized with user consent");
}

/**
 * Initialize marketing scripts if consent given
 */
export function initializeMarketing() {
  if (!isCookieAllowed("marketing")) return;

  // Example: Marketing pixels initialization
  console.log("Marketing scripts initialized with user consent");
}

/**
 * Revoke consent and clear non-necessary cookies
 */
export function revokeConsent() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);

  // Clear analytics cookies
  document.cookie.split(";").forEach((c) => {
    const cookieName = c.trim().split("=")[0];
    if (cookieName.startsWith("_ga") || cookieName.startsWith("_gid")) {
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}

/**
 * GDPR-compliant cookie setter
 * Only sets cookie if appropriate consent is given
 */
export function setCookie(
  name: string,
  value: string,
  days: number,
  type: keyof CookiePreferences = "necessary",
) {
  if (typeof window === "undefined") return;

  if (type !== "necessary" && !isCookieAllowed(type)) {
    console.warn(`Cookie ${name} not set: ${type} cookies not allowed`);
    return;
  }

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Get cookie value
 */
export function getCookie(name: string): string | null {
  if (typeof window === "undefined") return null;

  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * Delete a cookie
 */
export function deleteCookie(name: string) {
  if (typeof window === "undefined") return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}
