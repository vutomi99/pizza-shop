
'use client';

import StatsGraphs from '../../../components/admin/StatsGraphs';

export default function AdminStatsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Statistics</h1>

      <StatsGraphs />
    </div>
  );
}
