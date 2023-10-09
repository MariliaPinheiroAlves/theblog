class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor") || "Anônimo";

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/images/foto-default.png";
        newsImage.alt = "Foto da notícia";

        cardRight.appendChild(newsImage);
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent =
        `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Kanit';
        }

        .card {
            background-color: rgb(231, 231, 231);
            border-radius: 10px;
            margin: 5px;
            max-width: 600px;
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 20px;
        }
        
        .card-left {
            max-width: 500px;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
        }
        
        .card-left span {
            font-size: 13px;
        }
        
        .card-left a {
            font-size: 20px;
            font-weight: 700;
            text-decoration: none;
            color: black;
        }
        
        .card-left p {
            margin-top: 5px;
            font-size: 14px;
        }
        
        .card-right {
            height: 100px;
        }
        
        .card-right img {
            width: 150px;
            height: 100px;
            border-radius: 10px;
        }
        `

        return style;
    }
}

customElements.define('card-news', cardNews);