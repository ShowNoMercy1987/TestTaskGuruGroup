import { EmptyWrapper } from "./EmptyCardStyles";
import { EmptyItems } from "./EmptyCardStyles";
import { EmptyAnnotation } from "./EmptyCardStyles";

export const EmptyCard = () => {
  return (
    <>
      <EmptyWrapper>
        <EmptyItems>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</EmptyItems>
        <EmptyAnnotation>
          Простите, по вашему запросу товаров сейчас нет. Задайте запрос
          по-другому или измените характеристики
        </EmptyAnnotation>
      </EmptyWrapper>
    </>
  );
};
