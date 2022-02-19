import BLOG from '@/blog.config'
import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <Vercel />
        </div>
      </div>
    </div>
    <script async defer data-website-id="5bbc2f29-92f7-491b-8262-f547c7ee3b50" src="https://web.gpio.ink/umami.js"></script>
  )
}

export default Footer
