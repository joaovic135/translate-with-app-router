import { redirect } from "next/navigation";

export default function Home() {
  const lang = 'en-us'; 
  redirect(`/${lang}`);
}
