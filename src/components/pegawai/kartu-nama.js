import { useState } from "react"

function KartuNama(props) {
  const styleCard = {
    border: "1px solid #000",
    width: 250,
    padding: "0px 15px 20px 15px",
    background: "yellow",
    marginBottom: "20px",
  }
  const fcb = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div style={styleCard}>
      <div style={fcb}>
        <div>
          {isEdit ? (
            <input
              style={{padding: '5px', marginTop: '10px'}}
              type="text"
              value={props.name}
              onChange={props.onChangeInput(props.id)}
            />
          ) : (
            <h2>{props.name}</h2>
          )}
        </div>
        <button onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? 'Selesai' : 'Edit'}
        </button>
      </div>
      <p>Umur : {props.umur}</p>
      <p>Status : {props.status ? "Telah Absen" : "Belum Absen"}</p>
      <div style={fcb}>
        <button onClick={() => props.onAbsen(props)}>Absen Ah</button>
        <button onClick={() => props.onDelete(props.id)}>Hapus Pegawai</button>
      </div>
    </div>
  )
}

export default KartuNama
