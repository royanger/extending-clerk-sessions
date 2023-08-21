import { SignIn } from "@clerk/nextjs";
import { Title } from 'ui';

export default function Page() {
   return (
      <div className="w-full flex flex-row justify-center">
         <div>

            <Title type="h2">Sign In</Title>
            <SignIn />
         </div>
      </div>
   )
}