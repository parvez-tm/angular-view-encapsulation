import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';


@Component({
  selector: 'app-root',
  imports: [TopComponent, BottomComponent],
  template: `
    <p>View Encapsulation is a behaviour in angular, where 
    components CSS style are encapsulated into the component's view</p>
    <strong>Types:</strong>
    <ul>
      <li>Emulated</li>
      <li>None</li>
      <li>Shadow DOM</li>
    </ul>

    <app-top />
    <app-bottom />
    <h2>Comparison Between ViewEncapsulation.Emulated and ViewEncapsulation.ShadowDom</h2>

    <table>
        <thead>
            <tr>
                <th>Aspect</th>
                <th>ViewEncapsulation.Emulated</th>
                <th>ViewEncapsulation.ShadowDom</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Encapsulation Method</td>
                <td>Simulates Shadow DOM using unique attributes</td>
                <td>Uses the native Shadow DOM feature of the browser</td>
            </tr>
            <tr>
                <td>Styles Scope</td>
                <td>Styles are scoped using unique attributes on elements</td>
                <td>Styles are completely encapsulated within the shadow root</td>
            </tr>
            <tr>
                <td>Browser Compatibility</td>
                <td>Compatible with all modern browsers and IE 11</td>
                <td>Supported by modern browsers (Chrome, Firefox, Edge) but not by all browsers (e.g., IE)</td>
            </tr>
            <tr>
                <td>Performance</td>
                <td>May be less performant compared to Shadow DOM</td>
                <td>Potentially more performant in browsers with native support</td>
            </tr>
            <tr>
                <td>CSS Styling</td>
                <td>Styles are global but scoped via Angular's attributes</td>
                <td>Styles are isolated and can’t affect global styles</td>
            </tr>
            <tr>
                <td>Use Case</td>
                <td>Default choice for Angular applications</td>
                <td>Best used when true encapsulation and modern browser support are desired</td>
            </tr>
        </tbody>
    </table>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
