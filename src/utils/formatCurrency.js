export const formatCurrency = (value) => {
  const numberValue = parseFloat(value);
  return isNaN(numberValue) ? '' : `R$ ${numberValue.toFixed(2).replace('.', ',')}`;
}; 