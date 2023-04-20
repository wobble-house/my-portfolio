import Script from "next/script"
import { cookies } from 'next/headers'

export function GAScript(){ 
  const cookiesList = cookies();
  const cookieStatus = cookiesList.get('GA-COOKIES');
  if (!cookieStatus) return (
    <Script 
    id="google-tag-manager" 
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html:
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `
    }}></Script> 
  );
  else if (cookieStatus?.value === 'true') return (
<Script 
id="google-tag-manager" 
strategy="afterInteractive"
dangerouslySetInnerHTML={{
  __html:
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `
}}></Script>
  );
else if (cookieStatus?.value === 'false') return (
  <span></span>
)
}

export function GABody(){
const cookiesList = cookies();
const cookieStatus = cookiesList.get('GA-COOKIES');
if (!cookieStatus) return (
  <Script 
    id="google-tag-manager" 
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html:
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `
    }}></Script> 
) 
else if (cookieStatus?.value === 'true') return (
<noscript>
          <iframe 
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        height="0" 
        width="0" 
        style={{
          display: 'none',
          visibility: 'hidden'}}>
        </iframe>
        </noscript>
  )
  else if (cookieStatus?.value === 'false') return (
    <span></span>
  )
}



