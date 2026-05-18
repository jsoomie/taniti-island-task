import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageLoader.css";

function PageLoader({ children }) {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setLoaded(false);
    let cancelled = false;
    let spinnerTimer = null;

    const waitForImages = () => {
      const images = document.querySelectorAll("img");
      const total = images.length;
      let loadedCount = 0;

      spinnerTimer = setTimeout(() => {
        if (!cancelled) setShowSpinner(true);
      }, 200);

      const handleLoad = () => {
        loadedCount++;
        if (loadedCount >= total) {
          clearTimeout(spinnerTimer);

          if (!cancelled) {
            setShowSpinner(false);
            setLoaded(true);
          }
        }
      };

      if (total === 0) {
        clearTimeout(spinnerTimer);
        setLoaded(true);
        return;
      }

      images.forEach((img) => {
        if (img.complete) {
          handleLoad();
        } else {
          img.addEventListener("load", handleLoad);
          img.addEventListener("error", handleLoad);
        }
      });
    };

    const timer = setTimeout(waitForImages, 50);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(spinnerTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {showSpinner && (
        <div className="loading-screen">
          <div className="spinner" />
        </div>
      )}

      <div className={`page-content ${loaded ? "visible" : "hidden"}`}>
        {children}
      </div>
    </>
  );
}

export default PageLoader;
