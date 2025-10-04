function extract(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return '';
    const input = el.textContent || '';
    const regex = /\(([^)]+)\)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
        matches.push(match[1]);
    }
    return matches.join('; ');
}

