import Script from 'next/script';
import React from 'react'

const AdSense = () => {
  return (
    <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process
        .env.NEXT_PUBLIC_ADSENSE_PUB_ID!}`}
        crossOrigin='anonymous'
        strategy='afterInteractive'
    />
  )
}

export default AdSense