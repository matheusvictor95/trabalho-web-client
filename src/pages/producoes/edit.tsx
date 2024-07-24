import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProducoesEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"sigla"}
          name={["sigla"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"descricao"}
          name="descricao"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>

        <Form.Item
          label={"Evento Periodico"}
          name="evento-periodico"
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
    </Edit>
  );
};