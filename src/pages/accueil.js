import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { HeroImage } from "../components/Hero";
import { Footer } from "../components/Footer";

export function Accueil() {
  return (
    <div>
      <Header></Header>
      <HeroImage></HeroImage>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}
