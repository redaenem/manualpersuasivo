export const FB_PIXEL_ID = '1273767944919825';

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
      (window as any).fbq('track', 'PageView');
    } catch (err) {
      console.error('FB PageView Error:', err);
    }
  }
};

// https://developers.facebook.com/docs/facebook-pixel/reference
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
      // Ensure options is a plain object and not a class instance or circular structure
      const safeOptions = options && typeof options === 'object' ? { ...options } : {};
      (window as any).fbq('track', name, safeOptions);
    } catch (err) {
      console.error('FB Event Error:', err);
    }
  }
};
