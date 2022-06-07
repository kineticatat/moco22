function collapse(cell){
  var row = cell.parentElement;
  var target_row = row.parentElement.children[row.rowIndex + 1];
  if (target_row.style.display == 'table-row') {
    cell.innerHTML = '+';
    target_row.style.display = 'none';
  } else {
    cell.innerHTML = '-';
    target_row.style.display = 'table-row';
  }
}
