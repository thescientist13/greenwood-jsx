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

const template = document.createElement('template');

template.innerHTML = `
  <style>
    dialog {
      border: 1px solid #818181;
      text-align: center;
      width: 40%;
      border-radius: 10px;
      padding: 2rem 1rem;
      min-height: 200px;
      background-color: #fff;
      overflow-x: hidden;
    }
    
    h3 {
      font-size: 1.85rem;
    }
    
    button {
      background: var(--color-accent);
      color: var(--color-white);
      padding: 1rem 2rem;
      border: 0;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    @media(max-width: 768px) {
      dialog {
        width: 80%;
      }
    }
  </style>
  <dialog>
    <h3 id="content"></h3>
    <button autofocus>Close</button>
  </dialog>
`;

export default class Modal extends HTMLElement {

  updateModal(content: string) {
    console.log({ content })
    console.log(`selected item is => ${content}`);
    const modal = this.shadowRoot.querySelector('dialog');
    
    modal.querySelector('#content').textContent = content;
    modal.showModal();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

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
}

customElements.define('app-modal', Modal);