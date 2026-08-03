import pandas as pd
import json
import datetime

excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file master Excel dari folder project...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]

# Membaca header di baris ke-6 (header=5 dalam Python)
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)

# Membersihkan baris kosong berdasarkan kolom No
df_final = df_final[pd.to_numeric(df_final['No'], errors='coerce').notnull()]

# Penyeragaman otomatis kolom 'Nama Karyawan'
if 'Nama Karyawan' in df_final.columns and 'TAD' not in df_final.columns:
    df_final['TAD'] = df_final['Nama Karyawan']

print(f"Berhasil memproses {len(df_final)} data karyawan dan {len(df_final.columns)} kolom.")

# Format tanggal dan pembersihan nilai NaN agar aman dibaca JavaScript web
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Menulis ulang file employee_data.json dengan format UTF-8 yang bersih
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print("SEMPURNA! File employee_data.json berhasil diperbarui dan siap dibaca dashboard.")