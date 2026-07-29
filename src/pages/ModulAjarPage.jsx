import { useState, useMemo, useRef } from 'react';
import { Printer, FileDown, ChevronDown, ChevronUp, BookOpen, CheckCircle, Users, Target, Lightbulb, ClipboardList, Award, ArrowRight, Layers } from 'lucide-react';
import { modulAjar } from '../data/modulAjar';

const MODUL_FILTERS = [
  { key: 'all', label: 'Semua' },
  { key: 1, label: 'Modul 1' },
  { key: 2, label: 'Modul 2' },
  { key: 3, label: 'Modul 3' },
];

const MODUL_RANGES = {
  1: ['1-2'],
  2: ['3-4'],
  3: ['5-6'],
};

const navItems = [
  { id: 'identitas', label: 'Identitas', icon: BookOpen },
  { id: 'kompetensiAwal', label: 'Kompetensi Awal', icon: CheckCircle },
  { id: 'dimensiProfil', label: 'Dimensi Profil Lulusan', icon: Users },
  { id: 'saranaPrasarana', label: 'Sarana & Prasarana', icon: Layers },
  { id: 'targetPeserta', label: 'Target Peserta Didik', icon: Target },
  { id: 'modelPembelajaran', label: 'Model Pembelajaran', icon: Lightbulb },
  { id: 'tujuanPembelajaran', label: 'Tujuan Pembelajaran', icon: Target },
  { id: 'pemahamanBermakna', label: 'Pemahaman Bermakna', icon: Lightbulb },
  { id: 'pertanyaanPemantik', label: 'Pertanyaan Pemantik', icon: Lightbulb },
  { id: 'kegiatanPembelajaran', label: 'Kegiatan Pembelajaran', icon: ClipboardList },
  { id: 'asesmen', label: 'Asesmen', icon: Award },
  { id: 'pengayaanRemedial', label: 'Pengayaan & Remedial', icon: ArrowRight },
  { id: 'refleksi', label: 'Refleksi', icon: ClipboardList },
  { id: 'daftarPustaka', label: 'Daftar Pustaka', icon: BookOpen },
  { id: 'lampiran', label: 'Lampiran', icon: ClipboardList },
];

const MODUL_NAMES = {
  1: { judul: 'Peralatan Jaringan', identitas: 'Perencanaan dan Pengalamatan Jaringan (Modul 1: Peralatan Jaringan)' },
  2: { judul: 'Topologi Jaringan', identitas: 'Perencanaan dan Pengalamatan Jaringan (Modul 2: Topologi Jaringan)' },
  3: { judul: 'Pengalamatan Jaringan', identitas: 'Perencanaan dan Pengalamatan Jaringan (Modul 3: Pengalamatan Jaringan)' },
};

const m = modulAjar;

function Section({ id, title, icon: Icon, children, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="ma-section" id={`ma-${id}`}>
      <div className="ma-section-header" onClick={() => setOpen(!open)}>
        <div className="ma-section-title">
          <Icon size={18} />
          <span>{title}</span>
        </div>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {open && <div className="ma-section-body">{children}</div>}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="table-responsive">
      <table className="materi-table">
        <thead><tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function ModulAjarPage() {
  const [activeSection, setActiveSection] = useState('identitas');
  const [modulFilter, setModulFilter] = useState('all');
  const contentRef = useRef(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const downloadPDF = async () => {
    setPdfLoading(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const el = contentRef.current;
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#ffffff' });
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const imgW = canvas.width;
      const imgH = canvas.height;
      let hRatio = pdfW / imgW;
      let vRatio = pdfH / imgH;
      let ratio = Math.min(hRatio, vRatio);
      if (imgH * ratio > pdfH) { ratio = hRatio; }
      const w = imgW * ratio;
      let y = 0;
      while (y < imgH) {
        const sliceH = Math.min(imgH - y, pdfH / ratio);
        const sliceCanvas = document.createElement('canvas');
        sliceCanvas.width = imgW;
        sliceCanvas.height = sliceH;
        const ctx = sliceCanvas.getContext('2d');
        ctx.drawImage(canvas, 0, y, imgW, sliceH, 0, 0, imgW, sliceH);
        const sliceData = sliceCanvas.toDataURL('image/png');
        if (y > 0) pdf.addPage();
        pdf.addImage(sliceData, 'PNG', 0, 0, w, sliceH * ratio);
        y += sliceH;
      }
      const modulLabel = modulFilter === 'all' ? 'Lengkap' : `Modul-${modulFilter}`;
      pdf.save(`Modul-Ajar-Jarkom-${modulLabel}.pdf`);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setPdfLoading(false);
    }
  };

  const filteredKegiatan = useMemo(() => {
    if (modulFilter === 'all') return m.kegiatanPembelajaran;
    const range = MODUL_RANGES[modulFilter];
    return m.kegiatanPembelajaran.filter(kp => range.includes(kp.pertemuan));
  }, [modulFilter]);

  const modulInfo = MODUL_NAMES[modulFilter] || null;

  return (
    <div className="ma-layout">
      {/* Sidebar */}
      <nav className="ma-sidebar">
        <div className="ma-sidebar-header">
          <h4>Modul Ajar</h4>
          <p style={{fontSize:'0.72rem',color:'var(--text-lighter)'}}>Perencanaan & Pengalamatan Jaringan</p>
        </div>
        <ul className="ma-nav">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a href={`#ma-${id}`}
                className={`ma-nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => setActiveSection(id)}>
                <Icon size={14} />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-secondary ma-print-btn" onClick={() => window.print()}>
          <Printer size={14} /> Cetak
        </button>
        <button className="btn btn-primary ma-print-btn" onClick={downloadPDF} disabled={pdfLoading}>
          <FileDown size={14} /> {pdfLoading ? 'Memproses...' : 'Download PDF'}
        </button>
      </nav>

        {/* Content */}
      <div className="ma-content" ref={contentRef}>
        {/* Modul Filter Tabs */}
        <div className="ma-modul-tabs" role="tablist" aria-label="Filter modul">
          {MODUL_FILTERS.map(f => (
            <button key={f.key} className={`ma-modul-tab ${modulFilter === f.key ? 'active' : ''}`}
              onClick={() => setModulFilter(f.key)} role="tab" aria-selected={modulFilter === f.key}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="ma-title-block">
          <div className="ma-badge">MODUL AJAR</div>
          <h1>{modulInfo ? modulInfo.judul : 'Perencanaan dan Pengalamatan Jaringan'}</h1>
          <p>Mata Pelajaran Kejuruan Teknik Jaringan Komputer dan Telekomunikasi</p>
        </div>

        {/* Identitas */}
        <Section id="identitas" title="1. Identitas Modul" icon={BookOpen} defaultOpen>
          <div className="ma-identitas-grid">
            {Object.entries(m.identitas).map(([key, val]) => (
              <div key={key} className="ma-identitas-item">
                <span className="ma-identitas-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span>
                <span className="ma-identitas-val">{val}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Kompetensi Awal */}
        <Section id="kompetensiAwal" title="2. Kompetensi Awal" icon={CheckCircle}>
          <ul>{m.kompetensiAwal.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </Section>

        {/* Dimensi Profil Lulusan */}
        <Section id="dimensiProfil" title="3. Dimensi Profil Lulusan" icon={Users}>
          <div className="ma-profil-list">
            {m.dimensiProfilLulusan.map((d, i) => (
              <div key={i} className="ma-profil-card">
                <h4><Award size={16} style={{color:'var(--primary)',verticalAlign:'middle'}} /> {d.dimensi}</h4>
                <p>{d.deskripsi}</p>
                <div className="ma-profil-contoh"><strong>Contoh:</strong> {d.contoh}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sarana & Prasarana */}
        <Section id="saranaPrasarana" title="4. Sarana & Prasarana" icon={Layers}>
          {m.saranaPrasarana.map((s, i) => (
            <div key={i} style={{marginBottom:16}}>
              <h4 style={{marginBottom:8}}>{s.kategori}</h4>
              <ul>{s.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </Section>

        {/* Target Peserta Didik */}
        <Section id="targetPeserta" title="5. Target Peserta Didik" icon={Target}>
          {m.targetPesertaDidik.map((t, i) => (
            <div key={i} className="ma-target-card">
              <h4>{t.kategori}</h4>
              <p>{t.deskripsi}</p>
            </div>
          ))}
        </Section>

        {/* Model Pembelajaran */}
        <Section id="modelPembelajaran" title="6. Model Pembelajaran" icon={Lightbulb}>
          <div className="ma-model-list">
            {m.modelPembelajaran.map((mp, i) => (
              <div key={i} className="ma-model-card">
                <h4>{mp.model}</h4>
                <p>{mp.deskripsi}</p>
                <div className="ma-model-penerapan"><strong>Penerapan:</strong> {mp.penerapan}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tujuan Pembelajaran */}
        <Section id="tujuanPembelajaran" title="7. Tujuan Pembelajaran" icon={Target}>
          <Table
            headers={['Kode', 'Tujuan Pembelajaran', 'Aspek', 'Indikator']}
            rows={m.tujuanPembelajaran.map(tp => [
              <strong key="kode">{tp.kode}</strong>,
              tp.deskripsi,
              <span key="aspek" className="ma-aspek-tag">{tp.aspek}</span>,
              tp.indikator,
            ])}
          />
        </Section>

        {/* Pemahaman Bermakna */}
        <Section id="pemahamanBermakna" title="8. Pemahaman Bermakna" icon={Lightbulb}>
          <div className="ma-pemahaman-list">
            {m.pemahamanBermakna.map((p, i) => (
              <div key={i} className="ma-pemahaman-card">
                <div className="ma-pemahaman-q">"{p.pertanyaan}"</div>
                <div className="ma-pemahaman-a">{p.pemahaman}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Pertanyaan Pemantik */}
        <Section id="pertanyaanPemantik" title="9. Pertanyaan Pemantik" icon={Lightbulb}>
          <ol>{m.pertanyaanPemantik.map((q, i) => <li key={i} style={{marginBottom:10}}>{q}</li>)}</ol>
        </Section>

        {/* Kegiatan Pembelajaran */}
        <Section id="kegiatanPembelajaran" title={`10. Kegiatan Pembelajaran${modulInfo ? ` — ${modulInfo.judul}` : ''}`} icon={ClipboardList}>
          {filteredKegiatan.length === 0 && (
            <p style={{color:'var(--text-lighter)',padding:20,textAlign:'center'}}>Tidak ada kegiatan pembelajaran untuk modul ini.</p>
          )}
          {filteredKegiatan.map((kp, i) => (
            <div key={i} className="ma-pertemuan">
              <div className="ma-pertemuan-header">
                <span className="ma-pertemuan-badge">Pertemuan {kp.pertemuan}</span>
                <span className="ma-pertemuan-model">{kp.model}</span>
                <span className="ma-pertemuan-durasi">{kp.durasi}</span>
              </div>
              <h4 style={{marginBottom:12}}>{kp.judul}</h4>

              <div className="ma-kegiatan-phase">
                <h5>Pendahuluan ({kp.kegiatan.pendahuluan.durasi})</h5>
                <ol>{kp.kegiatan.pendahuluan.deskripsi.map((d, j) => <li key={j}>{d}</li>)}</ol>
              </div>

              <div className="ma-kegiatan-phase">
                <h5>Inti ({kp.kegiatan.inti.durasi})</h5>
                <ol>{kp.kegiatan.inti.deskripsi.map((d, j) => <li key={j}>{d}</li>)}</ol>
              </div>

              <div className="ma-kegiatan-phase">
                <h5>Penutup ({kp.kegiatan.penutup.durasi})</h5>
                <ol>{kp.kegiatan.penutup.deskripsi.map((d, j) => <li key={j}>{d}</li>)}</ol>
              </div>

              <div className="ma-asesmen-label"><strong>Asesmen:</strong> {kp.asesmen}</div>
            </div>
          ))}
        </Section>

        {/* Asesmen */}
        <Section id="asesmen" title="11. Asesmen" icon={Award}>
          <div className="ma-asesmen-section">
            <h4>Diagnostik</h4>
            <p><strong>Tujuan:</strong> {m.asesmen.diagnostik.tujuan}</p>
            <p><strong>Instrumen:</strong> {m.asesmen.diagnostik.instrumen}</p>
            <p><strong>Pelaksanaan:</strong> {m.asesmen.diagnostik.pelaksanaan}</p>
            <div className="ma-asesmen-soal">
              <strong>Contoh Soal:</strong>
              <ol>{m.asesmen.diagnostik.contohSoal.map((s, i) => <li key={i}>{s}</li>)}</ol>
            </div>
          </div>

          <div className="ma-asesmen-section">
            <h4>Formatif</h4>
            <p><strong>Tujuan:</strong> {m.asesmen.formatif.tujuan}</p>
            <p><strong>Instrumen:</strong></p>
            <ul>{m.asesmen.formatif.instrumen.map((s, i) => <li key={i}>{s}</li>)}</ul>
            <p><strong>Frekuensi:</strong> {m.asesmen.formatif.frekuensi}</p>
          </div>

          <div className="ma-asesmen-section">
            <h4>Sumatif</h4>
            <p><strong>Tujuan:</strong> {m.asesmen.sumatif.tujuan}</p>
            <ul>{m.asesmen.sumatif.instrumen.map((s, i) => <li key={i}>{s}</li>)}</ul>
            <p><strong>Ketentuan:</strong> {m.asesmen.sumatif.ketentuan}</p>
            <Table
              headers={m.asesmen.sumatif.rubrikProyek[0] ? ['Aspek', 'Skor', 'Deskripsi'] : []}
              rows={m.asesmen.sumatif.rubrikProyek.map(r => [
                <strong key="aspek">{r.aspek}</strong>,
                <span key="skor" className="ma-aspek-tag">{r.skor}</span>,
                r.deskripsi,
              ])}
            />
          </div>
        </Section>

        {/* Pengayaan & Remedial */}
        <Section id="pengayaanRemedial" title="12. Pengayaan & Remedial" icon={ArrowRight}>
          <div className="ma-remedial-grid">
            <div className="ma-remedial-box pengayaan">
              <h4>Pengayaan</h4>
              <ul>{m.pengayaanRemedial.pengayaan.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="ma-remedial-box remedial">
              <h4>Remedial</h4>
              <ul>{m.pengayaanRemedial.remedial.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
          </div>
        </Section>

        {/* Refleksi */}
        <Section id="refleksi" title="13. Refleksi" icon={ClipboardList}>
          <div className="ma-refleksi-grid">
            <div>
              <h4>Refleksi Siswa</h4>
              <ol>{m.refleksi.siswa.map((r, i) => <li key={i} style={{marginBottom:8}}>{r}</li>)}</ol>
            </div>
            <div>
              <h4>Refleksi Guru</h4>
              <ol>{m.refleksi.guru.map((r, i) => <li key={i} style={{marginBottom:8}}>{r}</li>)}</ol>
            </div>
          </div>
        </Section>

        {/* Daftar Pustaka */}
        <Section id="daftarPustaka" title="14. Daftar Pustaka" icon={BookOpen}>
          <ol>{m.daftarPustaka.map((d, i) => <li key={i} style={{marginBottom:6}}>{d}</li>)}</ol>
        </Section>

        {/* Lampiran */}
        <Section id="lampiran" title="15. Lampiran" icon={ClipboardList}>
          <h4 style={{marginBottom:12}}>Lampiran 1: Rubrik Observasi</h4>
          <Table headers={m.lampiran.rubrikObservasi.header} rows={m.lampiran.rubrikObservasi.data} />

          <h4 style={{margin:'20px 0 12px'}}>Lampiran 2: Rubrik Proyek</h4>
          <Table headers={m.lampiran.rubrikProyek.header} rows={m.lampiran.rubrikProyek.data} />

          <h4 style={{margin:'20px 0 12px'}}>Lampiran 3: Lembar Refleksi</h4>
          <Table headers={m.lampiran.lembarRefleksi.header} rows={m.lampiran.lembarRefleksi.data.map(r => [...r])} />
        </Section>

        <div className="ma-footer">
          <p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p>
        </div>
      </div>
    </div>
  );
}
