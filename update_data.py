import pandas as pd
import json
import datetime

# Nama file master Excel di folder project Anda
excel_path = "SSJ - Prime Database TAD.xlsx"

print("Membaca file Excel master 72 kolom...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]

# Membaca data dengan header yang tepat (baris ke-5)
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)
df_final = df_final[pd.to_numeric(df_final['No'], errors='coerce').notnull()]

print(f"Berhasil membaca {len(df_final)} karyawan dan {len(df_final.columns)} kolom.")

# Format tanggal agar aman dibaca oleh JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

# Konversi ke format dictionary
records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

# Menulis ulang file employee_data.json secara penuh (72 kolom)
with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print("SUKSES BESAR! File employee_data.json telah diperbarui dengan 72 kolom penuh.")