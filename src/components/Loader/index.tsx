import { FC } from "react";
import ReactDOM from "react-dom";

import { SpinnerContainer, InputTitle, Spinner } from "./styles";

const Loader: FC = () => {
  return ReactDOM.createPortal(
    <SpinnerContainer>
      <InputTitle>Calculando</InputTitle>
      <Spinner size={50} color={"#fff"} />
    </SpinnerContainer>,
    document.body
  );
};

export default Loader;
