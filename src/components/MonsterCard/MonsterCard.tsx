/* eslint-disable @typescript-eslint/no-unused-vars */
import { Monster } from "../../types";
import modStyle from "./MonsterCard.module.css";

interface Props {
  monster: Monster;
  isSelected: boolean;
  handleSelectMonster: (monster: Monster) => void;
}

export const MonsterCard = ({
  monster,
  handleSelectMonster,
  isSelected = false,
}: Props) => {
  const { id, name } = monster;

  return (
    <button
      className={modStyle.container}
      onClick={(event) => {
        handleSelectMonster(monster);
      }}
      style={{ opacity: isSelected ? 1 : 0.6 }}
    >
      {name}
    </button>
  );
};
