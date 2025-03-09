import { useState } from "react";
import CategoryHeading from "./CategoryHeading";
import ProductCard from "./ProductCard";
export default function PageContent({ products, setCartCount }) {
  const [title, setTitle] = useState("Ninjago");

  return (
    <main>
      {/* Viser overskrift for kategorien */}
      <CategoryHeading title={title} />

      {/* Kommentarert ut HTML-kode som viser eksempler på produkter */}
      {/* 
            <article className="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
        */}
    </main>
  );
}