import { Header } from "../components/Header";
import { Prospectus } from "../components/Prospectus";
import { useParams } from "react-router";
import data_apparts from "../data_apparts/appartments.js";
import Dropdown from "../components/Dropdown";
import { Carrousel } from "../components/Carrousel";
import { Error } from "./error";
import { Footer } from "../components/Footer";
export function Appartment() {
  const { id } = useParams();
  const local = data_apparts.find((item) => item.id === id);
  if (local) {
    return (
      <div>
        <Header></Header>
        <Carrousel pictures={local.pictures} />

        <Prospectus key={id} {...local}></Prospectus>
        <Dropdown {...local}></Dropdown>
        <Footer></Footer>
      </div>
    );
  } else {
    return <Error></Error>;
  }
}
