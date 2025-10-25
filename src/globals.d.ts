import type { UpdateModalEvent } from "./components/modal/modal.tsx";

declare global {
  interface GlobalEventHandlersEventMap {
    'update-modal': UpdateModalEvent;
  }
}

declare module "*.css" {
  const sheet: CSSStyleSheet;

  export default sheet;
}