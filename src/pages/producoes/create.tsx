import { Create, useForm, } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, notification } from "antd";
import axios from "axios";

export const ProducoesCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    onSubmit: async (values) => {
      try {
        // Envia os dados para o json-server
        await axios.post("http://localhost:5000/producoes", values);

        // Notifica o usuário de que os dados foram salvos com sucesso
        notification.success({
          message: "Sucesso",
          description: "Produção criado com sucesso!",
        });
      } catch (error) {
        // Notifica o usuário em caso de erro
        notification.error({
          message: "Erro",
          description: "Ocorreu um erro ao salvar.",
        });
      }
    },
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
          <MDEditor data-color-mode="light" />
          
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
           <Input />
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
          <Input />
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
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};