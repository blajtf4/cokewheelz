import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' // This makes it center vertically
  }}>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
)

export default SignUpPage
