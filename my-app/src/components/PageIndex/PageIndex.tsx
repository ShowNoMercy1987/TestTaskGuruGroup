import { ICard } from "../types/card";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";
import { useState, useEffect } from "react";
import { ErrorBlock } from "./PageIndexStyles";
import { ErrorText } from "./PageIndexStyles";
import { ErrorButton } from "./PageIndexStyles";
import { ItemCard } from "../ItemCard/ItemCard";
import { Wrapper } from "./PageIndexStyles";
import { SectionWrapper } from "./PageIndexStyles";
import { ItemsWrapper } from "./PageIndexStyles";
import { MoreButton } from "../MoreButton/MoreButton";
import { MoreWrapper } from "./PageIndexStyles";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";
import { SpinnerWrapper } from "./PageIndexStyles";
import { EmptyCard } from "../EmptyCard/EmptyCard";
import cn from "classnames"

export const PageIndex = () => {
  const [products, setProducts] = useState<ICard[]>([]);
  const [empty, setEmpty] = useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  async function fetchProduct() {
    try {
      setError("");
      const responce = await axios.get<any>(
        `https://testguru.ru/frontend-test/api/v1/ads?page=${page}`
      );
      setProducts([...products, ...responce.data.items]);
      if (responce.data.items.length === 0) {
        setEmpty(true)
      }
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false);
      setError("Ошибка при загрузке");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (loading === true) {
      fetchProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const reloadProducts = () => {
    setLoading(true);
  };

  const showMore = () => {
    setLoading(true);
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <main>
        <article>
          <Wrapper>
            <SectionWrapper>
              {empty && <EmptyCard />}

              <ItemsWrapper>
              {loading && <LoadingSkeleton />}
                {products.map((product: ICard) => {
                  return (
                    <Link
                      className="link"
                      key={product.id}
                      to={`/index/${product.id}`}
                    >
                      <ItemCard
                        key={product.id}
                        id={product.id}
                        price={product.price}
                        title={product.title}
                        address={product.address}
                        createdAt={product.createdAt}
                        seen={product.seen}
                      />
                    </Link>
                  );
                })}
              </ItemsWrapper>

              {loading && (
                <SpinnerWrapper>
                  <LoaderSpinner />
                </SpinnerWrapper>
              )}

              {error && (
                <ErrorBlock className={cn("", error ? "vision-off" : "")}>
                  <ErrorText>{error}</ErrorText>
                  <ErrorButton onClick={reloadProducts}>
                    Повторить попытку
                  </ErrorButton>
                </ErrorBlock>
              )}

              {page < 10 && (
                <MoreWrapper className={cn("", error ? "vision-off" : "")}>
                  <MoreButton onClick={showMore} />
                </MoreWrapper>
              )}
            </SectionWrapper>
          </Wrapper>
        </article>
      </main>
    </>
  );
};
