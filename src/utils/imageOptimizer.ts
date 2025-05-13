/**
 * Utility functions for image optimization
 */

/**
 * Checks if a URL is an external URL (not from our domain)
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false;
  return url.startsWith('http') || url.startsWith('https');
};

/**
 * Adds query parameters to optimize image loading from the server
 * This assumes the server supports these parameters for image optimization
 */
export const optimizeImageUrl = (url: string, width?: number): string => {
  if (!url) return '';
  
  // Don't modify data URLs or relative URLs
  if (url.startsWith('data:') || !isExternalUrl(url)) {
    return url;
  }
  
  try {
    const urlObj = new URL(url);
    
    // Add quality parameter if not already present
    if (!urlObj.searchParams.has('q')) {
      urlObj.searchParams.append('q', '80'); // 80% quality is a good balance
    }
    
    // Add width parameter if provided and not already present
    if (width && !urlObj.searchParams.has('w')) {
      urlObj.searchParams.append('w', width.toString());
    }
    
    // Add format parameter for WebP if supported and not already specified
    if (!urlObj.searchParams.has('fmt')) {
      urlObj.searchParams.append('fmt', 'webp');
    }
    
    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return the original URL
    console.warn('Failed to optimize image URL:', url);
    return url;
  }
};

/**
 * Generates a low-quality placeholder URL for an image
 */
export const getPlaceholderUrl = (url: string): string => {
  if (!url || !isExternalUrl(url)) return url;
  
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('q', '10'); // Very low quality
    urlObj.searchParams.set('w', '20'); // Tiny width
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

/**
 * Calculates the appropriate image width based on the viewport size
 */
export const getResponsiveWidth = (): number => {
  if (typeof window === 'undefined') return 1200; // Default for SSR
  
  const width = window.innerWidth;
  
  if (width <= 640) return 640; // Mobile
  if (width <= 768) return 768; // Small tablet
  if (width <= 1024) return 1024; // Large tablet
  if (width <= 1280) return 1280; // Small desktop
  return 1920; // Large desktop
};
