import { useEffect, useState } from "react";
import LogoPizza from "../assets/pizza.png";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/pizza.model";
import ItemPizza from "../sections/ItemPizza";
import { log } from "console";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: "Pizza Thịt băm", description: "Thịt Bằm, Sốt Cà Chua" },
    { id: 2, title: "Pizza Phomai", description: "Phomai, Sốt Mật Ong" },
    { id: 3, title: "Pizza Hải Sản", description: "Tôm, cua, các thể loại" },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render useEffect");
    setPizzas([
      ...pizzas,
      { id: 4, title: "Pizza Chay", description: "Toàn rau" },
    ]);
  }, [count]);

  const [person, setPerson] = useState<Pizza>({
    title: "Neit Dev",
    description: "Hoc lap trinh",
  });

  const handChanglePerson = (data: Pizza) => {
    setPerson(data);
  };

  const handleRemovePizza = (id: number) => {
    const indexPizza = pizzas.findIndex((item) => item.id === id); // lấy id (vị trí) của pizza
    let newPizzas = [...pizzas]; // vì do biến const không thể thay đổi được nên là phải lưu vào 1 biến mới ở đây là newPizzas bằng cú pháp ...
    newPizzas.splice(indexPizza, 1);
    setPizzas(newPizzas);
  };
  console.log("Render Template");

  return (
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflowY: "auto",
      }}
    >
      <div className="wrapper-card-items">
        {pizzas.map((item) => (
          <CardPizza
            id={item.id}
            title={item.title}
            description={item.description}
            handleRemovePizza={handleRemovePizza}
          />
        ))}
      </div>
      <ItemPizza
        title={person.title}
        description={person.description}
        handleChanglePerson={handChanglePerson}
      />
      <button className="btn-main" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};
export default HomePage;
