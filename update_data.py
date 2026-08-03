import pandas as pd
import json
import datetime

# Baca langsung dari folder project yang sama
excel_path = r"C:\https://1drv.ms/x/c/848be579d73b9d5c/IQC9FvIyK6iIRrcCDN04kZuaAebK56Ppt3ebQYrczC3G1ac?e=ybgRsr\OneDrive\Documents\PT. SSJ\HRIS SISTEM\SSJ - Prime Database TAD.xlsx"

print("Membaca file Excel...")
xls = pd.ExcelFile(excel_path)
sheet_name = xls.sheet_names[0]
df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=5)

if 'No' not in df_final.columns and 'Nama_Lengkap' not in df_final.columns:
    df_final = pd.read_excel(excel_path, sheet_name=sheet_name, header=4)

df_final = df_final.dropna(subset=[df_final.columns[0]])

# Format Tanggal agar aman untuk JSON
for col in df_final.columns:
    df_final[col] = df_final[col].apply(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, (datetime.datetime, datetime.date)) else x)

records = df_final.where(pd.notnull(df_final), None).to_dict(orient='records')

with open('employee_data.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=4)

print(f"SUKSES! Berhasil menulis {len(records)} data dengan {len(df_final.columns)} kolom.")