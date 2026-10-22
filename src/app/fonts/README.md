# Approved Arabic website font

The Year of Handicrafts (عام الحرف اليدوية) is the Arabic website font approved by the project owner. These unchanged OTF files were supplied by the owner.

Weights: Regular 400, Medium 500, SemiBold 600, Bold 700, Black 900.

The root layout loads the files with `next/font/local` and exposes
`--font-orbits-arabic`. The shared `--font-arabic` stack uses this family.
English typography and the approved logo artwork remain separate.
Fonts load on demand with `display: swap`; no external font service is required.
