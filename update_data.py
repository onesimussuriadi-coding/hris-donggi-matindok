import pandas as pd
import json
import datetime

# Kode permanen untuk membaca database master TAD secara otomatis
excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file Excel master TAD...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]

# Membaca header dengan tepat (baris ke-5 atau ke-4)
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)
if 'No' not in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=4)

# Membersihkan baris kosong
df_final = df_final.dropna(subset=[df_final.columns[0]])

# Format tanggal agar aman dibaca oleh JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Menulis ulang file employee_data.json dengan 72 kolom penuh secara permanen
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print(f"PERMANEN SUKSES! Berhasil memperbarui employee_data.json dengan {len(records)} data karyawan dan {len(df_final.columns)} kolom penuh.")