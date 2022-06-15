import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ratingStyles } from "./styles";

@customElement(`case-rating`)
export class CaseRating extends LitElement {
  static styles = [
    ratingStyles
  ];
  render() {
    return html`
      <form>
        <fieldset>
          <legend>Star rating component</legend>
          <label for="rate1"></label>
          <input type="radio" id="rate1" @change="${this._defineState}">
        </fieldset>
      </form>
    `;
  }

  private _defineState(e: Event): void {
    console.log(e)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'case-rating': CaseRating;
  }
}
