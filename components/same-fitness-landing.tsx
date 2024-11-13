"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Instagram, X } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import BlurFade from "./ui/blur-fade";
import { AffiliateMarquee } from "./custom/affiliate-marquee";
import { RotateText } from "./custom/rotation-text-animation";

const AnimatedLogo = () => {
  return (
    <>
      <div className="transition-all w-screen  flex justify-center items-center ">
        <h1 className="transition-all mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="transition-all text-5xl  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-[#C4E716]">
            Same Fitness™
          </span>{" "}
        </h1>
      </div>
    </>
  );
};

export function SameFitnessLanding() {
  const [_mounted, setMounted] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    console.log(_mounted);
    setMounted(true);
    const timer = setTimeout(() => setShowCTA(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.04, 0.62, 0.23, 0.98],
  //     },
  //   },
  // };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <div className="transition-all min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="transition-all fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at center, 
              rgba(55, 75, 37, 0.9) 0%,
              rgba(17, 24, 12, 1) 100%
            )
          `,
        }}
      />

      {/* Noise overlay */}
      <div
        className="transition-all fixed inset-0 z-10 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="transition-all relative z-20 w-full max-w-4xl flex flex-col items-center">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="transition-all text-center mb-12 mt-8"
        >
          <AnimatedLogo />
          <div className="transition-all flex items-center flex-col  justify-center space-x-2 text-[#CDE316]/80 mt-4">
            <p className="transition-all  font-light tracking-wider text-center flex flex-col lg:flex-row items-center justify-center">
              <p className="transition-all px-2 text-2xl">
                Feito para os <b className="">mesmos</b>
              </p>
              <RotateText />
            </p>
          </div>
        </motion.header>
        <div className="transition-all  h-16 relative bottom-6   w-full  p-2  flex items-center justify-center">
          <BlurFade delay={0.25} inView>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <RainbowButton className="transition-all text-lg">
                <Link
                  href={
                    "https://lista.mercadolivre.com.br/_CustId_1794897183?item_id=MLB5173789276&category_id=MLB1262&seller_id=1794897183&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
                  }
                  target="_blank"
                >
                  Conheça nossa loja{" "}
                </Link>
              </RainbowButton>
            </motion.div>
          </BlurFade>
          ;
        </div>

        <AnimatePresence>
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="transition-all space-y-3 w-full max-w-md"
          >
            {/* {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="transition-all w-full"
              >
                <Link
                  href={product.url}
                  className="transition-all block w-full bg-[#374B25]/30 backdrop-blur-sm border border-[#CDE316]/10 text-[#CDE316] rounded-lg p-4 text-center transition-colors hover:bg-[#374B25]/40 hover:border-[#CDE316]/20 focus:outline-none focus:ring-2 focus:ring-[#CDE316]/50"
                >
                  <span className="transition-all text-sm tracking-wide font-light">
                    {product.name}
                  </span>
                </Link>
              </motion.div>
            ))} */}

            <AffiliateMarquee />
          </motion.main>
        </AnimatePresence>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="transition-all mt-12 text-center flex items-center justify-center"
        >
          <Link
            href="https://www.instagram.com/forthesame.fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all inline-flex items-center space-x-3 text-[#CDE316]/80 hover:text-[#CDE316] transition-colors duration-300"
          >
            <Instagram className="transition-all w-5 h-5 relative bottom-1" />
            <span className="transition-all text-sm tracking-wide font-light">
              <svg
                className="current-fill text-[#CDE316]"
                fill="#CDE316"
                xmlns="http://www.w3.org/2000/svg"
                width="112.22"
                height="32"
                viewBox="0 0 512 146"
              >
                <path
                  fill="#343433"
                  d="M27.127.902C16.68 5.278 5.197 17.625 1.57 33.135C-3.024 52.78 16.09 61.09 17.659 58.369c1.845-3.201-3.425-4.283-4.51-14.477c-1.402-13.166 4.719-27.877 12.423-34.332c1.43-1.2 1.363.47 1.363 3.557c0 5.521-.305 55.085-.305 65.429c0 13.996-.578 18.416-1.617 22.784c-1.051 4.425-2.743 7.416-1.462 8.568c1.432 1.288 7.546-1.777 11.085-6.716c4.244-5.924 5.73-13.04 5.997-20.765c.322-9.314.308-24.094.322-32.524c.012-7.731.13-30.37-.136-43.98c-.065-3.34-9.323-6.842-13.692-5.011M398.07 66.405c-.337 7.277-1.948 12.964-3.947 16.976c-3.87 7.767-11.9 10.178-15.31-.986c-1.858-6.086-1.945-16.25-.61-24.743c1.36-8.651 5.158-15.185 11.445-14.596c6.202.583 9.105 8.574 8.422 23.35m-104.55 45.146c-.084 12.09-1.987 22.69-6.067 25.77c-5.788 4.366-13.567 1.09-11.956-7.732c1.425-7.807 8.166-15.78 18.04-25.522c0 0 .02 2.222-.017 7.484m-1.58-45.217c-.354 6.628-2.072 13.285-3.947 17.047c-3.87 7.767-11.958 10.195-15.31-.986c-2.292-7.64-1.743-17.526-.61-23.756c1.472-8.083 5.04-15.582 11.445-15.582c6.228 0 9.3 6.833 8.422 23.277m-60.565-.1c-.38 7.018-1.749 12.885-3.946 17.147c-3.976 7.714-11.842 10.16-15.31-.986c-2.501-8.037-1.65-18.995-.61-24.915c1.544-8.785 5.41-15.013 11.445-14.423c6.199.606 9.212 8.573 8.421 23.177m277.553 8.198c-1.515 0-2.207 1.562-2.78 4.19c-1.983 9.144-4.07 11.207-6.759 11.207c-3.005 0-5.705-4.526-6.4-13.588c-.545-7.126-.457-20.244.24-33.293c.143-2.681-.597-5.334-7.788-7.946c-3.094-1.124-7.592-2.779-9.832 2.627c-6.327 15.274-8.803 27.4-9.386 32.324c-.03.255-.343.308-.397-.288c-.372-3.945-1.201-11.115-1.305-26.177c-.02-2.939-.642-5.44-3.886-7.488c-2.105-1.33-8.496-3.68-10.797-.883c-1.994 2.286-4.304 8.44-6.703 15.736c-1.95 5.93-3.308 9.94-3.308 9.94s.026-15.998.049-22.067c.01-2.289-1.56-3.052-2.034-3.19c-2.13-.618-6.33-1.651-8.112-1.651c-2.2 0-2.738 1.228-2.738 3.02c0 .235-.347 21.063-.347 35.627c0 .633 0 1.323.003 2.057c-1.216 6.694-5.161 15.78-9.451 15.78c-4.296 0-6.322-3.798-6.322-21.161c0-10.129.304-14.534.453-21.86c.087-4.22.255-7.46.245-8.195c-.032-2.255-3.93-3.392-5.745-3.812c-1.823-.423-3.407-.588-4.644-.517c-1.751.1-2.99 1.247-2.99 2.827c0 .848.01 2.458.01 2.458c-2.255-3.544-5.882-6.01-8.295-6.725c-6.5-1.93-13.282-.22-18.398 6.939c-4.066 5.687-6.517 12.13-7.482 21.385c-.705 6.767-.475 13.628.779 19.431c-1.515 6.548-4.326 9.23-7.405 9.23c-4.47 0-7.71-7.294-7.334-19.912c.248-8.299 1.909-14.123 3.724-22.549c.774-3.592.145-5.472-1.432-7.274c-1.447-1.653-4.53-2.498-8.96-1.46c-3.156.741-7.669 1.538-11.798 2.15c0 0 .25-.995.454-2.747c1.074-9.19-8.913-8.445-12.1-5.51c-1.901 1.753-3.196 3.82-3.687 7.536c-.78 5.898 4.03 8.68 4.03 8.68c-1.577 7.224-5.446 16.66-9.44 23.483c-2.139 3.655-3.775 6.364-5.888 9.243a1388 1388 0 0 1 .226-34.66c.087-4.22.256-7.374.247-8.11c-.024-1.648-.987-2.272-2.99-3.06c-1.772-.698-3.866-1.18-6.039-1.35c-2.742-.212-4.394 1.241-4.35 2.961c.008.325.008 2.319.008 2.319c-2.255-3.544-5.882-6.01-8.295-6.725c-6.5-1.93-13.282-.22-18.398 6.939c-4.065 5.687-6.727 13.669-7.482 21.315c-.702 7.125-.573 13.18.385 18.282c-1.033 5.108-4.005 10.45-7.364 10.45c-4.296 0-6.74-3.799-6.74-21.162c0-10.129.304-14.534.454-21.86c.087-4.219.254-7.46.245-8.195c-.032-2.255-3.931-3.391-5.746-3.812c-1.898-.44-3.537-.6-4.796-.507c-1.66.123-2.828 1.61-2.828 2.719v2.556c-2.255-3.544-5.882-6.01-8.295-6.725c-6.5-1.93-13.244-.192-18.398 6.939c-3.36 4.649-6.081 9.803-7.481 21.213c-.405 3.297-.584 6.386-.56 9.271c-1.34 8.196-7.26 17.642-12.101 17.642c-2.833 0-5.532-5.496-5.532-17.207c0-15.6.966-37.812 1.13-39.952c0 0 6.117-.104 7.301-.118c3.052-.034 5.815.039 9.88-.17c2.038-.103 4.002-7.42 1.898-8.325c-.954-.41-7.693-.768-10.365-.825c-2.246-.05-8.5-.514-8.5-.514s.561-14.743.692-16.3c.11-1.299-1.57-1.967-2.532-2.372c-2.342-.99-4.437-1.465-6.92-1.977c-3.432-.708-4.988-.015-5.292 2.88c-.458 4.395-.695 17.268-.695 17.268c-2.518 0-11.12-.492-13.638-.492c-2.34 0-4.866 10.064-1.63 10.188c3.722.144 10.209.27 14.509.398c0 0-.192 22.578-.192 29.55q.001 1.11.008 2.148c-2.367 12.335-10.703 18.999-10.703 18.999c1.79-8.161-1.867-14.29-8.454-19.478c-2.427-1.911-7.218-5.53-12.578-9.496c0 0 3.104-3.06 5.858-9.216c1.95-4.362 2.035-9.351-2.754-10.452c-7.912-1.82-14.435 3.991-16.381 10.195c-1.508 4.806-.704 8.371 2.25 12.075c.215.271.45.548.69.826c-1.785 3.442-4.239 8.077-6.317 11.671c-5.768 9.98-10.125 17.872-13.418 17.872c-2.632 0-2.597-8.014-2.597-15.517c0-6.468.478-16.193.86-26.26c.126-3.33-1.54-5.227-4.33-6.945c-1.696-1.044-5.315-3.096-7.411-3.096c-3.138 0-12.19.427-20.742 25.167c-1.078 3.118-3.196 8.8-3.196 8.8l.183-29.751c0-.698-.372-1.372-1.223-1.833c-1.441-.783-5.29-2.383-8.713-2.383q-2.445.001-2.445 2.27l-.298 46.546c0 3.537.092 7.663.442 9.467c.348 1.806.913 3.276 1.611 4.15c.699.873 1.506 1.54 2.837 1.814c1.239.255 8.023 1.126 8.376-1.466c.422-3.108.439-6.468 4.001-19.002C75.89 58.072 83.12 48.552 86.52 45.17c.595-.59 1.273-.626 1.24.341c-.144 4.278-.655 14.97-.998 24.05c-.921 24.305 3.5 28.81 9.819 28.81c4.834 0 11.648-4.803 18.952-16.961a4281 4281 0 0 0 12.153-20.36c2.213 2.049 4.698 4.254 7.18 6.61c5.77 5.476 7.664 10.68 6.407 15.616c-.96 3.773-4.581 7.662-11.024 3.883c-1.878-1.103-2.68-1.956-4.568-3.199c-1.014-.667-2.563-.867-3.492-.167c-2.412 1.818-3.792 4.132-4.58 6.996c-.766 2.787 2.025 4.26 4.919 5.549c2.491 1.109 7.846 2.114 11.26 2.228c13.305.445 23.964-6.424 31.384-24.143c1.328 15.303 6.98 23.962 16.801 23.962c6.566 0 13.149-8.487 16.028-16.836c.826 3.403 2.05 6.363 3.63 8.866c7.567 11.99 22.247 9.41 29.621-.772c2.28-3.146 2.627-4.276 2.627-4.276c1.076 9.613 8.818 12.972 13.25 12.972c4.965 0 10.09-2.347 13.683-10.435q.63 1.319 1.383 2.511c7.567 11.99 22.248 9.41 29.622-.772q.52-.716.913-1.3l.216 6.315l-6.789 6.227c-11.38 10.43-20.024 18.34-20.66 27.553c-.81 11.747 8.712 16.113 15.926 16.685c7.647.607 14.208-3.621 18.234-9.538c3.544-5.209 5.864-16.419 5.693-27.49c-.067-4.434-.18-10.071-.267-16.114c3.995-4.639 8.496-10.503 12.64-17.365c4.516-7.479 9.356-17.523 11.834-25.34c0 0 4.205.037 8.693-.257c1.435-.094 1.848.2 1.582 1.251c-.32 1.272-5.67 21.905-.787 35.65c3.341 9.41 10.874 12.436 15.34 12.436c5.229 0 10.23-3.948 12.91-9.81c.324.653.661 1.285 1.03 1.87c7.567 11.99 22.196 9.393 29.622-.773c1.676-2.294 2.627-4.276 2.627-4.276c1.593 9.95 9.331 13.023 13.763 13.023c4.616 0 8.998-1.893 12.552-10.304c.15 3.704.383 6.732.752 7.686c.225.585 1.537 1.317 2.491 1.671c4.224 1.566 8.53.826 10.124.504c1.104-.224 1.965-1.11 2.083-3.396c.31-6.005.12-16.094 1.94-23.593c3.055-12.583 5.906-17.464 7.258-19.88c.757-1.355 1.61-1.578 1.641-.145c.064 2.9.208 11.413 1.392 22.853c.87 8.412 2.03 13.385 2.923 14.96c2.548 4.5 5.693 4.713 8.255 4.713c1.63 0 5.038-.45 4.733-3.314c-.149-1.396.111-10.024 3.124-22.421c1.967-8.096 5.247-15.41 6.43-18.085c.437-.986.64-.209.632-.057c-.249 5.575-.808 23.811 1.463 33.785c3.08 13.511 11.986 15.023 15.09 15.023c6.626 0 12.045-5.04 13.87-18.302c.44-3.192-.211-5.656-2.162-5.656"
                />
              </svg>
            </span>
          </Link>
        </motion.footer>
      </div>

      {/* CTA Component */}
      <AnimatePresence>
        {showCTA && (
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="transition-all fixed bottom-4 right-4 z-30 w-72 bg-[#374B25] border border-[#CDE316]/20 rounded-lg p-4 shadow-lg backdrop-blur-sm"
          >
            <button
              onClick={() => setShowCTA(false)}
              className="transition-all absolute top-2 right-2 text-[#CDE316]/60 hover:text-[#CDE316] transition-colors"
              aria-label="Close promotion"
            >
              <X className="transition-all w-4 h-4" />
            </button>
            <h2 className="transition-all text-[#CDE316] text-lg font-semibold mb-2">
              Limited Time Offer!
            </h2>
            <p className="transition-all text-[#CDE316]/90 text-sm mb-3">
              Get 15% off on our Ultra Comfort Running Shoes. Dont miss out!
            </p>
            <Link
              href="#"
              className="transition-all block w-full bg-[#CDE316] text-[#11180C] rounded py-2 text-center text-sm font-medium transition-colors hover:bg-[#CDE316]/90 focus:outline-none focus:ring-2 focus:ring-[#CDE316]/50"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
