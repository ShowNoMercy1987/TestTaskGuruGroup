import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 224px;
  height: 364px;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));

  &:hover {
    filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31));
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 224px;
  height: 260px;
  background: #e8e8e8;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
  overflow: hidden;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 104px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: #ffffff;
`;

export const CardBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px 12px;
  box-sizing: border-box;
`;

interface ICircle {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const Circle = styled.span<ICircle>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c7c7c7;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 22px;
  position: absolute;
  top: 13px;
  right: 15px;
`;

interface IRext {
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  width?: string;
}

export const Text = styled.span<IRext>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
`;

export const CityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 96px;
`