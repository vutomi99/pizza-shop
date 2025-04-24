
export default function OrderModal({ order, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded shadow-lg w-1/2">
          <h2 className="text-xl font-bold mb-2">Order #{order.id}</h2>
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Items:</strong> {order.items.join(', ')}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
        </div>
      </div>
    );
  }
  