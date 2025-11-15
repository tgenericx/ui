# `@buddy/ui`

A **modular, accessible React UI library** featuring a fully-featured **Modal component** with drag-to-close, ESC key support, backdrop click dismissal, scroll behavior, and size variants. Written in **TypeScript**, built for **React 19+** with **ESM + CJS + type definitions**.

---

## ⚡ Features

- Smooth slide-up modal animation  
- Drag-to-close with resistance curve (like iOS sheets)  
- ESC key and backdrop click to close  
- Four size options: `small`, `medium`, `large`, `full`  
- Configurable scroll behavior: `inside` or `outside`  
- Body scroll lock while modal is open  
- Fully accessible with ARIA support  
- Touch and mouse drag support  
- Customizable animation duration  

---

## 📦 Installation

```bash
# Using npm
npm install @buddy/ui

# Using pnpm
pnpm add @buddy/ui

# Using yarn
yarn add @buddy/ui
````

---

## 🛠️ Usage

```tsx
import React, { useState } from "react";
import { Modal } from "@buddy/ui";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="medium"
        isDismissable={true}
        scrollBehavior="inside"
      >
        <div className="p-4">
          <h1 className="text-lg font-bold">Hello Modal!</h1>
          <p>Try dragging down, pressing ESC, or clicking the backdrop to close.</p>
        </div>
      </Modal>
    </div>
  );
};
```

---

## ⚙️ Props

|Prop|Type|Default|Description|
|---|---|---|---|
|`isOpen`|`boolean`|—|Controls if the modal is visible|
|`onClose`|`() => void`|—|Callback when modal is dismissed|
|`isDismissable`|`boolean`|`true`|Allows ESC, backdrop click, and drag-to-close|
|`size`|`"small"|"medium"|"large"|
|`scrollBehavior`|`"inside"|"outside"`|`inside`|
|`showCloseButton`|`boolean`|`true`|Show the top-right close button|
|`preventBackdropScroll`|`boolean`|`true`|Locks body scroll while modal is open|
|`animationDuration`|`number`|`300`|Animation duration in ms|
|`dragThreshold`|`number`|`100`|Drag distance to trigger dismissal|
|`onDragStart`|`() => void`|—|Callback on drag start|
|`onDragEnd`|`() => void`|—|Callback on drag end|
|`backdropClassName`|`string`|`""`|Additional classes for the backdrop|
|`modalClassName`|`string`|`""`|Additional classes for the modal container|

---

## 🎨 Customization

- Use **`modalClassName`** to add Tailwind/Custom CSS classes to the modal.
    
- Use **`backdropClassName`** for backdrop color, opacity, or effects.
    
- Change **`animationDuration`** to speed up or slow down modal transitions.
    

---

## 🔍 Example with Drag-to-Close

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="large"
  isDismissable
  dragThreshold={150}
>
  <div className="p-6">
    <h2>Drag this modal down to close</h2>
    <p>Resistance curve prevents accidental dismissal!</p>
  </div>
</Modal>
```

---

## ✅ Development

1. Install dependencies:
    

```bash
pnpm install
```

2. Run demo app:
    

```bash
pnpm dev
```

3. Build library:
    

```bash
pnpm build
```

4. Lint:
    

```bash
pnpm lint
```

---

## 📖 Notes

- **Peer dependencies**: React 19+, React DOM 19+
    
- Fully typed with TypeScript
    
- Supports both **CJS** and **ESM** imports
    

```ts
// ESM
import { Modal } from "@buddy/ui";

// CJS
const { Modal } = require("@buddy/ui");
```
