import React, { FC, useContext } from "react";
import { PaintBucket } from "@phosphor-icons/react";

import { Col, Row, Title } from "../../../styles/app";
import { Grid, Wrapper } from "./styles";
import StepContext from "../../../contexts/StepContext";

const InputData: FC = () => {
  const { reset, state } = useContext(StepContext);

  const PaintBucketSize = (key: number) => {
    let size = 0;
    switch (key) {
      case 18:
        size = 60;
        break;
      case 3.6:
        size = 50;
        break;
      case 2.5:
        size = 40;
        break;
      case 0.5:
        size = 30;
        break;
      default:
        size = 30;
        break;
    }

    return size;
  };

  const pElements = Object.keys(state.response).map((key) => {
    let numKey = Number(key);

    if (state.response[numKey])
      return (
        <Title key={numKey}>
          <PaintBucket size={PaintBucketSize(numKey)} />
          {state.response[numKey]} latas de {numKey} Litros
        </Title>
      );
  });

  return (
    <Wrapper>
      <Title style={{ margin: "4rem 0 6rem 0" }}>Você precisará de:</Title>
      <Row>
        <Grid>{pElements}</Grid>
      </Row>
      <button type="submit" onClick={reset}>
        Calcular Novamente
      </button>
    </Wrapper>
  );
};

export default InputData;
