import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const ProducoesList = () => {
  const { tableProps } = useTable({
      syncWithLocation: true,
  });

  const professorIds = tableProps?.dataSource?.map((item) => item.professorId).filter(Boolean) ?? [];

  const { data: professorData, isLoading: professorIsLoading } = useMany({
      resource: "professores",
      ids: professorIds,
      queryOptions: {
          enabled: !!professorIds.length,
      },
  });

  return (
      <List>
          <Table {...tableProps} rowKey="id">
              <Table.Column dataIndex="id" title={"ID"} />
              <Table.Column dataIndex="sigla" title={"Sigla"} />
              <Table.Column
                  dataIndex="descricao"
                  title={"Descrição"}
                  render={(value: any) => {
                      if (!value) return "-";
                      return <MarkdownField value={value.slice(0, 80) + "..."} />;
                  }}
              />
              <Table.Column
                  dataIndex={"professorId"}
                  title={"Professor"}
                  render={(professorId) =>
                      professorIsLoading ? (
                          <>Loading...</>
                      ) : (
                          professorData?.data?.find((item) => item.id === professorId)?.nome ?? "Desconhecido"
                      )
                  }
              />
              <Table.Column dataIndex="evento-periodico" title={"Evento Periódico"} />
              <Table.Column dataIndex="qualis" title={"Qualis"} />
              <Table.Column dataIndex="status" title={"Status"} />
              <Table.Column
                  dataIndex={["createdAt"]}
                  title={"Created at"}
                  render={(value: any) => <DateField value={value} />}
              />
              <Table.Column
                  title={"Actions"}
                  dataIndex="actions"
                  render={(_, record: BaseRecord) => (
                      <Space>
                          <EditButton hideText size="small" recordItemId={record.id} />
                          <ShowButton hideText size="small" recordItemId={record.id} />
                          <DeleteButton hideText size="small" recordItemId={record.id} />
                      </Space>
                  )}
              />
          </Table>
      </List>
  );
};