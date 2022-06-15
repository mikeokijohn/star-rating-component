import { html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ratingStyles } from "./styles";

const starPath = svg`
    <path d="M4.07512 22.3085L6.21423 14.999L0.476607 10.1393C0.269663 9.96838 0.120233 9.73794 0.0485476 9.4792C-0.0231375 9.22047 -0.0136153 8.94595 0.0758251 8.69282C0.165265 8.43968 0.330304 8.22015 0.548596 8.06394C0.766889 7.90774 1.02789 7.82241 1.29627 7.8195H8.29337L10.7823 0.859942C10.8692 0.60817 11.0324 0.394579 11.2492 0.239984C11.466 0.0853893 11.7256 0 11.9918 0C12.2581 0 12.5177 0.0853893 12.7345 0.239984C12.9513 0.394579 13.1145 0.60817 13.2013 0.859942L15.7103 7.8695H22.7074C22.977 7.87512 23.2384 7.96323 23.4564 8.12197C23.6744 8.28072 23.8386 8.50247 23.9268 8.75737C24.015 9.01227 24.023 9.28809 23.9498 9.54768C23.8765 9.80728 23.7255 10.0382 23.5171 10.2093L17.6195 15.049L19.9086 22.2385C20.0126 22.4941 20.0319 22.7711 19.9638 23.0385C19.8956 23.3058 19.7436 23.5439 19.53 23.7184C19.3164 23.8929 19.0524 23.985 18.7769 23.9984C18.5014 24.0118 18.2289 23.9414 17.9994 23.7884L12.0148 19.7187L6.00432 23.7884C5.78082 23.9337 5.51778 24.0088 5.2514 23.9984C4.98503 23.988 4.72841 23.8907 4.51687 23.7284C4.30534 23.5661 4.14927 23.3431 4.07016 23.0885C3.99105 22.8338 3.99278 22.5621 4.07512 22.3085Z" fill="currentColor"/>
`

const star = html`
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${starPath}
  </svg>
`;

enum Sizes {
    Large = "L",
    Medium = "M",
    Small = "S"
}

@customElement(`case-rating`)
export class CaseRating extends LitElement {
    @property({type: String})
    size: Sizes = Sizes.Medium;

    @property({type: Number})
    rating: number = 3;

    @property({type: Boolean})
    disabled: boolean = false;

    static styles = [
    ratingStyles
    ];
    render() {
        return html`
          <div class="star-rating">
            <form class="star-rating__form" @change="${this._defineState}">
              <fieldset class="star-rating__fieldset">
                <legend>Star rating component</legend>
                <input type="radio"
                       id="rate5"
                       value="5"
                       name="starRating"
                       ?disabled="${this.disabled}"
                       ?checked="${this.rating === 5}" />
                <label for="rate5"
                       class="star-rating__label star-rating__label--five star-rating__label--${this.size.toLowerCase()}"
                       title="Awesome!">
                  ${star}
                </label>
                <input type="radio"
                       id="rate4"
                       value="4"
                       name="starRating"
                       ?disabled="${this.disabled}"
                       ?checked="${this.rating === 4}">
                <label for="rate4"
                       class="star-rating__label star-rating__label--four star-rating__label--${this.size.toLowerCase()}"
                       title="Very good">
                  ${star}
                </label>
                <input type="radio"
                       id="rate3"
                       value="3"
                       name="starRating"
                       ?disabled="${this.disabled}"
                       ?checked="${this.rating === 3}">
                <label for="rate3"
                       class="star-rating__label star-rating__label--three star-rating__label--${this.size.toLowerCase()}"
                       title="Average rating">
                  ${star}
                </label>
                <input type="radio"
                       id="rate2"
                       value="2"
                       name="starRating"
                       ?disabled="${this.disabled}"
                       ?checked="${this.rating === 2}">
                <label for="rate2"
                       class="star-rating__label star-rating__label--two star-rating__label--${this.size.toLowerCase()}"
                       title="Poor rating">
                  ${star}
                </label>
                <input type="radio"
                       id="rate1"
                       value="1"
                       name="starRating"
                       ?disabled="${this.disabled}"
                       ?checked="${this.rating === 1}">
                <label for="rate1"
                       class="star-rating__label star-rating__label--one star-rating__label--${this.size.toLowerCase()}"
                       title="Terrible rating">
                  ${star}
                </label>
              </fieldset>
            </form>
          </div>
        `;
    }

    private _defineState(_e: Event): void {
        // console.log(e.target)
        // Here we could do something with the checked values
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'case-rating': CaseRating;
  }
}