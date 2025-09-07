import './style.css';
import { Button } from './components/Button';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <h1>TEMPLATE</h1>
    <p class="credits">
      Follow the
      <span id="follow-button-placeholder"></span>
      to learn more.
    </p>
  </div>
`;

const followButton = Button('@strayNode on X', {
  variant: 'primary',
  size: 'sm',
  onClick: () =>
    window.open('https://x.com/strayNode', '_blank', 'noopener,noreferrer'),
});

document.querySelector('#follow-button-placeholder')!.replaceWith(followButton);
