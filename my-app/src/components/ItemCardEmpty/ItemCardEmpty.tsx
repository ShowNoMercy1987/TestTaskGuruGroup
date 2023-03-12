import { CardWrapper } from "../ItemCard/ItemCardStyles";
import { CardTop } from "../ItemCard/ItemCardStyles";
import { CardBottom } from "../ItemCard/ItemCardStyles";
import { CardBottomWrapper } from "../ItemCard/ItemCardStyles";
import { CityWrapper } from "../ItemCard/ItemCardStyles";
import { SwipeLine } from "./ItemsCardEmptyStyles";
import { PriceLoader } from "./ItemsCardEmptyStyles";
import { LikeLoader } from "./ItemsCardEmptyStyles";
import { ItemNameLoader } from "./ItemsCardEmptyStyles";
import { Cityloader } from "./ItemsCardEmptyStyles";

export const ItemCardEmpty = () => {
  return (
    <>
      <CardWrapper>
        <CardTop>
          <SwipeLine />
        </CardTop>
        <CardBottom>
          <CardBottomWrapper>
            <PriceLoader/>
            <LikeLoader/>
            <ItemNameLoader/>
            <CityWrapper>
              <Cityloader/>
            </CityWrapper>
          </CardBottomWrapper>
        </CardBottom>
      </CardWrapper>
    </>
  );
};
