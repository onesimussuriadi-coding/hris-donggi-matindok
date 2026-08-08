import json
import pandas as pd

def sync_data_from_googlesheet():
    print("Menghubungkan ke Google Sheet publik...")
    
    url = "https://docs.google.com/spreadsheets/d/1Mu_POmiVk4A8ISsIhff5O0o4QH1grADjFCYHX7Vtx50/edit?gid=580855545#gid=580855545"
    
    if "/edit" in url:
        base_url = url.split("/edit")[0]
        if "gid=" in url:
            gid = url.split("gid=")[1].split("#")[0]
            csv_url = f"{base_url}/export?format=csv&gid={gid}"
        else:
            csv_url = f"{base_url}/export?format=csv"
    else:
        csv_url = url

    try:
        # Menggunakan header=5 karena baris judul tabel berada di baris ke-6 (indeks ke-5)
        df = pd.read_csv(csv_url, header=5)
        
        # Membersihkan baris yang nama karyawannya kosong/NaN
        df = df.dropna(subset=[df.columns[1]])
        
        # Mengubah data dataframe ke format JSON
        data_json = df.to_dict(orient="records")
        
        # Menyimpan ke file employee_data.json
        with open("employee_data.json", "w", encoding="utf-8") as f:
            json.dump(data_json, f, ensure_ascii=False, indent=4)
            
        print(f"Sukses! Berhasil menyinkronkan {len(data_json)} data karyawan dari Google Sheet.")
        
    except Exception as e:
        print(f"Gagal menarik data: {e}")

if __name__ == "__main__":
    sync_data_from_googlesheet()