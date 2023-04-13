import { FC, useContext } from "react";

import useInputData from "../../hooks/useInsertItemData";
import StepContext from "../../contexts/StepContext";

import { ButtonRow, FormRow, InputWrapper, Form, InputRow } from "./styles";
import { ButtonPrimary, ButtonSecondary, Col } from "../../styles/app";
import Loader from "../Loader";

const InsertItem: FC = () => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    register,
    calcErrors,
    calculate,
    loading,
  } = useInputData();

  if (loading) return <Loader />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Col>
          <InputRow>
            <InputWrapper>
              <label htmlFor="height">Altura (m):</label>
              <input id="height" {...register("height")} type="text" />
              {errors.height && <p>{errors.height.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="width">Largura (m):</label>
              <input id="width" {...register("width")} type="text" />
              {errors.width && <p>{errors.width.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="doors">Portas:</label>
              <input id="doors" {...register("doors")} type="text" />
              {errors.doors && <p>{errors.doors.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="windows">janelas:</label>
              <input id="windows" {...register("windows")} type="text" />
              {errors.windows && <p>{errors.windows.message}</p>}
            </InputWrapper>
          </InputRow>
          <ButtonRow>
            <ButtonPrimary type="button" onClick={() => calculate()}>
              Calcular
            </ButtonPrimary>
            <ButtonSecondary type="submit">Inserir Item</ButtonSecondary>
            {calcErrors && <p>{calcErrors}</p>}
          </ButtonRow>
        </Col>
      </FormRow>
    </Form>
  );
};

export default InsertItem;
