export default function Wines({wines}) {
  function convertCentsToEuros(price_in_cents) {
    return price_in_cents / 100
  }

  return (
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
  );
}