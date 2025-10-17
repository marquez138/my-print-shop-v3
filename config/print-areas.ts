// config/print-areas.ts
export type Side = 'front' | 'back' | 'sleeve'
export type PrintArea = {
  id: string
  label: string
  side: Side
  box: { x: number; y: number; w: number; h: number }
}

export const PRINT_AREAS: PrintArea[] = [
  {
    id: 'front-full',
    label: 'Full Front',
    side: 'front',
    box: { x: 0.28, y: 0.2, w: 0.44, h: 0.55 },
  },
  {
    id: 'front-center',
    label: 'Center Front',
    side: 'front',
    box: { x: 0.28, y: 0.2, w: 0.44, h: 0.55 },
  },
  {
    id: 'back-full',
    label: 'Full Back',
    side: 'back',
    box: { x: 0.28, y: 0.2, w: 0.44, h: 0.55 },
  },
  {
    id: 'sleeve-left',
    label: 'Left Sleeve',
    side: 'sleeve',
    box: { x: 0.15, y: 0.3, w: 0.3, h: 0.3 },
  },
  {
    id: 'sleeve-right',
    label: 'Right Sleeve',
    side: 'sleeve',
    box: { x: 0.55, y: 0.3, w: 0.3, h: 0.3 },
  },
]
