import fitz  # PyMuPDF
import os

def convert_pdf_to_jpg(pdf_path, output_folder):
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}")
        return

    doc = fitz.open(pdf_path)
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    
    # Sanitize base_name for file system (remove spaces)
    base_name = base_name.replace(" ", "_").lower()

    print(f"Converting {pdf_path}...")

    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=300) # High quality
        output_path = os.path.join(output_folder, f"{base_name}_page_{i+1}.jpg")
        pix.save(output_path)
        print(f"Saved {output_path}")

    doc.close()

def main():
    certs_dir = os.path.join(os.getcwd(), 'public', 'images', 'certs')
    
    # List of specific PDFs to convert or scan directory
    pdfs = ['ashrea.pdf', 'coren cert.pdf']
    
    for pdf in pdfs:
        full_path = os.path.join(certs_dir, pdf)
        convert_pdf_to_jpg(full_path, certs_dir)

if __name__ == "__main__":
    main()
