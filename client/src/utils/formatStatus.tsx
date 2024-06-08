const colorsMap = {
  NEW: {
    bg: '#075985',
    text: '#7dd3fc',
  },
  APPLIED: {
    bg: '#6b21a8',
    text: '#d8b4fe',
  },
  REJECTED: {
    bg: '#9f1239',
    text: '#fda4af',
  },
  ACCEPTED: {
    bg: '#065f46',
    text: '#6ee7b7',
  },
};

export default function formatStatus(
  status: 'NEW' | 'APPLIED' | 'REJECTED' | 'ACCEPTED',
) {
  return (
    <span
      className="px-2 py-1 rounded-full"
      style={{
        backgroundColor: colorsMap[status]['bg'],
        color: colorsMap[status]['text'],
      }}
    >
      {status.toLowerCase().charAt(0).toUpperCase() +
        status.toLowerCase().slice(1)}
    </span>
  );
}
