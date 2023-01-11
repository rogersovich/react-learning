import { useState } from "react"

function ModalCreateKartu(props) {
  const modal = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const modalContent = {
    width: "500px",
    backgroundColor: "#fff",
  }

  const modalHeader = {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }

  const modalFooter = {
    padding: "10px",
  }

  const modalBody = {
    padding: "10px",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
  }

  const [pegawai, setPegawai] = useState({ name: "", umur: "" })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setPegawai({ ...pegawai, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const age = pegawai.umur;

    if (!Number(age)) {
      alert('Your age must be a number');
      return;
    }

    const bodyData = {
      name: pegawai.name,
      umur: age,
      status_absen: false
    }

    props.onSubmit(bodyData)
  };

  if (!props.show) {
    return null
  }

  return (
    <div style={modal} onClick={props.onClose}>
      <div style={modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeader}>
          <b>{props.title}</b>
          <button onClick={props.onClose}>Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={modalBody}>
            <p>
              <input
                type="text"
                name="name"
                placeholder="masukan nama"
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="number"
                name="umur"
                placeholder="masukan umur"
                onChange={handleChange}
              />
            </p>
          </div>
          <div style={modalFooter}>
            <button type="submit">Tambahkan</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalCreateKartu
