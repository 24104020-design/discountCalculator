import {useState} from 'react'

function App() {
  const [count, setcount] = useState(" ")
  const [price, setprice] = useState(" ")
  const [discount, setdicount] = useState(" ")
  const [total, settotal]= useState(" ")

  const handleCountChange = (e) => {
    setcount(e.target.value)
  }

  const handlePriceChange = (e) => {
    setprice(e.target.value)
  }

  const handleDiscountChange = (e) => {
    setdicount(e.target.value)
  }

  const handleTotalChange = () => {
    settotal(count * price - discount)
  }
  return (
    <div>
      <h1>Discount Calculator</h1>
      <button
        onClick={handleTotalChange}
      >
        Calculate Total
      </button>
      <div>
        <h2>total Price</h2>
        <input
          type="number"
          value={count}
          onclick={handleCountChange}
          />
          <button
            onClick={() => setcount(count + 1)}
          >
          </button>
          </div>
          <div>
            <h2>Price</h2>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
    </div>
  )

  
}
export default App;
