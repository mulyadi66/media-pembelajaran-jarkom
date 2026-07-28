import './Skeleton.css';

export function SkeletonLine({ width = '100%', height = 16, style }) {
  return <div className="skeleton-line" style={{ width, height, ...style }} />;
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <SkeletonLine width="60px" height="60px" style={{ borderRadius: 14 }} />
      <div style={{ flex: 1 }}>
        <SkeletonLine width="40%" height={12} />
        <SkeletonLine width="80%" height={18} style={{ marginTop: 8 }} />
        <SkeletonLine width="60%" height={12} style={{ marginTop: 8 }} />
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 4, cols = 4 }) {
  return (
    <div className="skeleton-table">
      <div className="skeleton-table-row skeleton-table-header">
        {Array(cols).fill(0).map((_, i) => <SkeletonLine key={i} width="80%" height={14} />)}
      </div>
      {Array(rows).fill(0).map((_, r) => (
        <div className="skeleton-table-row" key={r}>
          {Array(cols).fill(0).map((_, c) => <SkeletonLine key={c} width="70%" height={12} />)}
        </div>
      ))}
    </div>
  );
}
