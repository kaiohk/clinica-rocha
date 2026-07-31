interface ButtonProps {
  className?: string;
  href?: string;
  text?: string;
}

export default function Button({ className, href, text }: ButtonProps) {
  return (
    <a className={`${className}`} href={`${href}`}>
      {text}
    </a>
  );
}
