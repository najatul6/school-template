
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="shadow-inner shadow-primary-color rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
        <h1 className="text-center text-white text-2xl font-bold mb-6">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="email">
                   Enter your Email Address
                </label>
                <input className="appearance-none bg-transparent border border-primary-color rounded w-full py-2 px-3 text-primary-color leading-tight focus:outline-none focus:shadow-outline placeholder:text-primary-color" id="email" type="email" placeholder="Enter your email address" />
            </div>
            <button className="bg-primary-color hover:bg-transparent border-2 duration-300 border-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                Reset Password
            </button>
        </form>
    </div>
</div>
  )
}

export default ForgotPassword