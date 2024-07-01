export default function Home({wines}) {
  return (
    <div>
      <h1 className="mb-8">List of Wines</h1>
      <hr></hr>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id} className="mb-3">
            <h2>{wine.name}</h2>
            <p>Price: ${wine.price}</p>
            <p>Average Review: {wine.average_review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/wines');

  if (!res.ok) {
    throw new Error('Failed to fetch wines')
  }

  const wines = await res.json();

  return {
    props: { wines }, // Les props seront passées au composant de la page
  };
}