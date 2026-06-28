// alias Signal to avoid name conflicts with the global Signal type
import { Signal as SignalInterface } from "signal-polyfill";

declare global {
  const Signal: typeof SignalInterface;
}