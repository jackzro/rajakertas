import React from "react";
import Script from "next/script";

function GoogleAnalytic() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-31XQGP06B2`}
      />

      <Script id="" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-31XQGP06B2', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
    </>
  );
}

export default GoogleAnalytic;
