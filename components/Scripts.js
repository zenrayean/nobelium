import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>
    {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
      <script async defer data-website-id="1c5a5b0d-871e-461f-a37d-9c8dd739d15f" src="https://web.gpio.ink/umami.js"></script>
    )}
    {/* {BLOG.autoCollapsedNavBar === true && (
      <Script strategy="lazyOnload">
        {`var windowTop=0;
          function scrollTrigger(){
              let scrollS = window.scrollY;
              let nav = document.querySelector('.sticky-nav');
              if(scrollS >= windowTop){
                  nav.style.opacity = 0;
                  windowTop = scrollS;
              }else{
                  nav.style.opacity = 1;
                  windowTop = scrollS;
              }
          };
          window.addEventListener('scroll',scrollTrigger);`}
      </Script>
    )} */}
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
