import styled from 'styled-components';

export const LoadingSt = styled.div`
  @keyframes lds-rolling {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @-webkit-keyframes lds-rolling {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  display: inline-block;
  margin: ${({ margin }) => margin};

  .lds-rolling {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .lds-rolling div,
  .lds-rolling div:after {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 4px solid ${({ color, theme }) => theme.colors[color]};
    border-top-color: transparent;
    border-radius: 50%;
  }

  .lds-rolling div {
    -webkit-animation: lds-rolling 1s linear infinite;
    animation: lds-rolling 1s linear infinite;
    top: 16px;
    left: 16px;
  }

  .lds-rolling div:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .lds-rolling {
    width: 16px !important;
    height: 16px !important;
    -webkit-transform: translate(-16px, -16px) scale(1) translate(16px, 16px);
    transform: translate(-16px, -16px) scale(1) translate(16px, 16px);
  }
`;
