import { Link } from "react-router-dom"
import sofa1 from "../assets/sofa1.webp"
import sofa2 from "../assets/sofa2.webp"
import sofa3 from "../assets/sofa3.webp"
import sofa4 from "../assets/sofa4.webp"
import { useEffect, useState } from "react"

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then(state => state.json())
      .then(data => {
        console.log(data.data);
        return setData(data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="align-element py-20">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
          <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <div className="mt-10"><Link className="btn btn-primary uppercase" to="/products">Our Products</Link></div>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src={sofa1} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={sofa2} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={sofa3} width={320} height={416} className="rounded-box object-cover" />
          </div>
          <div className="carousel-item">
            <img src={sofa4} width={320} height={416} className="rounded-box object-cover" />
          </div>
        </div>
        <div className="pt-24">


        </div>
      </div>
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">featured products</h2>
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {
        data.map((data, i) => {
          let price = data.attributes.price
          price = price / 100
          return (
            
              <Link key={i} className="card w-full shadow-xl hover:shadow-2xl transition duration-300" to="/products"><figure className="px-4 pt-4"><img src={data.attributes.image} alt={data.attributes.title} className="rounded-xl h-64 md:h-48 w-full object-cover" /></figure><div className="card-body items-center text-center"><h2 className="card-title capitalize tracking-wider">{data.attributes.title}</h2><span className="text-base-content">${price}</span></div></Link>
            
          )
        })
      }
      </div>
    </div>
  )
}

export default Home