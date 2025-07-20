function openSupplierModal() {
  document.getElementById('supplierModal').style.display = 'flex';
}
function closeSupplierModal() {
  document.getElementById('supplierModal').style.display = 'none';
}
document.getElementById('supplierForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! We will contact you shortly.');
  closeSupplierModal();
});
