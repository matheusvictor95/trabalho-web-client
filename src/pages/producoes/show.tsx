import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ProducoesShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"descricao"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"sigla"}</Title>
      <MarkdownField value={record?.content} />
      <Title level={5}>{"evento-periodico"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"qualis"}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
