import { useEffect, useState } from "react";
import "./App.css";
import { MonsterCard } from "./components";
import { Monster } from "./types";

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  const [monsterSelected, setMonsterSelected] = useState<Monster | null>(null);
  const [monsterSelected2, setMonsterSelected2] = useState<Monster | null>(
    null
  );

  const handleSelectMonster = (monster: Monster) => {
    //
    setMonsterSelected(monster);
    handleSelectMonster2(monster);
  };

  const handleSelectMonster2 = (userMonster: Monster) => {
    //
    const filteredList = monsters.filter(
      (monster) => monster.id !== userMonster.id
    );

    const randomMonster =
      filteredList[Math.floor(Math.random() * filteredList.length)];

    setMonsterSelected2(randomMonster);
  };

  const handleInitBattle = () => {
    fetch("http://localhost:3000/api/init-battle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
      },
      body: JSON.stringify({
        user: monsterSelected?.id,
        ai: monsterSelected2?.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/monsters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data.data);
      });
  }, []);

  return (
    <div>
      <br />
      <div className="vs-container">
        <span>{monsterSelected?.name ?? "Select a monster"}</span>
        <span>VS</span>
        <span>{monsterSelected2?.name ?? "---"}</span>
      </div>
      <br />
      <br />
      <div className="cards-monsters-container">
        {monsters
          .filter(
            (monster) =>
              monster.id !== monsterSelected2?.id &&
              monster.id !== monsterSelected?.id
          )
          .map((monster) => {
            return (
              <MonsterCard
                key={monster.id}
                monster={monster}
                handleSelectMonster={handleSelectMonster}
                isSelected={monster.id === monsterSelected?.id}
              />
            );
          })}
      </div>
      <br />
      <button
        disabled={!monsterSelected || !monsterSelected2}
        onClick={(event) => {
          handleInitBattle();
        }}
      >
        Initiate battle
      </button>
    </div>
  );
}

export default App;
