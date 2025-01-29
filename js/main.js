function displayUTC() {
  const now = new Date();
  const utcTime = now.toISOString();
  
  document.getElementById('utc-time').textContent = utcTime;
}

window.onload = displayUTC;