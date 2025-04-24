
'use client';
import OrderTable from '../../components/admin/OrderTable';
import CreatePizzaForm from '@/components/admin/CreatePizzaForm';
export default function AdminDashboardPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b border-yellow-400 pb-2">Admin Dashboard</h1>
          <OrderTable />
          <CreatePizzaForm />
        </div>
      </div>
    );
  }
  