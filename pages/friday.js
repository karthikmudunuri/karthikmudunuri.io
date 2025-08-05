import Container from "@/components/Container";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Friday = () => {
  const [isFriday, setIsFriday] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let day = new Date().getDay();

    if (day === 5) {
      setIsFriday(true);
      // redirect
      setTimeout(() => {
        router.push("https://www.youtube.com/shorts/V2zoixd9f_w?si=GKFERjSSzKY5SINI");
      }, 2000);
    }
  }, []);

  return (
    <Container
      title="It's Friday! Let's Celebrate | Manu Arora"
      description="It's finally Friday — time to unwind, have fun, and enjoy the vibes! Drop your worries and dive into the weekend energy."
      image="/sardarji.jpeg"
    >
      <div className="max-w-4xl mx-auto py-40">
        {!isFriday ? (
          <>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Bruh... It’s not Friday yet 😭
            </h1>
            <h3 className="font-normal text-sm md:text-base tracking-tight mb-4 mt-8 text-black dark:text-white">
              Come back on a Friday for a surprise. 👳🏻‍♂️
            </h3>
          </>
        ) : (
          <h1 className="font-bold text-3xl md:text-5xl tracking-wide leading-10 mb-4 text-black dark:text-white">
           FRIDAY AAAAAAAA! 🥳 Karaar hojo! Vibe high, stress low — it’s time for good food, loud music, and insane energy. LET'S GOOOO!
          </h1>
        )}
      </div>
    </Container>
  );
};

export default Friday;
