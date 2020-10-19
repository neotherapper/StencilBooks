export function formatBookHeader(place: string, title: string, rate: number) {
  return `<h1>${place}. ${title} <span class="rate">(${rate} / 10)<span></h1>`;
}
