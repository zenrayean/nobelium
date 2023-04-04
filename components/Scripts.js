import Script from 'next/script'
import { useConfig } from '@/lib/config'

const Scripts = () => {
  const BLOG = useConfig()

  return (
    <>
      {BLOG.analytics && BLOG.analytics.provider === 'ackee' && (
        <Script
          src={BLOG.analytics.ackeeConfig.tracker}
          data-ackee-server={BLOG.analytics.ackeeConfig.dataAckeeServer}
          data-ackee-domain-id={BLOG.analytics.ackeeConfig.domainId}
        />
      )}
      {BLOG.analytics && BLOG.analytics.provider === 'ga' && (
        <>
<script async defer data-website-id="1c5a5b0d-871e-461f-a37d-9c8dd739d15f" src="https://web.gpio.ink/umami.js"></script>
        </>
      )}
    </>
  )
}

export default Scripts
