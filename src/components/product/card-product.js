import { LazyLoadImage } from "react-lazy-load-image-component"
import { RiCloseFill } from "react-icons/ri"

function CardProduct(props) {
  return (
    <div className="tw-bg-blue-200 tw-px-4 tw-py-3 tw-rounded-md tw-shadow-sm tw-col-span-4">
      <div className="tw-relative">
        <RiCloseFill
          color="red"
          size={30}
          className="tw-absolute tw-z-10 tw-top-2 tw-right-2 tw-cursor-pointer"
          onClick={props.onDelete}
        />
        <LazyLoadImage
          alt={props.title}
          src={props.thumbnail}
          height="200"
          width={"100%"}
          effect="blur"
          className="tw-cursor-pointer"
          onClick={props.showModal}
        />
      </div>
      <h3>
        {props.title} - {props.brand}
      </h3>
      <div className="tw-text-orange-600">$ {props.price}</div>
      <p className="tw-text-sm">{props.description}</p>
    </div>
  )
}

export default CardProduct
