import pandas as pd
import json
import os

directory = r'c:\General\BlueWorldExports\public\All Product table'
output_file = r'c:\General\BlueWorldExports\src\data\technicalSpecifications.json'

mapping = {
    'hdpe-rope': 'HDPE Rope table 1.xlsx',
    'hdpe-tarpaulin': 'HDPE Tarpaulin Specification Table.xlsx',
    'ldpe-tarpaulin': 'HDPE Tarpaulin Specification Table.xlsx',
    'layflat-pipe': 'Lay Flat  Pipe Specification Table Table.xlsx',
    'pet-strap': 'PET Strap Specifications Table.xlsx',
    'pp-rope': 'PP Danline Rope Table.xlsx',
    'pp-strap': 'PP Strap Specifications Table.xlsx',
    'braided-pipe': 'PVC Braided Pipe Specification Table.xlsx',
    'garden-pipe': 'PVC Garden Pipe Specification Table.xlsx',
    'agriculture-shade-net': 'Shade net Table.xlsx',
    'construction-scaffold-net': 'Shade net Table.xlsx',
    'suction-pipe': 'Suction Pipe specifications Table.xlsx'
}

specs_data = {}

def process_df(df):
    # If the first row contains column names (headers), use them
    # Some Excel files have a title row and then a header row
    # Attempt to find the header row
    
    # Drop empty rows and columns
    df = df.dropna(how='all').dropna(axis=1, how='all')
    
    # If headers are Unnamed, look at row 0
    if any("Unnamed" in str(col) for col in df.columns):
        # Check if first row is actually the header
        first_row = df.iloc[0].tolist()
        # If first row has a lot of strings, assume it's the header
        if len([x for x in first_row if isinstance(x, str)]) > 1:
            df.columns = first_row
            df = df.iloc[1:]
        elif len(df) > 1:
            # Maybe second row is header?
            second_row = df.iloc[1].tolist()
            if len([x for x in second_row if isinstance(x, str)]) > 1:
                df.columns = second_row
                df = df.iloc[2:]

    # Final cleanup: replace NaN with None for JSON
    df = df.where(pd.notnull(df), None)
    
    # Re-check columns for 'Unnamed' or None and fix them to avoid issues
    new_cols = []
    for i, col in enumerate(df.columns):
        if col is None or "Unnamed" in str(col):
            new_cols.append(f"Field_{i}")
        else:
            new_cols.append(str(col))
    df.columns = new_cols
    
    return df.to_dict(orient='records')

for subslug, filename in mapping.items():
    file_path = os.path.join(directory, filename)
    if os.path.exists(file_path):
        try:
            # Read excel
            df = pd.read_excel(file_path)
            specs_data[subslug] = process_df(df)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    else:
        print(f"File not found: {filename}")

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(specs_data, f, indent=4)

print(f"Successfully generated {output_file}")
