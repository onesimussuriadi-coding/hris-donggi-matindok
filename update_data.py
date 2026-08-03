import pandas as pd
import json
import datetime

excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file master Excel 72 kolom...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]

# Membaca header dengan tepat
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)
if 'No' not in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=4)

df_final = df_final.dropna(subset=[df_final.columns[0]])

# --- PEMETAAN OTOMATIS (Mencegah Ketidakcocokan Istilah) ---
# Jika di Excel bernama Nama_Lengkap atau TAD, diseragamkan agar terbaca sempurna
if 'Nama_Lengkap' in df_final.columns and 'TAD' not in df_final.columns:
    df_final['TAD'] = df_final['Nama_Lengkap']
elif 'TAD' in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final['Nama_Lengkap'] = df_final['TAD']

if 'Devisi' in df_final.columns and 'Division' not in df_final.columns:
    df_final['Division'] = df_final['Devisi']
if 'Jabatan' in df_final.columns and 'Job Title' not in df_final.columns:
    df_final['Job Title'] = df_final['Jabatan']

# Format tanggal agar aman dibaca JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Menulis ulang file employee_data.json secara mutlak
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print(f"BERHASIL TOTAL! employee_data.json kini memuat {len(records)} karyawan dengan {len(df_final.columns)} kolom penuh.")