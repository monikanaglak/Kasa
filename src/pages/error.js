import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
export function Error() {
  return (
    <div>
      <Header></Header>
      <main className="container_error">
        <div className="numbererror">
          <p>404</p>
        </div>
        <div className="slogan_error">
        <h2 className="text-error">
          Oups! La page que</h2>
          <h2 className="text-errordeux">vous demandez n'existe pas
        </h2>
        </div>
        <Link to="/" className="retour_page">
          Retournez sur la page d'accueil
        </Link>
      </main>
      <Footer></Footer>
    </div>
  );
}
