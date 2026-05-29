const products = [
  { name: "Whey Protein", price: "$49" },
  { name: "Creatine", price: "$25" },
  { name: "Pre Workout", price: "$35" },
  { name: "Mass Gainer", price: "$60" }
];

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="grid">
        {products.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}