function otherPayment() {
  const type = document.getElementById('types').value;
  if (type == 'laptop') {
    document.write('<ul><li>Macbook</li><li>Dell</li><li>Lenovo</li><li>Asus</li></ul>')
  }
  if (type == 'telephone') {
    document.write('<ul><li>Apple</li><li>Samsung</li><li>Nokia</li></ul>')
  }
  if (type == 'television') {
    document.write('<ul><li>LG</li><li>Sony</li></ul>')
  }
}
