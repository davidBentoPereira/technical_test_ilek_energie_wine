import { useState, useEffect } from 'react'

// export default function Home({wines}) {
export default function Home() {
  const [wines, setWines] = useState([])
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetchWines();
  }, []);

  function fetchWines(minPrice = '', maxPrice = '') {
    let url = 'http://localhost:3000/wines';

    if (minPrice || maxPrice) {
      const params = new URLSearchParams();
      if (minPrice) { params.append('min_price', minPrice * 100); } // add "00" to convert back in cents
      if (maxPrice) { params.append('max_price', maxPrice * 100); } // add "00" to convert back in cents
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWines(data);
      })
      .catch((error) => {
        console.error('Error fetching wines:', error);
      });
  }

  function convertCentsToEuros(price_in_cents) {
    return price_in_cents / 100
  }

  function handleMinPriceChange(e) {
    const value = e.target.value;
    setMinPrice(value);
    fetchWines(value, maxPrice);
  }

  function handleMaxPriceChange(e) {
    const value = e.target.value;
    setMaxPrice(value);
    fetchWines(minPrice, value);
  }

  return (
    <div className="m-8">
      <h1 className="text-2xl mb-8">Wines ({wines.length})</h1>

      {/* Form */}
      <div className="text-gray-700 flex space-x-2 mb-8">
        <div>
          <label htmlFor="minPrice" className="text-white text-sm font-bold mb-2">Minimum Price: </label>
          <input type="number" id="minPrice" name="minPrice" placeholder="Min Price" value={minPrice} onChange={handleMinPriceChange}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="minPrice" className="text-white text-sm font-bold mb-2">Minimum Price: </label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="Max Price" value={maxPrice} onChange={handleMaxPriceChange}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      {/* List */}
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>
            <div className="mb-3 p-4 rounded-md bg-gray-800">
              <h2 className="text-lg">{wine.name}</h2>
              <p>Avg. Review: {wine.average_review}/5</p>
              <p>Price: {convertCentsToEuros(wine.price)}€</p>
              <p>Description: {wine.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}