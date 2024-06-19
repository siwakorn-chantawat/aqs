"use client";

import React from "react";
import Card from "./Card";
import { CardsData } from "@/lib/data";
import { motion } from "framer-motion";

const GridContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-5 p-5 lg:p-10
    lg:grid-cols-2 lg:gap-y-10 "
    >
      {CardsData.map((card) => (
        <Card
          key={card.url}
          url={card.url}
          text={card.text}
          lock={card.lock}
          mediaType={card.mediaType}
        />
      ))}
    </motion.div>
  );
};

export default GridContent;
