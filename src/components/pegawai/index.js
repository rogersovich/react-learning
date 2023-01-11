import { useState } from "react"
import ModalCreateKartu from "./modal"
import KartuNama from "./kartu-nama"


const SectionPegawai = () => {
  
  const [modalShow, setModalShow] = useState(false)
  const [listPegawai, setListPegawai] = useState([
    {
      name: "Dimas",
      umur: 19,
      status_absen: false,
    },
    {
      name: "Sheila",
      umur: 17,
      status_absen: true,
    },
    {
      name: "Herman",
      umur: 26,
      status_absen: false,
    },
    {
      name: "Killua",
      umur: 15,
      status_absen: false,
    },
    {
      name: "Kiwil",
      umur: 30,
      status_absen: false,
    },
  ])

  const handleChangeAbsen = (props) => {
    if (!props.status) {
      setListPegawai((prev) =>
        prev.map((obj) => {
          if (obj.name === props.name) {
            return { ...obj, status_absen: true }
          }

          return obj
        })
      )
    } else {
      alert("LU UDAH ABSEN WOI")
    }
  }

  const handleChangeName = (ID) => (e) => {
    setListPegawai((prev) =>
      prev.map((obj, index) => {
        if (index === ID) {
          return { ...obj, name: e.target.value }
        }

        return obj
      })
    )
  }
  const handleDelete = (ID) => {
    setListPegawai((prev) =>
      prev.filter((obj, index) => {
        return index !== ID
      })
    )
  }

  const handleAdd = (props) => {
    setListPegawai((prev) => [...prev, props])
    setModalShow(false)
  }

  return (
    <div>
      
      <div className="fcb">
        <h1>Ini Kartu Petugas</h1>
        <div>
          <button onClick={() => setModalShow(true)}>Tambah Petugas</button>
        </div>
      </div>
      <ModalCreateKartu
        title="Tambah Pegawai Baru"
        show={modalShow}
        onClose={() => setModalShow(false)}
        onSubmit={handleAdd}
      ></ModalCreateKartu>
       <div style={{ display: "flex", gap: "10px", flexFlow: "wrap" }}>
        {listPegawai.map((item, index) => (
          <KartuNama
            key={index}
            id={index}
            onAbsen={handleChangeAbsen}
            onDelete={handleDelete}
            onChangeInput={handleChangeName}
            name={item.name}
            umur={item.umur}
            status={item.status_absen}
          ></KartuNama>
        ))}
      </div>
    </div>
  )
}

export default SectionPegawai
