function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  window.scrollTo(0, 0);
}

function showHistoryPart(num) {
  document.querySelectorAll('.history-part').forEach(p => p.classList.remove('active'));
  document.querySelector(`.history-part[data-part="${num}"]`).classList.add('active');
}
