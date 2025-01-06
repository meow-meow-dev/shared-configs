export function f(): void {
  try {
    // eslint-disable-next-line id-denylist
  } catch (e) {
    // eslint-disable-next-line id-denylist
    throw new Error(e instanceof Error ? e.message : "");
  }
}
