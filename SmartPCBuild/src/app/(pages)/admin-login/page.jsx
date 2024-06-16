export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6">Welcome To Smart PC Build</h2>
        <form>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="username">Username</label>
            <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300" type="text" id="username" placeholder="Enter username" />
          </div>
          <div className="mb-6">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300" type="password" id="password" placeholder="Enter password" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Đăng nhập</button>
        </form>
        <div className="mt-4 flex">
          <p>Do you have account?</p>
          <a className="text-success ml-2 underline" href="/create-account">Sign Up</a>
        </div>
      </div>
    </div>
  )
}