import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>
    {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
      <script async defer data-website-id="1c5a5b0d-871e-461f-a37d-9c8dd739d15f" src="https://web.gpio.ink/umami.js"></script>
    )}
    {BLOG.analytics && BLOG.analytics.provider === 'ga' && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
  </>
)

export default Scripts
