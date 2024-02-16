function calculateTriangleArea() {
  const baseInput = document.getElementById("triBase");
  const baseText = baseInput.value;
  const base = parseFloat(baseText);
  console.log(base);

  const heightInput = document.getElementById("triHeight");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  console.log(height);
  const area = 0.5 * base * height;

  const areaResult = document.getElementById("areaValue");
  areaResult.innerText = area;
}
