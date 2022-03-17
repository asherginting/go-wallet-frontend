import { Button } from "react-bootstrap";

export default function GoButton({ className, variant, children, ...rest }) {
  let classVariant = "";

  switch (variant) {
    case "primary":
      classVariant = "btn-primary text-white border-0";
      break;

    case "white":
      classVariant = "btn-secondary text-primary border-0";
      break;

    case "white-outline":
      classVariant = "btn-primary text-white border border-white";
      break;

    default:
      classVariant = "btn-primary text-white border-0";
      break;
  }

  return (
    <Button
      className={`${className} btn ${classVariant} px-4 py-2 fw-bolder rounded`}
      {...rest}
    >
      {children}
    </Button>
  )
}
