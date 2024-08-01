import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const startX = 150
const startY = 150

export default function Gesture() {
   const [{ x, y }, api] = useSpring(() => ({
      x: startX,
      y: startY,
      config: { mass: 1, tension: 550, friction: 10 }
   }))

   const bind = useDrag(({ down, movement: [mx, my] }) => {
      api.start({
         x: startX + (down ? mx : 0),
         y: startY + (down ? my : 0),
         immediate: down
      })
   })

   return <animated.div
      className="w-14 h-14 bg-orange-500 rounded-full"
      style={{ x, y }}
      {...bind()}
   />
}