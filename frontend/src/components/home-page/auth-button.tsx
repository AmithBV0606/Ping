import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AuthButton = ({ text, image, onClick }: { text: string; image?: boolean; onClick?: () => void }) => {
  return (
    <StyledWrapper>
      <button className="Btn-Container" onClick={onClick}>
        <span className="text">
          {image && (
            <Image
              src="/google.png"
              className=" mr-4"
              width={25}
              height={25}
              alt="google"
            />
          )}
          <span>{text}</span>
        </span>

        <span className="icon-Container">
          <svg
            width={16}
            height={19}
            viewBox="0 0 16 19"
            fill="nones"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
            <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
            <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
            <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
            <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
            <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
            <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
            <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn-Container {
    display: flex;
    width: 310px;
    height: fit-content;
    background-color: #141414;
    border-radius: 40px;
    justify-content: space-between;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  .icon-Container {
    width: 45px;
    height: 45px;
    background-color: #f59aff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #1d2129;
  }
  .text {
    width: calc(310px - 45px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #868683;
    font-size: 1.1em;
    letter-spacing: 1.2px;
  }
  .icon-Container svg {
    transition-duration: 1.5s;
  }
  .Btn-Container:hover .icon-Container svg {
    transition-duration: 1.5s;
    animation: arrow 1s linear infinite;
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      margin-left: 0px;
    }
    100% {
      opacity: 1;
      margin-left: 10px;
    }
  }
`;

export default AuthButton;
