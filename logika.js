// --- 1. DATABASE MASTER KARYAWAN (MURNI DINAMIS TANPA ANGKA STATIS) ---
const defaultMasterKaryawan = [
    {no: 1, name: "Sujianto M. Batias", jabatan: "Driver Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 2, name: "Ansar Mansur", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 3, name: "Harir A. Lako", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 4, name: "Ali Friansyah", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 5, name: "Fredrik D. Tinadji", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 6, name: "Wayan Edi Jaya", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 7, name: "Akmal (A)", jabatan: "Driver Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 8, name: "Alfikwan I. Marida", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 9, name: "Deni Andrianto", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 10, name: "Awal Dwi Sekti", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 11, name: "Muh Arsyal Ramdani", jabatan: "Driver Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 12, name: "Muh Palmi", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 13, name: "Halim", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 14, name: "Mustamar Dg Magangka", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 15, name: "Akmal (B)", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 16, name: "Rizal Tamoreka", jabatan: "Driver Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 17, name: "Arianto Yahya", jabatan: "Pemuka Operator Alat Berat", grade: "F", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 18, name: "Marjan Karim", jabatan: "Petugas Admin II Warehouse", grade: "E", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 19, name: "Kasman", jabatan: "Petugas Admin II Warehouse", grade: "E", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 20, name: "Lukman Tasakka", jabatan: "Pemuka Ops. Alat Berat", grade: "F", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 21, name: "Nengah Darsana", jabatan: "Pemuka Ops. Alat Berat", grade: "F", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 22, name: "I Gusti Ngurah Baliarta", jabatan: "Petugas Admin II Warehouse", grade: "E", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 23, name: "Irpan Parenden", jabatan: "Petugas Admin II Warehouse", grade: "E", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 24, name: "Sunita Ayu P.", jabatan: "Petugas Admin II", grade: "E", posisi: "Legal & Relation", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 25, name: "Dewi Setiawati M Dg M", jabatan: "Petugas Admin III", grade: "F", posisi: "RAM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 26, name: "Marini Astari", jabatan: "Petugas Admin III", grade: "F", posisi: "HR-GS", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 27, name: "Ali Muhtar M. Amin", jabatan: "Supir Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 28, name: "Agus Rudiyanto", jabatan: "Petugas FS", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 29, name: "I Gede Ariana", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 30, name: "I Putu Adnyana Wijaya", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 31, name: "Mursalun Lasuru", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 32, name: "Subandi", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 33, name: "Budi Santoso", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 34, name: "I Komang Santika", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 35, name: "Indra Natalianto Patasik", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 36, name: "Kd Wiyad Nyana", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 37, name: "I Nengah Rudi Artika", jabatan: "Pemuka FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 38, name: "Sukardi Jalisingi", jabatan: "Supir Ambulance", grade: "D", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 39, name: "Yotam", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 40, name: "Thamar Thalib Mbau", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 41, name: "Arie Kurniawan", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 42, name: "Eko Wiyono", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 43, name: "Fajriadi", jabatan: "Pemuka FS", grade: "F", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 44, name: "Jumalik H. Latungka", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 45, name: "Randianto", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 46, name: "Saiful M. Zakar", jabatan: "Petugas FS", grade: "E", posisi: "HSSE", sistem: "Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 47, name: "I Nyoman Suwitra", jabatan: "Petugas Gudang (BBM)", grade: "D", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 48, name: "I Putu Muryanto", jabatan: "Petugas Admin III", grade: "F", posisi: "Operation", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 49, name: "Siti Aisyah Dg Masese", jabatan: "Sekretaris FM", grade: "F", posisi: "Field Manager", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 50, name: "Dewi Khoirunnisa", jabatan: "Petugas Admin III", grade: "F", posisi: "Finance", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 51, name: "Eka Nurjannah", jabatan: "Petugas Admin III CSR", grade: "F", posisi: "Legal & Relation", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []},
    {no: 52, name: "Findy Handayani", jabatan: "Petugas Admin II", grade: "E", posisi: "SCM", sistem: "Non Shift", upahPokok: 0, taup: 0, tarifKehadiran: 0, tarifMakan: 0, hk: 0, otAktual: 0, otKonversi: 0, makanPagi: 0, makanSiang: 0, makanMalam: 0, catatanStatus: "Belum ada input", historiAbsen: []}
];

let savedData = JSON.parse(localStorage.getItem('donggi_timesheet_data')) || [];
let masterKaryawan = defaultMasterKaryawan.map(defaultItem => {
    let existing = savedData.find(s => s.no === defaultItem.no);
    return existing ? existing : defaultItem;
});

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
        let sudahAbsen = item.historiAbsen && item.historiAbsen.length > 0;
        let matchSistem = filterAktif === 'Semua' || item.sistem === filterAktif;
        let matchKeyword = item.name.toLowerCase().includes(keyword) || item.jabatan.toLowerCase().includes(keyword);
        return sudahAbsen && matchSistem && matchKeyword;
    });

    if (dataFiltered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-slate-400">Belum ada data absensi yang diinput. Silakan klik tombol "Input Absen Karyawan" di atas.</td></tr>`;
        return;
    }

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

    let countHK = 0;
    let countShiftSiang = 0;
    let countShiftMalam = 0;
    let countCuti = 0;
    let countOffMurni = 0;
    let countLainnya = 0;

    if(karyawan.historiAbsen.length === 0) {
        tbodyHistori.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400">Belum ada catatan histori absen yang diinput.</td></tr>`;
    } else {
        karyawan.historiAbsen.forEach((h, index) => {
            let [jIn, mIn] = (h.jamMasuk || "00:00").split(':').map(Number);
            let [jOut, mOut] = (h.jamKeluar || "00:00").split(':').map(Number);
            let durasi = (jOut + mOut/60) - (jIn + mIn/60);
            if(durasi < 0) durasi += 24;
            if(h.status === 'OFF_MURNI' || h.status === 'OFF_MASUK' || h.status === 'CUTI' || h.status === 'IZIN' || h.status === 'SAKIT' || h.status === 'ALFA') durasi = 0;

            sumJamKerja += durasi;
            sumLemburAktual += (h.otAktual || 0);
            sumLemburKonversi += (h.otKonversi || 0);

            let statusUpper = (h.status || "").toUpperCase();
            if (statusUpper === 'MASUK' || statusUpper === 'DINAS') {
                countHK++;
                if (jIn >= 18 || jIn < 6 || statusUpper.includes('MALAM') || (h.jamMasuk && h.jamMasuk.startsWith("19"))) {
                    countShiftMalam++;
                } else {
                    countShiftSiang++;
                }
            } else if (statusUpper === 'OFF_MASUK') {
                countOffMurni++;
            } else if (statusUpper === 'CUTI') {
                countCuti++;
            } else if (statusUpper === 'OFF_MURNI') {
                countOffMurni++;
            } else if (statusUpper === 'SAKIT' || statusUpper === 'IZIN' || statusUpper === 'ALFA') {
                countLainnya++;
            }

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

    document.getElementById('rekapDistTotalHK').innerText = countHK + " Hari";
    document.getElementById('rekapDistSiang').innerText = countShiftSiang + " Hari";
    document.getElementById('rekapDistMalam').innerText = countShiftMalam + " Hari";
    document.getElementById('rekapDistCuti').innerText = countCuti + " Hari";
    document.getElementById('rekapDistOff').innerText = countOffMurni + " Hari";
    document.getElementById('rekapDistLainnya').innerText = countLainnya + " Hari";

    let elRekapMakan = document.getElementById('rekapDistMakanLembur');
    if (elRekapMakan) {
        let totalMakanModal = (karyawan.makanPagi || 0) + (karyawan.makanSiang || 0) + (karyawan.makanMalam || 0);
        elRekapMakan.innerText = totalMakanModal + " Kali";
    }

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
        karyawan.totalMakanLemburRekap = 0;
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

    if(confirm(`Hapus catatan tanggal ${itemDihapus.tanggalStr} untuk ${karyawan.name}? Akumulasi HK, lembur, dan tunjangan makan akan disesuaikan.`)) {
        if(itemDihapus.status === 'MASUK' || itemDihapus.status === 'DINAS') {
            karyawan.hk = Math.max(0, karyawan.hk - 1);
        }
        karyawan.otAktual = Math.max(0, karyawan.otAktual - (itemDihapus.otAktual || 0));
        karyawan.otKonversi = Math.max(0, karyawan.otKonversi - (itemDihapus.otKonversi || 0));

        let [jIn] = (itemDihapus.jamMasuk || "00:00").split(':').map(Number);
        let [jOut] = (itemDihapus.jamKeluar || "00:00").split(':').map(Number);
        
        if (jIn < 5 && itemDihapus.status !== 'OFF_MURNI') {
            karyawan.makanPagi = Math.max(0, karyawan.makanPagi - 1);
        }
        if (itemDihapus.jenisHari === 'Libur/Merah' && (itemDihapus.otAktual || 0) > 5 && jIn < 11 && (jOut > 13 || jOut < jIn)) {
            karyawan.makanSiang = Math.max(0, karyawan.makanSiang - 1);
        }
        if ((itemDihapus.otAktual || 0) > 5 && (jOut > 21 || (jIn <= 19 && jOut >= 21) || jOut < jIn)) {
            karyawan.makanMalam = Math.max(0, karyawan.makanMalam - 1);
        }

        karyawan.historiAbsen.splice(indexHistori, 1);
        hitungUlangRekapKaryawan(karyawan);

        localStorage.setItem('donggi_timesheet_data', JSON.stringify(masterKaryawan));
        renderTabel();
        bukaModalHistori(noKaryawan);
        alert('Data tanggal berhasil dihapus dan rekapitulasi makan telah disesuaikan!');
    }
}

function bukaModalKategori() {
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

    if (status === 'off_murni' || status === 'cuti' || status === 'izin' || status === 'sakit' || status === 'alfa') {
        if(wrapperShift) wrapperShift.classList.add('hidden');
        if(wrapperJam) wrapperJam.classList.add('hidden');
        if(wrapperJenisHari) wrapperJenisHari.classList.add('hidden');
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

// --- FUNGSI SIMPAN AMAN DARI ERROR NULL ---
function simpanAbsenHarian() {
    try {
        let elPilih = document.getElementById('pilihKaryawan');
        if (!elPilih || !elPilih.value) {
            alert("Pilih karyawan terlebih dahulu!");
            return;
        }
        let no = parseInt(elPilih.value);
        let karyawan = masterKaryawan.find(k => k.no === no);
        if(!karyawan) {
            alert("Data karyawan tidak ditemukan!");
            return;
        }

        let jInVal = document.getElementById('jamMasuk') ? document.getElementById('jamMasuk').value : "07:00";
        let jOutVal = document.getElementById('jamKeluar') ? document.getElementById('jamKeluar').value : "19:00";
        let statusVal = document.getElementById('statusKehadiran') ? document.getElementById('statusKehadiran').value : "masuk";
        let jenisHariVal = document.getElementById('jenisHari') ? document.getElementById('jenisHari').value : "Biasa";

        // Hitung Otomatis Jam Lembur Aktual Berdasarkan Jam Keluar & Masuk
        let [jIn, mIn] = jInVal.split(':').map(Number);
        let [jOut, mOut] = jOutVal.split(':').map(Number);
        let jamMasukDecimal = jIn + (mIn / 60);
        let jamKeluarDecimal = jOut + (mOut / 60);
        
        let durasiKerja = jamKeluarDecimal - jamMasukDecimal;
        if (durasiKerja < 0) durasiKerja += 24;

        let otAktual = 0;
        if (statusVal === 'masuk' || statusVal === 'off_masuk' || statusVal === 'dinas') {
            let jamKerjaNormal = 8;
            if (durasiKerja > jamKerjaNormal) {
                otAktual = durasiKerja - jamKerjaNormal;
            }
        }
        let otKonversi = hitungKonversiDepnaker(otAktual, jenisHariVal);

        let absenBaru = {
            tanggalStr: `${document.getElementById('inputTanggal').value} ${document.getElementById('inputBulan').value} ${document.getElementById('inputTahun').value}`,
            status: statusVal.toUpperCase(),
            jenisHari: jenisHariVal,
            jamMasuk: jInVal,
            jamKeluar: jOutVal,
            otAktual: parseFloat(otAktual.toFixed(1)),
            otKonversi: parseFloat(otKonversi.toFixed(1)),
            catatanRingkas: "Update Absen"
        };

        karyawan.historiAbsen.push(absenBaru);
        hitungUlangRekapKaryawan(karyawan);
        localStorage.setItem('donggi_timesheet_data', JSON.stringify(masterKaryawan));

        renderTabel();
        tutupModal();
        alert("Data absen berhasil disimpan & lembur dikalkulasi!");
    } catch(e) {
        alert("Terjadi kesalahan saat menyimpan: " + e.message);
    }
}

function hitungKonversiDepnaker(jamAktual, jenisHari) {
    if (jamAktual <= 0) return 0;
    if (jamAktual <= 1) {
        return jamAktual * 1.5;
    } else if (jenisHari === 'biasa' || jenisHari === 'Biasa') {
        return 1.5 + ((jamAktual - 1) * 2.0);
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

// --- FUNGSI REKALKULASI & REKAP TERPUSAT ---
function hitungUlangRekapKaryawan(karyawan) {
    karyawan.hk = 0;
    karyawan.otAktual = 0;
    karyawan.otKonversi = 0;
    karyawan.makanPagi = 0;
    karyawan.makanSiang = 0;
    karyawan.makanMalam = 0;
    karyawan.totalMakanLemburRekap = 0;

    if (!karyawan.historiAbsen || karyawan.historiAbsen.length === 0) {
        karyawan.catatanStatus = "Belum ada input";
        return;
    }

    karyawan.historiAbsen.forEach(h => {
        let statusUpper = (h.status || "").toUpperCase();
        
        if (statusUpper === 'MASUK' || statusUpper === 'DINAS' || statusUpper === 'OFF_MASUK') {
            karyawan.hk += 1;
        }

        karyawan.otAktual += (h.otAktual || 0);
        karyawan.otKonversi += (h.otKonversi || 0);

        let [jIn] = (h.jamMasuk || "00:00").split(':').map(Number);
        let [jOut] = (h.jamKeluar || "00:00").split(':').map(Number);
        let otAktualItem = h.otAktual || 0;

        let pItem = 0, sItem = 0, mItem = 0;
        if (jIn < 5 && statusUpper !== 'OFF_MURNI' && statusUpper !== 'CUTI' && statusUpper !== 'IZIN' && statusUpper !== 'SAKIT' && statusUpper !== 'ALFA') {
            pItem = 1; karyawan.makanPagi += 1;
        }
        if (h.jenisHari === 'Libur/Merah' && otAktualItem > 5 && jIn < 11 && (jOut > 13 || jOut < jIn)) {
            sItem = 1; karyawan.makanSiang += 1;
        }
        if (otAktualItem > 5 || jOut > 21 || jOut < jIn || jIn >= 18) {
            mItem = 1; karyawan.makanMalam += 1;
        }
        karyawan.totalMakanLemburRekap += (pItem + sItem + mItem);
    });

    karyawan.catatanStatus = karyawan.historiAbsen[karyawan.historiAbsen.length - 1].catatanRingkas;
}

// --- MODUL PUSAT ENGINE PAYROLL (DINAMIS MURNI) ---
function hitungDataPayroll(karyawan) {
    let totalUpahTetap = (karyawan.upahPokok || 0) + (karyawan.taup || 0);
    let tarifPerJamLembur = totalUpahTetap * (1 / 173);
    let totalUpahLembur = (karyawan.otKonversi || 0) * tarifPerJamLembur;
    
    let tarifKehadiranAktual = karyawan.tarifKehadiran || 0;
    let totalTunjanganKehadiran = (karyawan.hk || 0) * tarifKehadiranAktual;
    
    let totalFrekuensiMakan = karyawan.totalMakanLemburRekap !== undefined ? karyawan.totalMakanLemburRekap : 0;
    let tarifMakanAktual = karyawan.tarifMakan || karyawan.uangMakan || 25000;
    let totalMakanLembur = totalFrekuensiMakan * tarifMakanAktual;

    let totalPremiShift = 0;
    let totalExtraFood = 0;
    let jumlahShiftMalamAktual = 0;

    if (karyawan.sistem === 'Shift') {
        totalPremiShift = totalUpahTetap * (karyawan.hk || 0) * (12 / 173) * 0.15;
        
        if (karyawan.historiAbsen && karyawan.historiAbsen.length > 0) {
            jumlahShiftMalamAktual = karyawan.historiAbsen.filter(h => {
                let [jIn] = (h.jamMasuk || "00:00").split(':').map(Number);
                let statusUpper = (h.status || "").toUpperCase();
                return (statusUpper === 'MASUK' || statusUpper === 'DINAS') && (jIn >= 18 || jIn < 6 || statusUpper.includes('MALAM') || (h.jamMasuk && h.jamMasuk.startsWith("19")));
            }).length;
        }
        totalExtraFood = jumlahShiftMalamAktual * tarifMakanAktual;
    }

    let totalBruto = totalUpahTetap + totalTunjanganKehadiran + totalUpahLembur + totalMakanLembur + totalPremiShift + totalExtraFood;
    let jht = totalUpahTetap * 0.02;
    let jp = totalUpahTetap * 0.01;
    let bpjsKes = totalUpahTetap * 0.01;
    let totalPotongan = jht + jp + bpjsKes;
    let netto = totalBruto - totalPotongan;

    return {
        totalUpahTetap, tarifPerJamLembur, totalUpahLembur, totalTunjanganKehadiran, tarifKehadiranAktual,
        totalFrekuensiMakan, tarifMakanAktual, totalMakanLembur, totalPremiShift, jumlahShiftMalamAktual, totalExtraFood, 
        totalBruto, jht, jp, bpjsKes, totalPotongan, netto
    };
}

// --- PRATINJAU & CETAK SLIP GAJI ---
function previewSlipGaji(noKaryawan) {
    let karyawan = masterKaryawan.find(k => k.no === noKaryawan);
    if (!karyawan) return;
    let p = hitungDataPayroll(karyawan);

    let html = `
        <div id="modalSlipContainer" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div class="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 class="text-lg font-bold text-slate-900">Pratinjau Slip Gaji (${karyawan.sistem}): ${karyawan.name}</h2>
                    <button onclick="tutupSlipGaji()" class="text-slate-400 hover:text-slate-600 font-bold text-lg">✕</button>
                </div>
                <div class="bg-slate-50 p-4 rounded-xl mb-4 text-xs space-y-1 border">
                    <div><b>Nama Pekerja:</b> ${karyawan.name}</div>
                    <div><b>Jabatan / Sistem:</b> ${karyawan.jabatan} / ${karyawan.sistem}</div>
                    <div><b>Divisi / Posisi:</b> ${karyawan.posisi}</div>
                    <div><b>Lokasi Penempatan:</b> Matindok (Zona 13)</div>
                </div>
                <div class="space-y-4 text-sm">
                    <div>
                        <div class="font-bold text-blue-900 border-b pb-1 flex justify-between"><span>I. UPAH TETAP (UT)</span><span>Rp ${p.totalUpahTetap.toLocaleString('id-ID')}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Upah Pokok</span><span>Rp ${karyawan.upahPokok.toLocaleString('id-ID')}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- TAUP (Tunjangan Tetap)</span><span>Rp ${karyawan.taup.toLocaleString('id-ID')}</span></div>
                    </div>
                    <div>
                        <div class="font-bold text-blue-900 border-b pb-1 flex justify-between"><span>II. UPAH TIDAK TETAP & LEMBUR</span><span>Rp ${(p.totalTunjanganKehadiran + p.totalPremiShift + p.totalUpahLembur + p.totalMakanLembur + p.totalExtraFood).toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Tunjangan Kehadiran (${karyawan.hk} Hari)</span><span>Rp ${p.totalTunjanganKehadiran.toLocaleString('id-ID')}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Uang Makan Lembur (${p.totalFrekuensiMakan} Kali x Rp ${p.tarifMakanAktual.toLocaleString('id-ID')})</span><span>Rp ${p.totalMakanLembur.toLocaleString('id-ID')}</span></div>
                        ${karyawan.sistem === 'Shift' ? `<div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Premi Shift (15% x Pokok x HK x 12/173)</span><span>Rp ${p.totalPremiShift.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>` : ''}
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Upah Lembur (${karyawan.otKonversi.toFixed(1)} Jam)</span><span>Rp ${p.totalUpahLembur.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                        ${karyawan.sistem === 'Shift' ? `<div class="text-xs text-slate-600 py-1 flex justify-between"><span>- Extra Fooding Shift Malam (${p.jumlahShiftMalamAktual} Hari x Rp ${p.tarifMakanAktual.toLocaleString('id-ID')})</span><span>Rp ${p.totalExtraFood.toLocaleString('id-ID')}</span></div>` : ''}
                    </div>
                    <div class="bg-blue-50 p-3 rounded-xl font-bold flex justify-between text-blue-900">
                        <span>GAJI BRUTO (I + II):</span><span>Rp ${p.totalBruto.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span>
                    </div>
                    <div>
                        <div class="font-bold text-rose-900 border-b pb-1 flex justify-between"><span>III. POTONGAN RESMI</span><span>Rp ${p.totalPotongan.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- BPJS Ketenagakerjaan (JHT 2%)</span><span>Rp ${p.jht.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- BPJS Ketenagakerjaan (JP 1%)</span><span>Rp ${p.jp.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                        <div class="text-xs text-slate-600 py-1 flex justify-between"><span>- BPJS Kesehatan (1%)</span><span>Rp ${p.bpjsKes.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span></div>
                    </div>
                    <div class="bg-emerald-50 p-3 rounded-xl font-bold flex justify-between text-emerald-900 text-base border border-emerald-200">
                        <span>UPAH DITERIMA BERSIH (NETTO / THP):</span><span>Rp ${p.netto.toLocaleString('id-ID', {maximumFractionDigits: 0})}</span>
                    </div>
                </div>
                <div class="mt-6 flex justify-end space-x-2">
                    <button onclick="printSlipGaji(${karyawan.no})" class="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-indigo-700">🖨️ Print</button>
                    <button onclick="downloadPDFSlipGaji(${karyawan.no})" class="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-emerald-700">📥 Download PDF</button>
                    <button onclick="tutupSlipGaji()" class="bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-300">Tutup</button>
                </div>
            </div>
        </div>
    `;

    let existingModal = document.getElementById('modalSlipContainer');
    if (existingModal) existingModal.remove();
    document.body.insertAdjacentHTML('beforeend', html);
}

function printSlipGaji(noKaryawan) {
    let karyawan = masterKaryawan.find(k => k.no === noKaryawan);
    if (!karyawan) return;
    let p = hitungDataPayroll(karyawan);

    let jendelaCetak = window.open('', '', 'height=700,width=800');
    jendelaCetak.document.write('<html><head><title>Slip Gaji - ' + karyawan.name + '</title>');
    jendelaCetak.document.write('<style>body{font-family:sans-serif;padding:20px;color:#1e293b;} h2{text-align:center;} table{width:100%;border-collapse:collapse;margin-top:15px;font-size:12px;} th, td{border:1px solid #cbd5e1;padding:8px;text-align:left;} th{background-color:#f1f5f9;}</style>');
    jendelaCetak.document.write('</head><body>');
    jendelaCetak.document.write(`<h2>PT SENTRAL SARI JAYA</h2>`);
    jendelaCetak.document.write(`<h3>SLIP UPAH TENAGA KERJA (${karyawan.sistem.toUpperCase()})</h3>`);
    jendelaCetak.document.write(`<p style="text-align:center; font-size:12px; color:#64748b;">Periode Berjalan | Matindok (Zona 13)</p><br>`);
    jendelaCetak.document.write(`<p><b>Nama Pekerja:</b> ${karyawan.name} | <b>Jabatan:</b> ${karyawan.jabatan} | <b>HK:</b> ${karyawan.hk} Hari</p><hr><br>`);
    jendelaCetak.document.write(`
        <table>
            <tr><th>I. UPAH TETAP (UT)</th><th style="text-align:right">Rp ${p.totalUpahTetap.toLocaleString('id-ID')}</th></tr>
            <tr><td>- Upah Pokok</td><td style="text-align:right">Rp ${karyawan.upahPokok.toLocaleString('id-ID')}</td></tr>
            <tr><td>- TAUP (Tunjangan Tetap)</td><td style="text-align:right">Rp ${karyawan.taup.toLocaleString('id-ID')}</td></tr>
            <tr><th>II. UPAH TIDAK TETAP & LEMBUR</th><th style="text-align:right">Rp ${(p.totalTunjanganKehadiran + p.totalPremiShift + p.totalUpahLembur + p.totalMakanLembur + p.totalExtraFood).toLocaleString('id-ID', {maximumFractionDigits: 0})}</th></tr>
            <tr><td>- Tunjangan Kehadiran (${karyawan.hk} Hari)</td><td style="text-align:right">Rp ${p.totalTunjanganKehadiran.toLocaleString('id-ID')}</td></tr>
            <tr><td>- Uang Makan Lembur (${p.totalFrekuensiMakan} Kali x Rp ${p.tarifMakanAktual.toLocaleString('id-ID')})</td><td style="text-align:right">Rp ${p.totalMakanLembur.toLocaleString('id-ID')}</td></tr>
            ${karyawan.sistem === 'Shift' ? `<tr><td>- Premi Shift (15% x Pokok x HK x 12/173)</td><td style="text-align:right">Rp ${p.totalPremiShift.toLocaleString('id-ID', {maximumFractionDigits: 0})}</td></tr>` : ''}
            <tr><td>- Upah Lembur (${karyawan.otKonversi.toFixed(1)} Jam)</td><td style="text-align:right">Rp ${p.totalUpahLembur.toLocaleString('id-ID', {maximumFractionDigits: 0})}</td></tr>
            ${karyawan.sistem === 'Shift' ? `<tr><td>- Extra Fooding Shift Malam (${p.jumlahShiftMalamAktual} Hari x Rp ${p.tarifMakanAktual.toLocaleString('id-ID')})</td><td style="text-align:right">Rp ${p.totalExtraFood.toLocaleString('id-ID')}</td></tr>` : ''}
            <tr style="background:#f8fafc"><th>GAJI BRUTO (I + II)</th><th style="text-align:right">Rp ${p.totalBruto.toLocaleString('id-ID', {maximumFractionDigits: 0})}</th></tr>
            <tr><th>III. POTONGAN RESMI</th><th style="text-align:right">Rp ${p.totalPotongan.toLocaleString('id-ID', {maximumFractionDigits: 0})}</th></tr>
            <tr><td>- BPJS Ketenagakerjaan (JHT 2%)</td><td style="text-align:right">Rp ${p.jht.toLocaleString('id-ID', {maximumFractionDigits: 0})}</td></tr>
            <tr><td>- BPJS Ketenagakerjaan (JP 1%)</td><td style="text-align:right">Rp ${p.jp.toLocaleString('id-ID', {maximumFractionDigits: 0})}</td></tr>
            <tr><td>- BPJS Kesehatan (1%)</td><td style="text-align:right">Rp ${p.bpjsKes.toLocaleString('id-ID', {maximumFractionDigits: 0})}</td></tr>
            <tr style="background:#ecfdf5"><th>UPAH DITERIMA BERSIH (NETTO / THP)</th><th style="text-align:right">Rp ${p.netto.toLocaleString('id-ID', {maximumFractionDigits: 0})}</th></tr>
        </table>
    `);
    jendelaCetak.document.write('</body></html>');
    jendelaCetak.document.close();
    jendelaCetak.focus();
    setTimeout(() => { jendelaCetak.print(); jendelaCetak.close(); }, 500);
}

function downloadPDFSlipGaji(noKaryawan) {
    printSlipGaji(noKaryawan);
}

function tutupSlipGaji() {
    let modal = document.getElementById('modalSlipContainer');
    if (modal) modal.remove();
}

// --- REKAPITULASI GABUNGAN ---
function cetakRekapitulasiGabunganPDF() {
    let jendelaCetak = window.open('', '', 'height=700,width=1000');
    jendelaCetak.document.write('<html><head><title>Rekapitulasi Absensi & Lembur Gabungan - Field Donggi Matindok</title>');
    jendelaCetak.document.write(`
        <style>
            body { font-family: sans-serif; padding: 20px; color: #1e293b; }
            h2, p { text-align: center; margin: 2px 0; }
            .subtitle { font-size: 12px; color: #64748b; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 11px; }
            th, td { border: 1px solid #334155; padding: 6px 8px; text-align: center; }
            th { background-color: #0b132b; color: white; text-transform: uppercase; font-size: 10px; }
            td.nama { text-align: left; font-weight: bold; }
            .footer { margin-top: 30px; display: flex; justify-content: space-between; font-size: 12px; }
        </style>
    `);
    jendelaCetak.document.write('</head><body>');
    jendelaCetak.document.write('<h2>PT. DONGGI MATINDOK - FIELD ZONA 13</h2>');
    jendelaCetak.document.write('<h3>REKAPITULASI KEHADIRAN & LEMBUR PEKERJA (SHIFT & NON-SHIFT)</h3>');
    jendelaCetak.document.write('<div class="subtitle">Laporan Bulanan Terpadu Berdasarkan Perhitungan Standar Depnaker</div>');
    
    jendelaCetak.document.write('<table>');
    jendelaCetak.document.write(`
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Karyawan</th>
                <th>Jabatan</th>
                <th>Sistem</th>
                <th>Grade</th>
                <th>Hari Hadir (HK)</th>
                <th>Shift Pagi / Siang</th>
                <th>Shift Malam</th>
                <th>Lembur Aktual (Jam)</th>
                <th>Lembur Konversi (Jam)</th>
                <th>Makan Pagi</th>
                <th>Makan Siang</th>
                <th>Makan Malam</th>
            </tr>
        </thead>
        <tbody>
    `);

    masterKaryawan.forEach((k) => {
        jendelaCetak.document.write(`
            <tr>
                <td>${k.no}</td>
                <td class="nama">${k.name}</td>
                <td>${k.jabatan}</td>
                <td>${k.sistem}</td>
                <td>${k.grade}</td>
                <td><b>${k.hk}</b></td>
                <td>${k.sistem === 'Non Shift' ? k.makanSiang : '-'}</td>
                <td>${k.sistem === 'Shift' ? k.makanMalam : '-'}</td>
                <td>${k.otAktual.toFixed(1)}</td>
                <td><b>${k.otKonversi.toFixed(1)}</b></td>
                <td>${k.makanPagi}</td>
                <td>${k.makanSiang}</td>
                <td>${k.makanMalam}</td>
            </tr>
        `);
    });

    jendelaCetak.document.write('</tbody></table>');
    jendelaCetak.document.write(`
        <div class="footer">
            <div><br>Mengetahui,<br><b>Field Manager / Superintendent</b><br><br><br>( ........................................... )</div>
            <div>Dibuat Oleh,<br><b>Admin HRIS / Timesheet</b><br><br><br><b>Onesimus Suriadi</b></div>
        </div>
    `);
    jendelaCetak.document.write('</body></html>');
    jendelaCetak.document.close();
    jendelaCetak.focus();
    setTimeout(() => { jendelaCetak.print(); jendelaCetak.close(); }, 500);
}

function downloadExcelGabungan() {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "No,Nama Karyawan,Jabatan,Sistem Kerja,Grade,Hari Hadir (HK),Shift Pagi/Siang,Shift Malam,Lembur Aktual (Jam),Lembur Konversi (Jam),Makan Pagi,Makan Siang,Makan Malam\r\n";

    masterKaryawan.forEach(k => {
        let row = `"${k.no}","${k.name}","${k.jabatan}","${k.sistem}","${k.grade}","${k.hk}","${k.sistem === 'Non Shift' ? k.makanSiang : '-'}","${k.sistem === 'Shift' ? k.makanMalam : '-'}","${k.otAktual.toFixed(1)}","${k.otKonversi.toFixed(1)}","${k.makanPagi}","${k.makanSiang}","${k.makanMalam}"`;
        csvContent += row + "\r\n";
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekapitulasi_Absensi_Lembur_Donggi_Matindok.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPDFHistoriAbsen() {
    let karyawan = masterKaryawan.find(k => k.no === activeKaryawanNo);
    if (!karyawan || !karyawan.historiAbsen || karyawan.historiAbsen.length === 0) {
        alert('Tidak ada data histori untuk diunduh.');
        return;
    }

    let jendelaCetak = window.open('', '', 'height=700,width=900');
    jendelaCetak.document.write('<html><head><title>Histori Absen - ' + karyawan.name + '</title>');
    jendelaCetak.document.write(`
        <style>
            body { font-family: sans-serif; padding: 20px; color: #1e293b; }
            h2, h3, p { text-align: center; margin: 4px 0; }
            .subtitle { font-size: 12px; color: #64748b; margin-bottom: 15px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 11px; }
            th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; }
            th { background-color: #f1f5f9; text-transform: uppercase; font-size: 10px; }
            .text-center { text-align: center; }
            .summary-box { margin-bottom: 15px; font-size: 12px; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0; }
        </style>
    `);
    jendelaCetak.document.write('<h2>PT. SENTRAL SARI JAYA / PT. DONGGI MATINDOK</h2>');
    jendelaCetak.document.write('<h3>LAPORAN HISTORI ABSENSI & LEMBUR KARYAWAN</h3>');
    jendelaCetak.document.write(`<div class="subtitle">Nama: <b>${karyawan.name}</b> | Jabatan: ${karyawan.jabatan} | Sistem: ${karyawan.sistem}</div>`);
    
    let kontenTabel = document.getElementById('areaTabelHistoriCetak').innerHTML;
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = kontenTabel;
    let buttons = tempDiv.querySelectorAll('button');
    buttons.forEach(b => b.remove());

    jendelaCetak.document.write(tempDiv.innerHTML);
    jendelaCetak.document.write('<p style="font-size: 10px; color: #64748b; margin-top: 20px; text-align: right;">Dokumen ini dicetak otomatis melalui Sistem HRIS Field Zona 13.</p>');
    jendelaCetak.document.write('</body></html>');
    jendelaCetak.document.close();
    jendelaCetak.focus();
    
    setTimeout(() => { 
        jendelaCetak.print(); 
        jendelaCetak.close(); 
    }, 500);
}

// Inisialisasi Otomatis Saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", function() {
    if (typeof renderTabel === "function") {
        renderTabel();
    }
});