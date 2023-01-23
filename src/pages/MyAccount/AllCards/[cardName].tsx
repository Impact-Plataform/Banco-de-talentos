import Image from "next/image";
import { useRouter } from "next/router";
import { parse } from "node:path/win32";
import { useEffect, useState } from "react";
import Side_nav from "../../../components/Side_nav";
import injectStringAsHtml from "../../../functions/injectStringAsHtml";
import LogOutModel from "../../Logout";

interface SpecificCardProps {
  CardDefId: string;
  abilities: string;
  category: string;
  collectible: string;
  cost: string;
  description: string;
  name: string;
  power: string;
  source: string;
  use_count: string;
  variants: string;
  connected_cards: string;
}

export default function SpecificCard(props: SpecificCardProps) {
  const variants = JSON.parse("[" + props.variants + "]")[0];
  const baseVariant = variants.pop();
  return (
    <section className=" flex gap-2  h-screen relative w-full text-center">
      <Side_nav />

      <main
        className="flex flex-col gap-2
       w-full align-middle items-center justify-center "
      >
        <div className="flex items-center">
          <div className="flex flex-col flex-wrap items-start w-[50%]">
            <Image
              src={`https://static.marvelsnap.pro/cards/${props.CardDefId}.webp`}
              alt="card"
              width={400}
              height={0}
              className="mb-2"
            />
            {injectStringAsHtml(props.description)}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">{props.name}</div>

            <div>Source</div>
            <div>{props.source}</div>
            <div>
              {injectStringAsHtml(props.connected_cards) === "[]"
                ? ""
                : injectStringAsHtml(props.connected_cards)}
            </div>
            <div>Cost: {props.cost}</div>
            <div>Power: {props.power}</div>
            <div>Artist: {baseVariant.credits.Artist}</div>
            <div>Colorist: {baseVariant.credits.Colorist}</div>
          </div>
        </div>
        <div className="flex gap-2 ">
          {variants.map((variant: any) => {
            return (
              <div className="group relative">
                <Image
                  src={`https://static.marvelsnap.pro/cards/${props.CardDefId}_${variant.id}.webp`}
                  alt="card"
                  width={100}
                  height={0}
                />
                <span
                  className="
              text-lg
              hidden  w-52 bg-gray-800 bg-opacity-90 border-2 border-gray-500
              rounded-lg p-1 absolute 
              bottom-[100%] right-[-1rem]
              z-10
              group-hover:flex flex-col
             justify-center text-center items-center         
              "
                >
                  <Image
                    src={`https://static.marvelsnap.pro/cards/${props.CardDefId}_${variant.id}.webp`}
                    alt="card"
                    width={300}
                    height={0}
                  />
                  <div className="text-xs">Category: {variant.category}</div>
                  <div className="text-xs">
                    Artist: {variant.credits.Artist}
                  </div>
                  <div className="text-xs">
                    Colorist: {variant.credits.Colorist}
                  </div>
                  <div className="text-xs">
                    {variant.released ? "Relesead" : "Not released"}
                  </div>
                  <div className="text-xs">Sorce: {variant.source}</div>
                </span>
              </div>
            );
          })}
        </div>
      </main>
      <LogOutModel />
    </section>
  );
}

export const getServerSideProps = async (context: any) => {
  const cardInfoQuery = await context.query.cardInfo;
  if (!cardInfoQuery) {
    return {
      redirect: {
        destination: "/MyAccount/AllCards",
        permanent: false,
      },
    };
  }
  const cardInfo = await JSON.parse(cardInfoQuery);
  return {
    props: cardInfo,
  };
};
