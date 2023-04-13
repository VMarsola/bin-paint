import { FC, useContext } from "react";
import { Trash } from "@phosphor-icons/react";

import StepContext from "../../contexts/StepContext";
import { Text, Col, SubTitle, ButtonSecondary } from "../../styles/app";
import { DisplayItemRow } from "./styles";
import { WallItem } from "../../types/stepContextTypes";

type ItemRowProps = {
  e: WallItem;
  i: number;
};

const ItemRow: FC<ItemRowProps> = ({ e, i }) => {
  const { removeItem } = useContext(StepContext);
  return (
    <DisplayItemRow key={e.uniqueiD}>
      <SubTitle>parede {i + 1}</SubTitle>
      <Col>
        <Text>
          Largura
          <br />
          <br />
          {e.width}
        </Text>
      </Col>
      <Col>
        <Text>
          Altura
          <br />
          <br />
          {e.height}
        </Text>
      </Col>
      <Col>
        <Text>
          Portas
          <br />
          <br />
          {e.doors}
        </Text>
      </Col>

      <Col>
        <Text>
          Janelas
          <br />
          <br />
          {e.windows}
        </Text>
      </Col>
      <Col>
        <ButtonSecondary onClick={() => removeItem(e.uniqueiD)}>
          <Trash size={16} />
        </ButtonSecondary>
      </Col>
    </DisplayItemRow>
  );
};

export default ItemRow;
