import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(`case-rating`)
export class CaseRating extends LitElement {
  render() {
    return html`<div>CaseRating component</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'case-rating': CaseRating;
  }
}
