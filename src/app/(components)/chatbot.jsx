"use client"


import React from 'react'


const Chatbot = () => {
  React.useEffect(()=>{
    const div = document.createElement("div");
    div.id = "chatbot-container";
    document.body.appendChild(div);
    const baseUrl = "https://support-chatbot-kurger.vercel.app";
    async function fetchAndLoadAssets() {
      try {
        const response = await fetch(baseUrl + "/asset-manifest.json");
        const manifest = await response.json();
         
        if (manifest.files && manifest.files["main.js"] && manifest.files["main.css"]) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = baseUrl + manifest.files["main.css"]
          document.head.appendChild(link)
          const script = document.createElement("script");
          script.src = baseUrl + manifest.files["main.js"]
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error("Error fetching and loading assets:", error);
      }
    }
    fetchAndLoadAssets();
  }, [])
}

export default Chatbot
