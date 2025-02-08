# Tailwind CSS Fractional Width Bug

This repository demonstrates a common issue encountered when using Tailwind CSS fractional width units (`w-1/2`, `w-1/3`, etc.) without explicitly setting the width of their parent container.

## Bug Description
When using fractional widths within a flex container (or any other container without a defined width), the fractional units may not render as expected.  The elements might not occupy the expected percentage of the available space.

## Reproduction
1. Clone this repository.
2. Open `MyComponent.js`. 
3. Observe that the red and blue divs do not occupy exactly half of the container width. 

## Solution
The solution involves setting a defined width to the parent container.  This ensures that the fractional widths are calculated correctly relative to that defined width.

## Solution File: MyComponentSolution.js
This file demonstrates how to correctly use fractional width units by adding a width to the parent container. This solution fixes the issue by ensuring the fractional units have a reference width to work against.