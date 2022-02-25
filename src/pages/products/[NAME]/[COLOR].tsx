import { useRouter } from "next/router";

export default function Color() {
  const router = useRouter();
  console.log(router.query);
  return <h1>{router.query.NAME}の{router.query.COLOR}カラーです</h1>;
}
