import sheet from './modal.css' with { type: 'css' };

export default class Modal extends HTMLElement {
  updateModal(content: string) {
    console.log(`selected item is => ${content}`);
    const modal = this.shadowRoot.querySelector('dialog');

    modal.querySelector('#content').textContent = content;
    modal.showModal();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.render();

    const modal = this.shadowRoot.querySelector('dialog');

    modal.querySelector('button').addEventListener("click", () => {
      modal.close();
    });

    window.addEventListener('update-modal', (event: CustomEvent) => {
      this.updateModal(event.detail.content);
    })
  }

  render() {
    return (
      <dialog>
        <h3 id="content"></h3>
        <button autofocus>Close</button>
      </dialog>
    )
  }
}

customElements.define('app-modal', Modal);