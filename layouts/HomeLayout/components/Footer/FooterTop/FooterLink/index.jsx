import Link from "next/link";

const FooterLink = ({ title, data }) => {
  return (
    <div className="w-1/5 hidden md:block">
      <h2 className="text-gray-five font-medium text-2xl mb-5">{title}</h2>
      <nav>
        <ul className="flex flex-col gap-4">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  <Link href={item.href}>
                    <a className="text-gray-three font-normal text-lg">
                      {item.text}
                    </a>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLink;
