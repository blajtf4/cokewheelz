import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' // This makes it center vertically
  }}>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
)

export default SignInPage
