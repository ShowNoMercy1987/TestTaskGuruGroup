import { MoreBtn } from "./MoreButtonStyles"

interface IMoreBTN {
  onClick?: () => void;
}

export const MoreButton = ({onClick}:IMoreBTN) => {
  return(
    <>
      <MoreBtn onClick={onClick}>Показать еще</MoreBtn>
    </>
  )
}