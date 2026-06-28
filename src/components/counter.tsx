export const inferredObservability = true;

export default class Counter extends HTMLElement {
  count;

  constructor() {
    super();
    this.count = new Signal.State(0);
  }

  connectedCallback() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: 'open'});
      this.render();
    }
  }

  render() {
    const { count } = this;

    return (
      <div>
        <button onclick={() => this.count.set(this.count.get() - 1)}> -</button>
        <span>You have clicked {count.get()} times</span>
        <button onclick={() => this.count.set(this.count.get() + 1)}> +</button>
      </div>
    );
  }
}

customElements.define('app-counter', Counter);