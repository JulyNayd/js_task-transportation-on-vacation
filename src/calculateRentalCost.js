/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let totalCost = days * price;

  if (days > 6) {
    return (totalCost = totalCost - 50);
  }

  if (days > 2) {
    return (totalCost = totalCost - 20);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
