import axios from "axios";
import { ICard } from "../types/card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SingleItemWrapper } from "./SingleCardItemStyles";

export const SingleItemCard = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<ICard>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  async function fetchProduct() {
    try {
      setError("");
      const responce = await axios.get<ICard>(
        `https://testguru.ru/frontend-test/api/v1/ads/${id}`
      );
      setProducts(responce.data);
      // console.log(responce.data);
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
  }, [loading, id]);

const price = Math.round(products.price)

  return (
    <SingleItemWrapper>
      {error && <p>{error}</p>}
      <div>id - {products.id}</div>
      <div>цена - {price}₽</div>
      <div>наименование - {products.title}</div>
      <div>адресс - {products.address}</div>
      <div>дата/время создания - {products.createdAt}</div>
    </SingleItemWrapper>
  );
};
