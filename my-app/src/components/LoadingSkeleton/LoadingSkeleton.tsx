import { MainSkeletonWrapper } from "./LoadingSkeletonStyles";
import { SkeletonWrapper } from "./LoadingSkeletonStyles";
import { ItemCardEmpty } from "../ItemCardEmpty/ItemCardEmpty";
import { LoadingButtonMore } from "../LoadingButtonMore/LoadingButtonMore";

export const LoadingSkeleton = () => {
  return (
    <>
      <MainSkeletonWrapper>
        <SkeletonWrapper>
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
          <ItemCardEmpty />
        </SkeletonWrapper>
        <LoadingButtonMore />
      </MainSkeletonWrapper>
    </>
  );
};
