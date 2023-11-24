import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;

  .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: white;
    filter: drop-shadow(0px 0px 3px #888);
  }

  .arrow-left {
    left: 1rem;
  }

  .arrow-right {
    right: 1rem;
  }

  .arrow:hover {
    cursor: pointer;
  }

  .slide-hidden {
    display: none;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IndicatorWrapper = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const IndicatorButton = styled.button`
  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: #fff;
  margin: 0 0.2rem;
  box-shadow: 0px 0px 2px #333;

  &.indicator-inactive {
    background-color: #333;
  }
`;
