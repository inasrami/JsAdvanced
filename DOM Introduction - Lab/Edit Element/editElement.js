function editElement(element, match, replacer) {
    // Use RegExp with global flag to replace *all* occurrences
    const regex = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(regex, replacer);
}