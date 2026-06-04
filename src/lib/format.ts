export function formatCurrency(
  value: number,
  symbol = "$",
  decimals = 0
): string {
  return `${symbol}${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

export function formatHourly(value: number, symbol = "$"): string {
  return `${symbol}${value.toFixed(2)}/hr`;
}
