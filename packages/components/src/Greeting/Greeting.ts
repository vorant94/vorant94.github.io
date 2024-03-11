export class Greeting extends HTMLElement {
  shadow;

  static readonly styles = `
    <style>
      .greeting {
        color: green;
      }
    </style>
  `;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      ${Greeting.styles}
      
      <div class="greeting">
        Hello, <slot></slot>!
      </div>
    `;
  }
}

customElements.define('dg-greeting', Greeting);
