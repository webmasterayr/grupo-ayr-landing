export function decodeURIComponentSafe(encodedTitle: string): string {
  try {
    return decodeURIComponent(encodedTitle);
  } catch (e) {
    console.error("Error decoding URL component:", e);
    return encodedTitle; // Devolver el valor original en caso de error
  }
}
