import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <footer class="border-top">
        <p class="p-3 text-center">&copy;2024 | Stephen Owoko | All Rights Reserved.</p>
        </footer>
    `,
    styles: `
        p {
            font-size: .85rem;
            color: var(--secondary);
        }
    
    `
})
export class FooterComponent {

}