"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 ">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>
      <div className="flex flex-col items-center mt-12 md:mt-10 antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
      </div>
    </section>
  );
};

export default Clients;
