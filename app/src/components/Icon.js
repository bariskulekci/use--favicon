import React, { useState,useEffect } from "react"

function useFavicon(faviconUrl) {
    useEffect(() => {
      if (!faviconUrl) return;
  
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = faviconUrl;
  
      document.head.appendChild(link);
  
      return () => {
        link.href = "";
      };
    }, [faviconUrl]);
  }
  
  const faviconMap = {
    shecodes:
      "https://www.shecodes.io/assets/favicons/favicon-32x32-ef9cc1de3ba7ad6d82e9ad4858c30f59678a695c9c78b52b826bd74f7fc3a02c.png",
    reAct:
      "https://www.reactgroup.org/wp-content/uploads/2020/05/cropped-Favicon-32x32.png",
    react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png"
  };
  
  function Icon() {
    const [id, setId] = useState("ui");
  
    useFavicon(faviconMap[id]);
  
    return (
      <section>
        <h1>useFavicon</h1>
        <button
          title="Favicon'u SheCodes logosuna ayarla"
          className={`link ${id === "shecodes" && "active"}`}
          onClick={() => setId("shecodes")}
        >
          SheCodes
        </button>
        <button
          title="Favicon'u ReAct logosuna ayarla"
          className={`link ${id === "reAct" && "active"}`}
          onClick={() => setId("reAct")}
        >
          ReAct
        </button>
        <button
          title="Favicon'u React Newsletter logosuna ayarla"
          className={`link ${id === "react_newsletter" && "active"}`}
          onClick={() => setId("react_newsletter")}
        >
          React Newsletter
        </button>
      </section>
    );
  }

  export default Icon;