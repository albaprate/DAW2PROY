import Link from 'next/link';

interface IHeaderItem {
  name: string;
  url: string;
}
export const HeaderItem = (props: IHeaderItem) => {
  return (
    <li className="mr-6">
      <Link href={props.url}>
        <a className="border-none text-gray-700 hover:text-gray-900">
          {props.name}
        </a>
      </Link>
    </li>
  );
};
