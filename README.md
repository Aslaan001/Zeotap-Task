# ZeoSheets - Google Sheets Clone

ZeoSheets is a web-based spreadsheet application that mimics Google Sheets, supporting data entry, formulas, mathematical operations, and essential data quality functions.

## 🚀 Features

### **1️⃣ Spreadsheet Interface**
- **Google Sheets-Like UI** with a toolbar, formula bar, and grid structure.
- **Cell Selection & Formatting**: Supports **bold, italic, font size, and color changes**.
- **Dynamic Row & Column Management**: Add, delete, and resize rows/columns.
- **Drag-and-Drop Functionality**: Move and copy cell content easily.
- **Cell Dependencies**: Formulas update dynamically when related cells change.

### **2️⃣ Mathematical Functions**
Use these functions in the **fx formula bar**:
- ```=SUM(A1:A5)``` : Adds values in the given range.
- ```=AVERAGE(B1:B4)``` : Computes the average.
- ```=MAX(C1:C10)``` : Returns the highest value.
- ```=MIN(D2:D8)``` : Returns the lowest value.
- ```=COUNT(E1:E5)``` : Counts numeric entries.

### **3️⃣ Data Quality Functions**
- **Trim**: Removes extra spaces (```=TRIM(A1)```).
- **Uppercase**: Converts text to uppercase (```=UPPER(A1)```).
- **Lowercase**: Converts text to lowercase (```=LOWER(A1)```).
- **Find & Replace**: Search and replace values in selected cells.
- **Remove Duplicates**: Deletes duplicate rows from a selected range.

### **4️⃣ Data Entry & Validation**
- Supports **text, numbers, and dates**.
- Restricts numeric cells to accept only numbers.

### **5️⃣ Bonus Features**
- **Save & Load Spreadsheets** (via local storage).
- **Data Visualization** (Charts & Graphs coming soon!).
- **Advanced Formulas** (Supports relative & absolute references).

## 📜 How to Use ZeoSheets

### **Getting Started**
1. **Enter Data:** Click any cell and type text or numbers.
2. **Use Toolbar:** Apply formatting (Bold, Italic, etc.).
3. **Perform Calculations:** Select multiple cells and use SUM, AVERAGE, etc.
4. **Enter Formulas:**
   - Click the **fx bar**, type a formula (```=SUM(A1:A5)```) and press **Enter**.
   - The result will update dynamically in the selected cell.
5. **Find & Replace:** Click the button, enter values, and apply changes.
6. **Remove Duplicates:** Select a column and press the **Remove Duplicates** button.

## 🛠 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/zeosheets.git
   cd zeosheets
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🤝 Contributing
Pull requests are welcome! Please follow best practices when submitting changes.

## 📝 License
This project is licensed under the MIT License.

Happy Coding! 🚀

