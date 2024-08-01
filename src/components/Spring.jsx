import { useSpring, useScroll, animated } from '@react-spring/web'

export default function MyComponent() {

   const { scrollYProgress } = useScroll()

   const [springs, api] = useSpring(() => ({
      from: { x: 0, y: 0, rotate: 0 },
      to: { x: 100, y: 100, rotate: 90, },
      loop: { reverse: true },
      pause: true,
   }))

   const handleClick = () => {
      if (springs.x.isPaused) api.resume();
      else api.pause();
   }

   return (
      <animated.div
         onClick={handleClick}
         className="w-20 h-20 bg-red-500 fixed rounded-xl"
         style={{
            scale: scrollYProgress.to(v => invCosn(v)),
            ...springs,
         }}
      />
   )
}

const invCosn = (v) => 1 - Math.cos(v * Math.PI * 2) / 2 + 0.5