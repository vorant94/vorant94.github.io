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
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      ${Greeting.styles}
      
      <div class="greeting text-2xl">
        Hello, <slot></slot>!
      </div>
    `;
  }
}

if(!customElements.get('dg-greeting')) {
  customElements.define('dg-greeting', Greeting);
}
