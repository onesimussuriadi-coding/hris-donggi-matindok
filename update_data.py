import pandas as pd
import json
import datetime

# Alamat permanen karena file Excel sudah berada di dalam folder project Dropbox yang sama
excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file master Excel dari folder project (Header Baris ke-6)...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]

# Membaca header di baris ke-6 (header=5 dalam Python)
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)
df_final = df_final[pd.to_numeric(df_final['No'], errors='coerce').notnull()]

# Penyeragaman otomatis kolom 'Nama Karyawan' agar terbaca sempurna di web
if 'Nama Karyawan' in df_final.columns and 'TAD' not in df_final.columns:
    df_final['TAD'] = df_final['Nama Karyawan']

print(f"Berhasil membaca {len(df_final)} karyawan dan {len(df_final.columns)} kolom penuh.")

# Format tanggal agar aman dibaca JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Menulis ulang file employee_data.json secara permanen dan mutlak
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print("SUKSES PERMANEN! employee_data.json berhasil diperbarui.")