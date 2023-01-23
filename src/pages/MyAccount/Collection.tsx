import Side_nav from "../../components/Side_nav";
import LogOutModel from "../Logout";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { parse } from "node-html-parser";
import { api } from "../../lib/axios";
import { useRouter } from "next/router";
import injectStringAsHtml from "../../functions/injectStringAsHtml";

interface CollectionProps {
  fullCollection: Array<object>;
}

export default function Collection(props: CollectionProps) {
  const router = useRouter();

  const fullCollection: any = props.fullCollection;
  let apiCardsAlreadyCollected: Array<string> = [];

  useEffect(() => {
    async function gettingCardsCollectedFromApi() {
      const responseUserCardsCollected: any = await api.get(
        `/users/${localStorage.getItem("loggedUser")}/collection`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("SavedJwtToken")}`,
          },
        }
      );
      Object.values(
        responseUserCardsCollected.data.collection.cardsOwned
      ).forEach((element: any) => {
        apiCardsAlreadyCollected.push(element.cardDefId);
      });

      for (let index = 0; index < fullCollection.length; index++) {
        if (
          apiCardsAlreadyCollected.some(
            (el: any) => el === fullCollection[index].CardDefId
          )
        ) {
          fullCollection[index].collected = "1";
        } else {
          fullCollection[index].collected = "0";
        }
      }
    }
    gettingCardsCollectedFromApi();
    setStateForActivateRefreshOfCards(!stateForActivateRefreshOfCards);
  }, []);

  const [modifiedCollection, setModifiedCollection] = useState(fullCollection);

  const [pool, setPool] = useState("clearPool");
  const [abilities, setAbilities] = useState("clearAbilities");
  const [cardsCollected, setCardsCollected] = useState("clearCollected");
  const [order, setOrder] = useState("");
  const [orderRepetition, setOrderRepetition] = useState(0);
  const [cardName, setCardName] = useState("");
  const [pagination, setPagination] = useState(1);
  const [numberOfPagination, setNumberOfPagination] = useState(1);

  const [stateForActivateRefreshOfCards, setStateForActivateRefreshOfCards] =
    useState(Boolean);

  const promisedSetState = (newStringState: string, stateToBeUpdated: string) =>
    new Promise((resolve) =>
      stateToBeUpdated === "pool"
        ? resolve(setPool(newStringState))
        : stateToBeUpdated === "abilities"
        ? resolve(setAbilities(newStringState))
        : stateToBeUpdated === "cardsCollected"
        ? resolve(setCardsCollected(newStringState))
        : stateToBeUpdated === "order"
        ? resolve(setOrder(newStringState))
        : stateToBeUpdated === "cardName" &&
          resolve(setCardName(newStringState))
    );

  const promisedSetModifiedCollection = (
    newModifiedCollection: Array<object>
  ) =>
    new Promise((resolve) =>
      resolve(setModifiedCollection(newModifiedCollection))
    );

  const updatePoolState = async (pool: string) => {
    await promisedSetState(pool, "pool");
  };

  const updateAbilitiesState = async (abilities: string) => {
    await promisedSetState(abilities, "abilities");
  };

  const updateCardsCollectedState = async (cardsCollected: string) => {
    await promisedSetState(cardsCollected, "cardsCollected");
  };

  const updateOrderState = async (newOrder: string) => {
    const promisedSetStateNumber = (
      newNumberState: number,
      stateToBeUpdated: string
    ) =>
      new Promise(
        (resolve) =>
          stateToBeUpdated === "orderRepetition" &&
          resolve(setOrderRepetition(newNumberState))
      );

    if (newOrder === order && orderRepetition < 2) {
      await promisedSetStateNumber(orderRepetition + 1, "orderRepetition");
    } else if (newOrder === order && orderRepetition === 2) {
      await promisedSetStateNumber(0, "orderRepetition");
    } else if (newOrder !== order) {
      await promisedSetState(newOrder, "order");
      await promisedSetStateNumber(1, "orderRepetition");
    }
  };

  const updateCardNameState = async (cardName: string) => {
    await promisedSetState(cardName, "cardName");
  };

  const updatePagination = async (pagination: number) => {
    const promissedPagination = async () => {
      new Promise((resolve) => resolve(setPagination(pagination)));
    };
    await promissedPagination();
  };

  const handleColorChangingWhileFiltering = (classOfButtons: string) => {
    const buttonsHandled = document.getElementsByClassName(classOfButtons);
    let stateHandled = "";

    classOfButtons === "poolButtons"
      ? (stateHandled = pool)
      : classOfButtons === "abilitiesButtons"
      ? (stateHandled = abilities)
      : /* classOfButtons === "collectedButtons" && */
        (stateHandled = cardsCollected);

    for (let i = 0; i < buttonsHandled.length; i++) {
      !buttonsHandled[i].id.includes(stateHandled)
        ? buttonsHandled[i].classList.remove("text-red-500")
        : buttonsHandled[i].classList.add("text-red-500");
    }
  };

  const handlePoolFiltering = (filteredCards: Array<object>) => {
    handleColorChangingWhileFiltering("poolButtons");
    if (pool !== "clearPool") {
      if (pool === "+") {
        filteredCards = filteredCards.filter(
          (el: any) => el.source.length === 0
        );
      } else if (pool === "recruitSeason") {
        filteredCards = filteredCards.filter(
          (el: any) => el.source.search("Recruit Season") >= 0
        );
      } else if (pool === "Starter Card") {
        filteredCards = filteredCards.filter(
          (el: any) => el.source.search("Starter Card") >= 0
        );
      } else if (
        pool === "1" ||
        pool === "2" ||
        pool === "3" ||
        pool === "4" ||
        pool === "5"
      ) {
        filteredCards = filteredCards.filter(
          (el: any) => el.source.search(`Pool ${pool}`) >= 0
        );
      }
    }
    /*   setModifiedCollection(filteredCards); */
    return filteredCards;
  };

  const handleAbilitiesFiltering = (filteredCards: Array<object>) => {
    handleColorChangingWhileFiltering("abilitiesButtons");

    const filteringAbilities = (ability: string) => {
      return (filteredCards = filteredCards.filter(
        (el: any) =>
          el.description.search(ability) >= 0 ||
          el.abilities.search(ability) >= 0
      ));
    };

    if (abilities !== "clearAbilities") {
      if (abilities === "noAbilities") {
        filteredCards = filteredCards.filter(
          (el: any) => el.abilities.length === 2
        );
      } else if (abilities === "Move") {
        filteringAbilities("Move");
      } else if (abilities === "Ongoing") {
        filteringAbilities("Ongoing");
      } else if (abilities === "On Reveal") {
        filteringAbilities("On Reveal");
      } else if (abilities === "Destroy") {
        filteringAbilities("Destroy");
      } else if (abilities === "Discard") {
        filteringAbilities("Discard");
      }
    }

    return filteredCards;
  };

  const handleCollectedFiltering = (filteredCards: Array<object>) => {
    handleColorChangingWhileFiltering("collectedButtons");

    if (cardsCollected === "yes") {
      filteredCards = filteredCards.filter((el: any) => el.collected === "1");
    } else if (cardsCollected === "no") {
      filteredCards = filteredCards.filter((el: any) => el.collected === "0");
    }

    return filteredCards;
  };

  const handleCardNameFiltering = (filteredCards: Array<object>) => {
    filteredCards = filteredCards.filter(
      (el: any) => el.name.search(cardName) >= 0
    );
    return filteredCards;
  };

  const handleOrder = (filteredCards: Array<object>) => {
    const collectedButtons = document.getElementsByClassName("orderButtons");

    for (let i = 0; i < collectedButtons.length; i++) {
      if (!collectedButtons[i].id.includes(order) || orderRepetition === 0) {
        collectedButtons[i].classList.remove("text-red-500");
        collectedButtons[i].classList.remove("text-violet-500");
      } else if (
        collectedButtons[i].id.includes(order) &&
        orderRepetition === 1
      ) {
        collectedButtons[i].classList.remove("text-violet-500");
        collectedButtons[i].classList.add("text-red-500");
      } else {
        collectedButtons[i].classList.remove("text-red-500");
        collectedButtons[i].classList.add("text-violet-500");
      }
    }

    const ordering = (typeOfOrder: string, filteredCards: Array<object>) => {
      if (orderRepetition === 0) {
        filteredCards = filteredCards.sort((a: any, b: any) => {
          return ("" + a.name).localeCompare(b.name);
        });
      } else if (orderRepetition === 1) {
        if (typeOfOrder === "name") {
          filteredCards = filteredCards.sort((a: any, b: any) => {
            return ("" + a.name).localeCompare(b.name);
          });
        } else {
          filteredCards = filteredCards.sort(
            (a: any, b: any) => a[typeOfOrder] - b[typeOfOrder]
          );
        }
      } else if (orderRepetition === 2) {
        if (typeOfOrder === "name") {
          filteredCards = filteredCards.sort((a: any, b: any) => {
            return ("" + b.name).localeCompare(a.name);
          });
        } else {
          filteredCards = filteredCards.sort(
            (a: any, b: any) => b[typeOfOrder] - a[typeOfOrder]
          );
        }
      }
    };

    if (order === "orderPower") {
      ordering("power", filteredCards);
    } else if (order === "orderName") {
      ordering("name", filteredCards);
    } else {
      ordering("cost", filteredCards);
    }

    return filteredCards;
  };

  const handlePagination = (filteredCards: Array<object>) => {
    let paginationNav = document.getElementsByClassName(
      "paginationNavNumbers"
    )[0];
    paginationNav.innerHTML = "";

    for (let index = 0; index < filteredCards.length / 10; index++) {
      const navButton = document.createElement("button");
      const divContet = document.createTextNode(
        (index + 1) as unknown as string
      );
      navButton.appendChild(divContet);
      navButton.classList.add(
        "bg-btn_golden_yellow-500",
        "rounded-full",
        "w-5",
        "h-6",
        "text-center"
      );
      navButton.addEventListener("click", (e: any) => {
        updatePagination(e.currentTarget.innerHTML);
      });
      paginationNav.appendChild(navButton);
    }
    filteredCards = filteredCards.slice(
      (pagination - 1) * 10,
      (pagination - 1) * 10 + 10
    );
    return filteredCards;
  };

  useEffect(() => {
    let filteredCards: Array<object> = fullCollection;

    (async function filtering() {
      filteredCards = handlePoolFiltering(filteredCards);
      filteredCards = handleAbilitiesFiltering(filteredCards);
      filteredCards = handleCollectedFiltering(filteredCards);
      filteredCards = handleCardNameFiltering(filteredCards);
      filteredCards = handleOrder(filteredCards);
      filteredCards = handlePagination(filteredCards);

      await promisedSetModifiedCollection(filteredCards);
    })();
  }, [
    pool,
    abilities,
    orderRepetition,
    cardName,
    cardsCollected,
    pagination,
    stateForActivateRefreshOfCards,
  ]);

  const add_removeFromCollection = async (cardId: string) => {
    const addOrRemoveCardFromCollection = await api.post(
      `users/${localStorage.getItem("loggedUser")}/collection`,
      { CardDefId: cardId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("SavedJwtToken")}`,
        },
      }
    );

    fullCollection.forEach((element: any) => {
      if (element.CardDefId === cardId) {
        addOrRemoveCardFromCollection.data.includes("added")
          ? (element.collected = "1")
          : (element.collected = "0");
      }
    });
    setStateForActivateRefreshOfCards(!stateForActivateRefreshOfCards);
  };

  return (
    <section className="flex gap-2  max-h-screen relative">
      <Side_nav />
      <LogOutModel />

      <main
        className="
      flex flex-col justify-between
      p-5 w-full
      "
      >
        <nav
          className="bg-nav_blue-500 flex flex-col
          xs:grid xs:grid-rows-6 xs:grid-cols-12 xs:grid-flow-row 
        w-full
        justify-center items-center text-center align-middle self-center content-center
        gap-5 py-3
        rounded-3xl
      
        "
        >
          {/* cards collected */}
          <div className="w-full row-span-2  col-start-1 col-span-4 ">
            Collected
            <div className=" flex justify-evenly text-xs">
              <button
                onClick={(e) => updateCardsCollectedState(e.currentTarget.id)}
                id="yes"
                className=" collectedButtons"
              >
                Yes
              </button>
              <button
                onClick={(e) => updateCardsCollectedState(e.currentTarget.id)}
                id="no"
                className="collectedButtons"
              >
                No
              </button>
              <button
                onClick={(e) => updateCardsCollectedState(e.currentTarget.id)}
                id="clearCollected"
                className="collectedButtons"
              >
                Clear Collected
              </button>
            </div>
          </div>

          {/* order by */}
          <div className="w-full row-span-2 col-start-5 col-span-4">
            Order by
            <div className=" flex justify-evenly text-xs">
              <button
                onClick={(e) => updateOrderState(e.currentTarget.id)}
                id="orderName"
                className=" orderButtons"
              >
                Name
              </button>
              <button
                onClick={(e) => updateOrderState(e.currentTarget.id)}
                id="orderCost"
                className="orderButtons"
              >
                Cost
              </button>
              <button
                onClick={(e) => updateOrderState(e.currentTarget.id)}
                id="orderPower"
                className="orderButtons"
              >
                Power
              </button>
            </div>
          </div>

          {/* card name */}
          <div className="row-span-2 col-start-9 col-span-4">
            <input
              placeholder="Name a Card"
              onChange={(e) => updateCardNameState(e.currentTarget.value)}
              className="rounded-xl bg-form_gray-800 text-form_gray-500
              pl-2 w-[90%]              "
            />
          </div>

          {/* pool */}
          <div className="w-full row-span-2 col-span-12 col-start-1">
            Pool
            <div className=" flex flex-wrap justify-evenly gap-2 text-xs ">
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="Starter Card"
                className=" poolButtons"
              >
                0
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="1"
                className="poolButtons"
              >
                1
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="2"
                className="poolButtons"
              >
                2
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="3"
                className="poolButtons"
              >
                3
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="4"
                className="poolButtons"
              >
                4
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="5"
                className="poolButtons"
              >
                5
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="recruitSeason"
                className="poolButtons"
              >
                Recruit Season
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="+"
                className="poolButtons"
              >
                +
              </button>
              <button
                onClick={(e) => updatePoolState(e.currentTarget.id)}
                id="clearPool"
                className="poolButtons"
              >
                Clear pool
              </button>
            </div>
          </div>

          {/* Abilities */}
          <div className="w-full row-span-2  col-span-12 col-start-1">
            Abilities
            <ul className="flex flex-wrap gap-2 justify-evenly text-xs items-center">
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="Ongoing"
                  className=" abilitiesButtons"
                >
                  Ongoing
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="On Reveal"
                  className=" abilitiesButtons"
                >
                  On Reveal
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="Move"
                  className=" abilitiesButtons"
                >
                  Move
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="Destroy"
                  className=" abilitiesButtons break-all"
                >
                  Destroy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="Discard"
                  className=" abilitiesButtons"
                >
                  Discard
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="noAbilities"
                  className=" abilitiesButtons"
                >
                  No abilities
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => updateAbilitiesState(e.currentTarget.id)}
                  id="clearAbilities"
                  className=" abilitiesButtons"
                >
                  Clear abilities
                </button>
              </li>
            </ul>
          </div>

          {/* number pagination */}
          <div className="col-span-12 text-center text-base">
            Page {pagination}
          </div>
        </nav>

        <div
          className="flex flex-wrap justify-center 
        text-xxs  
        "
        >
          {modifiedCollection.map((card: any) => {
            return (
              <div
                className="flex flex-col
              items-center  group relative
              "
              >
                <Image
                  src={`https://static.marvelsnap.pro/cards/${card.CardDefId}.webp`}
                  alt="card"
                  width={120}
                  height={0}
                  className={`${
                    card.collected === "0" ? "grayscale" : ""
                  } w-20 xs:w-auto`}
                  onClick={(e) => add_removeFromCollection(e.currentTarget.id)}
                  id={card.CardDefId}
                />
                {card.name}
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
                    src={`https://static.marvelsnap.pro/cards/${card.CardDefId}.webp`}
                    alt="card"
                    width={400}
                    height={0}
                  />

                  <div>{card.name}</div>
                  <div id={card.name} className="text-xs">
                    {injectStringAsHtml(card.description)}
                  </div>
                  <div className="text-xxs">
                    {card.source !== ""
                      ? card.source
                      : card.connected_cards === "[]"
                      ? "Not available"
                      : card.connected_cards !== ""
                      ? `From ${card.connected_cards}`
                      : "Not available"}
                  </div>
                </span>
              </div>
            );
          })}
        </div>

        <nav
          className=" paginationNavNumbers
          flex justify-center flex-wrap
         bg-nav_blue-500  gap-2 py-3 rounded-full
         w-full text-black
         "
        ></nav>
      </main>
    </section>
  );
}

export const getServerSideProps = async () => {
  const responseMarvelPro = await fetch(
    "https://static2.marvelsnap.pro/snap/do.php?cmd=getcards",
    { mode: "no-cors" }
  );
  const jsonMarvelPro = await responseMarvelPro.json();

  const eachCardName = Object.keys(jsonMarvelPro);

  let fullCollection: Array<object> = [];

  eachCardName.forEach((cardsSearched: string) => {
    return fullCollection.push(jsonMarvelPro[cardsSearched]);
  });

  return {
    props: {
      fullCollection: fullCollection,
    },
  };
};
