// --- DATABASE 52 KARYAWAN LENGKAP (SHIFT & NON-SHIFT) ---
const defaultMasterKaryawan = [
    {no: 1, name: "Sujianto Batias", jabatan: "Driver Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 2, name: "Ansar Mansur", jabatan: "Pemuka Fire & Safety", grade: "F", posisi: "HSSE", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 3, name: "Harir A. Lako", jabatan: "Petugas Fire & Safety", grade: "E", posisi: "HSSE", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 4, name: "Ali Friansyah", jabatan: "Petugas Fire & Safety", grade: "E", posisi: "HSSE", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 5, name: "Ahmad Yani", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 6, name: "Budi Santoso", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 7, name: "Candra Wijaya", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 8, name: "Dedi Kurniawan", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 9, name: "Eko Prasetyo", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 10, name: "Fajar Hidayat", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 11, name: "Gatot Kaca", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 12, name: "Hendra Setiawan", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 13, name: "Iwan Fals", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 14, name: "Joko Anwar", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 15, name: "Kevin Sanjaya", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 16, name: "Lalu Muhammad", jabatan: "Operator", grade: "D", posisi: "SCM", sistem: "Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 17, name: "Arianto Yahya", jabatan: "Pemuka Operator Alat Berat", grade: "F", posisi: "SCM", sistem: "Non Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 18, name: "Marjan Karim", jabatan: "Admin Warehouse", grade: "E", posisi: "SCM", sistem: "Non Shift", hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []}
];

const CLOUD_URL = "https://script.google.com/macros/s/AKfycby1fKpsDqdGhtMira6PqPGdkVFdYTMvr554Zs5OdagaO5bxzSK5trQWQtSAErXei2lX/exec";

let masterKaryawan = JSON.parse(localStorage.getItem('donggi_timesheet_data')) || defaultMasterKaryawan;
masterKaryawan.forEach(k => { if(!k.historiAbsen) k.historiAbsen = []; });

let filterAktif = 'Semua';
let activeKaryawanNo = null;
let lastSelectedBulan = null;
let lastSelectedTahun = null;

function setFilter(sistem) {
    filterAktif = sistem;
    document.getElementById('btnFilterSemua').className = sistem === 'Semua' ? 'px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow' : 'px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200';
    document.getElementById('btnFilterShift').className = sistem === 'Shift' ? 'px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow' : 'px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200';
    document.getElementById('btnFilterNonShift').className = sistem === 'Non Shift' ? 'px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow' : 'px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200';
    renderTabel();
}

function renderTabel() {
    const tbody = document.getElementById('tabelAbsen');
    const keyword = document.getElementById('inputPencarian').value.toLowerCase();
    tbody.innerHTML = '';

    let dataFiltered = masterKaryawan.filter(item => {
        let matchSistem = filterAktif === 'Semua' || item.sistem === filterAktif;
        let matchKeyword = item.name.toLowerCase().includes(keyword) || item.jabatan.toLowerCase().includes(keyword);
        return matchSistem && matchKeyword;
    });

    dataFiltered.forEach((item) => {
        tbody.innerHTML += `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-4 text-center font-semibold text-slate-600">${item.no}</td>
                <td class="p-4 font-bold text-slate-900">${item.name}</td>
                <td class="p-4 text-slate-700">
                    ${item.jabatan} <br>
                    <span class="text-xs text-slate-500">Grade: ${item.grade} | Posisi: ${item.posisi}</span>
                    <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-semibold ml-1">${item.sistem}</span>
                </td>
                <td class="p-4 text-center font-bold text-emerald-700">${item.hk} Hari</td>
                <td class="p-4 text-center font-bold text-slate-700">${item.otAktual} Jam</td>
                <td class="p-4 text-center font-bold text-blue-700">${item.otKonversi} Jam</td>
                <td class="p-4 text-center font-semibold text-slate-600">
                    <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 text-xs">
                        🍳 Pagi: ${item.makanPagi} | 🍱 Siang: ${item.makanSiang} | 🌙 Malam: ${item.makanMalam}
                    </span>
                    <div class="text-[10px] text-blue-600 mt-1 font-semibold">Status: ${item.catatanStatus}</div>
                </td>
                <td class="p-4 text-center">
                    <button onclick="bukaModalHistori(${item.no})" class="bg-indigo-600 text-white px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-indigo-700 transition shadow-sm">📄 Histori & Koreksi</button>
                </td>
            </tr>
        `;
    });
}

const petaBulan = {
    "Januari": 1, "Februari": 2, "Maret": 3, "April": 4, "Mei": 5, "Juni": 6,
    "Juli": 7, "Agustus": 8, "September": 9, "Oktober": 10, "November": 11, "Desember": 12
};

function parseTanggalKeObjek(tanggalStr) {
    let bagian = tanggalStr.split(" ");
    let tgl = parseInt(bagian[0]) || 1;
    let bln = petaBulan[bagian[1]] || 1;
    let thn = parseInt(bagian[2]) || 2026;
    return new Date(thn, bln - 1, tgl);
}

function bukaModalHistori(noKaryawan) {
    activeKaryawanNo = noKaryawan;
    let karyawan = masterKaryawan.find(k => k.no === noKaryawan);
    if(!karyawan) return;

    karyawan.historiAbsen.sort((a, b) => {
        let dateA = parseTanggalKeObjek(a.tanggalStr);
        let dateB = parseTanggalKeObjek(b.tanggalStr);
        return dateA - dateB;
    });

    document.getElementById('historiTitle').innerText = `Histori Absen & Rincian Lembur: ${karyawan.name}`;
    const tbodyHistori = document.getElementById('tabelHistoriItem');
    tbodyHistori.innerHTML = '';

    let sumJamKerja = 0;
    let sumLemburAktual = 0;
    let sumLemburKonversi = 0;

    if(karyawan.historiAbsen.length === 0) {
        tbodyHistori.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400">Belum ada catatan histori absen yang diinput.</td></tr>`;
    } else {
        karyawan.historiAbsen.forEach((h, index) => {
            let [jIn, mIn] = (h.jamMasuk || "00:00").split(':').map(Number);
            let [jOut, mOut] = (h.jamKeluar || "00:00").split(':').map(Number);
            let durasi = (jOut + mOut/60) - (jIn + mIn/60);
            if(durasi < 0) durasi += 24;
            if(h.status === 'OFF_MURNI' || h.status === 'CUTI' || h.status === 'IZIN' || h.status === 'SAKIT' || h.status === 'ALFA') durasi = 0;

            sumJamKerja += durasi;
            sumLemburAktual += (h.otAktual || 0);
            sumLemburKonversi += (h.otKonversi || 0);

            tbodyHistori.innerHTML += `
                <tr class="hover:bg-slate-50">
                    <td class="p-3 font-bold text-slate-700">${h.tanggalStr}</td>
                    <td class="p-3 font-semibold text-emerald-700">${h.status} (${h.jenisHari || 'Biasa'})</td>
                    <td class="p-3 text-center text-slate-600">${h.jamMasuk} - ${h.jamKeluar}</td>
                    <td class="p-3 text-center font-bold text-slate-700">${h.otAktual} Jam</td>
                    <td class="p-3 text-center font-bold text-blue-600">${h.otKonversi} Jam</td>
                    <td class="p-3 text-center">
                        <button onclick="hapusHistoriTanggal(${karyawan.no}, ${index})" class="bg-rose-600 text-white px-2.5 py-1 rounded text-[11px] font-semibold hover:bg-rose-700 shadow-sm">🗑️ Hapus</button>
                    </td>
                </tr>
            `;
        });
    }

    document.getElementById('statTotalJamKerja').innerText = sumJamKerja.toFixed(1) + " Jam";
    document.getElementById('statTotalLemburAktual').innerText = sumLemburAktual.toFixed(1) + " Jam";
    document.getElementById('statTotalLemburKonversi').innerText = sumLemburKonversi.toFixed(1) + " Jam";

    document.getElementById('modalHistori').classList.remove('hidden');
}

function tutupModalHistori() {
    document.getElementById('modalHistori').classList.add('hidden');
}

function printHistori() {
    let konten = document.getElementById('areaTabelHistoriCetak').innerHTML;
    let judul = document.getElementById('historiTitle').innerText;
    let jendelaCetak = window.open('', '', 'height=600,width=800');
    jendelaCetak.document.write('<html><head><title>Cetak Laporan - ' + judul + '</title>');
    jendelaCetak.document.write('<style>body{font-family:sans-serif;padding:20px;} table{width:100%;border-collapse:collapse;margin-top:15px;} th, td{border:1px solid #cbd5e1;padding:8px;text-align:left;font-size:12px;} th{background-color:#f1f5f9;}</style>');
    jendelaCetak.document.write('</head><body>');
    jendelaCetak.document.write('<h2>' + judul + '</h2>');
    jendelaCetak.document.write('<p>Field Donggi Matindok - Zona 13</p>');
    jendelaCetak.document.write(konten);
    jendelaCetak.document.write('</body></html>');
    jendelaCetak.document.close();
    jendelaCetak.focus();
    setTimeout(() => { jendelaCetak.print(); jendelaCetak.close(); }, 500);
}

function downloadCSVHistori() {
    let karyawan = masterKaryawan.find(k => k.no === activeKaryawanNo);
    if(!karyawan || karyawan.historiAbsen.length === 0) {
        alert('Tidak ada data untuk diunduh.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Tanggal Absen,Status Kehadiran,Jenis Hari,Jam Masuk,Jam Keluar,Lembur Aktual (Jam),Lembur Konversi (Jam)\r\n";
    karyawan.historiAbsen.forEach(h => {
        let row = `"${h.tanggalStr}","${h.status}","${h.jenisHari}","${h.jamMasuk}","${h.jamKeluar}","${h.otAktual}","${h.otKonversi}"`;
        csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Timesheet_${karyawan.name.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function hapusSemuaHistori() {
    let karyawan = masterKaryawan.find(k => k.no === activeKaryawanNo);
    if(!karyawan) return;

    if(confirm(`⚠️ Yakin ingin menghapus SELURUH histori absen untuk ${karyawan.name}? Akumulasi akan kembali ke 0.`)) {
        karyawan.hk = 0;
        karyawan.otAktual = 0;
        karyawan.otKonversi = 0;
        karyawan.makanPagi = 0;
        karyawan.makanSiang = 0;
        karyawan.makanMalam = 0;
        karyawan.historiAbsen = [];
        karyawan.catatanStatus = "Telah di-reset total";

        localStorage.setItem('donggi_timesheet_data', JSON.stringify(masterKaryawan));
        renderTabel();
        bukaModalHistori(activeKaryawanNo);
        alert('Semua histori berhasil dibersihkan!');
    }
}

function hapusHistoriTanggal(noKaryawan, indexHistori) {
    let karyawan = masterKaryawan.find(k => k.no === noKaryawan);
    if(!karyawan) return;

    let itemDihapus = karyawan.historiAbsen[indexHistori];

    if(confirm(`Hapus catatan tanggal ${itemDihapus.tanggalStr} untuk ${karyawan.name}? Akumulasi HK dan lembur akan disesuaikan.`)) {
        if(itemDihapus.status === 'MASUK' || itemDihapus.status === 'DINAS' || itemDihapus.status === 'OFF_MASUK' || itemDihapus.otAktual > 0) {
            if(itemDihapus.status === 'MASUK' || itemDihapus.status === 'DINAS') {
                karyawan.hk = Math.max(0, karyawan.hk - 1);
            }
            karyawan.otAktual = Math.max(0, karyawan.otAktual - itemDihapus.otAktual);
            karyawan.otKonversi = Math.max(0, karyawan.otKonversi - itemDihapus.otKonversi);
            if(karyawan.sistem === 'Non Shift') {
                karyawan.makanSiang = Math.max(0, karyawan.makanSiang - 1);
            } else {
                karyawan.makanMalam = Math.max(0, karyawan.makanMalam - 1);
            }
        }

        karyawan.historiAbsen.splice(indexHistori, 1);
        karyawan.catatanStatus = karyawan.historiAbsen.length > 0 ? karyawan.historiAbsen[karyawan.historiAbsen.length - 1].catatanRingkas : "Belum ada input";

        localStorage.setItem('donggi_timesheet_data', JSON.stringify(masterKaryawan));
        renderTabel();
        bukaModalHistori(noKaryawan);
        alert('Data tanggal berhasil dihapus!');
    }
}

// --- PROTEKSI BERJENJANG (PILIH KATEGORI DULU UNTUK MENCEGAH SALAH KLIK) ---
function bukaModalKategori() {
    // Membuat modal pilihan kategori secara dinamis jika belum ada di HTML
    let modalKat = document.getElementById('modalKategori');
    if (!modalKat) {
        modalKat = document.createElement('div');
        modalKat.id = 'modalKategori';
        modalKat.className = 'fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50';
        modalKat.innerHTML = `
            <div class="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl">
                <h3 class="text-lg font-bold mb-2 text-slate-800">Pilih Sistem Kerja</h3>
                <p class="text-xs text-slate-500 mb-4">Proteksi berjenjang untuk mencegah salah input data.</p>
                <div class="space-y-3">
                    <button onclick="bukaModalAbsen('Shift')" class="w-full bg-emerald-600 text-white p-3.5 rounded-xl font-bold hover:bg-emerald-700 transition shadow">Pekerja SHIFT</button>
                    <button onclick="bukaModalAbsen('Non Shift')" class="w-full bg-blue-600 text-white p-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow">Pekerja NON-SHIFT</button>
                    <button onclick="document.getElementById('modalKategori').classList.add('hidden')" class="w-full bg-slate-100 text-slate-600 p-2.5 rounded-xl font-bold hover:bg-slate-200 transition">Batal</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalKat);
    }
    modalKat.classList.remove('hidden');
}

function bukaModalAbsen(sistemKerja) {
    let modalKat = document.getElementById('modalKategori');
    if (modalKat) modalKat.classList.add('hidden');

    document.getElementById('modalTitle').innerText = `Input Absen Harian (${sistemKerja})`;
    
    const today = new Date();
    document.getElementById('inputTanggal').value = today.getDate();
    
    const daftarBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    document.getElementById('inputBulan').value = lastSelectedBulan || daftarBulan[today.getMonth()];
    document.getElementById('inputTahun').value = lastSelectedTahun || today.getFullYear();

    const select = document.getElementById('pilihKaryawan');
    select.innerHTML = '';
    
    masterKaryawan.filter(k => k.sistem === sistemKerja).forEach((k) => {
        select.innerHTML += `<option value="${k.no}">${k.name} - ${k.jabatan} (Grade ${k.grade})</option>`;
    });

    document.getElementById('statusKehadiran').value = 'masuk';
    gantiStatusAbsen();
    document.getElementById('modalAbsen').classList.remove('hidden');
}

function gantiStatusAbsen() {
    const status = document.getElementById('statusKehadiran').value;
    const wrapperShift = document.getElementById('wrapperPilihanShift');
    const wrapperJam = document.getElementById('wrapperJamKerja');
    const wrapperJenisHari = document.getElementById('wrapperJenisHari');
    
    const selectedNo = parseInt(document.getElementById('pilihKaryawan').value);
    let karyawan = masterKaryawan.find(k => k.no === selectedNo);
    let isShift = karyawan ? karyawan.sistem === 'Shift' : true;

    if (status === 'off_murni') {
        if(wrapperShift) wrapperShift.classList.add('hidden');
        if(wrapperJam) wrapperJam.classList.add('hidden');
        if(wrapperJenisHari) wrapperJenisHari.classList.add('hidden');
    } else if (status === 'cuti' || status === 'izin' || status === 'sakit' || status === 'alfa') {
        if(wrapperShift) wrapperShift.classList.add('hidden');
        if(wrapperJam) wrapperJam.classList.add('hidden');
        if(wrapperJenisHari) wrapperJenisHari.classList.remove('hidden');
    } else {
        if(wrapperJam) wrapperJam.classList.remove('hidden');
        if(wrapperJenisHari) wrapperJenisHari.classList.remove('hidden');
        if (isShift) {
            if(wrapperShift) wrapperShift.classList.remove('hidden');
            document.getElementById('pilihanShiftKerja').value = 'pagi';
            aturJamOtomatisShift();
        } else {
            if(wrapperShift) wrapperShift.classList.add('hidden');
            document.getElementById('jamMasuk').value = "07:00";
            document.getElementById('jamKeluar').value = "16:00";
        }
    }
}

function aturJamOtomatisShift() {
    const jenisShift = document.getElementById('pilihanShiftKerja').value;
    if(jenisShift === 'pagi') {
        document.getElementById('jamMasuk').value = "07:00";
        document.getElementById('jamKeluar').value = "19:00";
    } else if(jenisShift === 'malam') {
        document.getElementById('jamMasuk').value = "19:00";
        document.getElementById('jamKeluar').value = "07:00";
    }
}

function tutupModal() {
    document.getElementById('modalAbsen').classList.add('hidden');
}

function hitungKonversiDepnaker(jamAktual, jenisHari) {
    if (jamAktual <= 0) return 0;
    if (jenisHari === 'biasa') {
        if (jamAktual <= 1) {
            return jamAktual * 1.5;
        } else {
            return 1.5 + ((jamAktual - 1) * 2.0);
        }
    } else {
        if (jamAktual <= 7) {
            return jamAktual * 2.0;
        } else if (jamAktual <= 8) {
            return (7 * 2.0) + ((jamAktual - 7) * 3.0);
        } else {
            return (7 * 2.0) + (1 * 3.0) + ((jamAktual - 8) * 4.0);
        }
    }
}

function simpanAbsenHarian() {
    const selectedNo = parseInt(document.getElementById('pilihKaryawan').value);
    const status = document.getElementById('statusKehadiran').value;
    const jenisHari = document.getElementById('jenisHari').value;
    const tgl = parseInt(document.getElementById('inputTanggal').value);
    const bln = document.getElementById('inputBulan').value;
    const thn = parseInt(document.getElementById('inputTahun').value);
    
    if (isNaN(tgl) || tgl < 1 || tgl > 31) {
        alert('⚠️ Validasi Gagal: Tanggal harus di antara angka 1 sampai 31.');
        document.getElementById('inputTanggal').focus();
        return;
    }

    lastSelectedBulan = bln;
    lastSelectedTahun = thn;

    let karyawan = masterKaryawan.find(k => k.no === selectedNo);
    
    if(karyawan) {
        let tanggalStr = `${tgl} ${bln} ${thn}`;
        let jamMasuk = "00:00";
        let jamKeluar = "00:00";
        let totalJamKerja = 0;
        let jamLemburAktual = 0;
        let jamLemburKonversi = 0;

        if (status !== 'off_murni' && status !== 'cuti' && status !== 'izin' && status !== 'sakit' && status !== 'alfa') {
            jamMasuk = document.getElementById('jamMasuk').value;
            jamKeluar = document.getElementById('jamKeluar').value;
            
            let [jamIn, menitIn] = jamMasuk.split(':').map(Number);
            let [jamOut, menitOut] = jamKeluar.split(':').map(Number);
            totalJamKerja = (jamOut + menitOut/60) - (jamIn + menitIn/60);
            if(totalJamKerja < 0) totalJamKerja += 24;
        }

        if(status === 'masuk' || status === 'dinas') {
            karyawan.hk += 1;
            if(karyawan.sistem === 'Non Shift') {
                if (jenisHari === 'libur') {
                    jamLemburAktual = totalJamKerja;
                } else {
                    let durasiKerjaBersih = totalJamKerja - 1;
                    jamLemburAktual = (durasiKerjaBersih > 8) ? (durasiKerjaBersih - 8) : 0;
                }
                karyawan.makanSiang += 1;
            } else {
                if(totalJamKerja > 12) {
                    jamLemburAktual = totalJamKerja - 12;
                }
                karyawan.makanMalam += 1;
            }
        } else if(status === 'off_masuk') {
            if(karyawan.sistem === 'Non Shift') {
                if (jenisHari === 'libur') {
                    jamLemburAktual = totalJamKerja;
                } else {
                    let durasiKerjaBersih = totalJamKerja - 1;
                    jamLemburAktual = (durasiKerjaBersih > 0) ? durasiKerjaBersih : 0;
                }
                karyawan.makanSiang += 1;
            } else {
                jamLemburAktual = totalJamKerja;
                karyawan.makanMalam += 1;
            }
        }

        if(jamLemburAktual < 0) jamLemburAktual = 0;
        
        let jenisHariSimpan = (status === 'off_murni') ? 'NON' : (jenisHari === 'libur' ? 'Libur/Merah' : 'Biasa');
        if (status !== 'off_murni') {
            jamLemburKonversi = hitungKonversiDepnaker(jamLemburAktual, jenisHari);
        }

        karyawan.otAktual += jamLemburAktual;
        karyawan.otKonversi += jamLemburKonversi;
        karyawan.catatanStatus = `${tanggalStr}: ${status.toUpperCase()}`;
        
        karyawan.historiAbsen.push({
            tanggalStr: tanggalStr,
            status: status.toUpperCase(),
            jenisHari: jenisHariSimpan,
            jamMasuk: jamMasuk,
            jamKeluar: jamKeluar,
            otAktual: jamLemburAktual,
            otKonversi: jamLemburKonversi,
            catatanRingkas: karyawan.catatanStatus
        });

        localStorage.setItem('donggi_timesheet_data', JSON.stringify(masterKaryawan));
        
        const payload = {
            nama: karyawan.name,
            sistem: karyawan.sistem,
            status: status.toUpperCase(),
            jenisHari: jenisHariSimpan,
            tanggal: tanggalStr,
            bulan: bln,
            jamMasuk: jamMasuk,
            jamKeluar: jamKeluar,
            tipeShift: karyawan.sistem,
            totalHk: karyawan.hk,
            uangMakan: `Pagi: ${karyawan.makanPagi} | Siang: ${karyawan.makanSiang} | Malam: ${karyawan.makanMalam}`,
            otAktual: karyawan.otAktual,
            otKonversi: karyawan.otKonversi,
            catatan: karyawan.catatanStatus
        };

        fetch(CLOUD_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(payload).toString()
        }).then(() => {
            alert(`SUKSES! Data tgl ${tanggalStr} untuk ${karyawan.name} telah disimpan.`);
            renderTabel();
            tutupModal();
        }).catch((error) => {
            console.error('Koneksi:', error);
            alert('Gagal terhubung ke Cloud.');
        });
    }
}

window.onload = renderTabel;