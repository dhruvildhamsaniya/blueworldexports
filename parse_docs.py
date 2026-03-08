import os
import json
import PyPDF2
from docx import Document

base_dir = r"c:\Users\AM\Downloads\blueworldexports\public\All Product detail docs"
output_file = r"c:\Users\AM\Downloads\blueworldexports\public\All Product detail docs\parsed_docs.json"

docs_data = {}

for filename in os.listdir(base_dir):
    filepath = os.path.join(base_dir, filename)
    if filename.endswith(".pdf"):
        text = ""
        try:
            with open(filepath, "rb") as f:
                reader = PyPDF2.PdfReader(f)
                for page in reader.pages:
                    text += page.extract_text() + "\n"
            docs_data[filename] = text
        except Exception as e:
            docs_data[filename] = f"Error reading PDF: {str(e)}"
    elif filename.endswith(".docx"):
        text = ""
        try:
            doc = Document(filepath)
            for para in doc.paragraphs:
                text += para.text + "\n"
            docs_data[filename] = text
        except Exception as e:
            docs_data[filename] = f"Error reading DOCX: {str(e)}"

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(docs_data, f, indent=4)

print(f"Saved parsed data to {output_file}")
