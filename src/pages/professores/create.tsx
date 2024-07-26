import { Create, useForm } from "@refinedev/antd";
import { Form, Input, notification } from "antd";
import axios from "axios";

export const ProfessorCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    onSubmit: async (values) => {
      try {
        // Envia os dados para o json-server
        await axios.post("http://localhost:5000/professores", values);

        // Notifica o usuário de que os dados foram salvos com sucesso
        notification.success({
          message: "Sucesso",
          description: "Professor criado com sucesso!",
        });
      } catch (error) {
        // Notifica o usuário em caso de erro
        notification.error({
          message: "Erro",
          description: "Ocorreu um erro ao criar o professor.",
        });
      }
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: "Por favor, insira o nome" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
