import React, { useState } from "react";
import styles from "./index.module.css";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
import ReturnAndContinueDiv from "../../components/ReturnAndContinueDiv";
import characterIcon from "../../assets/icons/freedom-of-choice.png";
import { ROUTE_NAMES } from "../../constants";
import CharacterButton from "../../components/CharacterButton";
import { useGiftFinderContext, setCharacter } from "../../store";

function Character() {
  const characterInfo = [
    {
      id: "gym rat",
      text: "The Gym Rat",
      imgSrc: "gym-rat.png",
    },
    {
      id: "traveller",
      text: "The Traveller",
      imgSrc: "traveller.png",
    },
    {
      id: "emo",
      text: "The Emo",
      imgSrc: "emo.png",
    },
    {
      id: "geek",
      text: "The Geek",
      imgSrc: "geek.png",
    },
    {
      id: "dad",
      text: "The Airport Dad",
      imgSrc: "airport-dad.png",
    },
    {
      id: "mom",
      text: "The Foodie Mom",
      imgSrc: "foodie-mom.png",
    },
    {
      id: "influencer",
      text: "The Influencer",
      imgSrc: "influencer.png",
    },
    {
      id: "spiritualist",
      text: "The Spiritualist",
      imgSrc: "spiritualist.png",
    },
  ];

  const { state, dispatch } = useGiftFinderContext();
  const [selected, setSelected] = useState(null);

  const selectedStyle = {
    filter: "none",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <>
      <Icon src={characterIcon} />
      <Title text="3. Choose the character that fits most:" />
      <div className={styles.scrollable}>
        <div className={styles["row-of-buttons"]}>
          {characterInfo.map((char) => {
            const addSelectedStyle = char.id === selected;

            return (
              <CharacterButton
                style={addSelectedStyle ? selectedStyle : {}}
                id={char.id}
                imgSrc={char.imgSrc}
                text={char.text}
                onClick={() => {
                  setSelected(char.id);
                }}
              />
            );
          })}
        </div>
        <ReturnAndContinueDiv
          returnPath={ROUTE_NAMES.CATEGORY}
          continuePath={ROUTE_NAMES.RESULT}
          onContinueClick={() => dispatch(setCharacter(selected))}
        />
      </div>
    </>
  );
}

export default Character;
