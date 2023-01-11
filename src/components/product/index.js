import { useEffect, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import CardProduct from "./card-product"
import ModalProduct from "./modal-product"
import Loading from "./loading"
import Btn from "../button"
import "sweetalert2/src/sweetalert2.scss"
import Swal from "sweetalert2"
import { listProduct, createProduct } from "services/product.js"

const SectionProduct = () => {
  const [loading, setLoading] = useState(false)
  const [dummy, setDummy] = useState([])
  const [detailDummy, setDetailDummy] = useState({})
  const [modalDummy, setModalDummy] = useState(false)
  const [modalCreate, setModalCreate] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setModalCreate(false)
    setLoading(true)
    await createProduct(data).then((res) => {
      setLoading(false)

      if (res.status === 200) {
        Swal.fire({
          title: "Success!",
          icon: "success",
          timer: 1500,
        })
      } else {
        Swal.fire({
          title: "Gagal!",
          icon: "error",
          timer: 1500,
        })
      }
    })
  }

  const openModal = () => {
    reset()
    setModalCreate(true)
  }

  const fetchProduct = async () => {
    await listProduct().then((res) => {
      const { data } = res
      setDummy(data.products)

      return true
    })
  }

  const seeDetailProduct = async (ID) => {
    setLoading(true)
    await axios.get(`https://dummyjson.com/products/${ID}`).then((res) => {
      const { data } = res
      setDetailDummy(data)
      setLoading(false)
    })
    setModalDummy(true)
  }

  const handleDelete = async (ID) => {
    setLoading(true)
    await axios.delete(`https://dummyjson.com/products/${ID}`).then((res) => {
      reset()
      setLoading(false)
      if (res.status === 200) {
        Swal.fire({
          title: "Success!",
          icon: "success",
          timer: 1500,
        })
      } else {
        Swal.fire({
          title: "Gagal!",
          icon: "error",
          timer: 1500,
        })
      }
    })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      <Loading loading={loading}></Loading>
      <div className="fcb">
        <h1>Ini JSON Dummy</h1>
        <div>
          <button onClick={() => openModal()}>Tambah</button>
        </div>
      </div>

      {dummy.length > 0 ? (
        <>
          <div className="tw-grid tw-grid-cols-12 tw-gap-3">
            {dummy.map((product) => (
              <CardProduct
                key={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                brand={product.brand}
                description={product.description}
                showModal={() => seeDetailProduct(product.id)}
                onDelete={() => handleDelete(product.id)}
              ></CardProduct>
            ))}
          </div>
          <ModalProduct
            title="Tambah Produk"
            show={modalCreate}
            onClose={() => setModalCreate(false)}
          >
            <div
              className="tw-px-4 tw-py-4 tw-overflow-y-auto"
              style={{ minHeight: "150px", maxHeight: "300px" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tw-mb-3">
                  <div className="tw-flex">
                    <input
                      className="tw-border tw-border-blue-500 tw-px-2 tw-py-2 tw-rounded tw-w-full"
                      placeholder="Masukan Title"
                      {...register("title", { required: true })}
                    />
                  </div>
                  {errors.title && (
                    <div className="tw-text-xs tw-text-red-500 tw-pt-1">
                      This field is required
                    </div>
                  )}
                </div>
                <div className="tw-mb-3">
                  <div className="tw-flex">
                    <input
                      className="tw-border tw-border-blue-500 tw-px-2 tw-py-2 tw-rounded tw-w-full"
                      placeholder="Masukan description"
                      {...register("description", { required: true })}
                    />
                  </div>
                  {errors.description && (
                    <div className="tw-text-xs tw-text-red-500 tw-pt-1">
                      This field is required
                    </div>
                  )}
                </div>
                <div className="tw-mb-3">
                  <div className="tw-flex">
                    <input
                      className="tw-border tw-border-blue-500 tw-px-2 tw-py-2 tw-rounded tw-w-full"
                      placeholder="Masukan price"
                      {...register("price", { required: true })}
                    />
                  </div>
                  {errors.price && (
                    <div className="tw-text-xs tw-text-red-500 tw-pt-1">
                      This field is required
                    </div>
                  )}
                </div>
                <div className="fce">
                  <Btn type="submit" color="#4f46e5" large>
                    Submit
                  </Btn>
                </div>
              </form>
            </div>
          </ModalProduct>

          <ModalProduct
            title={detailDummy.title}
            show={modalDummy}
            onClose={() => setModalDummy(false)}
          >
            {modalDummy && (
              <>
                <div
                  className="tw-px-4 tw-py-4 tw-overflow-y-auto"
                  style={{ minHeight: "200px", maxHeight: "300px" }}
                >
                  <div className="tw-grid tw-grid-cols-3 tw-gap-3">
                    {detailDummy.images.map((dummy, i) => (
                      <LazyLoadImage
                        key={i}
                        alt={detailDummy.title}
                        src={dummy}
                        height="125"
                        width={"100%"}
                        effect="blur"
                        className="tw-border tw-border-blue-400 tw-object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <p>{detailDummy.description}</p>
                    <p className="tw-text-orange-500">
                      Price : ${detailDummy.price}
                    </p>
                    <p>stok : {detailDummy.stock}</p>
                    <p>brand : {detailDummy.brand}</p>
                    <p>category : {detailDummy.category}</p>
                  </div>
                </div>
              </>
            )}
          </ModalProduct>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default SectionProduct
