import { Link } from "react-router";

export default function Nav() {
  const categories = [
    {
      id: 1,
      name: "City",
      slug: "city"
    },
    {
      id: 2,
      name: "Ninjago",
      slug: "ninjago"
    },
    {
      id: 3,
      name: "Castles and Knights",
      slug: "castles-and-knights"
    },
    {
      id: 4,
      name: "Marine and Pirates",
      slug: "marine-and-pirates"
    },
    {
      id: 5,
      name: "Movie Characters",
      slug: "movie-characters"
    },
  ];
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {/* Konstruert category-path via Link-komponent for å støtte React Router*/}
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
