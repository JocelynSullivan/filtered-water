import LiquidChrome from "./Backgrounds/LiquidChrome/LiquidChrome";

interface FilteredProps {
  water: string[];
}

const Filtered: React.FC<FilteredProps> = ({ water }) => {
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
        baseColor={[0.38, 0.46, 0.5]}
        speed={0.63}
        amplitude={0.36}
        interactive={true}
      />
    </div>
  );
};

export default Filtered;
