```javascript
// MyComponentSolution.js
<div className="bg-gray-200 p-4 w-96">
  <div className="flex space-x-4">
    <div className="bg-red-500 w-1/2"></div>
    <div className="bg-blue-500 w-1/2"></div>
  </div>
</div>
```
By adding `w-96` (or any other appropriate width) to the parent div, the fractional widths are now correctly applied, and the red and blue divs will each occupy 50% of the parent's width.