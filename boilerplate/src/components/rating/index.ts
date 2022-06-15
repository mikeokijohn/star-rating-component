import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ratingStyles } from "./styles";

@customElement(`case-rating`)
export class CaseRating extends LitElement {
  static styles = [
    ratingStyles
  ];
  render() {
    return html`<div>CaseRating component</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'case-rating': CaseRating;
  }
}
