import type { Product } from '../services/products.ts';
import { getProducts } from '../services/products.ts';
import '../components/card/card.tsx';

export default class ProductsPage extends HTMLElement {
  #products: Product[];

  async connectedCallback() {
    this.#products = await getProducts();

    await this.render();
  }

  async render() {
    // TODO: support for loops in JSX from WCC would be nice - https://github.com/ProjectEvergreen/wcc/discussions/84
    const productsHtml = this.#products.map((product) => {
      const { title, thumbnail } = product;

      return `
        <app-card
          title="${title}"
          thumbnail="${thumbnail}"
        >
        </app-card>
      `
    }).join('\n');

    // TODO: Fragment tags would be nice here from WCC - https://github.com/ProjectEvergreen/wcc/issues/137
    return (
      <div>
        <h2>SSR Page (w/ WCC)</h2>
        <p>This is an example of a Greenwood SSR page route server-rendering Web Components the same Card component used for the Fragments API demo on the home page in fact!  Greenwood is also statically bundling the share template (written in HTML) so that you can still share page templates even within SSR pages.</p>

        <h3>List of Products: {this.#products.length}</h3>
        <div class="products-cards-container">
          {productsHtml}
        </div>
      </div>
    )
  }
}