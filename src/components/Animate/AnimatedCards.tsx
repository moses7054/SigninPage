"use client";

import { motion } from "framer-motion";

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card17,
  Card18,
  Card19,
  Card20,
  Card21,
} from "@/components/Animate/animateComponents/ImportCards";

const Col1 = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8];
const Col2 = [Card9, Card10, Card11, Card12];
const Col3 = [Card13, Card14, Card15, Card17, Card18, Card19, Card20, Card21];

const getRandomDelay = () => Math.random() * 0.7;

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeInOut" },
  }),
};

export default function AnimatedCards() {
  return (
    <div className="-rotate-[7deg] absolute -top-[16%] -right-[12%]  overflow-hidden max-lg:hidden max-xl:-right-[500px]">
      <motion.div
        className="flex gap-5 "
        initial={{ y: 0 }}
        animate={{ y: 100 }}
        transition={{ duration: 6, ease: "linear" }}
      >
        <div className="flex flex-col gap-3">
          {Col1.map((Card, index) => (
            <motion.div
              key={index}
              className=""
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={getRandomDelay()}
            >
              <Card />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {Col2.map((Card, index) => (
            <motion.div
              key={index}
              className=""
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={getRandomDelay()}
            >
              <Card />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {Col3.map((Card, index) => (
            <motion.div
              key={index}
              className=""
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={getRandomDelay()}
            >
              <Card />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
