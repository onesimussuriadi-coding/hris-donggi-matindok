import pandas as pd
import json
import datetime

# Path ke file Excel master Anda di OneDrive (sesuaikan jika perlu)
excel_path = r"C:\Users\User\OneDrive\Documents\PT. SSJ\HRIS SISTEM\SSJ - Prime Database TAD.xlsx"

print("Membaca file Excel dari OneDrive...")
xls = pd.ExcelFile(excel_path)
print("Sheet yang tersedia:", xls.sheet_names)

# Ambil sheet utama (misal sheet pertama atau sesuaikan namanya)
sheet_name = xls.sheet_names[0]
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)

# Bersihkan baris kosong di kolom 'No'
df_final = df_final[pd.to_numeric(df_final['No'], errors='coerce').notnull()]
print(f"Berhasil memuat {len(df_final)} data karyawan dengan {len(df_final.columns)} kolom.")

# Ubah format Tanggal/Timestamp agar bisa dibaca JSON dengan aman
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

# Konversi ke format JSON
records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Simpan sebagai employee_data.json di folder project web
output_json = 'employee_data.json'
with open(output_json, 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print(f"SUKSES! File '{output_json}' telah diperbarui secara otomatis dengan 72 kolom penuh.")