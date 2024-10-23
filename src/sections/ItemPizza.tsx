import { Pizza } from "../models/pizza.model";

type Props = Pizza & {
  handleChanglePerson: (data: Pizza) => void;
};

const ItemPizza = ({ title, description, handleChanglePerson }: Props) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <button
        onClick={() =>
          handleChanglePerson({
            title: "Neit Dev 2024",
            description: "hoc lap trinh TS",
          })
        }
      >
        Change Person
      </button>
    </div>
  );
};
export default ItemPizza;
