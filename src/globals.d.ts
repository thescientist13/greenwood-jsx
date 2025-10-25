import type { UpdateModalEvent } from "./components/modal.ts";

declare global {
  interface GlobalEventHandlersEventMap {
    'update-modal': UpdateModalEvent;
  }
}