import {
  CircleParticle,
  CrossParticle,
  DiamondParticle,
} from "../components/decoration/particles/components";

let idCounter = 0;

export default function particleGenerator(height, width, colors, setList) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const screenPosition = { x, y };
  const lifeTime = Math.floor(Math.random() * (5000 - 2000) + 5000);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const particles = [CircleParticle, DiamondParticle, CrossParticle];
  const SelectedParticle =
    particles[Math.floor(Math.random() * particles.length)];

  const id = idCounter++;
  const newParticle = {
    id,
    component: (
      <SelectedParticle
        key={id}
        screenPosition={screenPosition}
        lifeTime={lifeTime}
        color={color}
        id={id}
      />
    ),
  };

  setList((prevList) => [...prevList, newParticle]);

  setTimeout(() => {
    setList((prevList) => prevList.filter((particle) => particle.id !== id));
  }, lifeTime + 2000);
}
