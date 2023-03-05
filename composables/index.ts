export const useElements = () => useState<Array<Element>>('elements', () => [])
export const useUnits = () => new Set(useElements().value.map((element: Element) => element.unit))
