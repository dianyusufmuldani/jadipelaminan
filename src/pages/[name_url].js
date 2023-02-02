import { useRouter } from "next/router";

const NameUrl = () => {
  const router = useRouter();
  const name_url = router.query.name_url;
  return (
    <div>
      <p>Sekarang ada di link {name_url}</p>
    </div>
  );
};

export default NameUrl;
