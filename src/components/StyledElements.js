import styled from "styled-components";
import { BsSunFill, BsMoonFill, BsInfoCircleFill } from "react-icons/bs";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
`;

export const MdInputWrapper = styled.div`
  height: 100%;
  width: 50%;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: ${({ dark }) =>
    dark ? "#2B2B2B" : "rgba(214, 214, 214, 0.933)"};
  transition: 0.5s ease-in-out;
  color: ${({ dark }) => (dark ? "#EEEEEE" : "#2B2B2B")};
  font-size: 18.5px;
  padding: 25px;
`;

export const ToggleWrapper = styled.div`
  background: ${({ dark }) => (dark ? "rgb(221, 221, 221)" : "#2B2B2B")};
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  height: 38px;
  width: 90px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1px;
  z-index: 1;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

export const SunIcon = styled(BsSunFill)`
  font-size: 21px;
  color: rgb(245, 162, 53);
  transition: 0.5s ease-in-out;
  z-index: 1;
`;

export const MoonIcon = styled(BsMoonFill)`
  font-size: 21px;
  color: rgba(141, 135, 215, 0.863);
  transition: 0.5s ease-in-out;
`;

export const ButtonToggler = styled.div`
  height: 80%;
  width: 30.4px;
  margin-left: ${({ dark }) => (!dark ? "-42px" : "40px")};
  position: absolute;
  background: rgb(163, 163, 163);

  box-shadow: 5px 5px 20px rgb(73, 73, 73, 0.8);
  transition: 0.5s ease-in-out;

  border-radius: 50%;
  z-index: 3;
`;

export const Preview = styled.div`
  width: 50%;
  height: 100%;
  font-size: 19px;
  padding: 25px 0;
  overflow-x: hidden;
  word-wrap: break-word;
  background: ${({ dark }) => (dark ? "#1d1d1d" : "#ffff")};
  color: ${({ dark }) => (dark ? "#ffff" : "#1d1d1d")};
  transition: 0.5s ease-in-out;
`;

export const InfoIcon = styled(BsInfoCircleFill)`
  color: ${({ dark }) => (dark ? "#ffff" : "#1d1d1d")};
  cursor: pointer;
  background: transparent;
`;
