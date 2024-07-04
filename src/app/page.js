import Header from "@/Components/Header/Header";
//importo el usuario simulando obtener uno por peticion e inyectar su data a los componentes
import {user} from '@/Utils/user'

export default function Home() {
  return (
    <main>
      <Header user={user}/>
    </main>
  );
}
