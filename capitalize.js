function capitalize(str) {
  return str.split(/\s/).map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
}

capitalize('look, A tree life is bench');
