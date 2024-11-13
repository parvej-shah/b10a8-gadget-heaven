import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState([])
  console.log(count);
  useEffect(() => {
    fetch('/products.json')
    .then(res=>res.json())
    .then(data=>setCount(data))
  }, [])
  

  return (
    <div>
    <h4>Labib</h4>
      {
        count.map(product=><img src={product.product_image}></img>)
      }
    </div>
  )
}

export default App
