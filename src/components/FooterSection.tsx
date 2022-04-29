interface IFooterSectionItem {
  name: string;
  url: string;
}

interface IFooterSectionProps {
  title: string;
  items: IFooterSectionItem[];
}

export const FooterSection = (props: IFooterSectionProps) => {
  return (
    <div className="mb-7 w-1/4 py-4  md:mb-4 md:w-1/2 md:pb-0 md:text-xs sm:mb-0 sm:w-full sm:py-1 sm:text-xs">
      <h4 className="relative mb-3 border-0 sm:mb-1">{props.title}</h4>
      <ul>
        {props.items.map((item, index) => (
          <li key={`section-${props.title}-item-${index}`}>
            <a className="text-black hover:pl-2" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
