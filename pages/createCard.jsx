import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

const CreateCard = ({ pageTitle }) => {
  return (
    <>
      <Header pageTitle="Add a card" />
      <section>
        <p>Add a card</p>
      </section>
      <Navbar />
    </>
  );
};
export default CreateCard;
