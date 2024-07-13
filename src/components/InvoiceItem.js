import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';

class InvoiceItem extends React.Component {
  render() {
    const { onItemizedItemEdit, currency, onRowDel, items } = this.props;

    const itemTable = items.map(item => (
      <ItemRow
        key={item.id}
        item={item}
        onItemizedItemEdit={onItemizedItemEdit}
        onDelEvent={() => onRowDel(item)}
        currency={currency}
      />
    ));

    return (
      <div>
        <Table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th className="text-light">ITEM</th>
              <th className="text-light">QTY</th>
              <th className="text-light">PRICE/RATE</th>
              <th className="text-center text-light">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {itemTable}
          </tbody>
        </Table>
        <Button variant="danger" className="fw-bold" onClick={this.props.onRowAdd}>
          Add Item
        </Button>
      </div>
    );
  }
}

class ItemRow extends React.Component {
  onDelEvent = () => {
    this.props.onDelEvent(this.props.item);
  };

  render() {
    const { onItemizedItemEdit, item, currency } = this.props;

    return (
      <tr>
        <td style={{ width: '40%' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: 'text',
              name: 'name',
              placeholder: 'Item name',
              value: item.name,
              id: item.id,
            }}
          />
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: 'text',
              name: 'description',
              placeholder: 'Item description',
              value: item.description,
              id: item.id,
            }}
          />
        </td>
        <td style={{ minWidth: '10%' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              type: 'number',
              name: 'quantity',
              min: 1,
              step: '1',
              value: item.quantity,
              id: item.id,
            }}
          />
        </td>
        <td style={{ minWidth: '20%' }}>
          <EditableField
            onItemizedItemEdit={onItemizedItemEdit}
            cellData={{
              leading: currency,
              type: 'number',
              name: 'price',
              min: 1,
              step: '0.01',
              precision: 2,
              textAlign: 'text-end',
              value: item.price,
              id: item.id,
            }}
          />
        </td>
        <td className="text-center" style={{ minWidth: '10%' }}>
          <BiTrash
            onClick={this.onDelEvent}
            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            className="text-danger"
          />
        </td>
      </tr>
    );
  }
}

export default InvoiceItem;
