import { useState, useEffect } from 'react';
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from '@refinedev/antd';
import type { BaseRecord } from '@refinedev/core';
import { Space, Table } from 'antd';

export const ProfessorList = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('db.json');
      const data = await response.json();
      setProfessores(data.professores);
    };

    fetchData();
  }, []);

  const { tableProps } = useTable({
    syncWithLocation: true,
    data: professores,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="nome" title={"Nome"} />
        <Table.Column
          title={"Ações"}
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
