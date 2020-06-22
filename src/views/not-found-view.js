import { html, LitElement } from "lit-element";

//actually extending from LitHTMl
class NotFoundView extends LitElement {
    render() {
        return html`
            <h1>ERROR 404 Page Not Found</h1>
        `
    }
}

customElements.define('not-found-view', NotFoundView);