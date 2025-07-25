import parse from "html-react-parser";

const HtmlRenderer = ({ html }: { html: string }) => {
  return <div>{parse(html)}</div>;
};

export default HtmlRenderer;
