export function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export function isValidUrl(url: string) : boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    console.error("Invalid URL:", error);
    return false;
  }
}