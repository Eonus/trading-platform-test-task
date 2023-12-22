export class DTOHelper {
  static getNumberEnumValues(enumObject: Record<string | number, string | number>) {
    return Object.keys(enumObject)
      .filter((key) => !isNaN(key as any))
      .map((key) => Number(key))
  }
}
