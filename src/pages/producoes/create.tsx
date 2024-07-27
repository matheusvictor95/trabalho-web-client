import { Create, useForm, useSelect  } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, notification, Select} from "antd";
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

  const { selectProps: professorSelectProps } = useSelect({
    resource: "professores",
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
          label={"Qualis"}
          name={["qualis"]}
          initialValue={"A1"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"A1"}
            options={[
              { value: "A1", label: "A1" },
              { value: "A2", label: "A2" },
              { value: "B1", label: "B1" },
              { value: "B2", label: "B2" },
              { value: "B3", label: "B3" },
              { value: "B4", label: "B4" },
              { value: "B5", label: "B5" },
              { value: "C", label: "C" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
        <Form.Item
          label={"Professor"}
          name={["professor", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...professorSelectProps} />
          </Form.Item>
      </Form>
    </Create>
  );
};