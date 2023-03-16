//Create typescript react component Spacing between components with props children and size
interface SpacingProps {
    size?: number
}

export default function Spacing({ size = 1 }: SpacingProps) {
    return (
        <div style={{ minHeight: size * 4 }}></div>
    );
}