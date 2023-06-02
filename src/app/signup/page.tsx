import PrimaryFullButton from "../components/buttons/primary-full.button"
import SecondaryFullButton from "../components/buttons/secondary-full.button"
import BaseInput from "../components/inputs/base.input"
import BaseLabel from "../components/labels/base.label"


const SignInPage = () => {
    return (
        <section id="signup" className="px-4 py-16 md:pt-20 md:pb-28">
            <div className="text-center">
                <h1 className="text-medium text-base text-primary font-bold mb-2 lg:text-2xl">Welcome Back</h1>
                <p className="text-sm text-slate-500 block lg:text-base">Fill out the form to get started.</p>
            </div>
            <div className="py-4 mx-auto max-w-xl">
                <div className="w-full mb-2">
                    <BaseLabel label="Username" htmlFor="username" />
                    <BaseInput name="username" type="text" placeholder="Enter Username" />
                </div>
                <div className="w-full mb-2">
                    <BaseLabel label="Email" htmlFor="email" />
                    <BaseInput name="email" type="email" placeholder="Enter Email" />
                </div>
                <div className="w-full mb-2">
                    <BaseLabel label="Password" htmlFor="password" />                  
                    <BaseInput name="password" type="password" placeholder="Enter Password"  />
                </div>
                <div className="w-full py-4">
                    <PrimaryFullButton>Log Me In</PrimaryFullButton>
                </div>
                <SecondaryFullButton>Sign up</SecondaryFullButton>
            </div>
        </section>
    )
}

export default SignInPage