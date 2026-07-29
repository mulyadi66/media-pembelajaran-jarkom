import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmModal({ open, title, message, confirmLabel, cancelLabel, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onCancel}><X size={20} /></button>
        <div className="modal-icon"><AlertTriangle size={32} /></div>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="modal-btn modal-btn-cancel" onClick={onCancel}>{cancelLabel || 'Batal'}</button>
          <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>{confirmLabel || 'Ya, Reset'}</button>
        </div>
      </div>
    </div>
  );
}
