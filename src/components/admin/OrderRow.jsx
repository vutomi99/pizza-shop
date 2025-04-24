// components/admin/OrderRow.jsx
export default function OrderRow({ order, index }) {
    return (
      <tr className="border-t hover:bg-gray-50">
        <td className="p-3">{index}</td>
        <td className="p-3">{order.customer}</td>
        <td className="p-3">{order.date}</td>
        <td className="p-3">
          <span className="inline-block px-2 py-1 text-sm bg-yellow-200 rounded">
            {order.status}
          </span>
        </td>
        <td className="p-3 space-x-2">
          <select className="border px-2 py-1 text-sm rounded">
            <option>New</option>
            <option>In Progress</option>
            <option>Ready</option>
          </select>
          <button className="text-blue-500 underline text-sm">View</button>
        </td>
      </tr>
    );
  }
  