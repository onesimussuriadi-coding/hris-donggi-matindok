import openpyxl
import json

excel_file = "DAFTAR_GAJI_TAD_DMF_Monthly_Salary.xlsm"
sheet_name = "Database Karyawan"

print(f"Membaca file Excel: {excel_file}...")

try:
    wb = openpyxl.load_workbook(excel_file, data_only=True)
    
    if sheet_name in wb.sheetnames:
        sheet = wb[sheet_name]
    else:
        sheet = wb.active

    employee_list = []

    # Membaca baris 5 sampai 56 sesuai struktur Excel
    for row in range(5, 57):
        no = sheet.cell(row=row, column=2).value         # Kolom B (No)
        nama = sheet.cell(row=row, column=3).value       # Kolom C (Nama)
        
        if not nama:
            continue
            
        npwp_nik = sheet.cell(row=row, column=4).value       # Kolom D
        devisi = sheet.cell(row=row, column=5).value         # Kolom E
        jabatan = sheet.cell(row=row, column=6).value        # Kolom F
        sistem_kerja = sheet.cell(row=row, column=7).value   # Kolom G (Sistem Kerja)
        grade = sheet.cell(row=row, column=8).value          # Kolom H (Grade)
        status_pegawai = sheet.cell(row=row, column=9).value # Kolom I
        status_ptkp = sheet.cell(row=row, column=10).value   # Kolom J
        nama_bank = sheet.cell(row=row, column=11).value     # Kolom K
        nomor_rekening = sheet.cell(row=row, column=12).value# Kolom L

        emp_data = {
            "No": str(no) if no else "",
            "Nama_Lengkap": str(nama).strip(),
            "NPWP_NIK": str(npwp_nik) if npwp_nik else "-",
            "Devisi": str(devisi) if devisi else "-",
            "Jabatan": str(jabatan) if jabatan else "-",
            "Sistem_Kerja": str(sistem_kerja) if sistem_kerja else "-",
            "Grade": str(grade) if grade else "-",
            "Status_Pegawai": str(status_pegawai) if status_pegawai else "-",
            "Status_PTKP": str(status_ptkp) if status_ptkp else "-",
            "Nama_Bank": str(nama_bank) if nama_bank else "-",
            "Nomor_Rekening": str(nomor_rekening) if nomor_rekening else "-"
        }
        
        employee_list.append(emp_data)

    output_json = "employee_data.json"
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(employee_list, f, indent=4, ensure_ascii=False)

    print(f"SUKSES! Berhasil memperbarui {len(employee_list)} data karyawan ke {output_json}.")

except Exception as e:
    print(f"Terjadi kesalahan saat memproses Excel: {e}")