class myElement extends HTMLElement {
    constructor() {
      super();
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <main>
            <section class="hero">
                <h1>NIKE</h1>
                <img class="image" src="/assets/nike-blue.png">
            </section>
            <section class="text">
                <h2 class="title">Nike Zoom 2021</h2>
                <h3 class="subtitle">RUNNING COLLECTION</h3>
                <div>
                    <p>Las zapatillas Nike Air Zoom Pegasus 38 son el último hito en la legendaria serie Pegasus de Nike, diseñadas para ofrecer un equilibrio perfecto entre amortiguación, respuesta y durabilidad para tus carreras diarias. Con una parte superior de malla transpirable que proporciona un ajuste cómodo y seguro, estas zapatillas ofrecen un soporte ligero que se adapta a los movimientos naturales del pie.
                </div>
                <div class="flex">
                    <span class="price">$ 2.500</span>
                    <button>Buy</button>
                </div>
            </section>
        </main>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
          main {
            display: flex;
          }

          .hero {
            background: #7279a8; 
            margin-right: 20px; 
            height: 325px;
            min-width: 275px;
            position: relative;
          }
        
          h1 {
            color: rgba(78, 69, 103, 0.6);
            font-family: 'Lato', sans-serif;
            font-size: 40px;
            font-weight: 700;
            padding: 0.5rem 0 0 0.5rem;
            margin: 0;
          }

          h2 {
            color: black;
            font-family: 'Lato', sans-serif;
            font-size: 33px;
            font-weight: 700;
            padding: 1.2rem 0 1rem 0;
            margin: 0;
          }
          h3 {
            color: gray;
            font-family: 'Lato', sans-serif;
            font-size: 15px;
            margin: 0;
          }

          p {
            margin: 0;
            font-family: 'Lato', sans-serif;
            font-size: 10px;
            line-height: 1.2;
            padding: 0.7rem 0 1rem 1.5rem;
          }
          img {
            position: absolute;
            top: 50px;
            left: -103px;
            width: 154%;
            transform: rotate(-35deg);            
          }

          .flex {
            display: flex;
            justify-content: space-between;
          }

          .price {
              color: gray;
              font-family: 'Lato', sans-serif;
              font-size: 25px;
              font-weight: 800;
              padding-left: 1.5rem;
          }
          button {
              background: #7279a8;
              height: 20px;
              border-radius: 5px;
              margin: 0.5rem 1rem 0 1.5rem;
          }
          @media (max-width: 554px) {
            main {
                flex-direction: column;
            }
            .hero {
                width: 100%;
                min-width: 100%;
                height: 170px;
                position: unset;
            }
            img {
                top: 40px;
                left: 0;
              transform: rotate(0deg);
              width: 250px;
            }
            h2 {
                font-size: 18px;
                font-weight: 900;
                padding: 1.6rem 0 0.5rem 0;
            }
            h3 {
                font-size: 12px;
            }
            .price {
                padding-left: 0.5rem;
            }
          }
        </style>
      `;
    }
    render() {
      this.appendChild(this.getTemplate().content);
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("my-element", myElement);
  