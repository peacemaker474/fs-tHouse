interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <h3>{title}</h3>;
}

export default Title;
