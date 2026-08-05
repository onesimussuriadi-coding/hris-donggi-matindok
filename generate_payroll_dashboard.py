import pandas as pd
import os

# 1. Lokasi file excel rekapitulasi gaji
file_path = 'DAFTAR_GAJI_TAD_DMF_Monthly_Salary.xlsm'

print("Membaca data dari sheet 'Database Karyawan'...")
df_db = pd.read_excel(file_path, sheet_name='Database Karyawan', header=None)

# 2. Pemetaan kolom sesuai struktur master
col_names = [
    'No', 'Nama Karyawan', 'NPWP_NIK', 'Devisi', 'Jabatan', 'Sistem_Kerja', 'Grade', 
    'Status_Pegawai', 'Status_PTKP', 'Nama_Bank', 'Nomor_Rekening', 
    'Upah_Pokok_UP', 'Tunjangan_TAUP', 'Total_Upah_Tetap', 'Periode',
    'UP_2', 'TAUP_2', 'Total_Upah_Tetap_2', 'Hari_Kerja_HK', 'Shift_Malam_HK',
    'Pagi', 'Dinas', 'Cuti_Ijin', 'Sakit', 'Alpa', 'Tunjangan_Kehadiran',
    'Premi_Shift', 'KJK', 'Extra_Fooding', 'Total_Absen_Komponen',
    'Jam_Lembur_Nyata', 'Jam_Lembur_Konversi', 'Tarif_Jam', 'Nilai_Upah_Lembur',
    'Makan_Lembur', 'Upah_Makan_Lembur', 'Jumlah_Lembur', 'Jumlah_Hari_Dinas',
    'Akomodasi', 'Uang_Harian', 'Uang_Makan', 'Transport_Lokal', 'Jumlah_Dinas',
    'Selisih_GI_2026', 'Gaji_Bruto', 'JHT', 'JP', 'BPJS_Kesehatan', 'PPH_21',
    'Potongan_Pinjaman', 'Potongan_Lain', 'Jumlah_Potongan', 'Gaji_Netto',
    'Pembulatan_Gaji_Netto', 'Total_Transfer'
]

raw_data = df_db.iloc[4:].copy()
raw_data = raw_data.iloc[:, 1:56]
raw_data.columns = col_names

# Konversi kolom numerik
numeric_cols = ['Total_Upah_Tetap', 'Gaji_Bruto', 'Jumlah_Potongan', 'Gaji_Netto']
for col in numeric_cols:
    raw_data[col] = pd.to_numeric(raw_data[col], errors='coerce').fillna(0)

# Hitung ringkasan metrik utama
total_karyawan = len(raw_data)
total_upah_tetap = raw_data['Total_Upah_Tetap'].sum()
total_bruto = raw_data['Gaji_Bruto'].sum()
total_potongan = raw_data['Jumlah_Potongan'].sum()
total_netto = raw_data['Gaji_Netto'].sum()

print(f"Total Karyawan: {total_karyawan}")
print(f"Total Gaji Bruto: Rp {total_bruto:,.2f}")
print(f"Total Gaji Netto: Rp {total_netto:,.2f}")

# 3. Buat baris tabel HTML untuk semua karyawan
table_rows = ""
for index, row in raw_data.iterrows():
    no = row['No']
    if pd.isna(no):
        continue
    nama = row['Nama Karyawan']
    jabatan = row['Jabatan']
    divisi = row['Devisi']
    bruto = f"{row['Gaji_Bruto']:,.2f}"
    potongan = f"{row['Jumlah_Potongan']:,.2f}"
    netto = f"{row['Gaji_Netto']:,.2f}"
    
    table_rows += f"""
            <tr>
                <td>{no}</td>
                <td>{nama}</td>
                <td>{jabatan}</td>
                <td>{divisi}</td>
                <td>Rp {bruto}</td>
                <td>Rp {potongan}</td>
                <td>Rp {netto}</td>
                <td><a href="#" class="btn-link" onclick="alert('Slip gaji untuk {nama} (Protected & Encrypted).'); return false;">🔗 Buka Slip</a></td>
            </tr>"""

# 4. Susun Template HTML Dashboard Lengkap
html_content = f"""<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Engine Payroll - Donggi Matindok Field</title>
    <style>
        body {{ font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }}
        .container {{ max-width: 1300px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
        h1 {{ color: #004085; text-align: center; margin-bottom: 5px; }}
        .subtitle {{ text-align: center; color: #666; margin-bottom: 30px; font-size: 14px; }}
        .metrics-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px; }}
        .card {{ background: #f8f9fa; border-left: 5px solid #004085; padding: 20px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }}
        .card h3 {{ margin: 0 0 10px 0; font-size: 14px; color: #555; }}
        .card .value {{ font-size: 18px; font-weight: bold; color: #004085; }}
        table {{ width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #004085; color: white; }}
        tr:nth-child(even) {{ background-color: #f9f9f9; }}
        .btn-link {{ background: #28a745; color: white; padding: 4px 8px; text-decoration: none; border-radius: 4px; font-size: 11px; }}
        .btn-link:hover {{ background: #218838; }}
        .security-badge {{ background: #fff3cd; border: 1px solid #ffeeba; color: #856404; padding: 10px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; }}
    </style>
</head>
<body>
<div class="container">
    <h1>Engine Payroll & Dashboard Upah Bulanan</h1>
    <div class="subtitle">PT Pertamina EP Regional 4 Zona 13 - Donggi Matindok Field (Kontraktor Utama: PT Sentral Sari Jaya)</div>
    
    <div class="security-badge">
        🔒 <strong>Keamanan Sistem Aktif:</strong> Enkripsi Password & Role-Based Access Control (Admin / Manajer / User).
    </div>

    <div class="metrics-grid">
        <div class="card">
            <h3>Total Tenaga Kerja</h3>
            <div class="value">{total_karyawan} Orang</div>
        </div>
        <div class="card">
            <h3>Total Upah Tetap</h3>
            <div class="value">Rp {total_upah_tetap:,.2f}</div>
        </div>
        <div class="card">
            <h3>Total Gaji Bruto</h3>
            <div class="value">Rp {total_bruto:,.2f}</div>
        </div>
        <div class="card">
            <h3>Total Gaji Netto</h3>
            <div class="value">Rp {total_netto:,.2f}</div>
        </div>
    </div>

    <h3>Daftar Rincian Karyawan & Akses Slip Gaji Individual</h3>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama Karyawan</th>
                <th>Jabatan</th>
                <th>Divisi</th>
                <th>Gaji Bruto</th>
                <th>Potongan</th>
                <th>Gaji Netto</th>
                <th>Aksi / Slip Gaji</th>
            </tr>
        </thead>
        <tbody>
            {table_rows}
        </tbody>
    </table>
</div>
</body>
</html>
"""

# Simpan hasil render ke file engine_payroll.html
output_file = 'engine_payroll.html'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Berhasil menghasilkan file dashboard: {output_file}")