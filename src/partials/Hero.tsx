import { GradientText, HeroAvatar, Section } from '@/components/index';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, this is <GradientText>Uğur</GradientText> 👋
        </>
      }
      description={
        <>
          <div
            className="flex flex-col
           gap-2 md:flex-row
          "
          >
            <img
              className="rounded-lg pb-2"
              src="/assets/images/top-rated.png"
              width={400}
              alt="Top Rated Badge"
            />
            <img
              className="rounded-lg pb-2"
              src="/assets/images/stats.png"
              width={400}
              alt="My Stats"
            />
          </div>
          <div className="p-4 md:p-0">
            Experienced web developer. <b>I build web applications</b> for my
            clients. I have started my career as front-end developer and now I
            continue as <b>full-stack developer</b>.
            <br />
            <br /> I <b>build MVP's in a short time</b> and I can work with any
            Javascript technologies.
            <br />
            <br /> I can help you about:{' '}
            <b>
              React, Next.js, Vue, Nuxt Js, Svelte, Node.js, Express.js,
              PostgreSQL, MongoDB, Firebase, Cross Platform Extensions (Chrome
              Extensions, Firefox, Safari, Edge)
            </b>
            <br />
            <br /> I frequently use <b>Tailwind</b> but I can use any CSS
            framework. I do understand how communication is important in
            software development and I provide a <b>good communication</b> with
            my clients. You can find me on Upwork!
            <br />
            <br />I have earned <b>30K+ USD</b> on Upwork and I have{' '}
            <b>100% job success</b> and <b>Top Rated</b> badge.
          </div>
        </>
      }
      avatar={
        <img
          src="/assets/images/profile.png"
          alt="Avatar image"
          width={386}
          height={320}
        />
      }
      socialButtons={
        <div>
          <div className="pb-4">
            <img
              src="/assets/images/happy.png"
              alt="Happy"
              width={800}
              className="rounded-lg "
            />
            <p className="mt-2 text-center text-xl font-bold text-slate-500">
              I can build your MVP in two weeks.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button className="flex rounded bg-blue-600 py-2 px-4  font-normal text-slate-50 shadow-xl transition-all hover:bg-blue-800 ">
              <a
                href="https://www.linkedin.com/in/ugurkellecioglu/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#f1f5f9"
                    fill-rule="evenodd"
                    d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                  />
                </svg>
                My LinkedIn
              </a>
            </button>
            <button className="flex rounded bg-purple-600 py-2 px-4  font-normal text-slate-50 shadow-xl transition-all hover:bg-purple-800 ">
              <a
                href="mailto:ugur.kellecioglu@outlook.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 -31.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                      fill="#34A853"
                    ></path>
                    <polygon
                      fill="#EA4335"
                      points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
                    ></polygon>
                    <path
                      d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                      fill="#C5221F"
                    ></path>
                  </g>
                </svg>
                Send Email
              </a>
            </button>
            <button className="rounded bg-green-700 py-2 px-4  font-normal text-slate-50 shadow-xl transition-all hover:bg-emerald-800 ">
              <a
                href="https://drive.google.com/file/d/1ySipTRS7VH7zuoRz58uT8NrUHCgXkF6G/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2"
              >
                Download My CV
              </a>
            </button>
          </div>
        </div>
      }
    />
  </Section>
);

export { Hero };
