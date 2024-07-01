import { useState, forwardRef, useImperativeHandle } from 'react'
export default function FilterForm({fetchWines}) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

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
    <div className="text-gray-700 flex space-x-2 mb-8">
      <div>
        <label htmlFor="minPrice" className="text-white text-sm font-bold mb-2">Minimum Price: </label>
        <input type="number" id="minPrice" name="minPrice" placeholder="Min Price"
               value={minPrice}
               onChange={handleMinPriceChange}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label htmlFor="minPrice" className="text-white text-sm font-bold mb-2">Minimum Price: </label>
        <input type="number" id="maxPrice" name="maxPrice" placeholder="Max Price"
               value={maxPrice}
               onChange={handleMaxPriceChange}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  )
}