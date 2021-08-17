import React from "react";
import styles from "./index.module.css";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
import ReturnAndContinueDiv from "../../components/ReturnAndContinueDiv";
import characterIcon from "../../assets/icons/freedom-of-choice.png";
import { ROUTE_NAMES } from "../../constants";
import CharacterButton from "../../components/CharacterButton";

function Character() {
  return (
    <>
      <Icon src={characterIcon} />
      <Title text="3. Choose the character that fits most:" />
      <div className={styles.scrollable}>
        <div className={styles["row-of-buttons"]}>
          <CharacterButton
            id="gym rat"
            text="The Gym Rat"
            imgSrc="gym-rat.png"
          />
          <CharacterButton
            id="traveller"
            text="The Traveller"
            imgSrc="traveller.png"
          />
          <CharacterButton id="emo" text="The Emo" imgSrc="emo.png" />
          <CharacterButton id="geek" text="The Geek" imgSrc="geek.png" />
          <CharacterButton
            id="dad"
            text="The Airport Dad"
            imgSrc="airport-dad.png"
          />
          <CharacterButton
            id="mom"
            text="The Foodie Mom"
            imgSrc="foodie-mom.png"
          />
          <CharacterButton
            id="influencer"
            text="The Influencer"
            imgSrc="influencer.png"
          />
          <CharacterButton
            id="spiritualist"
            text="The Spiritualist"
            imgSrc="spiritualist.png"
          />
        </div>
        <ReturnAndContinueDiv
          returnPath={ROUTE_NAMES.CATEGORY}
          continuePath={ROUTE_NAMES.RESULT}
        />
      </div>
    </>
  );
}

export default Character;
