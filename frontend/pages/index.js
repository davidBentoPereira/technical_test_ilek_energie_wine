import { useState, useEffect } from 'react'

// export default function Home({wines}) {
export default function Home() {
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/wines')
      .then((res) => res.json())
      .then((data) => {
        setWines(data);
      })
  }, [])

  function filterWines(value) {
    const minPrice = value

    fetch(`http://localhost:3000/wines?min_price=${minPrice}`)
      .then((res) => res.json())
      .then((data) => {
        setWines(data);
      })
  }

  return (
    <div>
      <h1 className="mb-8">Wines</h1>

      <div className="text-gray-700">
        <input type="number" id="minPrice" name="minPrice" placeholder="Min Price" className="mr-2" onChange={(e) => {filterWines(e.target.value);}} />
        <input type="number" id="maxPrice" name="maxPrice" placeholder="Max Price"/>
      </div>

      <hr></hr>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id} className="mb-3">
            <h2>{wine.name}</h2>
            <p>Price: {wine.price}€</p>
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
    props: { wines }
  };
}