
export default function StatusBadge({ status }) {
    const colors = {
      "New": "bg-yellow-300",
      "In Progress": "bg-blue-300",
      "Ready": "bg-green-300"
    };
    
    return (
      <span className={`px-2 py-1 rounded text-xs ${colors[status]}`}>
        {status}
      </span>
    );
  }
  