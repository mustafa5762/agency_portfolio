import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Cursor({variant,setvariant}) {

    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = event => {
          setCoords({
            x: event.clientX,
            y: event.clientY,
          });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleWindowMouseMove,
          );
        };
    }, []);

    const cursor = {
        simple: {
          x: coords.x,
          y: coords.y,
          transition: {
            ease: [0.61, 1, 0.88, 1],
            duration: 0.15
          }
        },
        text: {
          width: 80,
          height: 80,
          x: coords.x,
          y: coords.y,
          transition: {
            ease: [0.61, 1, 0.88, 1],
            duration: 0.15
          }
        },
        image: {
          width: 200,
          height: 250,
          borderRadius: 0,
          backgroundImage: 'url(https://images.prismic.io/magnetism/7ba22b47-0f84-4276-af3b-1a6263b93fde_06_RM_Ladies_Couv.jpg?auto=compress,format&w=960)',
          backgroundSize: 'cover',
          x: coords.x,
          y: coords.y,
          transition: {
            ease: [0.61, 1, 0.88, 1],
            duration: 0.15
          }
        },
    }

  return (
    <motion.div variants={cursor} animate={variant} className='fixed top-0 left-0 h-3 w-3 bg-amber-500 rounded-full font-bold tracking-wide text-white flex justify-center items-center text-lg'>
        {variant === "text" && "PLAY"}
    </motion.div>
  )
}

export default Cursor