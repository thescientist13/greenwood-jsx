import sheet from './modal.css' with { type: 'css' };

/**
 * An event that's fired when the modal content needs to be updated
 */
export class UpdateModalEvent extends Event {
  static readonly eventName = 'update-modal';

  readonly content: string;

  constructor(content: string) {
    super(UpdateModalEvent.eventName, { bubbles: true, composed: true });
    this.content = content;
  }
}

export default class Modal extends HTMLElement {

  updateModal(content: string) {
    console.log({ content })
    console.log(`selected item is => ${content}`);
    const modal = this.shadowRoot.querySelector('dialog');
    
    modal.querySelector('#content').textContent = content;
    modal.showModal();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();

    this.shadowRoot.adoptedStyleSheets = [sheet];

    // setup event handlers for updating and closing the dialog
    window.addEventListener('update-modal', (event: UpdateModalEvent) => {
      console.log({ event });
      this.updateModal(event.content);
    })

    const modal = this.shadowRoot.querySelector('dialog');

    modal.querySelector('button').addEventListener("click", () => {
      modal.close();
    });
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