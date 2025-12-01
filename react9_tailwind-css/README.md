## Tailwind Configuration in Vite

### Install tailwindcss and @tailwindcss/vite via npm.
```
npm install tailwindcss @tailwindcss/vite
```
### Add the @tailwindcss/vite plugin to your Vite configuration (vite.config.js).
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

})

```

### Add an `@import` to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

## Basic Tailwind CSS Classes

| **Property**         | **Tailwind CSS** |
| -------------------- | ---------------- |
| **Background Color** | `bg-blue-500`    |
| **Color (Text)**     | `text-red-500`   |
| **Margin**           | `m-4`            |
| **Margin**           | `m-[16px]`       |
| **Padding**          | `p-4`            |
| **Padding**          | `p-[16px]`       |
| **Border**           | `border`         |
| **Border Radius**    | `rounded-md`     |
| **Height**           | `h-10`           |
| **Height**           | `h-[40px]`       |
| **Width**            | `w-10`           |
| **Width**            | `w-[40px]`       |
| **Display: flex**    | `flex`           |
| **Justify Content**  | `justify-center` |
| **Align Items**      | `items-center`   |

## UI Improvement Classes

| **Property**                         | **Tailwind CSS**                              |
| ------------------------------------ | --------------------------------------------- |
| **Hover (background color example)** | `hover:bg-gray-300`                           |
| **Hover (text color example)**       | `hover:text-blue-500`                         |
| **Top → Bottom**                     | `bg-gradient-to-b from-blue-500 to-green-500` |
| **Bottom → Top**                     | `bg-gradient-to-t from-blue-500 to-green-500` |
| **Left → Right**                     | `bg-gradient-to-r from-blue-500 to-green-500` |
| **Right → Left**                     | `bg-gradient-to-l from-blue-500 to-green-500` |
| **Top Left → Bottom Right**          | `bg-gradient-to-br from-blue-500 to-green-500`|
| **Top Right → Bottom Left**          | `bg-gradient-to-bl from-blue-500 to-green-500`|
| **Bottom Left → Top Right**          | `bg-gradient-to-tr from-blue-500 to-green-500`|
| **Bottom Right → Top Left**          | `bg-gradient-to-tl from-blue-500 to-green-500`|
| **Animation (pre-defined)**          | `animate-bounce`                              |
| **Animation (pre-defined)**          | `animate-none`                                |
| **Animation (pre-defined)**          | `animate-ping`                                |
| **Animation (pre-defined)**          | `animate-pulse`                               |
| **Animation (pre-defined)**          | `animate-spin`                                |

## Responsive Design

| Prefix | Breakpoint         | Min Width |
| ------ | ------------------ | --------- |
| `sm:`  | Small devices      | ≥ 640px   |
| `md:`  | Tablets            | ≥ 768px   |
| `lg:`  | Laptops            | ≥ 1024px  |
| `xl:`  | Large screens      | ≥ 1280px  |
| `2xl:` | Very large screens | ≥ 1536px  |
