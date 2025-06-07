import LiquidChrome from "./Backgrounds/LiquidChrome/LiquidChrome";

interface PollutedProps {
  water: string[];
}

const Polluted: React.FC<PollutedProps> = ({ water }) => {
  return (
    <div
      style={{
        width: "40%",
        height: "280px",
        margin: "auto",
      }}
    >
      <p>{water.join(", ")}</p>
      <LiquidChrome
        baseColor={[0.31, 0.24, 0.18]}
        speed={0.01}
        amplitude={0.6}
        interactive={true}
      />
    </div>
  );
};
export default Polluted;
