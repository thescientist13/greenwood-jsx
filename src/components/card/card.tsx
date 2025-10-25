// @ts-nocheck
import { UpdateModalEvent } from '../modal/modal.tsx';
// import sheet from './card.css' with { type: 'css' };

export default class Card extends HTMLElement {

  selectItem() {
    const content = `You selected the "${this.getAttribute('title')}"`;

    window.dispatchEvent(new UpdateModalEvent(content));
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
    // this.shadowRoot.adoptedStyleSheets = [sheet];
  }

  render() {
    const thumbnail = this.getAttribute('thumbnail');
    const title = this.getAttribute('title');

    return (
      <div>
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} loading="lazy" width="100%"/>
        <button onclick={this.selectItem}>View Item Details</button>
      </div>
    )
  }
}

customElements.define('app-card', Card);