import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  className?: string;
  label?: string;
};

/** Approved PNG alpha mask: recolor through CSS, never redraw the symbol. */
export function BrandLogo({ className = "", label }: BrandLogoProps) {
  return (
    <span
      className={`${styles.logo} ${className}`.trim()}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
