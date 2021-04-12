class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ricardo Moreno Tovar.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
