import styled from 'styled-components';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {
    scale: 0,
  },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
};

const boxVariants: any = {
  hover: {
    scale: 1.5,
    rotate: '90deg',
  },
  click: {
    scale: 1,
    borderRadius: '100px',
  },
  drag: {
    backgroundColor: 'rgb(46, 204, 113)',
    transition: { duration: 10 },
  },
};

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: -10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

function App() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  }, [scrollY, scrollYProgress]);

  useEffect(() => {
    potato.onChange(() => console.log(potato.get()));
  }, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
