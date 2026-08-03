import pandas as pd
import json
import datetime

excel_path = r"C:\Users\User\OneDrive\Documents\PT. SSJ\HRIS SISTEM\SSJ - Prime Database TAD.xlsx"

print("Membaca file Excel dari OneDrive...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)

if 'No' not in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=4)

df_final = df_final.dropna(subset=[df_final.columns[0]])

# --- KAMUS PEMETAAN ISTILAH & STANDAR HAY GROUP ---
# Menyamakan nama kolom agar seragam di dashboard & hasil export
column_mapping = {
    'Nama_Lengkap': 'TAD',
    'Devisi': 'Division',
    'Jabatan': 'Job Title',
    'Sistem_Kerja': 'Shift / NonShift'
}
df_final = df_final.rename(columns=column_mapping)

# Contoh standarisasi penamaan fungsi/divisi atau level Hay Group jika diperlukan
# (Anda bisa menambahkan aturan spesifik di sini sesuai kebutuhan evaluasi jabatan Hay Group)

print(f"Berhasil memproses {len(df_final)} data karyawan dengan standarisasi profesional.")

# Format Tanggal agar aman untuk JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print("SUKSES! Data master telah disesuaikan dan siap di-push ke web.")