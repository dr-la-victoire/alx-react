function getFullYear() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return currentYear;
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFullYear, getFooterCopy, getLatestNotification };
