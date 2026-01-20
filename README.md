# Smart Text Replacer Suite

[LINK](https://lozil.github.io/DocumentPDFSuite/)

A web suite featuring two powerful tools:
- **Smart Text Replacer**: Personalize any text template using smart placeholders and export to PDF.
- **Rich Text to PDF**: Write or paste rich text, preview, and export as PDF with page fill and font size options.

---

## Tools Overview

### 1. Smart Text Replacer
- **Dynamic Placeholder Detection**: Detects `{placeholder}` patterns in your template.
- **Real-time Field Generation**: Creates input fields for each unique placeholder.
- **Live Preview**: Shows the final text with replacements in real-time.
- **PDF Export**: One-click PDF generation.

### 2. Rich Text to PDF
- **Rich Text Editor**: Format, paste, or write rich text (bold, lists, etc.).
- **PDF Preview**: See a live preview of your text as it would appear in the PDF.
- **Page Fill Indicator**: Visual indicator of how much of a PDF page is filled.
- **Font Size Selection**: Choose the text size for your PDF.
- **PDF Export**: Download your formatted text as a PDF.

---

## How to Use

### Landing Page
Open `index.html` to choose between the two tools:
- **Smart Text Replacer** (`smart-text-replacer.html`)
- **Rich Text to PDF** (`rich-text-pdf.html`)

### Smart Text Replacer
1. Paste your text template with placeholders (e.g., `{recipient_name}`).
2. Fill in the generated input fields for each placeholder.
3. See the personalized text update live.
4. Download as PDF.

### Rich Text to PDF
1. Write or paste your rich text in the editor (supports formatting).
2. Select your desired PDF text size.
3. Watch the page fill indicator to see how much of a PDF page your text will use.
4. Download as PDF.

---

## Installation & Deployment

1. **Download/Clone** the project files.
2. **Upload** the folder to your web server.
3. **Access** via your domain (e.g., `https://yourdomain.com/`).

### File Structure
```
SmartTextReplacer/
├── index.html               # Landing page
├── smart-text-replacer.html # Smart Text Replacer tool
├── rich-text-pdf.html       # Rich Text to PDF tool
├── css/
│   └── style.css            # Shared stylesheet
├── js/
│   ├── script.js            # Smart Text Replacer JS
│   └── rich-text-pdf.js     # Rich Text to PDF JS
├── assets/
│   └── favicon.ico          # Website icon
├── README.md                # This file
└── .htaccess                # Apache config (optional)
```

### Server Requirements
- **Web Server**: Any static file server (Apache, Nginx, etc.)
- **No Backend**: Pure client-side application

---

## Technical Details

### Dependencies
- **jsPDF**: For PDF generation (CDN)
- **Quill.js**: Rich text editor for the Rich Text to PDF tool (CDN)
- **Pure HTML/CSS/JS**: No frameworks required

### Features
- **Responsive Design**: Mobile-first
- **Accessibility**: ARIA labels, keyboard navigation
- **Performance**: Lightweight and fast

---

## Examples

### Smart Text Replacer
```
Input: "Dear {customer_name}, your order #{order_id} is ready!"
Fields: customer_name, order_id
Output: "Dear John Doe, your order #12345 is ready!"
```

### Rich Text to PDF
- Paste or write formatted text (bold, lists, etc.)
- Select font size and see how much of a PDF page is filled
- Download as PDF

---

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
Open source under the [MIT License](LICENSE).

## Support
- Create an issue in the repository
- Check the documentation
- Review the code comments

---

**Built for productivity and efficiency**
