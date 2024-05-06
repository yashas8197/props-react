const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
];

const products = [
  { id: 1, name: "Keyboard", price: 50, category: "Electronics" },
  { id: 2, name: "Mouse", price: 20, category: "Electronics" },
  { id: 3, name: "Book", price: 10, category: "Stationery" },
  { id: 4, name: "Headphones", price: 100, category: "Electronics" },
];

const store = {
  name: "Tech Emporium",
  categories: [
    {
      id: 1,
      name: "Electronics",
      itemDetail: { id: 101, product: "Laptop", inStock: true },
    },
    {
      id: 2,
      name: "Accessories",
      itemDetail: { id: 201, product: "Headphones", inStock: true },
    },
    {
      id: 3,
      name: "Appliances",
      itemDetail: { id: 301, product: "Heater", inStock: false },
    },
  ],
};

const orders = [
  {
    id: 1,
    customer: "John Doe",
    totalAmount: 150,
    products: [
      { id: 101, name: "Widget", quantity: 2 },
      { id: 102, name: "Gadget", quantity: 1 },
    ],
  },
  {
    id: 2,
    customer: "Alice Smith",
    totalAmount: 200,
    products: [
      { id: 103, name: "Tool", quantity: 1 },
      { id: 104, name: "Device", quantity: 3 },
    ],
  },
  {
    id: 3,
    customer: "Bob Johnson",
    totalAmount: 100,
    products: [{ id: 105, name: "Accessory", quantity: 5 }],
  },
];

const foods = [
  { id: 1, name: "Apple", calories: 52, category: "Fruit" },
  { id: 2, name: "Banana", calories: 89, category: "Fruit" },
  { id: 3, name: "Chicken Breast", calories: 165, category: "Protein" },
  { id: 4, name: "Salad", calories: 100, category: "Vegetable" },
  { id: 5, name: "Yogurt", calories: 120, category: "Dairy" },
];

const vehicles = [
  { id: 1, name: "Car", distance: 150 },
  { id: 2, name: "Motorcycle", distance: 45 },
  { id: 3, name: "Bicycle", distance: 10 },
  { id: 4, name: "Motorcycle", distance: 75 },
  { id: 5, name: "Bicycle", distance: 50 },
  { id: 6, name: "Motorcycle", distance: 175 },
];

const allProducts = [
  {
    id: 1,
    name: "Dell Laptop",
    price: 12000,
    features: { color: "green", isWaterProof: false },
  },
  {
    id: 2,
    name: "Nokia Smartphone",
    price: 8000,
    features: { color: "blue", isWaterProof: true },
  },
  {
    id: 3,
    name: "HP Laptop",
    price: 15000,
    features: { color: "silver", isWaterProof: true },
  },
  {
    id: 4,
    name: "Bose Headphones",
    price: 1500,
    features: { color: "silver", isWaterProof: false },
  },
  {
    id: 5,
    name: "Apple Watch",
    price: 14000,
    features: { color: "gold", isWaterProof: true },
  },
];

const ProductsDisplay = ({allProducts}) => {
  const aboveLimit = allProducts.filter(product => product.price > 10000 && product.features.isWaterProof)
  return (
    <div>
      <h1>Product Information</h1>
      <h2>WaterProof Products with Price above 10000</h2>
      <ul>
        {aboveLimit.map(product => (
          <li>
            <h4>{product.name}</h4>
            <p>Price: {product.price}</p>
            <p>Color: {product.features.color}</p>
            <p>isWaterProof: {product.features.isWaterProof ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const AverageDistanceTraveled = ({ vehicles }) => {
  const getVehiclesByName = vehicles.filter(
    (vehicle) => vehicle.name === "Motorcycle",
  );
  const totalDistance = getVehiclesByName.reduce(
    (acc, curr) => acc + curr.distance,
    0,
  );
  const averageDistance = totalDistance / getVehiclesByName.length;
  return (
    <div>
      <h1>Vehicles Information</h1>
      <h2>Average Distance Traveled By Motorcycle</h2>
      <p>Total Number of Motorcycle Vehicle: {getVehiclesByName.length}</p>
      <p>Average Distance Traveled By Motorcycle: {averageDistance.toFixed(2)} miles</p>
    </div>
  );
};

const HighCalorieFoods = ({ foods }) => {
  const caloriesGreater = foods.filter((food) => food.calories >= 100);
  return (
    <div>
      <h1>Food Information</h1>
      <h2>High Calorie Foods (100 Calories and Above)</h2>
      <ul>
        {caloriesGreater.map((food) => (
          <li>
            <p>
              <strong>Name: </strong>
              {food.name}
            </p>
            <p>
              <strong>Calories: </strong>
              {food.calories}
            </p>
            <p>
              <strong>Category: </strong>
              {food.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FindOrder = ({ orders }) => {
  const getOrderByName = orders.find(
    (order) => order.customer === "Alice Smith",
  );
  return (
    <div>
      <h1>Find Orders</h1>
      {!getOrderByName ? (
        <h2>Order Details not Found</h2>
      ) : (
        <>
          <h2>Order Details</h2>
          <p>
            <strong>Customer: </strong>
            {getOrderByName.customer}
          </p>
          <p>
            <strong>Total Amount: </strong>
            {getOrderByName.totalAmount}
          </p>
          <p>
            <strong>Products: </strong>
          </p>
          <ul>
            {getOrderByName.products.map((product) => (
              <li>
                {product.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const StockCount = ({ store }) => {
  const categoryInStock = store.categories.filter(
    (category) => category.itemDetail.inStock === true,
  );
  return (
    <div>
      <h1>Store Inventory</h1>
      <h2>{store.name}</h2>
      <h3>Stock Count</h3>
      <p>Total Items in Stock: {categoryInStock.length}</p>
    </div>
  );
};

const FindProduct = () => {
  const getProductById = products.find((product) => product.id === 2);
  return (
    <div>
      {!getProductById ? (
        <h2>Product not found</h2>
      ) : (
        <div>
          <h1>Find Product</h1>
          <h2>Product Details</h2>
          <p>
            <strong>Id: </strong>
            {getProductById.id}
          </p>
          <p>
            <strong>Name: </strong>
            {getProductById.name}
          </p>
          <p>
            <strong>Price: </strong>
            {getProductById.price}
          </p>
          <p>
            <strong>Category: </strong>
            {getProductById.category}
          </p>
        </div>
      )}
    </div>
  );
};

const BookDetails = ({ books }) => {
  const getBookByName = books.find(
    (book) => book.title === "To Kill a Mockingbird",
  );
  return (
    <div>
      <h1>Book Details</h1>
      <h2>{getBookByName.title}</h2>
      <p>
        <strong>Author: </strong>
        {getBookByName.author}
      </p>
      <p>
        <strong>Genre: </strong>
        {getBookByName.genre}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <BookDetails books={books} />
      <hr />
      <FindProduct products={products} />
      <hr />
      <StockCount store={store} />
      <hr />
      <FindOrder orders={orders} />
      <hr />
      <HighCalorieFoods foods={foods} />
      <hr />
      <AverageDistanceTraveled vehicles={vehicles} />
      <hr/>
      <ProductsDisplay allProducts={allProducts}/>
    </main>
  );
}
