function getFullYear() {
  const fullYear = new Date();

  return fullYear.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }

  return "Holberton School main dashboard";
}

export { getFullYear, getFooterCopy };
