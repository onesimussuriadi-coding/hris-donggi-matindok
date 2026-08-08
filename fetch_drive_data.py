import json
import pandas as pd

def sync_data_from_googlesheet():
    print("Menghubungkan ke Google Sheet publik...")
    
    # Tautan publik Google Sheet yang Anda berikan
    url = "https://docs.google.com/spreadsheets/d/1Mu_POmiVk4A8ISsIhff5O0o4QH1grADjFCYHX7Vtx50/edit?gid=580855545#gid=580855545"
    
    # Konversi link edit standar menjadi link export format CSV otomatis
    if "/edit" in url:
        base_url = url.split("/edit")[0]
        # Mengambil parameter gid jika ada di dalam link
        if "gid=" in url:
            gid = url.split("gid=")[1].split("#")[0]
            csv_url = f"{base_url}/export?format=csv&gid={gid}"
        else:
            csv_url = f"{base_url}/export?format=csv"
    else:
        csv_url = url

    try:
        # Membaca data langsung dari link CSV Google Sheet
        df = pd.read_csv(csv_url)
        
        # Mengubah data dataframe ke format JSON
        data_json = df.to_dict(orient="records")
        
        # Menyimpan ke file employee_data.json di root direktori proyek
        with open("employee_data.json", "w", encoding="utf-8") as f:
            json.dump(data_json, f, ensure_ascii=False, indent=4)
            
        print("Sukses! Data master karyawan berhasil disinkronkan dari Google Sheet.")
        
    except Exception as e:
        print(f"Gagal menarik data: {e}")

if __name__ == "__main__":
    sync_data_from_googlesheet()