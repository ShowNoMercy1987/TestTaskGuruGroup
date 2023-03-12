import styled from "styled-components";

export const ErrorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 38px 0px;
`;

export const ErrorText = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #8f8f8f;
`;

interface IErrorButton {
  onClick?: () => void;
}

export const ErrorButton = styled.div<IErrorButton>`
  padding: 8px 15px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #00a0ab;
  background: #f8f8f8;
  border-radius: 45px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: auto;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 92px 156px;

  @media (max-width: 1279px) {
    padding: 0px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  justify-content: center;
`;

export const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 31px;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;
