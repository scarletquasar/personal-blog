import type { MetaFunction } from "@remix-run/node";
import { Button } from 'react-bootstrap';

export const meta: MetaFunction = () => {
  return [
    { title: "Scarlet Rose - Personal Blog" },
    { name: "description", content: "Welcome to Scarlet Rose's personal blog and portfolio!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", padding: "2rem" }}>
      <h1>Welcome to Scarlet Rose</h1>
      <p>This is my personal blog and portfolio. Follow me on Instagram for more updates!</p>
      <Button href="https://www.instagram.com/scarlet.quasar/" target="_blank" rel="noreferrer">Visit Instagram</Button>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/scarlet.quasar/"
            rel="noreferrer"
          >
            Instagram Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
