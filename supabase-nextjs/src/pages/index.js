import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "components/Account";
import Accountv1 from "components/Accountv1";
import LoginPage from "components/LoginPage";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          // providers={["google","github","apple"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Accountv1 session={session} />
      )}


      <LoginPage />
    </div>
  );
};

export default Home;
