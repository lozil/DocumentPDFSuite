// Rich Text to PDF Tool
let quill;
let fontSize = 12;
let jsPDF;

// Initialize jsPDF (browser-only; keeps Node tests from crashing on import)
if (typeof window !== 'undefined' && window.jspdf && window.jspdf.jsPDF) {
    ({ jsPDF } = window.jspdf);
}

function estimatePageFill(text, fontSize) {
    // Rough estimate: characters per page for A4 at given font size
    // (This is a simple heuristic, not exact)
    const charsPerPage = Math.floor(2500 * (12 / fontSize));
    const percent = Math.min(100, Math.round((text.length / charsPerPage) * 100));
    return percent;
}

function updatePreviewAndFill() {
    const html = quill.root.innerHTML;
    const text = quill.getText();
    
    // Update preview with font size applied
    const previewElement = document.getElementById('pdf-preview');
    if (html.trim()) {
        // Create a wrapper div with the selected font size
        previewElement.innerHTML = `<div style="font-size: ${fontSize}px; line-height: 1.4;">${html}</div>`;
    } else {
        previewElement.innerHTML = '<em>PDF preview will appear here...</em>';
    }
    
    // Update page fill
    const percent = estimatePageFill(text, fontSize);
    document.getElementById('pageFill').value = percent;
    document.getElementById('pageFillText').textContent = percent + '%';
}

function downloadPdf() {
    const doc = new jsPDF();
    doc.setFontSize(fontSize);
    // Get HTML and convert to plain text for now (jsPDF html rendering is limited)
    const text = quill.getText();
    const lines = doc.splitTextToSize(text, doc.internal.pageSize.getWidth() - 30);
    let y = 20;
    const lineHeight = fontSize * 0.35 + 3;
    const pageHeight = doc.internal.pageSize.getHeight();
    lines.forEach(line => {
        if (y > pageHeight - 20) {
            doc.addPage();
            y = 20;
        }
        doc.text(line, 15, y);
        y += lineHeight;
    });
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    doc.save(`RichTextPDF-${timestamp}.pdf`);
}

// Initialize the app (browser only)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        quill = new Quill('#editor-container', {
            theme: 'snow',
            placeholder: 'Write or paste your rich text here...'
        });
        quill.on('text-change', updatePreviewAndFill);
        document.getElementById('fontSize').addEventListener('change', function(e) {
            fontSize = parseInt(e.target.value, 10);
            updatePreviewAndFill();
        });
        document.getElementById('downloadPdfBtn').addEventListener('click', downloadPdf);
        updatePreviewAndFill();
    });
}

// Export pure helpers for Node-based tests.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { estimatePageFill };
}