export const worksheetsMPK2 = {
  modul1: {
    title: 'Modul 1: Instalasi & Perawatan Jaringan',
    questions: [
      {
        id: 'mpk2_w1_1',
        type: 'essay',
        question: 'Jelaskan langkah-langkah instalasi kabel UTP pada sebuah jaringan LAN kantor, mulai dari persiapan alat hingga pengujian.',
        hint: 'Pertimbangkan: crimping tool, cable tester, urutan kabel T568A/B.'
      },
      {
        id: 'mpk2_w1_2',
        type: 'essay',
        question: 'Apa yang dimaksud dengan preventive maintenance pada jaringan? Sebutkan minimal 5 kegiatan rutin yang harus dilakukan.',
        hint: 'Pembersihan, pengecekan kabel, update firmware, backup konfigurasi.'
      },
      {
        id: 'mpk2_w1_3',
        type: 'essay',
        question: 'Sebuah jaringan sering terputus-putus (intermittent). Jelaskan langkah-langkah sistematis untuk melakukan troubleshooting.',
        hint: 'Gunakan pendekatan OSI layer: fisik → data link → network.'
      },
      {
        id: 'mpk2_w1_4',
        type: 'essay',
        question: 'Jelaskan cara melakukan manajemen kabel (cable management) yang baik pada sebuah rack server. Mengapa hal ini penting?',
        hint: 'Pertimbangkan: airflow, labeling, akses perbaikan, estetika.'
      },
      {
        id: 'mpk2_w1_5',
        type: 'essay',
        question: 'Buatlah jadwal perawatan tahunan untuk jaringan sebuah SMK yang memiliki 3 laboratorium komputer dan 1 ruang server.',
        hint: 'Bagi jadwal: harian, mingguan, bulanan, semesteran, tahunan.'
      }
    ]
  },
  modul2: {
    title: 'Modul 2: Dasar Jaringan Nirkabel',
    questions: [
      {
        id: 'mpk2_w2_1',
        type: 'essay',
        question: 'Jelaskan prinsip kerja gelombang radio pada jaringan Wi-Fi. Bagaimana sinyal data dikirimkan melalui udara?',
        hint: 'Pertimbangkan: modulasi, frekuensi 2.4 GHz / 5 GHz, OFDM.'
      },
      {
        id: 'mpk2_w2_2',
        type: 'essay',
        question: 'Apa perbedaan standar 802.11b/g/n/ac/ax? Bandingkan dari segi kecepatan, frekuensi, dan teknologi MIMO.',
        hint: 'Buat tabel perbandingan: kecepatan max, pita frekuensi, tahun rilis.'
      },
      {
        id: 'mpk2_w2_3',
        type: 'essay',
        question: 'Faktor apa saja yang mempengaruhi kualitas dan jangkauan sinyal Wi-Fi? Jelaskan cara mengoptimalkannya.',
        hint: 'Halangan fisik, interferensi, daya pancar, antena, penempatan AP.'
      },
      {
        id: 'mpk2_w2_4',
        type: 'essay',
        question: 'Jelaskan perbedaan mode infrastruktur dan mode ad-hoc pada jaringan nirkabel. Kapan masing-masing digunakan?',
        hint: 'Infrastruktur: pakai AP. Ad-hoc: peer-to-peer langsung.'
      },
      {
        id: 'mpk2_w2_5',
        type: 'essay',
        question: 'Apa itu SSID, BSSID, dan channel bonding? Jelaskan peran masing-masing dalam jaringan Wi-Fi.',
        hint: 'SSID = nama jaringan, BSSID = MAC AP, channel bonding = gabung channel.'
      }
    ]
  },
  modul3: {
    title: 'Modul 3: Instalasi Perangkat Nirkabel',
    questions: [
      {
        id: 'mpk2_w3_1',
        type: 'essay',
        question: 'Jelaskan langkah-langkah konfigurasi dasar Access Point (AP) untuk jaringan kantor kecil. Sertakan parameter yang harus diatur.',
        hint: 'IP management, SSID, security WPA2, channel, DHCP.'
      },
      {
        id: 'mpk2_w3_2',
        type: 'essay',
        question: 'Apa perbedaan antara Access Point (AP) dan Wireless Router? Kapan sebaiknya menggunakan masing-masing?',
        hint: 'AP: memperluas sinyal. Router: routing + NAT + DHCP.'
      },
      {
        id: 'mpk2_w3_3',
        type: 'essay',
        question: 'Sebuah gedung 3 lantai membutuhkan coverage Wi-Fi penuh. Rancanglah penempatan AP dan jelaskan pertimbangannya.',
        hint: 'Pertimbangkan: luas area, halangan, channel interference, kapasitas user.'
      },
      {
        id: 'mpk2_w3_4',
        type: 'essay',
        question: 'Jelaskan cara mengamankan jaringan nirkabel dari serangan man-in-the-middle dan unauthorized access.',
        hint: 'Gunakan: WPA3, MAC filtering, disable SSID broadcast, VLAN.'
      },
      {
        id: 'mpk2_w3_5',
        type: 'essay',
        question: 'Apa itu WDS (Wireless Distribution System) dan repeater? Bagaimana cara kerja keduanya dan apa kelemahan menggunakan repeater?',
        hint: 'WDS: jembatan antar AP. Repeater: perkuat sinyal tapi turunkan throughput.'
      }
    ]
  },
  modul4: {
    title: 'Modul 4: Voice over IP (VoIP)',
    questions: [
      {
        id: 'mpk2_w4_1',
        type: 'essay',
        question: 'Jelaskan konsep dasar VoIP dan bagaimana suara dikirimkan melalui jaringan IP. Gambarkan proses konversi suara menjadi paket data.',
        hint: 'ADC → kompresi → packetisasi → transmisi. Codec: G.711, G.729.'
      },
      {
        id: 'mpk2_w4_2',
        type: 'essay',
        question: 'Apa perbedaan antara protokol SIP dan H.323 dalam sistem VoIP? Jelaskan kelebihan dan kekurangan masing-masing.',
        hint: 'SIP: sederhana, teks-based. H.323: kompleks, mature.'
      },
      {
        id: 'mpk2_w4_3',
        type: 'essay',
        question: 'Sebutkan dan jelaskan minimal 3 codec VoIP yang umum digunakan. Bandingkan dari segi kualitas suara dan kebutuhan bandwidth.',
        hint: 'G.711: 64 kbps. G.729: 8 kbps. GSM: 13 kbps.'
      },
      {
        id: 'mpk2_w4_4',
        type: 'essay',
        question: 'Jelaskan arsitektur dasar VoIP menggunakan softswitch. Apa fungsi dari: IP PBX, gateway, endpoint, dan registrar server?',
        hint: 'IP PBX: pusat switching. Gateway: jembatan ke PSTN.'
      },
      {
        id: 'mpk2_w4_5',
        type: 'essay',
        question: 'Apa yang dimaksud dengan QoS (Quality of Service) pada VoIP? Parameter apa saja yang digunakan dan bagaimana cara mengoptimalkannya?',
        hint: 'Jitter, latency, packet loss. Prioritaskan traffic VoIP di jaringan.'
      }
    ]
  },
  modul5: {
    title: 'Modul 5: Jaringan Fiber Optik',
    questions: [
      {
        id: 'mpk2_w5_1',
        type: 'essay',
        question: 'Jelaskan prinsip kerja fiber optik. Bagaimana cahaya dapat merambat di dalam serat kaca tanpa keluar?',
        hint: 'Hukum Snell, pemantulan internal total, core dan cladding.'
      },
      {
        id: 'mpk2_w5_2',
        type: 'essay',
        question: 'Bandingkan kabel fiber optik single-mode (SMF) dan multi-mode (MMF) dari segi ukuran core, jarak tempuh, sumber cahaya, dan biaya.',
        hint: 'Single-mode: core 9µm, laser. Multi-mode: core 50/62.5µm, LED.'
      },
      {
        id: 'mpk2_w5_3',
        type: 'essay',
        question: 'Jelaskan langkah-langkah penyambungan kabel fiber optik menggunakan fusion splicer. Alat apa saja yang dibutuhkan?',
        hint: 'Stripper, cleaver, fusion splicer. Proses: stripping → cleaning → cleaving → splicing.'
      },
      {
        id: 'mpk2_w5_4',
        type: 'essay',
        question: 'Apa yang dimaksud dengan redaman (attenuation) pada fiber optik? Sebutkan penyebab utama redaman dan cara mengukurnya.',
        hint: 'Absorpsi, scattering (Rayleigh), bending loss. Ukur dengan OTDR.'
      },
      {
        id: 'mpk2_w5_5',
        type: 'essay',
        question: 'Sebuah link fiber optik sepanjang 15 km menggunakan kabel dengan redaman 0.35 dB/km. Jika daya output adalah 4 dBm, hitung daya yang diterima dan tentukan apakah masih layak jika receiver membutuhkan minimal -20 dBm.',
        hint: 'Total redaman = 15 × 0.35 = 5.25 dB. Daya terima = 4 - 5.25 = -1.25 dBm. Bandingkan dengan threshold.'
      }
    ]
  }
};
