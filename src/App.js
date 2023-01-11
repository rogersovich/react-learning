import { useEffect, useState } from "react"
import "./App.css"
import Introduction from "./components/introduction"
import SectionPegawai from "./components/pegawai"
import SectionProduct from "./components/product"

function App() {
  const [makananSaya, setMakananSaya] = useState(1)
  const [namaMakanan, setNamaMakanan] = useState("")


  useEffect(() => {
    if (makananSaya > 1) {
      setNamaMakanan("Pizza")
    } else {
      setNamaMakanan("Baso")
    }
  }, [makananSaya])


  return (
    <div style={{ padding: "20px" }}>
      <h5>Nama Makanan Saya {namaMakanan}</h5>
      <h1>Jumlah Makanan ada {makananSaya}</h1>
      <button onClick={() => setMakananSaya((prev) => prev + 1)}>
        Tambah Makanan
      </button>
      <button
        onClick={() => setMakananSaya((prev) => (prev === 0 ? prev : prev - 1))}
      >
        Buang Makanan
      </button>

      <hr />
      <SectionProduct></SectionProduct>
      <hr />
      <SectionPegawai></SectionPegawai>
      <Introduction name="Dimas Roger" />
      <Introduction name="Kucing Merah" />
    </div>
  )
}

export default App
