import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProducoesCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Descrição"}
          name={["descricao"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"sigla"}
          name="sigla"
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>
        <Form.Item
          label={"Evento Periodico"}
          name={["evento-periodico"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>

        <Form.Item
          label={"qualis"}
          name={["qualis"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>
      </Form>
    </Create>
  );
};