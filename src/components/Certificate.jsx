import { useRef } from 'react';
import { Download, Award } from 'lucide-react';

export default function Certificate({ studentName = 'Siswa', module }) {
  const certRef = useRef(null);

  const handleDownload = async () => {
    const el = certRef.current;
    if (!el) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(`Sertifikat_${module || 'JarkomLab'}.pdf`);
    } catch (err) {
      console.error('Gagal generate PDF:', err);
      alert('Gagal generate sertifikat. Coba lagi.');
    }
  };

  const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div>
      <div ref={certRef} className="certificate" style={{
        width: '297mm', height: '210mm', padding: '20mm',
        background: 'white', position: 'relative', overflow: 'hidden',
        fontFamily: 'Georgia, serif', boxSizing: 'border-box',
        border: '8px solid #4f46e5'
      }}>
        {/* Decorative corner */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 120, height: 120, borderBottom: '4px solid #4f46e5', borderRight: '4px solid #4f46e5', borderRadius: '0 0 20px 0' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, borderBottom: '4px solid #4f46e5', borderLeft: '4px solid #4f46e5', borderRadius: '0 0 0 20px' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 120, height: 120, borderTop: '4px solid #4f46e5', borderRight: '4px solid #4f46e5', borderRadius: '0 20px 0 0' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 120, height: 120, borderTop: '4px solid #4f46e5', borderLeft: '4px solid #4f46e5', borderRadius: '20px 0 0 0' }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
            <Award size={48} color="#4f46e5" aria-hidden="true" />
          </div>
          <h1 style={{ fontSize: 36, color: '#4f46e5', marginBottom: 4, fontWeight: 700 }}>SERTIFIKAT</h1>
          <p style={{ fontSize: 14, color: '#64748b', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>Penyelesaian Pembelajaran</p>

          <p style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}>Diberikan kepada:</p>
          <h2 style={{ fontSize: 32, color: '#1e293b', marginBottom: 4 }}>{studentName}</h2>
          <div style={{ width: 200, height: 2, background: '#4f46e5', margin: '12px auto 20px' }} />

          <p style={{ fontSize: 14, color: '#64748b', marginBottom: 6, maxWidth: 500, margin: '0 auto 6px', lineHeight: 1.6 }}>
            Telah berhasil menyelesaikan pembelajaran
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#4f46e5', marginBottom: 6 }}>
            Perencanaan & Pengalamatan Jaringan
          </p>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 24 }}>
            Mata Pelajaran Kejuruan Teknik Jaringan Komputer dan Telekomunikasi — Kelas XI
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 160, borderBottom: '1px solid #cbd5e1', marginBottom: 6 }} />
              <p style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>Guru Mata Pelajaran</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 160, borderBottom: '1px solid #cbd5e1', marginBottom: 6 }} />
              <p style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>Kepala Sekolah</p>
            </div>
          </div>

          <p style={{ position: 'absolute', bottom: 10, right: 20, fontSize: 11, color: '#94a3b8' }}>{today}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <button className="btn btn-primary" onClick={handleDownload}>
          <Download size={16} /> Download Sertifikat (PDF)
        </button>
      </div>
    </div>
  );
}
