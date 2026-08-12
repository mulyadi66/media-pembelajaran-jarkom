import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Globe, Scissors, Code, Sliders, Calculator, AlertTriangle, Star } from 'lucide-react';
import VideoEmbed from '../components/VideoEmbed';
import SectionTracker from '../components/SectionTracker';
import { ContohSoal, Tugas } from '../components/ContohSoal';

const sections = [
  { id: 's1', label: '3.1 IP Address' },
  { id: 's2', label: '3.2 Subnetting' },
  { id: 's3', label: '3.3 CIDR' },
  { id: 's4', label: '3.4 VLSM' },
  { id: 's5', label: '3.5 Kalkulator Subnetting' },
  { id: 's6', label: '3.6 Kalkulator VLSM' },
];

function calcSubnet(ip, cidr) {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return null;
  const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
  const network = (ipNum & mask) >>> 0;
  const broadcast = (network | ~mask) >>> 0;
  const first = cidr >= 31 ? network : (network + 1) >>> 0;
  const last = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;
  const total = Math.pow(2, 32 - cidr);
  const usable = cidr >= 31 ? total : total - 2;
  const numToIp = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  const toBin = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].map(b=>b.toString(2).padStart(8,'0')).join('.');
  return { mask: numToIp(mask), network: numToIp(network), broadcast: numToIp(broadcast),
    first: numToIp(first), last: numToIp(last), total, usable, binary: toBin(ipNum) };
}

function calcVLSM(ip, cidr, hostsStr) {
  const hosts = hostsStr.split(',').map(h => parseInt(h.trim())).filter(h => !isNaN(h) && h > 0).sort((a, b) => b - a);
  if (!hosts.length) return null;
  const parts = ip.split('.').map(Number);
  let currentIP = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  const numToIp = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  const getPrefix = h => { let b=0; while(Math.pow(2,b)-2<h) b++; return 32-b; };
  const subnets = [];
  let totalUsed = 0;
  hosts.forEach(h => {
    const prefix = getPrefix(h);
    const mask = (~0 << (32 - prefix)) >>> 0;
    const network = currentIP;
    const broadcast = (currentIP | ~mask) >>> 0;
    const first = (currentIP + 1) >>> 0;
    const last = (broadcast - 1) >>> 0;
    const size = Math.pow(2, 32 - prefix);
    subnets.push({ hosts: h, prefix, mask: numToIp(mask), network: numToIp(network),
      broadcast: numToIp(broadcast), first: numToIp(first), last: numToIp(last) });
    totalUsed += size;
    currentIP = (broadcast + 1) >>> 0;
  });
  return { subnets, totalUsed, totalAvail: Math.pow(2, 32 - cidr) };
}

export default function Modul3() {
  const { markModuleRead } = useApp();
  const [ip, setIp] = useState('192.168.1.0');
  const [cidr, setCidr] = useState(24);
  const [subnetResult, setSubnetResult] = useState(null);
  const [vlsmIP, setVlsmIP] = useState('192.168.1.0');
  const [vlsmCIDR, setVlsmCIDR] = useState(24);
  const [vlsmHosts, setVlsmHosts] = useState('100, 50, 25, 2');
  const [vlsmResult, setVlsmResult] = useState(null);

  useEffect(() => { markModuleRead('modul3'); }, [markModuleRead]);

  const handleCalcSubnet = () => setSubnetResult(calcSubnet(ip, cidr));
  const handleCalcVLSM = () => setVlsmResult(calcVLSM(vlsmIP, vlsmCIDR, vlsmHosts));

  return (
    <div className="content-section">
      <SectionTracker moduleId="modul3" sections={sections} />

      <div className="materi-card">
        <h3><Globe size={18} /> 3.1 IP Address</h3>
        <p>IP Address adalah alamat numerik yang diberikan kepada setiap perangkat yang terhubung ke jaringan yang menggunakan protokol IP.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Fitur</th><th>IPv4</th><th>IPv6</th></tr></thead>
            <tbody>
              <tr><td><strong>Panjang</strong></td><td>32 bit</td><td>128 bit</td></tr>
              <tr><td><strong>Format</strong></td><td>192.168.1.1</td><td>2001:0db8:...</td></tr>
              <tr><td><strong>Jumlah Alamat</strong></td><td>~4.3 miliar</td><td>~3.4×10³⁸</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style={{marginTop: 20}}>Kelas IP Address (IPv4)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Kelas</th><th>Range</th><th>Default Mask</th><th>Keperluan</th></tr></thead>
            <tbody>
              <tr><td><strong>A</strong></td><td>1.0.0.0 - 126.255.255.255</td><td>/8</td><td>Jaringan sangat besar</td></tr>
              <tr><td><strong>B</strong></td><td>128.0.0.0 - 191.255.255.255</td><td>/16</td><td>Jaringan menengah</td></tr>
              <tr><td><strong>C</strong></td><td>192.0.0.0 - 223.255.255.255</td><td>/24</td><td>Jaringan kecil</td></tr>
              <tr><td><strong>D</strong></td><td>224.0.0.0 - 239.255.255.255</td><td>-</td><td>Multicast</td></tr>
              <tr><td><strong>E</strong></td><td>240.0.0.0 - 255.255.255.255</td><td>-</td><td>Eksperimental</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> IP Address Privat</strong>
          <p><strong>Kelas A:</strong> 10.0.0.0 - 10.255.255.255<br/>
          <strong>Kelas B:</strong> 172.16.0.0 - 172.31.255.255<br/>
          <strong>Kelas C:</strong> 192.168.0.0 - 192.168.255.255</p>
        </div>
        <div className="info-box success">
          <strong><Star size={14} /> IP Publik vs Privat</strong>
          <p><strong>IP Publik:</strong> dapat diakses dari internet dan harus didaftarkan ke penyedia.<br/>
          <strong>IP Privat:</strong> hanya berlaku di jaringan lokal, di-hide dari internet oleh NAT (Network Address Translation) pada router.</p>
        </div>
        <h3 style={{marginTop: 20}}>Konversi Biner</h3>
        <p>Setiap oktet IPv4 terdiri dari 8 bit (1 atau 0). Nilai desimal dihitung dari pangkat dua: <strong>128 64 32 16 8 4 2 1</strong>. Contoh: <strong>192</strong> = 128+64 = <strong>11000000</strong>, <strong>168</strong> = 128+32+8 = <strong>10101000</strong>.</p>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Alamat Khusus yang Perlu Dihafal</strong>
          <p><strong>127.0.0.1</strong> — loopback (menguji NIC sendiri).<br/>
          <strong>0.0.0.0</strong> — "semua jaringan" / default route.<br/>
          <strong>255.255.255.255</strong> — broadcast seluruh jaringan lokal.<br/>
          <strong>169.254.x.x</strong> — APIPA, dipakai otomatis saat DHCP gagal.</p>
        </div>
        <VideoEmbed videoId="ZxgytoBVEaE" title="Pembagian Kelas IP Address (A, B, C) - Bahasa Indonesia" />
        <ContohSoal data={[
          { soal: 'Tentukan kelas dari IP address berikut: 10.0.0.5, 172.16.10.1, 192.168.1.100, dan 224.0.0.1!',
            penyelesaian: '10.0.0.5 → Kelas A (oktet pertama 1–126). 172.16.10.1 → Kelas B (128–191). 192.168.1.100 → Kelas C (192–223). 224.0.0.1 → Kelas D (224–239, khusus multicast).' },
          { soal: 'Manakah yang termasuk IP privat: 10.0.0.1, 172.20.0.1, 192.168.1.1, 8.8.8.8?',
            penyelesaian: 'IP privat: 10.0.0.1 (privat kelas A), 172.20.0.1 (privat kelas B karena berada di 172.16–172.31), dan 192.168.1.1 (privat kelas C). 8.8.8.8 adalah IP publik milik Google DNS.' },
          { soal: 'Mengapa IP privat tidak bisa langsung diakses dari internet, dan apa solusinya?',
            penyelesaian: 'Karena IP privat tidak dirutekan di internet — IANA menetapkannya khusus untuk jaringan lokal. Solusinya adalah NAT (Network Address Translation) pada router yang menerjemahkan IP privat menjadi IP publik saat data keluar ke internet.' },
          { soal: 'Ubahlah bilangan biner 11000000.10101000.00000001.00000001 menjadi notasi desimal!',
            penyelesaian: '11000000 = 128+64 = 192. 10101000 = 128+32+8 = 168. 00000001 = 1. 00000001 = 1. Jadi 11000000.10101000.00000001.00000001 = 192.168.1.1.' },
        ]} />
        <Tugas data={[
          'Tuliskan rentang IP privat kelas A, B, dan C beserta default subnet mask-nya!',
          'Tentukan kelas IP berikut: 126.0.0.1, 129.0.0.1, 192.0.0.1, 239.255.255.1, dan 240.0.0.1!',
          'Jelaskan perbedaan IP publik dan IP privat serta kapan masing-masing digunakan!',
          'Konversikan ke biner: 10.0.0.1, 172.16.5.2, dan 192.168.1.10. Tuliskan hasilnya dalam bentuk 4 oktet biner!',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Scissors size={18} /> 3.2 Subnetting</h3>
        <p>Subnetting adalah proses membagi jaringan besar menjadi sub-jaringan yang lebih kecil untuk efisiensi, keamanan, dan pengelolaan.</p>
        <h3 style={{marginTop: 20}}>Langkah Subnetting:</h3>
        <ul>
          <li><strong>Langkah 1:</strong> Tentukan jumlah subnet atau jumlah host per subnet</li>
          <li><strong>Langkah 2:</strong> Hitung bit yang dipinjam: 2^n ≥ jumlah subnet</li>
          <li><strong>Langkah 3:</strong> Tentukan subnet mask baru: default + bit dipinjam</li>
          <li><strong>Langkah 4:</strong> Hitung host per subnet: 2^h - 2</li>
          <li><strong>Langkah 5:</strong> Tentukan network, first host, last host, broadcast</li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Contoh</strong>
          <p>192.168.1.0/24 dibagi 4 subnet → pinjam 2 bit → /26 = 255.255.255.192 → 62 host/subnet</p>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Mengapa Dikurangi 2?</strong>
          <p>Dua alamat per subnet selalu dicadangkan: <strong>network address</strong> (identitas subnet, semua bit host 0) dan <strong>broadcast address</strong> (alamat kirim ke semua host, semua bit host 1). Keduanya tidak boleh dipakai perangkat, sehingga host yang bisa dipakai = 2^h − 2.</p>
        </div>
        <h3 style={{marginTop: 20}}>Tabel Ukuran Subnet (/24)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Prefix</th><th>Mask</th><th>Jumlah Subnet (dari /24)</th><th>Host per Subnet</th><th>Block</th></tr></thead>
            <tbody>
              <tr><td>/25</td><td>255.255.255.128</td><td>2</td><td>126</td><td>128</td></tr>
              <tr><td>/26</td><td>255.255.255.192</td><td>4</td><td>62</td><td>64</td></tr>
              <tr><td>/27</td><td>255.255.255.224</td><td>8</td><td>30</td><td>32</td></tr>
              <tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td><td>16</td></tr>
              <tr><td>/29</td><td>255.255.255.248</td><td>32</td><td>6</td><td>8</td></tr>
              <tr><td>/30</td><td>255.255.255.252</td><td>64</td><td>2</td><td>4</td></tr>
            </tbody>
          </table>
        </div>
        <VideoEmbed videoId="VVd5xkTnPZ0" title="Praktik IP Address & Subnetting di Cisco Packet Tracer" />
        <ContohSoal data={[
          { soal: 'Bagi jaringan 192.168.1.0/24 menjadi 4 subnet yang sama besar! Tentukan prefix baru, mask, jumlah host per subnet, dan rincian subnet pertama.',
            penyelesaian: [
              '1) Butuh 4 subnet → 2^n ≥ 4 → n = 2 bit dipinjam dari host.',
              '2) Prefix baru = 24 + 2 = /26 → mask 255.255.255.192.',
              '3) Host per subnet = 2^(32−26) − 2 = 62 host.',
              '4) Block = 256 − 192 = 64 → subnet kelipatan 64: 192.168.1.0, .64, .128, .192.',
              '5) Subnet pertama 192.168.1.0: network .0, first host .1, last host .62, broadcast .63.',
            ] },
          { soal: 'Jaringan 172.16.0.0/16 dibagi menjadi 8 subnet. Berapa prefix baru dan host per subnet?',
            penyelesaian: '2^n ≥ 8 → n = 3 bit dipinjam → prefix baru = 16 + 3 = /19 (mask 255.255.255.224 → 255.255.224.0). Host per subnet = 2^(32−19) − 2 = 2^13 − 2 = 8190 host. Block = 256 − 224 = 32, sehingga subnet ke-3 dimulai dari 172.16.64.0.' },
          { soal: 'Berapa jumlah host usable pada /30 dan mengapa prefix ini populer untuk link antar router (point-to-point)?',
            penyelesaian: 'Usable host = 2^2 − 2 = 2 host. Link antar router hanya butuh 2 alamat (satu per ujung), jadi /30 tidak boros alamat IP. Beberapa router modern juga mendukung /31 (tanpa network/broadcast) untuk link point-to-point, tetapi /30 lebih umum dan lebih kompatibel.' },
        ]} />
        <Tugas data={[
          'Bagi 192.168.2.0/24 menjadi 8 subnet! Tuliskan prefix baru, mask, host per subnet, serta rincian subnet ke-1 dan ke-5 (network, first, last, broadcast).',
          'Jelaskan 3 manfaat subnetting bagi sebuah jaringan!',
          'Berapa jumlah host usable pada jaringan /30? Mengapa /30 sering digunakan untuk link antar router?',
          'Dengan tabel ukuran subnet di atas, tentukan prefix yang tepat untuk jaringan yang membutuhkan 100 host, 50 host, dan 5 host!',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Code size={18} /> 3.3 CIDR</h3>
        <p>CIDR menggunakan notasi /n untuk menunjukkan jumlah bit network. Lebih fleksibel dari sistem kelas.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>CIDR</th><th>Mask</th><th>Wildcard</th><th>Host</th></tr></thead>
            <tbody>
              {[[8,'255.0.0.0','0.255.255.255','16.7M'],[16,'255.255.0.0','0.0.255.255','65,534'],[24,'255.255.255.0','0.0.0.255','254'],
                [25,'.128','.127','126'],[26,'.192','.63','62'],[27,'.224','.31','30'],[28,'.240','.15','14'],[29,'.248','.7','6'],[30,'.252','.3','2']
              ].map(([c,m,w,h],i) => (
                <tr key={i}><td>/{c}</td><td>{c<=24?m:'255.255.255'+m}</td><td>{c<=24?w:'0.0.0'+w}</td><td>{h}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><Star size={14} /> Rumus Penting</strong>
          <p><strong>Subnet:</strong> 2^n &nbsp;|&nbsp; <strong>Host:</strong> 2^h - 2 &nbsp;|&nbsp; <strong>Block:</strong> 256 - mask oktet terakhir &nbsp;|&nbsp; <strong>Wildcard:</strong> 255 - nilai oktet mask</p>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Penting</strong>
          <p>Notasi <strong>/n</strong> menyatakan banyaknya bit 1 pada subnet mask (bit network). Semakin besar /n, semakin kecil jaringannya. CIDR menghapus aturan kaku kelas A/B/C sehingga alamat bisa dibagi sesuai kebutuhan — inilah dasar dari subnetting dan VLSM.</p>
        </div>
        <ContohSoal data={[
          { soal: 'Ubah subnet mask 255.255.255.240 ke dalam notasi CIDR!',
            penyelesaian: '240 = 11110000 → 4 bit 1 di oktet terakhir → total bit network = 8+8+8+4 = /28. Jumlah host = 2^4 − 2 = 14 host usable.' },
          { soal: 'Tentukan subnet mask, wildcard, dan jumlah host usable dari prefix /26!',
            penyelesaian: 'Mask = 255.255.255.192 (bit network dihitung 8+8+8+2 = 26). Wildcard = kebalikan mask = 0.0.0.63. Jumlah host = 2^6 − 2 = 62 host.' },
          { soal: 'Berapa jumlah host usable pada jaringan /22?',
            penyelesaian: '32 − 22 = 10 bit host → 2^10 − 2 = 1022 host usable.' },
          { soal: 'Tentukan wildcard dari subnet mask 255.255.255.224, lalu jelaskan fungsinya!',
            penyelesaian: 'Wildcard = kebalikan bit mask (bit 0 menjadi 1): 255.255.255.224 → 0.0.0.31. Wildcard dipakai dalam ACL (Access Control List) router untuk menentukan rentang alamat yang cocok dengan aturan, misalnya wildcard 0.0.0.31 mencakup 32 alamat (blok /27).' },
        ]} />
        <Tugas data={[
          'Buat tabel konversi ke notasi CIDR untuk mask berikut: 255.0.0.0, 255.255.0.0, 255.255.255.0, 255.255.255.128, dan 255.255.255.248!',
          'Hitung jumlah host usable untuk /23, /28, dan /30!',
          'Jelaskan keunggulan CIDR dibandingkan sistem pengalamatan classful (kelas A/B/C)!',
          'Hitung wildcard untuk mask 255.255.255.240 dan 255.255.0.0, lalu tuliskan fungsinya secara singkat!',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Sliders size={18} /> 3.4 VLSM</h3>
        <p>Variable Length Subnet Mask memungkinkan subnet mask berbeda dalam satu jaringan untuk efisiensi alamat IP.</p>
        <h3 style={{marginTop: 20}}>Langkah VLSM:</h3>
        <ul>
          <li>Urutkan kebutuhan host dari terbesar ke terkecil</li>
          <li>Alokasikan subnet terbesar terlebih dahulu</li>
          <li>Subnet berikutnya mulai dari IP setelah broadcast subnet sebelumnya</li>
          <li>Ulangi hingga semua kebutuhan terpenuhi</li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Contoh Perhitungan VLSM</strong>
          <p>192.168.1.0/24 dengan kebutuhan 60, 30, dan 10 host:<br/>
          <strong>60 host</strong> → butuh 62 usable → <strong>/26</strong> → 192.168.1.0 – .63<br/>
          <strong>30 host</strong> → butuh 30 usable → <strong>/27</strong> → 192.168.1.64 – .95<br/>
          <strong>10 host</strong> → butuh 14 usable → <strong>/28</strong> → 192.168.1.96 – .111</p>
        </div>
        <VideoEmbed videoId="N7BEDtZ7G4g" title="VLSM (Variable Length Subnet Mask) - Solved Problem" />
        <ContohSoal data={[
          { soal: 'Rancang VLSM untuk jaringan 192.168.1.0/24 dengan kebutuhan 60 host, 30 host, dan 10 host!',
            penyelesaian: [
              '1) Urutkan kebutuhan dari terbesar: 60 → 30 → 10.',
              '2) 60 host: butuh 62 usable → /26 → 192.168.1.0 – .63 (network .0, first .1, last .62, broadcast .63).',
              '3) 30 host: butuh 30 usable → /27 → lanjut dari .64 → 192.168.1.64 – .95 (network .64, first .65, last .94, broadcast .95).',
              '4) 10 host: butuh 14 usable → /28 → lanjut dari .96 → 192.168.1.96 – .111 (network .96, first .97, last .110, broadcast .111).',
            ] },
          { soal: 'Tentukan prefix yang tepat untuk kebutuhan 100 host, 50 host, dan 2 host dari 192.168.0.0/24!',
            penyelesaian: '100 host → butuh 126 usable → /25 (128 alamat, range 192.168.0.0 – .127). 50 host → butuh 62 usable → /26 (192.168.0.128 – .191). 2 host → butuh 2 usable → /30 (192.168.0.192 – .195).' },
          { soal: 'Perusahaan butuh 5 subnet dari 192.168.1.0/24: HRD 60 host, IT 30 host, Marketing 15 host, Finance 5 host, dan link antar router 2 host. Mengapa VLSM lebih hemat dibanding membagi rata menjadi 5 subnet /27?',
            penyelesaian: 'Dengan VLSM: 60 → /26 (64 alamat), 30 → /27 (32), 15 → /28 (16), 5 → /29 (8), 2 → /30 (4) = total 124 alamat. Jika dibagi rata 5×/27 (masing-masing 32) = 160 alamat. VLSM menghemat 36 alamat dan cukup untuk semua kebutuhan — alokasi sesuai kebutuhan nyata tiap departemen.' },
        ]} />
        <Tugas data={[
          'Rancang VLSM untuk 192.168.10.0/24 dengan kebutuhan: Marketing 60 host, HRD 30 host, IT 15 host, dan Finance 5 host. Tuliskan network, first, last, dan broadcast tiap departemen!',
          'Gunakan kalkulator VLSM pada materi 3.6 untuk memeriksa hasil rancanganmu, lalu bandingkan hasilnya!',
          'Jelaskan mengapa VLSM lebih hemat alamat IP dibandingkan subnetting dengan ukuran subnet yang seragam!',
          'Dari 192.168.1.0/24, hitung jumlah alamat yang dibutuhkan untuk subnet 100 host (/25) + subnet 50 host (/26) + subnet 20 host (/27). Totalnya berapa dan apakah masih tersisa alamat di dalam /24?',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Calculator size={18} /> 3.5 Kalkulator Subnetting</h3>
        <div className="calc-container" style={{marginTop: 16}}>
          <div className="calc-grid">
            <div className="calc-input-group">
              <label>IP Address</label>
              <input type="text" value={ip} onChange={e => setIp(e.target.value)} placeholder="192.168.1.0" />
            </div>
            <div className="calc-input-group">
              <label>CIDR / Prefix</label>
              <select value={cidr} onChange={e => setCidr(Number(e.target.value))}>
                {Array.from({length: 23}, (_, i) => i + 8).map(v => <option key={v} value={v}>/{v}</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleCalcSubnet}><Calculator size={16} /> Hitung</button>
          {subnetResult && (
            <div className="calc-result">
              <h4>Hasil Perhitungan</h4>
              {[
                ['Subnet Mask', subnetResult.mask],
                ['Binary IP', subnetResult.binary],
                ['Network Address', subnetResult.network],
                ['Broadcast Address', subnetResult.broadcast],
                ['First Host', subnetResult.first],
                ['Last Host', subnetResult.last],
                ['Total Hosts', subnetResult.total.toLocaleString()],
                ['Usable Hosts', subnetResult.usable.toLocaleString()],
              ].map(([label, value], i) => (
                <div className="result-item" key={i}><span className="label">{label}</span><span className="value">{value}</span></div>
              ))}
            </div>
          )}
        </div>
        <ContohSoal data={[
          { soal: 'Gunakan kalkulator subnetting untuk menghitung 192.168.5.0/27, lalu bandingkan dengan perhitungan manual!',
            penyelesaian: 'Hasil kalkulator: mask 255.255.255.224, network 192.168.5.0, broadcast 192.168.5.31, first host .1, last host .30, usable host 30. Cocok dengan manual: /27 → block = 256 − 224 = 32 → range .0–.31.' },
          { soal: 'Masukkan 10.0.0.0/8 ke kalkulator. Berapa total host yang tersedia?',
            penyelesaian: 'Total host = 2^(32−8) = 16.777.216 alamat, dengan usable host 16.777.214 (dikurangi network dan broadcast).' },
        ]} />
        <Tugas data={[
          'Hitung 3 jaringan berikut dengan kalkulator: 172.16.0.0/20, 192.168.1.0/29, dan 10.0.0.0/12. Catat mask, network, first, last, broadcast, dan usable host!',
          'Bandingkan hasil kalkulator dengan perhitungan manual untuk satu jaringan /28. Apakah hasilnya sama?',
          'Apa fungsi network address dan broadcast address? Mengapa keduanya tidak boleh dipakai untuk host?',
          'Masukkan IP 10.0.0.1 dengan prefix /8 ke kalkulator. Berapa total usable host? Jelaskan mengapa angka tersebut jauh lebih besar daripada jaringan /24!',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Calculator size={18} /> 3.6 Kalkulator VLSM</h3>
        <div className="calc-container" style={{marginTop: 16}}>
          <div className="calc-grid">
            <div className="calc-input-group">
              <label>Network Address</label>
              <input type="text" value={vlsmIP} onChange={e => setVlsmIP(e.target.value)} />
            </div>
            <div className="calc-input-group">
              <label>CIDR / Prefix</label>
              <select value={vlsmCIDR} onChange={e => setVlsmCIDR(Number(e.target.value))}>
                {Array.from({length: 23}, (_, i) => i + 8).map(v => <option key={v} value={v}>/{v}</option>)}
              </select>
            </div>
            <div className="calc-input-group" style={{gridColumn: 'span 2'}}>
              <label>Kebutuhan Host per Subnet (koma, dari terbesar)</label>
              <input type="text" value={vlsmHosts} onChange={e => setVlsmHosts(e.target.value)} placeholder="100, 50, 25, 2" />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleCalcVLSM}><Calculator size={16} /> Hitung VLSM</button>
          {vlsmResult && (
            <div className="calc-result">
              <h4>Hasil VLSM</h4>
              <div className="table-responsive">
                <table className="subnet-table">
                  <thead><tr><th>No</th><th>Host</th><th>CIDR</th><th>Mask</th><th>Network</th><th>First</th><th>Last</th><th>Broadcast</th></tr></thead>
                  <tbody>
                    {vlsmResult.subnets.map((s, i) => (
                      <tr key={i}><td>{i+1}</td><td>{s.hosts}</td><td>/{s.prefix}</td><td>{s.mask}</td><td>{s.network}</td><td>{s.first}</td><td>{s.last}</td><td>{s.broadcast}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{marginTop: 12, fontSize: '0.85rem', color: 'var(--text-light)'}}>
                Total terpakai: {vlsmResult.totalUsed} dari {vlsmResult.totalAvail.toLocaleString()} alamat
              </p>
            </div>
          )}
        </div>
        <ContohSoal data={[
          { soal: 'Gunakan kalkulator VLSM untuk membagi 172.16.0.0/16 dengan kebutuhan 500 host, 200 host, dan 50 host!',
            penyelesaian: '500 host → /23 (510 usable). 200 host → /24 (254 usable). 50 host → /26 (62 usable). Hasil di kalkulator: subnet 1 = 172.16.0.0/23, subnet 2 = 172.16.2.0/24, subnet 3 = 172.16.3.0/26.' },
          { soal: 'Mengapa kebutuhan 2 host sebaiknya memakai /30, bukan /31?',
            penyelesaian: 'Aturan umum host usable = 2^h − 2 (network dan broadcast). /30 menyediakan 2 host usable yang pas. /31 juga bisa untuk point-to-point, tetapi tidak semua perangkat mendukungnya sehingga /30 lebih aman digunakan.' },
        ]} />
        <Tugas data={[
          'Gunakan kalkulator VLSM untuk kebutuhan 80, 40, 10, dan 2 host dari 192.168.0.0/24! Tuliskan CIDR dan range tiap subnet.',
          'Mengapa VLSM mengalokasikan subnet untuk kebutuhan host terbesar terlebih dahulu? Jelaskan!',
          'Rancang skema VLSM untuk 3 divisi (120, 60, 20 host) dari 192.168.50.0/24, lalu buktikan dengan kalkulator bahwa total alamat mencukupi!',
          'Pada hasil VLSM untuk 100, 50, 25, dan 2 host, perhatikan subnet untuk 2 host. Berapa prefix yang dipilih kalkulator dan berapa alamat yang terbuang (jika ada)?',
        ]} />
      </div>

      <div className="materi-card">
        <h3><Globe size={18} /> Video Pembelajaran</h3>
        <VideoEmbed videoId="9GtL8dW8rYY" title="IP Subnetting Lengkap - Binary, Class, VLSM & CIDR" />
      </div>
    </div>
  );
}
