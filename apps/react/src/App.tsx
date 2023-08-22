import { SignedIn, SignedOut, UserButton, SignInButton, ClerkProvider, RedirectToSignIn, SignUp, SignIn } from '@clerk/clerk-react'
import { Header } from 'ui'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
   throw new Error('Please update your Environmental Variables to include VITE_CLERK_PUBLISHABLE_KEY')
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function PublicPage() {
   console.log('public page reached')
   return (
      <>
         <Header label="React">
            <SignedIn>
               <UserButton />
            </SignedIn>
            <SignedOut>
               <SignInButton />
            </SignedOut>
         </Header>
         <h1>Public page</h1>
         <a href="/protected">Go to protected page</a>
      </>
   );
}

function ProtectedPage() {
   console.log('private page reached')
   return (
      <>
         <Header label="React">
            <SignedIn>
               <UserButton />
            </SignedIn>
            <SignedOut>
               <SignInButton />
            </SignedOut>
         </Header>
         <h1>Protected page</h1>
         <UserButton />
      </>
   );
}

function ClerkWithRouter() {
   const navigate = useNavigate()

   return (

      <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
         <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route
               path="/sign-in/*"
               element={<SignIn routing="path" path="/sign-in" />}
            />
            <Route
               path="/sign-up/*"
               element={<SignUp routing="path" path="/sign-up" />}
            />
            <Route
               path="/protected"
               element={
                  <>
                     <SignedIn>
                        <ProtectedPage />
                     </SignedIn>
                     <SignedOut>
                        <RedirectToSignIn />
                     </SignedOut>
                  </>
               }
            />
         </Routes>

      </ClerkProvider>
   )
}

function App() {
   return (
      <BrowserRouter>
         <ClerkWithRouter />
      </BrowserRouter>
   )
}
export default App
