import { useState, useEffect} from 'react'
import Wines from '@/pages/_components/Wines'
import FilterForm from "@/pages/_components/FilterForm";

// export default function Home({wines}) {
export default function Home() {
  const [wines, setWines] = useState([])

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

  return (
    <div className="m-8">
      <h1 className="text-2xl mb-8">Wines ({wines.length})</h1>
      <FilterForm fetchWines={fetchWines}/>
      <Wines wines={wines} />
    </div>
  );
}