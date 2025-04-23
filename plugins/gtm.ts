export default async () => {
    // Delay time in milliseconds
    const delayTime = 1000; // 3 seconds delay
  
    // Function to inject GTM script
    const injectGTM = () => {
      // GTM script tag
      const scriptTag = document.createElement('script');
      scriptTag.async = true;
      scriptTag.innerHTML = `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NQN2K7PF');
      `;
      document.head.appendChild(scriptTag);
  
      // GTM noscript tag
      const noscriptTag = document.createElement('noscript');
      noscriptTag.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQN2K7PF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscriptTag);
    };
  
    // Add a delay before injecting the GTM script
    setTimeout(injectGTM, delayTime);
  };
  