export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6">Đăng ký tài khoản</h2>
            <form>
            <div className="mb-4">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="fullname">Họ và tên</label>
                <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 
                dark:text-zinc-300" type="text" id="username" placeholder="Nhập Họ và tên"/>
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 
                dark:text-zinc-300" type="text" id="username" placeholder="Nhập Email"/>
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="username">Tên tài khoản</label>
                <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 
                dark:text-zinc-300" type="text" id="username" placeholder="Nhập tài khoản"/>
              </div>
              <div className="mb-6">
                <label className="block text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="password">Mật khẩu</label>
                <input className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 
                :text-zinc-300" type="password" id="password" placeholder="Nhập mật khẩu"/>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Đăng ký</button>
            </form>
          </div>
        </div>
    )
}