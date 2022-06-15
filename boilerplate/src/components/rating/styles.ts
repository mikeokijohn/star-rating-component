import { CSSResultGroup } from "lit";
import { css } from 'lit';

export const ratingStyles: CSSResultGroup = css`
    .star-rating__fieldset {
        display: block;
        border: none;
        padding: 0;
    }
    .star-rating__label {
        position: relative;
        display: inline-block;
        height: 30px;
        width: 30px;
    }
`;