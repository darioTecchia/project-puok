export function concatIDs(...ids: string[] | number[]) {
  return ids.join('_');
}