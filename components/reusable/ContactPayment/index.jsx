import ContactFeature from "./ContactFeature";
// import serviceInfo from "../../utils/serviceInfo.json";
import useSWR from "swr";

const ContactPayment = () => {
  const fetcher = async () => {
    const response = await fetch(
      "https://shielded-wave-70948.herokuapp.com/serviceinfo"
    );
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("serviceInfo", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container mt-14 xl:mt-28">
      <div className="grid grid-cols-1 smd:grid-cols-2 xl:grid-cols-4 gap-8">
        {data?.map((service) => {
          return <ContactFeature key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
};

export default ContactPayment;
