import { CSSResultGroup } from "lit";
import { css } from 'lit';

export const ratingStyles: CSSResultGroup = css`  
    .star-rating legend {
        margin-bottom: 15px;
    }

    .star-rating__fieldset {
        display: flex;
        flex-wrap: wrap;
        border: none;
        padding: 0;
        position: relative;
    }

    .star-rating__fieldset > input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        opacity: 0;
        border-width: 0;
        clip: rect(0, 0, 0, 0);
    }

    .star-rating__fieldset > input:checked ~ .star-rating__label,
    .star-rating__fieldset > input:focus ~ .star-rating__label,
    .star-rating__fieldset > input:hover ~ .star-rating__label  {
        --star-color: #F1A603;
    }
    
    .star-rating__fieldset > input:disabled ~ .star-rating__label {
        --star-color: #B8B8B7;
    }

    .star-rating__label {
        position: relative;
        display: inline-block;
        height: 24px;
        width: 24px;
        cursor: pointer;
        color: var(--star-color);
        transition: color 0.2s ease;
        margin-right: 10px;
    }

    .star-rating__label--five {
        order: 5;
    }
    
    .star-rating__label--four {
        order: 4;
    }
    
    .star-rating__label--three {
        order: 3;
    }
    
    .star-rating__label--two {
        order: 2;
    }
    
    .star-rating__label--one {
        order: 1;
    }
    
    .star-rating__label--l {
        height: 30px;
        width: 30px;
    }
    
    .star-rating__label--s {
        height: 16px;
        width: 16px;
    }
`;