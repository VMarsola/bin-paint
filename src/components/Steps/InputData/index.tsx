import { FC, useContext } from "react";

import StepContext from "../../../contexts/StepContext";
import InsertItem from "../../InsertItem";
import ItemRow from "../../ItemRow";
import { Container, InputTitle } from "./styles";

const InputData: FC = () => {
  const { state } = useContext(StepContext);

  return (
    <Container>
      <InputTitle>
        Descubra a quantidade exata de tinta que você precisa com a nossa
        calculadora de tinta!
      </InputTitle>
      {state.data.map((e, i) => {
        return <ItemRow e={e} i={i} />;
      })}
      <InsertItem />
    </Container>
  );
};

export default InputData;
