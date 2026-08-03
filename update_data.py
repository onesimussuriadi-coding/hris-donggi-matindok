opaimport pandas as pd
import json
import datetime

excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file master Excel...")
df_final = pd.read_excel(excel_path, sheet_name=0, header=5)
df_final = df_final[pd.to_numeric(df_final['No'], errors='coerce').notnull()]

# Penyesuaian nama kolom utama agar langsung dibaca web
if 'Nama Karyawan' in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final['Nama_Lengkap'] = df_final['Nama Karyawan']
if 'Division' in df_final.columns and 'Devisi' not in df_final.columns:
    df_final['Devisi'] = df_final['Division']
if 'Job Title' in df_final.columns and 'Jabatan' not in df_final.columns:
    df_final['Jabatan'] = df_final['Job Title']

# Format tanggal agar aman
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Simpan file JSON
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print("SUKSES! employee_data.json berhasil diperbarui.")