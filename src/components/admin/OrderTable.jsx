// components/admin/OrderTable.jsx
import OrderRow from "./OrderRow";

export default function OrderTable() {
  const placeholderOrders = [
    { id: '1', customer: 'Customer A', date: '2025-04-21', status: 'New' },
    { id: '2', customer: 'Customer B', date: '2025-04-22', status: 'In Progress' },
    { id: '3', customer: 'Customer C', date: '2025-04-23', status: 'Ready' },
  ];

  return (
    <table className="w-full border-collapse mt-4 bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr className="text-left">
          <th className="p-3">#</th>
          <th className="p-3">Customer</th>
          <th className="p-3">Date</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {placeholderOrders.map((order, index) => (
          <OrderRow key={order.id} order={order} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
