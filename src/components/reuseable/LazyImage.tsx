import { useState, useEffect, ImgHTMLAttributes } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

const LazyImage = ({
  src,
  alt,
  placeholderSrc,
  className = "",
  ...props
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || "");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Create a new image object
    const img = new Image();
    img.src = src;
    
    // When the image is loaded, update the state
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    
    // Handle error case
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      // Keep the placeholder if loading fails
    };
    
    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        imageLoaded ? "opacity-100" : "opacity-50"
      } ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;
