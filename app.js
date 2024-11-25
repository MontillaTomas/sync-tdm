const prefixes = [
  { prefix: "Q", factor: 1e30 },
  { prefix: "R", factor: 1e27 },
  { prefix: "Y", factor: 1e24 },
  { prefix: "Z", factor: 1e21 },
  { prefix: "E", factor: 1e18 },
  { prefix: "P", factor: 1e15 },
  { prefix: "T", factor: 1e12 },
  { prefix: "G", factor: 1e9 },
  { prefix: "M", factor: 1e6 },
  { prefix: "k", factor: 1e3 },
  { prefix: "", factor: 1 },
  { prefix: "m", factor: 1e-3 },
  { prefix: "µ", factor: 1e-6 },
  { prefix: "n", factor: 1e-9 },
  { prefix: "p", factor: 1e-12 },
  { prefix: "f", factor: 1e-15 },
  { prefix: "a", factor: 1e-18 },
  { prefix: "z", factor: 1e-21 },
  { prefix: "y", factor: 1e-24 },
  { prefix: "r", factor: 1e-27 },
  { prefix: "q", factor: 1e-30 },
];

function formatWithPrefix(value, unit) {
  const prefix = prefixes.find((p) => Math.abs(value) >= p.factor);
  return `${(value / prefix.factor).toFixed(2)} ${prefix.prefix}${unit}`;
}

document.getElementById("tdmForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const numLines = parseInt(document.getElementById("numLines").value);
  const bitRateInput = parseFloat(document.getElementById("bit-rate").value);
  const bitRateUnit = parseFloat(
    document.getElementById("bit-rate-unit").value
  );
  const bitRate = bitRateInput * bitRateUnit;
  const timeSlot = parseInt(document.getElementById("timeSlot").value);
  const syncBits = parseInt(document.getElementById("syncBits").value);
  const signalBits = parseInt(document.getElementById("signalBits").value);

  if (numLines < 1 || !Number.isInteger(numLines)) {
    alert("El número de líneas debe ser un entero igual o mayor a 1");
    return;
  }
  if (bitRate <= 0) {
    alert("La tasa de bits debe ser mayor que 0");
    return;
  }
  if (timeSlot < 1 || !Number.isInteger(timeSlot)) {
    alert("La ranura de tiempo debe ser un entero igual o mayor a 1");
    return;
  }
  if (syncBits < 0 || !Number.isInteger(syncBits)) {
    alert("Los bits de sincronismo deben ser un entero igual o mayor a 0");
    return;
  }
  if (signalBits < 0 || !Number.isInteger(signalBits)) {
    alert("Los bits de señalización deben ser un entero igual o mayor a 0");
    return;
  }

  const frameSize = numLines * timeSlot + syncBits + signalBits;
  const frameDuration = timeSlot / bitRate;
  const frameRate = 1 / frameDuration;
  const outputBitRate = frameSize / frameDuration;
  const systemEfficiency =
    ((frameSize - syncBits - signalBits) / frameSize) * 100;

  document.getElementById("frameSizeResult").value = `${frameSize} bits`;
  document.getElementById("frameDurationResult").value = formatWithPrefix(
    frameDuration,
    "s"
  );
  document.getElementById("frameRateResult").value = formatWithPrefix(
    frameRate,
    "tramas/s"
  );
  document.getElementById("outputBitRateResult").value = formatWithPrefix(
    outputBitRate,
    "bps"
  );
  document.getElementById(
    "systemEfficiencyResult"
  ).value = `${systemEfficiency.toFixed(2)}%`;

  document.getElementById("results").classList.remove("hidden");
});
